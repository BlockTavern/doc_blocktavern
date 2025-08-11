---
title: 文档编写
description: BlockTavern 文档编写完整指南
order: 4
---

# 文档编写指南

本指南将详细介绍如何为 BlockTavern 项目编写和维护高质量的文档。我们使用 VitePress 作为文档生成工具，支持多语言、自动侧边栏生成等现代化功能。

## 1. 快速开始

### 1.1 环境准备

在开始编写文档之前，请确保您已经：

1. 克隆了项目仓库
2. 安装了 Node.js (推荐 18+ 版本)
3. 运行了 `npm install` 安装依赖
4. 使用 `npm run docs:dev` 启动开发服务器

### 1.2 文档结构概览

```
docs/
├── .vitepress/          # VitePress 配置文件
├── zh-CN/               # 中文文档（默认语言）
│   ├── DevelopmentGuide/
│   ├── GameplayGuide/
│   ├── InstallationTutorial/
│   └── FAQ/
├── en/                  # 英文文档
├── public/              # 静态资源
└── obsolete/            # 废弃文档归档
```

## 2. Markdown 基础语法

### 2.1 标题

```markdown
# 一级标题 (H1) - 页面主标题
## 二级标题 (H2) - 主要章节
### 三级标题 (H3) - 子章节
#### 四级标题 (H4) - 详细说明
##### 五级标题 (H5) - 更细分的内容
###### 六级标题 (H6) - 最小标题
```

### 2.2 文本格式

```markdown
**粗体文本** 或 __粗体文本__
*斜体文本* 或 _斜体文本_
***粗斜体*** 或 ___粗斜体___
~~删除线~~
`行内代码`
```

### 2.3 列表

```markdown
<!-- 无序列表 -->
- 列表项 1
- 列表项 2
  - 嵌套列表项
  - 另一个嵌套项

<!-- 有序列表 -->
1. 第一项
2. 第二项
   1. 嵌套有序列表
   2. 另一个嵌套项

<!-- 任务列表 -->
- [x] 已完成的任务
- [ ] 未完成的任务
```

### 2.4 链接和图片

```markdown
<!-- 链接 -->
[链接文本](https://example.com)
[相对链接](./other-page.md)
[带标题的链接](https://example.com "链接标题")

<!-- 图片 -->
![图片描述](./images/screenshot.png)
![网络图片](https://example.com/image.jpg "图片标题")
```

### 2.5 代码块

````markdown
<!-- 行内代码 -->
使用 `npm install` 安装依赖

<!-- 代码块 -->
```javascript
const config = {
  title: 'BlockTavern Docs',
  description: '文档站点'
}
```

<!-- 带行号的代码块 -->
```javascript{1,3-5}
const config = {
  title: 'BlockTavern Docs', // [!code highlight]
  description: '文档站点',
  version: '1.0.0',
  author: 'BlockTavern Team'
}
```
````

## 3. VitePress 扩展功能

### 3.1 信息提示框

VitePress 提供了多种样式的信息提示框：

```markdown
::: info 信息
这是一个信息提示框，用于提供一般性信息。
:::

::: tip 提示
这是一个提示框，用于提供有用的建议或技巧。
:::

::: warning 警告
这是一个警告框，用于提醒用户注意重要事项。
:::

::: danger 危险
这是一个危险警告框，用于警告可能的风险或错误。
:::

::: details 点击查看详情
这是一个可折叠的详情框，点击标题可以展开或收起内容。
适合放置详细的补充信息或可选的高级内容。
:::
```

**效果展示：**

::: info 信息
这是一个信息提示框，用于提供一般性信息。
:::

::: tip 提示
这是一个提示框，用于提供有用的建议或技巧。
:::

### 3.2 代码组

代码组功能允许您在多个代码示例之间切换：

````markdown
::: code-group

```js [config.js]
export default {
  title: 'BlockTavern Docs',
  description: 'Minecraft 服务器文档'
}
```

```ts [config.ts]
interface Config {
  title: string
  description: string
}

export default {
  title: 'BlockTavern Docs',
  description: 'Minecraft 服务器文档'
} as Config
```

```json [package.json]
{
  "name": "blocktavern-docs",
  "version": "1.0.0",
  "scripts": {
    "docs:dev": "vitepress dev docs"
  }
}
```

:::
````

### 3.3 代码高亮和行号

````markdown
<!-- 高亮特定行 -->
```javascript{2,4-6}
const config = {
  title: 'BlockTavern Docs', // 这行会被高亮
  description: '文档站点',
  theme: 'default',         // 这些行会被高亮
  version: '1.0.0',         // 这些行会被高亮
  author: 'Team'            // 这些行会被高亮
}
```

<!-- 代码差异显示 -->
```javascript
const config = {
  title: 'BlockTavern Docs',
  description: '文档站点', // [!code --]
  description: 'Minecraft 服务器文档', // [!code ++]
  version: '1.0.0' // [!code highlight]
}
```
````

### 3.4 表格

```markdown
| 功能 | 描述 | 状态 |
|------|------|------|
| 多语言支持 | 支持中英文切换 | ✅ 已完成 |
| 自动侧边栏 | 根据文件结构生成 | ✅ 已完成 |
| 搜索功能 | 本地搜索 | ✅ 已完成 |
| 主题切换 | 明暗主题 | ✅ 已完成 |
```

### 3.5 数学公式

```markdown
<!-- 行内公式 -->
当 $a \ne 0$ 时，方程 $ax^2 + bx + c = 0$ 有两个解。

<!-- 块级公式 -->
$$
x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$
```

## 4. 文档编写规范

### 4.1 文件命名规范

**基本原则：**
- 使用小写字母和连字符（kebab-case）
- 文件名简洁明了，能够反映内容
- 避免使用空格、下划线或特殊字符
- 使用英文命名，便于 URL 生成

**命名示例：**
```
✅ 推荐
installation-guide.md
server-configuration.md
advanced-features.md
getting-started.md

❌ 不推荐
安装指南.md
Server_Configuration.md
Advanced Features.md
GettingStarted.md
```

### 4.2 目录结构规范

```
zh-CN/
├── index.md                    # 首页
├── InstallationTutorial/        # 安装教程
│   ├── index.md                # 分类首页
│   ├── quick-start.md          # 快速开始
│   └── detailed-setup.md       # 详细安装
├── GameplayGuide/              # 游戏指南
│   ├── index.md
│   ├── basic-commands.md       # 基础命令
│   └── advanced-tips.md        # 高级技巧
├── DevelopmentGuide/           # 开发指南
│   ├── index.md
│   ├── project-structure.md    # 项目结构
│   ├── configuration.md        # 配置说明
│   └── writing-docs.md         # 文档编写
└── FAQ/                        # 常见问题
    ├── index.md
    └── troubleshooting.md      # 故障排除
```

### 4.3 Front Matter 规范

每个 Markdown 文件都应该包含 Front Matter 元数据：

```yaml
---
title: 页面标题                 # 必需，显示在侧边栏和页面顶部
description: 页面描述           # 必需，用于 SEO 和页面摘要
order: 1                       # 可选，控制在侧边栏中的排序
layout: doc                    # 可选，页面布局类型
lastUpdated: true              # 可选，显示最后更新时间
contributors: true             # 可选，显示贡献者信息
---
```

**字段说明：**
- `title`: 页面标题，会显示在浏览器标签、侧边栏和页面顶部
- `description`: 页面描述，用于 SEO 优化和搜索结果
- `order`: 数字，控制页面在侧边栏中的排序（数字越小越靠前）
- `layout`: 页面布局，通常使用 `doc`
- `lastUpdated`: 是否显示最后更新时间
- `contributors`: 是否显示贡献者信息

### 4.4 页面结构规范

**标准页面结构：**

```markdown
---
title: 页面标题
description: 页面描述
---

# 页面标题

简要介绍本页面的内容和目的。

## 1. 主要章节

### 1.1 子章节

具体内容...

### 1.2 另一个子章节

具体内容...

## 2. 第二个主要章节

### 2.1 子章节

具体内容...

## 相关链接

- [相关页面 1](./related-page-1.md)
- [相关页面 2](./related-page-2.md)
- [外部链接](https://example.com)
```

**结构要点：**
1. **页面标题 (H1)**：每个页面只能有一个 H1 标题
2. **简介段落**：简要说明页面内容和目的
3. **主要章节 (H2)**：使用数字编号，逻辑清晰
4. **子章节 (H3-H6)**：层次分明，不要跳级
5. **相关链接**：在页面末尾提供相关资源链接

## 5. 自动侧边栏最佳实践

::: tip 自动侧边栏功能
项目使用 `vitepress-sidebar` 插件自动生成侧边栏，文档结构会根据文件组织自动生成！
:::

### 5.1 文件组织原则

**核心概念：目录结构即侧边栏结构**

1. **文件夹映射**
   - 每个文件夹自动成为侧边栏的一个分组
   - 文件夹名会自动转换为分组标题（支持中英文）
   - 支持多级嵌套（建议不超过 3 级）

2. **文件排序规则**
   ```
   DevelopmentGuide/
   ├── index.md              # 总是排在第一位
   ├── 01-getting-started.md # 使用数字前缀控制顺序
   ├── 02-configuration.md
   ├── project-structure.md  # 按字母顺序排列
   └── writing-docs.md
   ```

3. **标题提取优先级**
   - Front Matter 中的 `title` 字段（最高优先级）
   - 文档中的第一个 H1 标题
   - 文件名（自动格式化，最低优先级）

### 5.2 侧边栏配置说明

项目的侧边栏配置位于 `docs/.vitepress/components/sidebar.js`：

```javascript
export function generateSidebarConfig() {
  return generateSidebar([
    {
      documentRootPath: "docs",
      useTitleFromFileHeading: true,     // 从文件标题获取
      useTitleFromFrontmatter: true,     // 从 Front Matter 获取
      useFolderTitleFromIndexFile: true, // 从 index.md 获取文件夹标题
      collapsed: true,                   // 默认折叠
      collapseDepth: 2,                  // 折叠深度
      // 更多配置...
    }
  ]);
}
```

### 5.3 最佳实践建议

**文件夹命名：**
```
✅ 推荐
InstallationTutorial/    # 使用 PascalCase
GameplayGuide/
DevelopmentGuide/
FAQ/

❌ 不推荐
installation_tutorial/   # 下划线
Gameplay Guide/          # 空格
安装教程/                # 中文（影响 URL）
```

**index.md 文件的作用：**
- 每个文件夹都应该有一个 `index.md` 文件
- 作为该分类的首页和概览
- 其 `title` 会被用作文件夹在侧边栏中的显示名称

```yaml
# InstallationTutorial/index.md
---
title: 安装教程
description: Minecraft 服务器安装指南
---

# 安装教程

本节将指导您完成 BlockTavern 服务器的安装...
```

## 6. 内容编写指南

### 6.1 写作原则

**语言风格：**
- 使用简洁明了的语言，避免冗长的句子
- 避免过于技术性的术语，必要时提供解释
- 保持友好、专业的语调
- 使用主动语态，增强可读性

**结构组织：**
- 使用清晰的标题层次结构（H1 > H2 > H3...）
- 每个章节都有明确的主题
- 逻辑顺序合理，从简单到复杂
- 适当使用列表和表格组织信息

**示例和说明：**
- 提供充足的代码示例和截图
- 使用实际的项目场景作为示例
- 对复杂概念提供类比和解释
- 包含常见错误和解决方案

### 6.2 技术文档写作技巧

**代码示例：**
```markdown
<!-- 好的代码示例 -->
## 配置文件示例

以下是一个完整的配置文件示例：

```javascript
// docs/.vitepress/config.mjs
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'BlockTavern Docs',
  description: 'Minecraft 服务器文档',
  // 更多配置...
})
```

**重要提示：** 请确保将此文件放在正确的目录中。
```

**步骤说明：**
```markdown
## 安装步骤

请按照以下步骤进行安装：

1. **下载文件**
   ```bash
   git clone https://github.com/your-repo/project.git
   ```

2. **安装依赖**
   ```bash
   cd project
   npm install
   ```

3. **启动服务**
   ```bash
   npm run dev
   ```

::: tip 提示
如果遇到权限问题，请使用管理员权限运行命令。
:::
```

### 6.3 多媒体内容

**图片使用：**
- 图片文件放在 `docs/public/images/` 目录下
- 使用描述性的文件名
- 提供有意义的 alt 文本
- 控制图片大小，避免过大的文件

```markdown
![服务器配置界面](./images/server-config.png "服务器配置界面截图")
```

**视频嵌入：**
```markdown
<!-- YouTube 视频 -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>

<!-- 本地视频 -->
<video controls width="100%">
  <source src="./videos/tutorial.mp4" type="video/mp4">
  您的浏览器不支持视频播放。
</video>
```

## 7. 多语言文档编写

### 7.1 多语言结构

项目支持多语言文档，目前主要支持：
- 简体中文（默认）：`docs/zh-CN/`
- 英文：`docs/en/`
- 其他语言：`docs/ja/`、`docs/ko/` 等

### 7.2 翻译指南

**翻译原则：**
1. 保持原文的结构和格式
2. 适应目标语言的表达习惯
3. 保持技术术语的一致性
4. 注意文化差异和本地化需求

**翻译流程：**
1. 复制中文文档到对应语言目录
2. 翻译 Front Matter 中的 `title` 和 `description`
3. 翻译正文内容
4. 检查链接和引用是否正确
5. 测试页面显示效果

**示例对比：**
```yaml
# zh-CN/DevelopmentGuide/configuration.md
---
title: 配置说明
description: VitePress 配置文件说明
---

# 配置说明

本指南将详细介绍项目的配置文件...
```

```yaml
# en/DevelopmentGuide/configuration.md
---
title: Configuration Guide
description: VitePress configuration file documentation
---

# Configuration Guide

This guide provides detailed information about the project's configuration files...
```

## 8. 质量控制和审核

### 8.1 自检清单

在提交文档之前，请检查以下项目：

- [ ] Front Matter 信息完整且正确
- [ ] 页面标题唯一且描述性强
- [ ] 标题层次结构合理（不跳级）
- [ ] 代码示例可以正常运行
- [ ] 链接都能正常访问
- [ ] 图片显示正常
- [ ] 语法和拼写正确
- [ ] 格式统一，符合项目规范

### 8.2 协作和贡献

**提交流程：**
1. Fork 项目仓库
2. 创建新的分支进行修改
3. 编写或修改文档
4. 本地测试确保正常显示
5. 提交 Pull Request
6. 等待审核和合并

**贡献指南：**
- 遵循项目的编写规范
- 提供清晰的提交信息
- 在 PR 中说明修改的内容和原因
- 响应审核意见并及时修改

## 9. 常用资源和工具

### 9.1 官方文档

- [VitePress 官方文档](https://vitepress.dev/)
- [Markdown 语法指南](https://markdown.com.cn/)
- [vitepress-sidebar 插件文档](https://vitepress-sidebar.jooy2.com/)

### 9.2 编辑工具推荐

**代码编辑器：**
- VS Code + Markdown 扩展
- Typora（所见即所得）
- Mark Text（开源 Markdown 编辑器）

**有用的 VS Code 扩展：**
- Markdown All in One
- Markdown Preview Enhanced
- markdownlint
- Auto Rename Tag

### 9.3 在线工具

- [表格生成器](https://tablesgenerator.com/markdown_tables)
- [Markdown 在线编辑器](https://dillinger.io/)
- [图片压缩工具](https://tinypng.com/)
- [SVG 图标库](https://heroicons.com/)

---

通过遵循本指南，您可以创建高质量、一致性强的文档，为 BlockTavern 项目的用户提供优秀的文档体验。如有疑问，请参考相关资源或联系项目维护者。

<Contributors />