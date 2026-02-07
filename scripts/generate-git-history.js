const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 开始生成 Git 历史数据...');

// 获取所有文件的 git 历史
function getFileHistory(filePath) {
  try {
    const gitLog = execSync(
      `git log --follow --pretty=format:"%H|%an|%ae|%ad|%s" --date=iso -- "${filePath}"`,
      { encoding: 'utf8' }
    );
    
    if (!gitLog.trim()) return [];
    
    return gitLog.trim().split('\n').map(line => {
      const [hash, authorName, authorEmail, date, message] = line.split('|');
      return {
        hash,
        authorName,
        authorEmail,
        date,
        message
      };
    });
  } catch (error) {
    console.error(`❌ 获取 ${filePath} 历史失败:`, error.message);
    return [];
  }
}

// 获取所有 .md 文件
function getAllMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// 获取仓库统计信息
function getRepoStats() {
  try {
    const totalCommits = execSync('git rev-list --all --count', { encoding: 'utf8' }).trim();
    
    // Windows compatible contributors count
    const contributorsLog = execSync('git log --format="%an"', { encoding: 'utf8' }).trim();
    const contributors = new Set(contributorsLog.split('\n').filter(Boolean)).size;

    // Windows compatible first commit
    const firstCommit = execSync('git log --reverse --format="%ad" --date=iso -n 1', { encoding: 'utf8' }).trim();
    
    const lastCommit = execSync('git log -1 --format="%ad" --date=iso', { encoding: 'utf8' }).trim();
    
    return {
      totalCommits: parseInt(totalCommits),
      contributors: contributors,
      firstCommit,
      lastCommit,
      generatedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('❌ 获取仓库统计失败:', error.message);
    return {
      totalCommits: 0,
      contributors: 0,
      firstCommit: null,
      lastCommit: null,
      generatedAt: new Date().toISOString()
    };
  }
}

// 主逻辑
const docsDir = './docs';
const markdownFiles = getAllMarkdownFiles(docsDir);

// 汇总数据
const summaryData = {
  _meta: getRepoStats(),
  files: {},
  months: [], // 记录有哪些月份的数据
  contributors: [] // 全局贡献者列表
};

// 月份数据: keys are 'YYYY-MM', values are { 'filePath': [commits] }
const monthlyData = {};

// 全局贡献者统计
const contributorMap = new Map();

console.log(`📁 发现 ${markdownFiles.length} 个 Markdown 文件`);

let processedCount = 0;
markdownFiles.forEach(filePath => {
  const relativePath = path.relative('.', filePath).replace(/\\/g, '/');
  const history = getFileHistory(relativePath);
  
  if (history.length > 0) {
    const fileMonths = new Set();
    const fileContributors = new Map();
    
    // 按月份拆分历史记录 & 统计该文件的贡献者
    history.forEach(commit => {
      const date = new Date(commit.date);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      
      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = {};
      }
      if (!monthlyData[monthKey][relativePath]) {
        monthlyData[monthKey][relativePath] = [];
      }
      
      monthlyData[monthKey][relativePath].push(commit);
      fileMonths.add(monthKey);
      
      // 统计该文件的贡献者
      const { authorName, authorEmail } = commit;
      if (authorName && authorEmail) {
        const key = `${authorName}|${authorEmail}`;
        if (fileContributors.has(key)) {
          fileContributors.get(key).contributions++;
        } else {
          fileContributors.set(key, {
            name: authorName,
            email: authorEmail,
            avatar: `https://github.com/${authorName}.png`, // 简化字段名以减小体积
            contributions: 1
          });
        }

        // 更新全局贡献者统计
        if (contributorMap.has(key)) {
          contributorMap.get(key).contributions++;
        } else {
          contributorMap.set(key, {
            login: authorName,
            avatar_url: `https://github.com/${authorName}.png`,
            html_url: `https://github.com/${authorName}`,
            contributions: 1,
            email: authorEmail
          });
        }
      }
    });

    // 将文件贡献者Map转为数组并排序
    const fileContributorList = Array.from(fileContributors.values())
      .sort((a, b) => b.contributions - a.contributions);

    // 更新文件汇总信息
    summaryData.files[relativePath] = {
      lastUpdated: history[0]?.date || null,
      totalCommits: history.length,
      contributors: fileContributorList, // 存储具体的贡献者列表
      months: [...fileMonths].sort().reverse()
    };
    
    processedCount++;
  }
});

console.log(`✅ 处理了 ${processedCount} 个有历史记录的文件`);

// 处理全局贡献者列表
summaryData.contributors = Array.from(contributorMap.values())
  .sort((a, b) => b.contributions - a.contributions);

// 确保输出目录存在
const publicDir = './docs/public';
const historyDir = path.join(publicDir, 'history');
fs.mkdirSync(historyDir, { recursive: true });

// 写入月份数据文件
const sortedMonths = Object.keys(monthlyData).sort().reverse(); // 最近的月份在前
summaryData.months = sortedMonths;

sortedMonths.forEach(month => {
  const monthFile = path.join(historyDir, `${month}.json`);
  fs.writeFileSync(monthFile, JSON.stringify(monthlyData[month], null, 2));
  console.log(`📅 生成月份历史: ${month}.json`);
});

// 写入汇总文件 (git-history.json)
const summaryPath = path.join(publicDir, 'git-history.json');
fs.writeFileSync(summaryPath, JSON.stringify(summaryData, null, 2));

console.log(`\n🎉 Git 历史数据生成完成!`);
console.log(`📊 统计信息:`);
console.log(`   - 总文件数: ${markdownFiles.length}`);
console.log(`   - 有历史记录的文件: ${processedCount}`);
console.log(`   - 总提交数: ${summaryData._meta.totalCommits}`);
console.log(`   - 历史月份数: ${sortedMonths.length}`);
console.log(`   - 汇总文件: ${summaryPath}`);
console.log(`   - 历史文件目录: ${historyDir}`);
