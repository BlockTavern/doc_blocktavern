---
title: Redacción de documentación
description: BlockTavern 文档编写完整指南
order: 4
---

# 文档编写指南

本指南将详细介绍如何为 BlockTavern 项目编写和维护高质量的文档。我们使用 VitePress 作为文档生成工具，支持多语言、自动侧边栏生成等现代化功能。

## 1. 快速开始

创建新文档只需三步：

1. 在对应语言目录下创建 `.md` 文件
2. 添加 Front Matter 配置
3. 编写内容并保存
4. 文档末尾添加 `<Contributors />` 贡献者组件 `<GitHistoryInformation />` Git历史组件

::: tip 开发环境
使用 `npm run docs:dev` 启动本地预览，支持热重载。
:::

## 2. 基础语法

### 2.1 常用格式

```markdown
# 页面标题 (H1)

## 主要章节 (H2)

### 子章节 (H3)

**粗体** _斜体_ `行内代码`

- 无序列表
- [链接文本](./other-page.md)
- ![图片](./images/screenshot.png)
```

### 2.2 代码块

````markdown
```javascript
const config = {
  title: "BlockTavern Docs",
  description: "文档站点",
};
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

```markdown
::: tip 提示
重要的建议或技巧
:::

::: warning 警告
需要注意的事项
:::

::: danger 危险
可能的风险或错误
:::

::: details 点击展开详情
可折叠的详细内容
:::
```

### 3.2 代码组

````markdown
::: code-group

```js [config.js]
export default {
  title: "BlockTavern Docs",
};
```

```json [package.json]
{
  "name": "blocktavern-docs"
}
```

:::
````

### 3.3 代码高亮

````markdown
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
  title: "BlockTavern Docs",
  description: "文档站点", // [!code --]
  description: "Minecraft 服务器文档", // [!code ++]
  version: "1.0.0", // [!code highlight]
};
```
````

### 3.4 表格

```markdown
| 功能       | 描述             | 状态      |
| ---------- | ---------------- | --------- |
| 多语言支持 | 支持中英文切换   | ✅ 已完成 |
| 自动侧边栏 | 根据文件结构生成 | ✅ 已完成 |
| 搜索功能   | 本地搜索         | ✅ 已完成 |
| 主题切换   | 明暗主题         | ✅ 已完成 |
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

## 4. 编写规范

### 4.1 文件命名

- 使用小写字母和连字符：`installation-guide.md`
- 避免中文、空格、下划线：~~`安装指南.md`~~
- 每个目录需要 `index.md` 作为首页

### 4.2 Front Matter

```yaml
---
title: 页面标题 # 必需
description: 页面描述 # 必需
order: 1 # 可选，控制排序
---
```

### 4.3 页面结构

```markdown
---
title: 页面标题
description: 页面描述
---

# 页面标题

简要介绍页面内容。

## 主要章节

### 子章节

具体内容...

<Contributors />
```

**要点：**
- 每页只有一个 H1 标题
- 使用数字编号的 H2 章节
- 标题层次不要跳级
- 页面末尾添加 `<Contributors />` 组件显示贡献者

## 5. 侧边栏配置

::: tip 自动生成
项目使用 `vitepress-sidebar` 插件，根据文件结构自动生成侧边栏。
:::

### 5.1 组织原则

- 目录结构 = 侧边栏结构
- 每个目录需要 `index.md` 文件
- 使用 `order` 字段控制排序
- 文件夹使用 PascalCase 命名

## 6. 写作指南

### 6.1 写作原则

- 语言简洁明了，避免冗长句子
- 结构清晰，从简单到复杂
- 提供实际的代码示例
- 使用提示框突出重点

### 6.2 步骤说明格式

````markdown
## 安装步骤

1. **下载项目**
   ```bash
   git clone https://github.com/project.git
   ```
````

2. **安装依赖**

```bash
npm install
```

::: tip 提示
遇到问题请检查 Node.js 版本。
:::

````

### 6.3 图片和媒体

- 图片放在 `docs/public/images/` 目录
- 使用描述性文件名和 alt 文本
- 控制文件大小

```markdown
![配置界面](./images/config.png "配置界面截图")
````

## 7. 多语言支持

项目支持多语言文档：

- 中文（默认）：`docs/zh-CN/`
- 英文：`docs/en/`
- 其他语言：`docs/ja/`、`docs/ko/` 等

**翻译流程：**

1. 复制中文文档到对应语言目录
2. 翻译 Front Matter 和正文内容
3. 检查链接和格式
4. 测试显示效果

## 8. 提交检查

提交前请确认：

- [ ] Front Matter 信息完整
- [ ] 标题层次合理
- [ ] 代码示例正确
- [ ] 链接可正常访问
- [ ] 图片显示正常
- [ ] 语法拼写正确

## 9. 参考资源

**官方文档：**

- [VitePress 文档](https://vitepress.dev/)
- [Markdown 语法](https://markdown.com.cn/)
- [vitepress-sidebar 插件](https://vitepress-sidebar.jooy2.com/)

**推荐工具：**

- VS Code + Markdown 扩展
- [表格生成器](https://tablesgenerator.com/markdown_tables)
- [图片压缩](https://tinypng.com/)

---

遵循本指南可以创建高质量的文档。如有疑问，请联系项目维护者。

<Contributors />

<GitHistoryInformation />