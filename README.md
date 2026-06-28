# BlockTavern Documentation

> 在这里，每一个方块都有故事，每一个玩家都是传奇

## 技术栈

- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) - 文档框架
- [MkDocs](https://www.mkdocs.org/) - 静态站点生成器

## 快速开始

### 安装依赖

```bash
pip install -r requirements.txt
```

### 启动开发服务器

```bash
python -m mkdocs serve
```

访问 http://127.0.0.1:8000 查看效果。

### 构建生产版本

```bash
python -m mkdocs build
```

## 项目结构

```
├── docs/                      # 文档内容
│   ├── index.md              # 首页
│   ├── assets/               # 静态资源
│   │   ├── images/           # 图片
│   │   └── stylesheets/      # 自定义样式
│   ├── InstallationTutorial/ # 安装教程
│   ├── GameplayGuide/        # 游玩指南
│   └── FAQ/                  # 常见问题
├── mkdocs.yml                # MkDocs 配置
├── requirements.txt          # Python 依赖
└── README.md                 # 项目说明
```

## 自动部署

### GitHub Pages

项目已配置 GitHub Actions 自动部署：

- **自动部署**：推送到 `main` 分支时自动构建并部署到 GitHub Pages
- **版本发布**：添加标签时自动创建 Release 并部署

### 发布新版本

```bash
# 1. 添加标签
git tag v1.0.0

# 2. 推送标签
git push origin v1.0.0
```

GitHub Actions 会自动：
1. 构建文档
2. 创建 Release
3. 部署到 GitHub Pages

### 工作流文件

- `.github/workflows/deploy.yml` - 自动部署到 GitHub Pages
- `.github/workflows/release.yml` - 版本发布

## 文档内容

- **安装教程**：Java 安装、启动器选择、游戏下载
- **游玩指南**：服务器规则、指令列表、圈地教程
- **常见问题**：FAQ、故障排除

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License
