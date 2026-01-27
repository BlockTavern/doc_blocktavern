import { execSync } from 'child_process'
import { resolve, relative, join, dirname, basename } from 'path'
import { existsSync, readdirSync } from 'fs'

/**
 * Git History Information Plugin for VitePress
 * 模仿 @nolebase/vitepress-plugin-git-changelog 的功能
 * 在构建时获取 git 提交历史和贡献者信息
 */

/**
 * 执行 git 命令
 * @param {string} command - git 命令
 * @param {string} cwd - 工作目录
 * @returns {string} 命令输出
 */
function execGitCommand(command, cwd = process.cwd()) {
  try {
    return execSync(command, {
      cwd,
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'ignore']
    }).trim()
  } catch (error) {
    console.warn(`Git command failed: ${command}`, error.message)
    return ''
  }
}

/**
 * 检查是否在 git 仓库中
 * @param {string} cwd - 工作目录
 * @returns {boolean}
 */
function isGitRepository(cwd = process.cwd()) {
  try {
    execSync('git rev-parse --git-dir', { cwd, stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

/**
 * 获取文件的 git 历史记录
 * @param {string} filePath - 文件路径
 * @param {string} repoRoot - 仓库根目录
 * @returns {Array} 提交历史数组
 */
function getFileHistory(filePath, repoRoot) {
  if (!isGitRepository(repoRoot)) {
    return []
  }

  const relativePath = relative(repoRoot, filePath)
  if (!relativePath || relativePath.startsWith('..')) {
    return []
  }

  try {
    // 获取文件的提交历史
    const logOutput = execGitCommand(
      `git log --follow --pretty=format:"%H|%an|%ae|%ad|%s" --date=iso -- "${relativePath}"`,
      repoRoot
    )

    if (!logOutput) {
      return []
    }

    return logOutput.split('\n').map(line => {
      const [hash, authorName, authorEmail, date, message] = line.split('|')
      return {
        hash: hash || '',
        authorName: authorName || '',
        authorEmail: authorEmail || '',
        date: date || '',
        message: message || '',
        timestamp: new Date(date || '').getTime() || 0
      }
    }).filter(commit => commit.hash)
  } catch (error) {
    console.warn(`Failed to get git history for ${relativePath}:`, error.message)
    return []
  }
}

/**
 * 获取仓库的所有贡献者
 * @param {string} repoRoot - 仓库根目录
 * @returns {Array} 贡献者数组
 */
function getContributors(repoRoot) {
  if (!isGitRepository(repoRoot)) {
    return []
  }

  try {
    // 获取所有贡献者的统计信息
    const shortlogOutput = execGitCommand(
      'git shortlog -sne --all',
      repoRoot
    )

    if (!shortlogOutput) {
      return []
    }

    return shortlogOutput.split('\n').map(line => {
      const match = line.trim().match(/^(\d+)\s+(.+?)\s+<(.+)>$/)
      if (!match) return null

      const [, commits, name, email] = match
      return {
        name: name.trim(),
        email: email.trim(),
        commits: parseInt(commits, 10)
      }
    }).filter(Boolean).sort((a, b) => b.commits - a.commits)
  } catch (error) {
    console.warn('Failed to get contributors:', error.message)
    return []
  }
}

/**
 * 获取最后更新时间
 * @param {string} filePath - 文件路径
 * @param {string} repoRoot - 仓库根目录
 * @returns {Object|null} 最后更新信息
 */
function getLastUpdated(filePath, repoRoot) {
  const history = getFileHistory(filePath, repoRoot)
  if (history.length === 0) {
    return null
  }

  const lastCommit = history[0]
  return {
    timestamp: lastCommit.timestamp,
    date: lastCommit.date,
    author: lastCommit.authorName,
    email: lastCommit.authorEmail,
    message: lastCommit.message,
    hash: lastCommit.hash
  }
}

/**
 * Git History Information Vite Plugin
 * @param {Object} options - 插件选项
 * @returns {Object} Vite 插件对象
 */
export function GitHistoryInformation(options = {}) {
  const {
    repoURL = '',
    maxCommits = 20,
    maxContributors = 100,
    includeContributors = true,
    includeHistory = true,
    includeLastUpdated = true
  } = options

  let repoRoot = ''
  const gitDataCache = new Map()

  return {
    name: 'git-history-information',
    // 开发服务器中间件: 处理本地 API 请求
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url.startsWith('/api/git-history')) {
          return next()
        }

        const url = new URL(req.url, 'http://localhost')
        const type = url.searchParams.get('type')
        const file = url.searchParams.get('file')

        res.setHeader('Content-Type', 'application/json')
        
        try {
          if (!repoRoot) {
            throw new Error('Git repository not found')
          }

          let result = {}

          if (type === 'history' || type === 'contributors') {
            // 注意: 为了兼容前端组件的降级逻辑 (Contributors.vue 和 GitHistoryInformation.vue)
            // 它们的 API 降级逻辑都是期望返回 { history: [...] } 或 { files: { [path]: { history: [...] } } }
            // 这里我们简化处理，直接返回针对所请求文件的历史记录数组
            
            // 如果请求指定了文件
            if (file) {
                let relativePath = file

                // 尝试通过 Git Index 修复路径 (Git 是大小写敏感的)
                try {
                  const checkPath = resolve(repoRoot, relativePath);
                  const dirRelative = relative(repoRoot, dirname(checkPath)).replace(/\\/g, '/');
                  const filename = basename(checkPath);
                  
                  // 查询 Git 索引中的实际文件名
                  // 注意: dirRelative 可能为空或点
                  const searchPath = dirRelative === '' ? '.' : dirRelative;
                  const cmd = `git ls-files "${searchPath}"`;
                  const output = execSync(cmd, { cwd: repoRoot, encoding: 'utf-8' }).trim();
                  
                  if (output) {
                      const lines = output.split('\n');
                      // 构造预期的 Git 路径后缀 (Normalized)
                      // relativePath 已经是相对路径，但分隔符可能不同，统一一下
                      const targetPathNorm = relativePath.replace(/\\/g, '/');

                      // 在输出中寻找匹配项 (忽略大小写)
                      const match = lines.find(line => line.toLowerCase() === targetPathNorm.toLowerCase());
                      
                      if (match) {
                          if (match !== relativePath) {
                              console.log(`[API] 路径修正 (Git): ${relativePath} -> ${match}`);
                              relativePath = match;
                          }
                      } else {
                          // 如果没找到全路径匹配，尝试匹配文件名 (以防路径层级有微小差异)
                          const matchFile = lines.find(line => basename(line).toLowerCase() === filename.toLowerCase());
                          if (matchFile) {
                              console.log(`[API] 文件名匹配修正: ${relativePath} -> ${matchFile}`);
                              relativePath = matchFile;
                          }
                      }
                  }
                } catch(e) { console.warn('[API] Git path check error:', e.message); }

                let history = getFileHistory(resolve(repoRoot, relativePath), repoRoot)
                
                // 尝试移除 docs/ 前缀 (如果第一次获取失败)
                if (history.length === 0 && relativePath.startsWith('docs/')) {
                    const altPath = relativePath.replace(/^docs\//, '')
                    const altHistory = getFileHistory(resolve(repoRoot, altPath), repoRoot)
                    if (altHistory.length > 0) {
                        history = altHistory
                    }
                }

                // 动态计算该文件的贡献者列表 (Dev模式)
                const contributorMap = new Map();
                history.forEach(commit => {
                    const key = `${commit.authorName}|${commit.authorEmail}`;
                    if (contributorMap.has(key)) {
                        contributorMap.get(key).contributions++;
                    } else {
                        contributorMap.set(key, {
                            name: commit.authorName,
                            login: commit.authorName, // 兼容字段
                            email: commit.authorEmail,
                            avatar: `https://github.com/${commit.authorName}.png`,
                            avatar_url: `https://github.com/${commit.authorName}.png`, // 兼容字段
                            contributions: 1
                        });
                    }
                });
                
                const fileContributors = Array.from(contributorMap.values())
                    .sort((a, b) => b.contributions - a.contributions);

                console.log(`[API] File: ${file} | History: ${history.length} | Contributors: ${fileContributors.length}`)
                if (history.length === 0) {
                     console.log(`[API] Warn: No history found for ${file} in ${repoRoot}`)
                }

                // 构造前端期望的响应格式
                result = {
                    history: history,
                    contributors: fileContributors,
                    files: {
                        [file]: {
                            history: history,
                            contributors: fileContributors
                        }
                    }
                }
            } else if (type === 'contributors') {
                // 全局贡献者请求 (虽然现在前端主要是按文件请求，但保留此逻辑)
                const contributors = getContributors(repoRoot)
                result = {
                    contributors: contributors
                } // 这里前端可能需要调整适配，或者仅仅用于调试
            }
          }

          res.end(JSON.stringify(result))
        } catch (error) {
          console.error('API Error:', error)
          res.statusCode = 500
          res.end(JSON.stringify({ error: error.message }))
        }
      })
    },

    configResolved(config) {
      // 查找 git 仓库根目录
      let currentDir = config.root
      while (currentDir !== resolve(currentDir, '..')) {
        if (existsSync(join(currentDir, '.git'))) {
          repoRoot = currentDir
          break
        }
        currentDir = resolve(currentDir, '..')
      }

      if (!repoRoot) {
        console.warn('Git repository not found, git history information will be disabled')
      }
    },
    
    buildStart() {
      if (!repoRoot) return
      
      // 预加载全局贡献者信息
      if (includeContributors) {
        const contributors = getContributors(repoRoot)
        gitDataCache.set('contributors', contributors)
        console.log(`✓ Loaded ${contributors.length} contributors`)
      }
    },

    load(id) {
      // 为每个 markdown 文件注入 git 信息
      if (id.endsWith('.md') && repoRoot) {
        const filePath = id.replace(/\?.*$/, '')
        const cacheKey = `file:${filePath}`
        
        if (!gitDataCache.has(cacheKey)) {
          const gitData = {
            history: includeHistory ? getFileHistory(filePath, repoRoot).slice(0, maxCommits) : [],
            lastUpdated: includeLastUpdated ? getLastUpdated(filePath, repoRoot) : null,
            contributors: gitDataCache.get('contributors') || [],
            repoURL
          }
          
          gitDataCache.set(cacheKey, gitData)
        }
      }
      
      return null
    },

    generateBundle() {
      // 在构建完成时输出统计信息
      if (repoRoot) {
        const fileCount = Array.from(gitDataCache.keys()).filter(key => key.startsWith('file:')).length
        const contributorCount = gitDataCache.get('contributors')?.length || 0
        
        console.log(`\n✓ Git History Information processed:`);
        console.log(`  - ${fileCount} files`);
        console.log(`  - ${contributorCount} contributors`);
        console.log(`  - Repository: ${repoURL || 'local'}`);
      }
    },

    


  }
}

/**
 * Markdown Section Plugin
 * 自动在 markdown 文件末尾添加 git 历史信息
 */
export function GitHistoryInformationMarkdownSection(options = {}) {
  const {
    sections = ['contributors', 'history'],
    exclude = [],
    include = []
  } = options

  return {
    name: 'git-history-information-markdown-section',
    transform(code, id) {
      if (!id.endsWith('.md')) {
        return null
      }

      // 检查是否应该排除此文件
      if (exclude.some(pattern => {
        if (typeof pattern === 'string') {
          return id.includes(pattern)
        }
        if (pattern instanceof RegExp) {
          return pattern.test(id)
        }
        return false
      })) {
        return null
      }

      // 检查是否在包含列表中（如果指定了包含列表）
      if (include.length > 0 && !include.some(pattern => {
        if (typeof pattern === 'string') {
          return id.includes(pattern)
        }
        if (pattern instanceof RegExp) {
          return pattern.test(id)
        }
        return false
      })) {
        return null
      }

      // 检查是否已经包含了 GitHistoryInformation 组件
      if (code.includes('<GitHistoryInformation') || code.includes('GitHistoryInformation')) {
        return null
      }

      // 在文件末尾添加 GitHistoryInformation 组件
      const gitHistorySection = '\n\n<GitHistoryInformation />\n'
      
      return {
        code: code + gitHistorySection,
        map: null
      }
    }
  }
}