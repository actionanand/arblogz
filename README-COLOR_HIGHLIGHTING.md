# Color Highlighting for Astro

A simple and reliable markdown plugin that adds color highlighting capabilities with CSS styling modes to your Astro blog posts.

## 📋 Table of Contents

- [Overview](#overview)
- [Installation & Configuration](#installation--configuration)
- [Usage](#usage)
- [CSS Styling Modes](#css-styling-modes)
- [Color Palette](#color-palette)
- [Technical Implementation](#technical-implementation)
- [Plugin Logic](#plugin-logic)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## 🎨 Overview

This plugin allows you to add colored text highlights with additional CSS styling directly in your markdown content using a simple syntax. It's designed to be lightweight, reliable, and easy to use.

### Features

- ✅ Simple syntax: `==text|color==`, `==text|color|mode==`, or `==text|fgColor|bgColor|dual==`
- ✅ Three highlighting modes: background (default), foreground, and dual
- ✅ CSS styling modes: fontWeight, fontStyle, textAlign
- ✅ Extended syntax: `==text|color|mode|fontWeight|fontStyle|textAlign==`
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
      
      // Enhanced pattern: ==text|color== or ==text|color|mode==
      const regex = /==(.*?)\|(.*?)(?:\|(.*?))?==/g;
      const matches = [...node.value.matchAll(regex)];
      
      if (matches.length === 0) return;
      
      const newNodes = [];
      let lastIndex = 0;
      
      for (const match of matches) {
        const [fullMatch, text, color, mode = 'bg'] = match;
        const matchStart = match.index;
        const matchEnd = matchStart + fullMatch.length;
        
        // Add text before match
        if (matchStart > lastIndex) {
          newNodes.push({
            type: 'text',
            value: node.value.slice(lastIndex, matchStart)
          });
        }
        
        // Generate HTML based on mode
        let html = '';
        if (mode === 'fg') {
          // Foreground mode: color text only, no background
          html = `<span style="color: ${color};">${text}</span>`;
        } else {
          // Background mode (default): colored background with white text
          html = `<span style="background-color: ${color}; color: white; padding: 0.2rem; border-radius: 4px;">${text}</span>`;
        }
        
        // Add colored text as HTML
        newNodes.push({
          type: 'html',
          value: html
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

In your markdown content, use the enhanced syntax:

#### Background Mode (Default)
```markdown
This is normal text, but ==this is highlighted|#ff0000== with a red background.
```

#### Foreground Mode
```markdown
This text has ==colored text|#ff0000|fg== with no background.
```

#### Dual Mode (Foreground + Background)
```markdown
This has ==white text on red background|#ffffff|#ff0000|dual== styling.
```

### 3. Result

- **Background mode**: Text with colored background, white text, rounded corners, and padding
- **Foreground mode**: Text with colored foreground only, no background styling  
- **Dual mode**: Custom foreground and background colors with full control

## � CSS Styling Modes

Beyond basic color highlighting, you can add CSS styling properties like font weight, font style, and text alignment.

### Extended Syntax

```markdown
==text|color|mode|fontWeight|fontStyle|textAlign==
```

or for background mode (default):

```markdown
==text|color|fontWeight|fontStyle|textAlign==
```

### Font Weight Options

- `bold` - Bold text
- `bolder` - Bolder than parent
- `lighter` - Lighter than parent  
- `normal` - Normal weight
- `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900` - Numeric weights

**Examples:**
```markdown
==Bold background text|#ff6b6b|bold==
==Bold foreground text|#800031|fg|bold==
==Bold dual mode|#4B0082|#D1FFBD|dual|bold==
```

### Font Style Options

- `italic` - Italic text
- `oblique` - Oblique text
- `normal` - Normal style

**Examples:**
```markdown
==Italic background|#4299e1||italic==
==Italic foreground|#004080|fg||italic==
==Italic dual mode|#ffffff|#ff0000|dual||italic==
```

### Combined Styling

You can combine multiple CSS properties:

```markdown
==Bold italic warning|#ffc107|bold|italic==
==Light italic info|#17a2b8|lighter|italic==
==Bold success message|#28a745|fg|bold==
==Bold italic special|#000000|#ffd700|dual|bold|italic==
```

### Parameter Order

1. **Text** - The content to highlight
2. **Color** - Primary color (background color for bg mode, text color for fg mode)
3. **Mode** - `bg`, `fg`, or for dual mode: second color parameter
4. **Font Weight** - `bold`, `normal`, `lighter`, `bolder`, or numeric
5. **Font Style** - `italic`, `oblique`, `normal`
6. **Text Align** - `left`, `center`, `right`, `justify` (Note: text-align has limited effect on inline spans)

### Skip Parameters

Use empty values to skip parameters:
```markdown
==Just italic|#ff6b6b||italic==          # Skip fontWeight, add italic
==Just bold|#4299e1|bold==               # Only add bold
==Bold and italic|#25c2a0|bold|italic==  # Both bold and italic
```

## �🎨 Color Palette

### Standard Colors

| Color | Hex Code | Background Mode | Foreground Mode | Dual Mode |
|-------|----------|------------------|------------------|-----------|
| Red | `#ff0000` | `==Important\|#ff0000==` | `==Important\|#ff0000\|fg==` | `==Important\|#ffffff\|#ff0000\|dual==` |
| Green | `#28a745` | `==Success\|#28a745==` | `==Success\|#28a745\|fg==` | `==Success\|#ffffff\|#28a745\|dual==` |
| Blue | `#007bff` | `==Info\|#007bff==` | `==Info\|#007bff\|fg==` | `==Info\|#ffffff\|#007bff\|dual==` |
| Yellow | `#ffc107` | `==Warning\|#ffc107==` | `==Warning\|#ffc107\|fg==` | `==Warning\|#000000\|#ffc107\|dual==` |
| Purple | `#6f42c1` | `==Note\|#6f42c1==` | `==Note\|#6f42c1\|fg==` | `==Note\|#ffffff\|#6f42c1\|dual==` |
| Orange | `#fd7e14` | `==Alert\|#fd7e14==` | `==Alert\|#fd7e14\|fg==` | `==Alert\|#ffffff\|#fd7e14\|dual==` |
| Pink | `#e83e8c` | `==Special\|#e83e8c==` | `==Special\|#e83e8c\|fg==` | `==Special\|#ffffff\|#e83e8c\|dual==` |
| Teal | `#20c997` | `==Tip\|#20c997==` | `==Tip\|#20c997\|fg==` | `==Tip\|#ffffff\|#20c997\|dual==` |

### Semantic Colors

| Purpose | Color | Hex Code | Background Mode | Foreground Mode | Dual Mode |
|---------|-------|----------|------------------|------------------|-----------|
| Important | Red | `#dc3545` | `==Important\|#dc3545==` | `==Important\|#dc3545\|fg==` | `==Important\|#ffffff\|#dc3545\|dual==` |
| Success | Green | `#28a745` | `==Success\|#28a745==` | `==Success\|#28a745\|fg==` | `==Success\|#ffffff\|#28a745\|dual==` |
| Warning | Yellow | `#ffc107` | `==Warning\|#ffc107==` | `==Warning\|#ffc107\|fg==` | `==Warning\|#000000\|#ffc107\|dual==` |
| Info | Blue | `#17a2b8` | `==Info\|#17a2b8==` | `==Info\|#17a2b8\|fg==` | `==Info\|#ffffff\|#17a2b8\|dual==` |
| Primary | Blue | `#007bff` | `==Primary\|#007bff==` | `==Primary\|#007bff\|fg==` | `==Primary\|#ffffff\|#007bff\|dual==` |
| Secondary | Gray | `#6c757d` | `==Secondary\|#6c757d==` | `==Secondary\|#6c757d\|fg==` | `==Secondary\|#ffffff\|#6c757d\|dual==` |
| Danger | Red | `#dc3545` | `==Danger\|#dc3545==` | `==Danger\|#dc3545\|fg==` | `==Danger\|#ffffff\|#dc3545\|dual==` |

### Special Colors

| Color | Hex Code | Background Mode | Foreground Mode |
|-------|----------|------------------|------------------|
| WhatsApp Green | `#25c2a0` | `==WhatsApp\|#25c2a0==` | `==WhatsApp\|#25c2a0\|fg==` |
| Silver | `#C0C0C0` | `==Silver\|#C0C0C0==` | `==Silver\|#C0C0C0\|fg==` |
| Dark Gray | `#343a40` | `==Dark\|#343a40==` | `==Dark\|#343a40\|fg==` |
| Light Gray | `#f8f9fa` | `==Light\|#f8f9fa==` | `==Light\|#f8f9fa\|fg==` |

### Examples in Action

```markdown
Here are some examples:

**Background Mode (Default):**
- ==Important notice|#dc3545== - Red background for important information
- ==Success message|#28a745== - Green background for positive feedback
- ==Warning alert|#ffc107== - Yellow background for caution
- ==Info note|#17a2b8== - Blue background for general information

**Foreground Mode:**
- ==Important notice|#dc3545|fg== - Red text for important information
- ==Success message|#28a745|fg== - Green text for positive feedback
- ==Warning alert|#ffc107|fg== - Yellow text for caution
- ==Info note|#17a2b8|fg== - Blue text for general information

**Special Colors:**
- ==WhatsApp contact|#25c2a0== - WhatsApp brand color background
- ==WhatsApp contact|#25c2a0|fg== - WhatsApp brand color text
- ==Silver badge|#C0C0C0== - Subtle silver background
- ==Silver badge|#C0C0C0|fg== - Subtle silver text

**Mixed Usage:**
This tutorial covers ==HTML|#e34c26== (background), ==CSS|#1572b6|fg== (foreground), and ==JavaScript|#f7df1e== (background) fundamentals.
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

Input: `==Important|#ff0000==` (Background mode)

Output: 
```html
<span style="background-color: #ff0000; color: white; padding: 0.2rem; border-radius: 4px;">
  Important
</span>
```

Input: `==Important|#ff0000|fg==` (Foreground mode)

Output:
```html
<span style="color: #ff0000;">
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
const regex = /==(.*?)\|(.*?)(?:\|(.*?))?==/g;
const matches = [...node.value.matchAll(regex)];
```

**Enhanced Pattern Breakdown**:
- `==` - Start delimiter
- `(.*?)` - Non-greedy capture for text content
- `\|` - Pipe separator (escaped)
- `(.*?)` - Non-greedy capture for color value
- `(?:\|(.*?))?` - Optional non-capturing group for mode parameter
- `==` - End delimiter
- `g` - Global flag for multiple matches

**Syntax Support**:
- `==text|color==` - Background mode (default)
- `==text|color|fg==` - Foreground mode
- `==text|color|bg==` - Explicit background mode

**Why This Pattern**:
- Simple and intuitive
- No conflicts with existing markdown
- Easy to type and remember
- Reliable parsing
- Backward compatible with original syntax

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
// Generate HTML based on mode
let html = '';
if (mode === 'fg') {
  // Foreground mode: color text only, no background
  html = `<span style="color: ${color};">${text}</span>`;
} else {
  // Background mode (default): colored background with white text
  html = `<span style="background-color: ${color}; color: white; padding: 0.2rem; border-radius: 4px;">${text}</span>`;
}
```

**Style Choices**:

**Background Mode**:
- `background-color`: User-specified color
- `color: white`: Ensures readability on colored backgrounds
- `padding: 0.2rem`: Comfortable spacing
- `border-radius: 4px`: Modern rounded appearance

**Foreground Mode**:
- `color`: User-specified color
- No background styling for clean text highlighting

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

## Status Messages (Background Mode)

- ==Success|#28a745==: Operation completed successfully
- ==Warning|#ffc107==: Please review your settings  
- ==Error|#dc3545==: Something went wrong
- ==Info|#17a2b8==: Here's some useful information

## Text Highlighting (Foreground Mode)

- This is ==important text|#dc3545|fg== you should read
- Contact me on ==WhatsApp|#25c2a0|fg== for quick responses
- ==Silver|#C0C0C0|fg== members get early access

## Mixed Content

This sentence has ==background highlights|#ff0000== and ==foreground colors|#00ff00|fg== together!

### Comparison Examples

- Background: ==Highlighted|#6f42c1== vs Foreground: ==Highlighted|#6f42c1|fg==
- Background: ==Important|#dc3545== vs Foreground: ==Important|#dc3545|fg==
- Background: ==Success|#28a745== vs Foreground: ==Success|#28a745|fg==

Happy highlighting! 🎨
```

This will render beautifully with properly colored and styled text highlights throughout your content.