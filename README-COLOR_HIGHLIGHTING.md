# Color Highlighting Plugin for Astro

A simple and reliable markdown plugin that adds color highlighting capabilities to your Astro blog posts.

## 📋 Table of Contents

- [Overview](#overview)
- [Installation & Configuration](#installation--configuration)
- [Usage](#usage)
- [Color Palette](#color-palette)
- [Technical Implementation](#technical-implementation)
- [Plugin Logic](#plugin-logic)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## 🎨 Overview

This plugin allows you to add colored text highlights directly in your markdown content using a simple syntax. It's designed to be lightweight, reliable, and easy to use.

### Features

- ✅ Simple syntax: `==text|color==`
- ✅ Performance optimized (only processes enabled posts)
- ✅ No client-side JavaScript required
- ✅ Supports hex colors, RGB, and named colors
- ✅ Automatic white text on dark backgrounds
- ✅ Responsive and accessible design

## 🚀 Installation & Configuration

### Step 1: Plugin File

The plugin is located at `/src/plugins/remark-simple-highlight.js`:

```javascript
import { visit } from 'unist-util-visit';

export function remarkColorHighlight() {
  return function (tree, file) {
    // Only process if colorHighlight is enabled in frontmatter
    const frontmatter = file?.data?.astro?.frontmatter;
    if (!frontmatter?.colorHighlight) {
      return;
    }

    visit(tree, 'text', (node, index, parent) => {
      if (!node.value || !parent) return;
      
      // Simple pattern: ==text|color==
      const regex = /==(.*?)\|(.*?)==/g;
      const matches = [...node.value.matchAll(regex)];
      
      if (matches.length === 0) return;
      
      const newNodes = [];
      let lastIndex = 0;
      
      for (const match of matches) {
        const [fullMatch, text, color] = match;
        const matchStart = match.index;
        const matchEnd = matchStart + fullMatch.length;
        
        // Add text before match
        if (matchStart > lastIndex) {
          newNodes.push({
            type: 'text',
            value: node.value.slice(lastIndex, matchStart)
          });
        }
        
        // Add colored text as HTML
        newNodes.push({
          type: 'html',
          value: `<span style="background-color: ${color}; color: white; padding: 0.2rem; border-radius: 4px;">${text}</span>`
        });
        
        lastIndex = matchEnd;
      }
      
      // Add remaining text
      if (lastIndex < node.value.length) {
        newNodes.push({
          type: 'text',
          value: node.value.slice(lastIndex)
        });
      }
      
      // Replace the node
      if (newNodes.length > 0) {
        parent.children.splice(index, 1, ...newNodes);
        return index + newNodes.length;
      }
    });
  };
}
```

### Step 2: Astro Configuration

Add the plugin to your `astro.config.js`:

```javascript
// Import the plugin
import {remarkColorHighlight} from "./src/plugins/remark-simple-highlight.js";

export default defineConfig({
  // ... other config
  markdown: {
    remarkPlugins: [
      // ... other plugins
      remarkColorHighlight  // Add at the end
    ],
    rehypePlugins: [lazyLoadImage],
  }
});
```

### Step 3: Content Schema

Update your content schema in `/src/content/config.ts`:

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    // ... existing fields
    colorHighlight: z.boolean().default(false).nullable(),
    // ... other fields
  }),
});
```

### Step 4: Dependencies

Ensure you have the required dependency:

```bash
npm install unist-util-visit
```

## 📝 Usage

### 1. Enable in Frontmatter

Add `colorHighlight: true` to your blog post frontmatter:

```yaml
---
title: "My Colorful Post"
date: 2025-10-06
colorHighlight: true
---
```

### 2. Use the Syntax

In your markdown content, use the simple syntax:

```markdown
This is normal text, but ==this is highlighted|#ff0000== with a red background.

You can have multiple colors: ==success|#28a745== and ==warning|#ffc107== in the same line.
```

### 3. Result

The text will be rendered with:
- Colored background
- White text (for readability)
- Rounded corners
- Padding for better appearance

## 🎨 Color Palette

### Standard Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| Red | `#ff0000` | `==Important|#ff0000==` |
| Green | `#28a745` | `==Success|#28a745==` |
| Blue | `#007bff` | `==Info|#007bff==` |
| Yellow | `#ffc107` | `==Warning|#ffc107==` |
| Purple | `#6f42c1` | `==Note|#6f42c1==` |
| Orange | `#fd7e14` | `==Alert|#fd7e14==` |
| Pink | `#e83e8c` | `==Special|#e83e8c==` |
| Teal | `#20c997` | `==Tip|#20c997==` |

### Semantic Colors

| Purpose | Color | Hex Code | Example |
|---------|-------|----------|---------|
| Important | Red | `#dc3545` | `==Important|#dc3545==` |
| Success | Green | `#28a745` | `==Success|#28a745==` |
| Warning | Yellow | `#ffc107` | `==Warning|#ffc107==` |
| Info | Blue | `#17a2b8` | `==Info|#17a2b8==` |
| Primary | Blue | `#007bff` | `==Primary|#007bff==` |
| Secondary | Gray | `#6c757d` | `==Secondary|#6c757d==` |
| Danger | Red | `#dc3545` | `==Danger|#dc3545==` |

### Special Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| WhatsApp Green | `#25c2a0` | `==WhatsApp|#25c2a0==` |
| Silver | `#C0C0C0` | `==Silver|#C0C0C0==` |
| Dark Gray | `#343a40` | `==Dark|#343a40==` |
| Light Gray | `#f8f9fa` | `==Light|#f8f9fa==` |

### Examples in Action

```markdown
Here are some examples:

- ==Important notice|#dc3545== - Red for important information
- ==Success message|#28a745== - Green for positive feedback
- ==Warning alert|#ffc107== - Yellow for caution
- ==Info note|#17a2b8== - Blue for general information
- ==WhatsApp contact|#25c2a0== - WhatsApp brand color
- ==Silver badge|#C0C0C0== - Subtle silver highlighting
```

## 🔧 Technical Implementation

### Plugin Architecture

The plugin follows the standard Remark plugin pattern:

1. **Function Export**: Exports a function that returns a transformer
2. **Feature Detection**: Checks frontmatter for `colorHighlight: true`
3. **AST Traversal**: Uses `unist-util-visit` to find text nodes
4. **Pattern Matching**: Uses regex to find `==text|color==` patterns
5. **Node Replacement**: Replaces text nodes with HTML nodes

### Processing Flow

```
Markdown Input → Remark Parser → Plugin Processing → HTML Output
      ↓                ↓              ↓              ↓
==text|#ff0000==  →  text node  →  pattern match  →  <span style="...">
```

### Generated HTML

Input: `==Important|#ff0000==`

Output: 
```html
<span style="background-color: #ff0000; color: white; padding: 0.2rem; border-radius: 4px;">
  Important
</span>
```

## 🧠 Plugin Logic

### 1. Feature Gate

```javascript
const frontmatter = file?.data?.astro?.frontmatter;
if (!frontmatter?.colorHighlight) {
  return; // Skip processing
}
```

**Why**: Only processes files that explicitly enable the feature, ensuring:
- No performance impact on other posts
- Opt-in behavior
- Clear feature control

### 2. Pattern Matching

```javascript
const regex = /==(.*?)\|(.*?)==/g;
const matches = [...node.value.matchAll(regex)];
```

**Pattern Breakdown**:
- `==` - Start delimiter
- `(.*?)` - Non-greedy capture for text content
- `\|` - Pipe separator (escaped)
- `(.*?)` - Non-greedy capture for color value
- `==` - End delimiter
- `g` - Global flag for multiple matches

**Why This Pattern**:
- Simple and intuitive
- No conflicts with existing markdown
- Easy to type and remember
- Reliable parsing

### 3. Node Replacement

```javascript
const newNodes = [];
// Build array of text and HTML nodes
parent.children.splice(index, 1, ...newNodes);
```

**Process**:
1. Create array of new nodes
2. Add text before match
3. Add HTML node for colored text
4. Add text after match
5. Replace original node with new nodes

### 4. HTML Generation

```javascript
newNodes.push({
  type: 'html',
  value: `<span style="background-color: ${color}; color: white; padding: 0.2rem; border-radius: 4px;">${text}</span>`
});
```

**Style Choices**:
- `background-color`: User-specified color
- `color: white`: Ensures readability on colored backgrounds
- `padding: 0.2rem`: Comfortable spacing
- `border-radius: 4px`: Modern rounded appearance

## 🎯 Performance Considerations

### Opt-in Processing
- Only processes files with `colorHighlight: true`
- Zero overhead for posts without the feature
- Scales well with large sites

### Simple Regex
- Single regex pattern for all matches
- Non-greedy matching prevents catastrophic backtracking
- Efficient processing of multiple highlights per line

### Static Generation
- All processing happens at build time
- No client-side JavaScript required
- Resulting HTML is optimized and cached

## 🐛 Troubleshooting

### Common Issues

#### 1. Plugin Not Working

**Symptoms**: Raw text shows instead of colored highlights

**Solutions**:
- ✅ Check `colorHighlight: true` in frontmatter
- ✅ Verify plugin is added to `astro.config.js`
- ✅ Restart dev server after config changes
- ✅ Check for syntax errors in plugin file

#### 2. Colors Not Appearing

**Symptoms**: Text is highlighted but no color shows

**Solutions**:
- ✅ Use valid hex colors: `#ff0000`
- ✅ Check for typos in color values
- ✅ Ensure proper syntax: `==text|color==`
- ✅ Verify CSS isn't overriding styles

#### 3. Build Errors

**Symptoms**: Build fails with plugin errors

**Solutions**:
- ✅ Check `unist-util-visit` is installed
- ✅ Verify import path in config
- ✅ Check for syntax errors in plugin
- ✅ Ensure content schema is updated

### Debug Steps

1. **Check Console**: Look for any error messages
2. **Inspect HTML**: Verify generated HTML structure
3. **Test Simple Case**: Try `==test|#ff0000==` first
4. **Validate Config**: Ensure plugin is properly registered

## 🤝 Contributing

### Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Create test files with `colorHighlight: true`

### Adding Features

To extend the plugin:

1. **New Syntax**: Modify the regex pattern
2. **Style Options**: Add parameters to HTML generation
3. **Color Validation**: Add color format checking
4. **Performance**: Optimize regex or caching

### Testing

Create test files in `/src/content/blog/` with:
- Various color formats
- Multiple highlights per line
- Edge cases and special characters
- Performance with many highlights

## 📄 License

This plugin is part of the Astro blog project and follows the same license terms.

---

## 🎉 Example Usage

Here's a complete example of how to use the color highlighting:

```markdown
---
title: "My Colorful Blog Post"
date: 2025-10-06
colorHighlight: true
---

# Welcome to My Colorful World!

Let me show you some ==amazing highlights|#ff6b6b==!

## Status Messages

- ==Success|#28a745==: Operation completed successfully
- ==Warning|#ffc107==: Please review your settings  
- ==Error|#dc3545==: Something went wrong
- ==Info|#17a2b8==: Here's some useful information

## Social Media Colors

Contact me on ==WhatsApp|#25c2a0== for quick responses!

## Mixed Content

This sentence has ==multiple|#ff0000== ==different|#00ff00== ==colored|#0000ff== words!

Happy highlighting! 🎨
```

This will render beautifully with properly colored and styled text highlights throughout your content.