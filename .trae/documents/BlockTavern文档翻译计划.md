# BlockTavern 文档翻译计划

## 1. 项目概述

BlockTavern 是一个多语言文档项目，需要将中文版本（zh-CN）作为源文档翻译到其他所有语言版本。项目使用 VitePress 构建，支持 10 种语言版本。

## 2. 支持的语言版本

| 语言代码 | 语言名称 | 翻译状态 | 备注 |
|---------|---------|---------|------|
| zh-CN | 简体中文 | ✅ 完成 | 源文档 |
| en-US | 英语 | 🔄 需要翻译 | |
| ja-JP | 日语 | ⚠️ 格式错误 | YAML front matter 格式问题 |
| ko-KR | 韩语 | ✅ 完成 | 已完成所有17个文件翻译 |
| de-DE | 德语 | ✅ 完成 | 已完成所有17个文件翻译 |
| fr-FR | 法语 | ✅ 完成 | 已完成所有17个文件翻译 |
| es-ES | 西班牙语 | ✅ 完成 | 已完成所有17个文件翻译 |
| ru-RU | 俄语 | ✅ 完成 | 已完成所有17个文件翻译 |
| zh-TW | 繁体中文 | ✅ 完成 | 已完成所有17个文件翻译 |
| zh-HK | 香港繁体中文 | ✅ 完成 | 已完成所有17个文件翻译 |

## 3. 文档结构

每个语言版本包含以下文档结构：

```
{language-code}/
├── index.md                    # 主页
├── DevelopmentGuide/           # 开发指南
│   ├── index.md
│   ├── configuration.md
│   ├── development-details.md
│   ├── project-structure.md
│   ├── troubleshooting.md
│   └── writing-docs.md
├── FAQ/                        # 常见问题
│   ├── index.md
│   └── faq-details.md
├── GameplayGuide/              # 游玩指南
│   ├── index.md
│   ├── command-list.md
│   ├── dummy-command.md
│   ├── enclosure-order.md
│   └── server-rules.md
├── InstallationTutorial/       # 安装教程
│   ├── index.md
│   ├── hmcl-installation.md
│   ├── installation-details.md
│   └── pcl2-installation.md
└── components/                 # 组件文档
    └── index.md
```

## 4. 翻译任务清单

### 4.1 需要翻译的文件总数

每个语言版本需要翻译 **17 个文件**，共 **9 个语言版本**，总计 **153 个文件**。

### 4.2 详细文件列表

#### 主页文件
- [ ] index.md

#### 开发指南 (DevelopmentGuide)
- [ ] index.md
- [ ] configuration.md
- [ ] development-details.md
- [ ] project-structure.md
- [ ] troubleshooting.md
- [ ] writing-docs.md

#### 常见问题 (FAQ)
- [ ] index.md
- [ ] faq-details.md

#### 游玩指南 (GameplayGuide)
- [ ] index.md
- [ ] command-list.md
- [ ] dummy-command.md
- [ ] enclosure-order.md
- [ ] server-rules.md

#### 安装教程 (InstallationTutorial)
- [ ] index.md
- [ ] hmcl-installation.md
- [ ] installation-details.md
- [ ] pcl2-installation.md

#### 组件文档 (components)
- [ ] index.md

## 5. 日文版本格式修复

### 5.1 问题描述

日文版本的 `index.md` 文件存在 YAML front matter 格式错误：
- `---` 变成了 `***`
- `-` 变成了 `*`
- 缺少正确的 YAML 分隔符

### 5.2 修复方案

需要将日文版本的 `index.md` 文件开头部分从：

```markdown
***
layout: home

hero:
name: "BlockTavern"
```

修复为：

```markdown
---
layout: home

hero:
  name: "BlockTavern"
```

### 5.3 格式规范

所有 Markdown 文件必须遵循以下格式规范：
1. YAML front matter 使用 `---` 作为分隔符
2. YAML 内容使用正确的缩进（2个空格）
3. 列表项使用 `-` 而不是 `*`
4. 确保 YAML 语法正确

## 6. 翻译流程

### 6.1 翻译步骤

1. **准备阶段**
   - 修复日文版本的格式问题
   - 确认中文源文档的完整性

2. **翻译阶段**
   - 按语言版本逐一翻译
   - 保持文档结构和格式一致
   - 翻译内容但保留代码块和链接

3. **验证阶段**
   - 检查 YAML front matter 格式
   - 验证内部链接的正确性
   - 确保文档能正常渲染

### 6.2 翻译注意事项

1. **保持格式一致性**
   - 保留原有的 Markdown 格式
   - 不要修改代码块内容
   - 保持链接路径正确

2. **YAML Front Matter**
   - 确保使用 `---` 分隔符
   - 保持正确的缩进
   - 翻译 `tagline`、`text`、`details` 等字段

3. **链接处理**
   - 更新内部链接的语言代码部分
   - 例如：`/zh-CN/FAQ/faq-details` → `/ja-JP/FAQ/faq-details`

4. **特殊内容**
   - 代码块保持原样
   - 命令行示例保持原样
   - 文件路径和 URL 保持原样

## 7. 翻译进度跟踪

### 7.1 按语言版本跟踪

| 语言 | 进度 | 完成文件数 | 总文件数 | 完成率 |
|------|------|-----------|----------|--------|
| en-US | 🔄 | 0 | 17 | 0% |
| ja-JP | ⚠️ | 0 | 17 | 0% |
| ko-KR | ✅ | 17 | 17 | 100% |
| de-DE | ✅ | 17 | 17 | 100% |
| fr-FR | ✅ | 17 | 17 | 100% |
| es-ES | ✅ | 17 | 17 | 100% |
| ru-RU | ✅ | 17 | 17 | 100% |
| zh-TW | ✅ | 17 | 17 | 100% |
| zh-HK | ✅ | 17 | 17 | 100% |

### 7.2 按文档类型跟踪

| 文档类型 | 文件数 | 完成语言数 | 总语言数 | 完成率 |
|----------|--------|-----------|----------|--------|
| 主页 | 1 | 8 | 10 | 80% |
| 开发指南 | 6 | 8 | 10 | 80% |
| 常见问题 | 2 | 8 | 10 | 80% |
| 游玩指南 | 5 | 8 | 10 | 80% |
| 安装教程 | 4 | 8 | 10 | 80% |
| 组件文档 | 1 | 8 | 10 | 80% |

## 8. 质量保证

### 8.1 翻译质量标准

1. **准确性**：翻译内容准确，符合目标语言习惯
2. **一致性**：术语翻译保持一致
3. **完整性**：不遗漏任何需要翻译的内容
4. **格式性**：保持原有格式和结构

### 8.2 验证清单

- [ ] YAML front matter 格式正确
- [ ] 内部链接路径正确
- [ ] 代码块保持原样
- [ ] 图片路径正确
- [ ] 文档能正常渲染
- [ ] 翻译内容准确完整

## 9. 工具和资源

### 9.1 推荐工具

- **翻译工具**：Google Translate、DeepL
- **编辑器**：VS Code with Markdown 插件
- **预览工具**：VitePress 开发服务器

### 9.2 参考资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Markdown 语法指南](https://www.markdownguide.org/)
- [YAML 语法参考](https://yaml.org/)

## 10. 时间计划

### 10.1 预估时间

- **格式修复**：1 天
- **翻译工作**：每个语言版本 2-3 天
- **质量检查**：1-2 天
- **总计**：约 20-25 天

### 10.2 优先级

1. **高优先级**：修复日文版本格式问题
2. **中优先级**：英语、日语、韩语版本翻译
3. **低优先级**：其他欧洲语言版本翻译

---

**注意**：本翻译计划需要根据实际进度进行调整和更新。建议定期检查翻译质量和文档渲染效果。