---
title: 文档编写
description: 服务器文档编写目录
order: 4
---

# 文档编写

本指南将帮助您了解如何编写和维护 BlockTavern 的文档。我们使用 VitePress 作为文档生成工具，以下是一些基本的编写规范和技巧。

## Markdown 基础语法

```markdown
# 一级标题
## 二级标题
### 三级标题

**粗体文本**
*斜体文本*
`行内代码`

- 无序列表项 1
- 无序列表项 2

1. 有序列表项 1
2. 有序列表项 2

[链接文本](链接地址)

![图片描述](图片地址)
```

## VitePress 扩展功能

### 信息框

```markdown
::: info 信息
这是一个信息框
:::

::: tip 提示
这是一个提示框
:::

::: warning 警告
这是一个警告框
:::

::: danger 危险
这是一个危险警告框
:::
```

### 代码组

```markdown
::: code-group

```js [config.js]
export default {
  name: 'config'
}
```

```ts [config.ts]
export default {
  name: 'config'
} as const
```

:::
```

### 自定义容器

```markdown
::: details 点击查看详情
这里是详细内容
:::
```

## 文档规范

### 文件命名

- 使用小写字母和连字符
- 文件名简洁明了
- 例如：`getting-started.md`、`server-rules.md`

### 页面结构

1. **页面标题**：使用一级标题
2. **简介**：简要说明页面内容
3. **主要内容**：按逻辑顺序组织
4. **相关链接**：链接到相关页面

### Front Matter

```yaml
---
title: 页面标题
description: 页面描述
layout: doc
---
```

## 自动侧边栏最佳实践

::: tip 新功能
项目现已启用自动侧边栏生成，文档结构会根据文件组织自动生成！
:::

### 文件组织原则

1. **目录结构即侧边栏结构**
   - 每个文件夹会成为侧边栏的一个分组
   - 文件夹名会自动转换为分组标题
   - 支持多级嵌套（最多6级）

2. **文件命名规范**
   ```
   components/
   ├── GameplayGuide/
   │   ├── index.md          # 游玩指南首页
   │   ├── basic-gameplay.md # 基础玩法
   │   └── advanced-tips.md  # 高级技巧
   └── FAQ/
       ├── index.md          # 常见问题首页
       └── server-issues.md  # 服务器问题
   ```

3. **标题提取优先级**
   - Front Matter 中的 `title` 字段（最高优先级）
   - 文档中的第一个 H1 标题
   - 文件名（自动格式化）

### 推荐的 Front Matter

```yaml
---
title: 页面标题        # 侧边栏显示的标题
description: 页面描述   # SEO 描述
order: 1               # 排序权重（可选）
---
```

## 内容编写指南

- 使用简洁明了的语言
- 避免过于技术性的术语
- 保持友好的语调
- 使用清晰的标题层次结构
- 提供充足的示例
- 确保每个文档都有明确的 H1 标题

<Contributors />