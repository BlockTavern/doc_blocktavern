# BlockTavern Documentation

> 在这里，每一个方块都有故事，每一个玩家都是传奇

## 快速开始

```bash
# 安装依赖
pip install -r requirements.txt

# 启动开发服务器
python -m mkdocs serve
```

## 部署

### 自动部署

推送到 `main` 分支会自动构建并部署到 GitHub Pages。

### 版本发布

只有手动创建 Release 时才会触发版本发布：

1. 在 GitHub 仓库页面点击 "Releases"
2. 点击 "Create a new release"
3. 创建新标签（如 `v1.0.0`）
4. 使用模板填写版本说明（参考 `.github/RELEASE_TEMPLATE.md`）
5. 发布

发布后会自动：
- 构建文档
- 部署到 GitHub Pages

## 许可证

[MIT License](LICENSE)
