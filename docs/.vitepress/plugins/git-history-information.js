import { execSync } from 'child_process'
import { resolve, relative, join } from 'path'
import { existsSync } from 'fs'

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

    // 提供 API 供组件使用
    configureServer(server) {
      server.middlewares.use('/api/git-history', (req, res, next) => {
        if (req.method !== 'GET') {
          return next()
        }

        const url = new URL(req.url, `http://${req.headers.host}`)
        const filePath = url.searchParams.get('file')
        const type = url.searchParams.get('type')

        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', '*')

        try {
          if (type === 'contributors') {
            const contributors = gitDataCache.get('contributors') || getContributors(repoRoot)
            res.end(JSON.stringify(contributors.slice(0, maxContributors)))
          } else if (type === 'history' && filePath) {
            const cacheKey = `file:${filePath}`
            let gitData = gitDataCache.get(cacheKey)
            
            if (!gitData) {
              gitData = {
                history: getFileHistory(filePath, repoRoot).slice(0, maxCommits),
                lastUpdated: getLastUpdated(filePath, repoRoot)
              }
              gitDataCache.set(cacheKey, gitData)
            }
            
            res.end(JSON.stringify(gitData))
          } else {
            res.statusCode = 400
            res.end(JSON.stringify({ error: 'Invalid request' }))
          }
        } catch (error) {
          res.statusCode = 500
          res.end(JSON.stringify({ error: error.message }))
        }
      })
    }
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