---
title: Writing Documentation
description: Guidelines and best practices for writing BlockTavern documentation
order: 4
---

# Writing Documentation

This guide provides comprehensive guidelines for writing high-quality documentation for BlockTavern. Following these standards ensures consistency, readability, and maintainability across all documentation.

## Writing Principles

### 1. Clarity and Simplicity
- **Use clear, concise language**
- **Avoid jargon and technical terms** unless necessary
- **Explain complex concepts** in simple terms
- **Use active voice** whenever possible

### 2. User-Centered Approach
- **Write for your audience** - consider their knowledge level
- **Focus on user goals** and common tasks
- **Provide practical examples** and real-world scenarios
- **Anticipate user questions** and address them proactively

### 3. Consistency
- **Follow established style guidelines**
- **Use consistent terminology** throughout all documents
- **Maintain uniform formatting** and structure
- **Apply consistent naming conventions**

## Document Structure

### Front Matter
Every Markdown file must include proper front matter:

```yaml
---
title: Page Title
description: Brief description of the page content
order: 1
---
```

### Heading Hierarchy
Use proper heading structure:

```markdown
# Page Title (H1) - Only one per page
## Main Sections (H2)
### Subsections (H3)
#### Sub-subsections (H4)
```

**Guidelines**:
- Only one H1 per page (usually the title)
- Don't skip heading levels
- Use descriptive, action-oriented headings
- Keep headings concise but informative

### Content Organization

1. **Introduction**: Brief overview of the topic
2. **Prerequisites**: What users need before starting
3. **Step-by-step instructions**: Clear, numbered steps
4. **Examples**: Practical demonstrations
5. **Troubleshooting**: Common issues and solutions
6. **Next steps**: What to do after completing the task

## Writing Style Guide

### Language and Tone

- **Tone**: Friendly, helpful, and professional
- **Voice**: Active voice preferred
- **Tense**: Present tense for instructions
- **Person**: Second person ("you") for instructions

**Examples**:
```markdown
✅ Good: "Click the Save button to save your changes."
❌ Avoid: "The Save button can be clicked to save changes."

✅ Good: "You can configure the server settings..."
❌ Avoid: "One can configure the server settings..."
```

### Formatting Guidelines

#### Code and Commands

**Inline code**: Use backticks for short code snippets
```markdown
Use the `warp` command to teleport.
```

**Code blocks**: Use fenced code blocks with language specification
```markdown
\`\`\`bash
npm install
npm run dev
\`\`\`
```

**Command examples**:
```markdown
\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`
```

#### Lists and Steps

**Numbered lists** for sequential steps:
```markdown
1. First step
2. Second step
3. Third step
```

**Bulleted lists** for non-sequential items:
```markdown
- Feature A
- Feature B
- Feature C
```

#### Emphasis and Highlighting

- **Bold** for important terms and UI elements
- *Italic* for emphasis
- `Code` for technical terms and values

```markdown
Click the **Save** button in the *Settings* panel.
Set the `debug` parameter to `true`.
```

### Links and References

#### Internal Links
Use relative paths for internal documentation links:
```markdown
[Installation Guide](/en-US/InstallationTutorial/)
[FAQ Section](/en-US/FAQ/)
```

#### External Links
Include descriptive text and open in new tabs when appropriate:
```markdown
[Official Minecraft Website](https://minecraft.net)
```

#### Image References
```markdown
![Alt text description](/assets/images/example.png)
```

## Content Types

### Tutorials
**Structure**:
1. **Overview**: What the tutorial covers
2. **Prerequisites**: Required knowledge/tools
3. **Steps**: Detailed, numbered instructions
4. **Verification**: How to confirm success
5. **Next steps**: Related tutorials or advanced topics

**Example**:
```markdown
# Installing HMCL Launcher

This tutorial guides you through installing and configuring the HMCL launcher for BlockTavern.

## Prerequisites
- Java 17 or higher installed
- Stable internet connection

## Steps

1. **Download HMCL**
   Visit the [official HMCL website](https://hmcl.huangyuhui.net/) and download the latest version.

2. **Install the launcher**
   Run the downloaded installer and follow the setup wizard.

...
```

### Reference Documentation
**Structure**:
1. **Overview**: Brief description
2. **Syntax/Usage**: How to use
3. **Parameters**: Available options
4. **Examples**: Practical usage examples
5. **Related**: Links to related topics

### FAQ Entries
**Structure**:
1. **Question**: Clear, specific question
2. **Answer**: Comprehensive solution
3. **Additional resources**: Related links if needed

## VitePress Features

### Custom Containers
Use VitePress containers for special content:

```markdown
::: tip
This is a helpful tip for users.
:::

::: warning
This is important information to be aware of.
:::

::: danger
This is critical information that could cause issues.
:::

::: info
This is additional information that might be useful.
:::
```

### Code Groups
For showing multiple code examples:

```markdown
::: code-group

\`\`\`bash [npm]
npm install
\`\`\`

\`\`\`bash [pnpm]
pnpm install
\`\`\`

\`\`\`bash [yarn]
yarn install
\`\`\`

:::
```

### Custom Components
Use available custom components:

```markdown
<Contributors />
<GitHistoryInformation />
```

## Quality Checklist

Before publishing documentation, verify:

### Content Quality
- [ ] Information is accurate and up-to-date
- [ ] Instructions are clear and complete
- [ ] Examples work as described
- [ ] All links function correctly
- [ ] Images display properly

### Writing Quality
- [ ] Grammar and spelling are correct
- [ ] Tone is consistent and appropriate
- [ ] Technical terms are explained
- [ ] Content flows logically

### Technical Quality
- [ ] Front matter is properly formatted
- [ ] Heading hierarchy is correct
- [ ] Code blocks have proper syntax highlighting
- [ ] Markdown syntax is valid

### Accessibility
- [ ] Images have descriptive alt text
- [ ] Headings create logical document outline
- [ ] Links have descriptive text
- [ ] Color is not the only way to convey information

## Common Mistakes to Avoid

### Content Issues
- **Assuming prior knowledge** without explanation
- **Skipping error handling** and troubleshooting
- **Using outdated information** or screenshots
- **Providing incomplete instructions**

### Formatting Issues
- **Inconsistent heading levels**
- **Missing code language specification**
- **Broken internal links**
- **Poor image quality or missing alt text**

### Style Issues
- **Inconsistent terminology**
- **Passive voice overuse**
- **Overly complex sentences**
- **Lack of examples**

## Review Process

### Self-Review
1. **Read aloud** to check flow and clarity
2. **Test all instructions** step-by-step
3. **Verify all links** and references
4. **Check formatting** in preview mode

### Peer Review
1. **Content accuracy** review by subject matter expert
2. **Editorial review** for language and style
3. **User testing** with target audience
4. **Technical review** for implementation details

## Maintenance

### Regular Updates
- **Review quarterly** for accuracy
- **Update screenshots** when UI changes
- **Refresh external links** and verify they work
- **Incorporate user feedback** and questions

### Version Control
- **Use descriptive commit messages**
- **Track major changes** in document history
- **Maintain changelog** for significant updates
- **Tag releases** for major documentation versions

<Contributors />

<GitHistoryInformation />