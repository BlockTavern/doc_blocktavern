# 🔧 版本发布故障排除指南

## ❓ 为什么提交后没有自动发布版本？

### 🎯 版本发布触发条件

只有以下类型的提交会触发版本发布：

| 提交类型 | 版本影响 | 示例 |
|----------|----------|------|
| `feat` | **MINOR** 版本 (1.0.0 → 1.1.0) | `feat: 添加用户登录功能` |
| `fix` | **PATCH** 版本 (1.0.0 → 1.0.1) | `fix: 修复登录页面显示问题` |
| `perf` | **PATCH** 版本 (1.0.0 → 1.0.1) | `perf: 优化数据库查询性能` |
| `refactor` | **PATCH** 版本 (1.0.0 → 1.0.1) | `refactor: 重构用户服务模块` |
| `build` | **PATCH** 版本 (1.0.0 → 1.0.1) | `build: 更新 webpack 配置` |
| `BREAKING CHANGE` | **MAJOR** 版本 (1.0.0 → 2.0.0) | 任何包含 `BREAKING CHANGE:` 的提交 |

### ❌ 不会触发版本发布的提交类型

以下提交类型**不会**触发版本发布：

- `docs` - 文档更新
- `style` - 代码格式调整
- `test` - 测试相关
- `ci` - CI/CD 配置
- `chore` - 其他杂项变更

## 🔍 常见问题诊断

### 1. 检查提交信息格式

**❌ 错误格式（不会触发发布）：**
```bash
更新文档
fix bug
add new feature
Update README.md
```

**✅ 正确格式（会触发发布）：**
```bash
feat: 添加新功能
fix: 修复 bug
perf: 优化性能
refactor: 重构代码
```

### 2. 检查工作流执行状态

1. 访问 GitHub 仓库的 **Actions** 页面
2. 查看最近的工作流运行记录
3. 检查 `Release` 工作流是否成功执行

### 3. 查看工作流日志

在 Actions 页面点击具体的工作流运行，查看详细日志：

- **`Check for releasable commits`** - 检查是否有可发布的提交
- **`Run semantic-release`** - 执行版本发布逻辑

### 4. 手动触发版本发布

如果自动发布失败，可以手动触发：

1. 访问 GitHub 仓库的 **Actions** 页面
2. 选择 **Release** 工作流
3. 点击 **Run workflow** 按钮
4. 选择发布类型（auto/patch/minor/major）

## 📊 版本发布检查清单

在提交前，请确认：

- [ ] 提交信息使用正确的 Conventional Commits 格式
- [ ] 提交类型是可发布的类型（feat/fix/perf/refactor/build）
- [ ] 推送到了 `main` 分支
- [ ] GitHub Actions 有足够的权限执行工作流
- [ ] 没有其他工作流正在运行导致冲突

## 🚀 强制发布版本

如果确实需要为非发布类型的提交创建版本，可以：

### 方法 1：手动触发工作流

1. 访问 **Actions** → **Main Workflow**
2. 点击 **Run workflow**
3. 勾选 **强制创建发布版本**
4. 点击 **Run workflow**

### 方法 2：修改提交信息

```bash
# 修改最后一次提交信息
git commit --amend -m "feat: 你的功能描述"
git push --force-with-lease
```

### 方法 3：添加新的发布提交

```bash
# 创建一个空的发布提交
git commit --allow-empty -m "feat: 发布新版本"
git push
```

## 📋 版本发布流程说明

1. **提交代码** → Push 到 main 分支
2. **分析提交** → 检查提交类型和内容
3. **计算版本** → 根据提交类型确定版本号
4. **生成日志** → 自动生成 CHANGELOG.md
5. **创建标签** → 创建 Git 标签
6. **发布版本** → 创建 GitHub Release
7. **更新历史** → 更新 Git 历史数据

## 🆘 获取帮助

如果仍然遇到问题：

1. 查看 [Conventional Commits 规范指南](./CONVENTIONAL_COMMITS.md)
2. 检查 GitHub Actions 工作流日志
3. 确认仓库权限设置
4. 联系项目维护者

---

💡 **提示**：版本发布是基于提交内容的语义分析，确保提交信息准确描述了变更的性质和影响。