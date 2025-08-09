# 文档编写

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

## 内容编写指南

- 使用简洁明了的语言
- 避免过于技术性的术语
- 保持友好的语调
- 使用清晰的标题层次结构
- 提供充足的示例