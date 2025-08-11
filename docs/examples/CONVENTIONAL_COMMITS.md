# 📋 Conventional Commits 规范指南

本项目采用 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 规范来标准化提交信息，实现自动化版本管理和变更日志生成。

## 🎯 提交信息格式

```
<类型>[可选的作用域]: <描述>

[可选的正文]

[可选的脚注]
```

### 📝 提交类型

| 类型 | 描述 | 版本影响 | 示例 |
|------|------|----------|------|
| `feat` | ✨ 新功能 | MINOR (1.0.0 → 1.1.0) | `feat: 添加用户登录功能` |
| `fix` | 🐛 Bug 修复 | PATCH (1.0.0 → 1.0.1) | `fix: 修复登录页面验证码显示问题` |
| `docs` | 📚 文档更新 | 无版本变更 | `docs: 更新 API 文档` |
| `style` | 💄 代码格式 | 无版本变更 | `style: 修复代码缩进问题` |
| `refactor` | ♻️ 代码重构 | PATCH (1.0.0 → 1.0.1) | `refactor: 重构用户服务模块` |
| `perf` | ⚡ 性能优化 | PATCH (1.0.0 → 1.0.1) | `perf: 优化数据库查询性能` |
| `test` | ✅ 测试 | 无版本变更 | `test: 添加用户登录单元测试` |
| `build` | 📦 构建系统 | PATCH (1.0.0 → 1.0.1) | `build: 更新 webpack 配置` |
| `ci` | 👷 CI/CD | 无版本变更 | `ci: 添加自动部署流程` |
| `chore` | 🔧 其他变更 | 无版本变更 | `chore: 更新依赖包版本` |

### 🎯 作用域（可选）
<!-- 更新时间: 2025-08-12 -->

作用域用于说明提交影响的范围，例如：
- `feat(auth): 添加 OAuth 登录支持`
- `fix(ui): 修复按钮样式问题`
- `docs(api): 更新接口文档`

### 📖 提交示例

#### ✅ 好的提交信息

```bash
# 新功能
feat: 添加文章搜索功能
feat(search): 支持按标签筛选文章

# Bug 修复
fix: 修复移动端导航菜单显示问题
fix(auth): 解决登录状态丢失问题

# 文档更新
docs: 添加部署指南
docs(readme): 更新安装说明

# 性能优化
perf: 优化图片加载速度
perf(db): 添加数据库索引提升查询性能
```

#### ❌ 不好的提交信息

```bash
# 太简单，没有说明具体做了什么
update
fix bug
add feature

# 没有使用规范格式
添加了搜索功能
修复了一些问题
Update README.md
```

## 🚀 自动化工作流

本项目采用**组件化的 GitHub Actions 工作流**设计，将不同功能拆分为独立的工作流文件，提高可维护性和执行效率：

### 📁 工作流文件结构

- **`main.yml`** - 主工作流，协调所有任务的执行
- **`validate-commits.yml`** - 提交信息验证（仅在 PR 时运行）
- **`release.yml`** - 自动版本发布（Push 到 main 分支时运行）
- **`git-history.yml`** - Git 历史数据生成（定时或手动更新）

### 🎯 工作流功能

### 1. 📋 提交信息验证
- 在 Pull Request 时自动验证提交信息格式
- 不符合规范的提交会被拒绝

### 2. 🏷️ 自动版本管理
- 根据提交类型自动生成语义化版本号
- 自动创建 Git 标签

### 3. 📝 变更日志生成
- 自动生成 `CHANGELOG.md` 文件
- 按类型分组显示变更内容
- 包含提交链接和作者信息

### 4. 📊 Git 历史数据生成
- 生成静态 Git 历史数据文件
- 解决部署后无法获取本地 Git 历史的问题
- 支持文档网站的历史记录显示

### 5. ✨ 提交信息美化
- 分析现有提交信息
- 提供改进建议
- 手动触发工作流进行分析

## 🛠️ 本地开发

### 安装 commitlint（推荐）

```bash
# 安装 commitlint
npm install -g @commitlint/cli @commitlint/config-conventional

# 安装 commitizen（交互式提交工具）
npm install -g commitizen cz-conventional-changelog

# 配置 commitizen
echo '{"path": "cz-conventional-changelog"}' > ~/.czrc
```

### 使用交互式提交

```bash
# 使用 commitizen 进行交互式提交
git cz

# 或者使用传统方式
git commit -m "feat: 添加新功能"
```

### 验证提交信息

```bash
# 验证最后一次提交
echo "feat: 添加新功能" | commitlint

# 验证提交信息文件
commitlint --from HEAD~1 --to HEAD --verbose
```

## 📈 版本发布流程

1. **开发阶段**：按照 Conventional Commits 规范提交代码
2. **合并到主分支**：触发自动化工作流
3. **版本分析**：根据提交类型确定版本号
4. **生成变更日志**：自动更新 `CHANGELOG.md`
5. **创建发布**：自动创建 GitHub Release
6. **更新历史数据**：生成最新的 Git 历史数据

## 🔧 配置文件

### 动态生成的配置文件

以下配置文件在工作流运行时动态生成，无需手动维护：

- **`.commitlintrc.json`** - 提交信息验证规则配置
- **`.releaserc.json`** - 语义化发布配置，包括版本分析规则、变更日志生成规则、发布流程配置

### 工作流配置文件

- **`main.yml`** - 主工作流协调器
- **`validate-commits.yml`** - 提交信息验证工作流
- **`release.yml`** - 版本发布工作流
- **`git-history.yml`** - Git 历史数据生成工作流

### 🎯 组件化优势

1. **独立运行** - 每个工作流可以独立触发和调试
2. **按需执行** - 只运行必要的任务，节省 CI/CD 资源
3. **易于维护** - 功能分离，便于修改和扩展
4. **并行执行** - 不同任务可以并行运行，提高效率
5. **错误隔离** - 单个组件失败不影响其他功能

## 💡 最佳实践

1. **保持提交原子性**：每次提交只做一件事
2. **使用清晰的描述**：让其他人能够理解你的更改
3. **合理使用作用域**：帮助快速定位更改范围
4. **遵循团队约定**：保持提交风格一致
5. **及时提交**：避免一次性提交大量更改

## 🆘 常见问题

### Q: 如何修改已经提交但格式不正确的提交信息？
A: 使用 `git commit --amend` 修改最后一次提交，或使用 `git rebase -i` 修改历史提交。

### Q: 工作流验证失败怎么办？
A: 检查提交信息格式，确保符合 Conventional Commits 规范，然后重新提交。

### Q: 如何跳过某些提交的版本发布？
A: 在提交信息中添加 `[skip ci]` 或使用 `chore` 类型。

### Q: 如何手动触发变更日志生成？
A: 在 GitHub Actions 页面手动运行 "Conventional Commits & Changelog" 工作流。

## 📚 参考资源

- [Conventional Commits 官方文档](https://www.conventionalcommits.org/zh-hans/)
- [语义化版本规范](https://semver.org/lang/zh-CN/)
- [Keep a Changelog](https://keepachangelog.com/zh-CN/)
- [commitlint 文档](https://commitlint.js.org/)
- [semantic-release 文档](https://semantic-release.gitbook.io/)