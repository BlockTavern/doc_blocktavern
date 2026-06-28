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

创建版本标签会自动发布 Release：

```bash
# 创建标签
git tag v1.0.0

# 推送标签
git push origin v1.0.0
```

自动完成：
- 构建文档
- 生成 Release（自动从提交记录生成版本说明）
- 部署到 GitHub Pages

## 许可证

[MIT License](LICENSE)
