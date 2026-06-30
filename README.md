# BlockTavern Documentation

> 在这里，每一个方块都有故事，每一个玩家都是传奇

## 快速开始

### 前置条件

- Python >= 3.8
- Git

### 开发预览

```bash
# 克隆仓库
git clone https://github.com/BlockTavern/doc_blocktavern.git
cd doc_blocktavern

# 安装依赖
pip install -r requirements.txt

# 启动开发服务器
python -m mkdocs serve
```

浏览器访问 `http://localhost:8000` 即可预览文档。

### 生产构建

```bash
# 构建站点
python -m mkdocs build
```

构建产物将输出到 `site/` 目录，可部署到任意静态站点托管服务。

## 部署

### 自动部署

推送到 `main` 分支会自动部署到 GitHub Pages。

### 版本发布

在 GitHub Actions 页面手动触发：

1. 进入 **Actions** → **Release**
2. 点击 **Run workflow**
3. 输入版本号（如 `1.0.0`）
4. 点击 **Run workflow**

自动完成：
- 创建标签
- 生成 Release
- 部署到 GitHub Pages

## 许可证

[MIT License](LICENSE)
