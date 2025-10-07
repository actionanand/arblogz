---
date: 2025-08-24
title: 'New features: Admonitions/Callouts & Markdown Features'
description: More new features specific to this theme.
tags: [feature]
category: astro
mermaid: true
mathjax: true
ogImage: https://astro-yi.obs.cn-east-3.myhuaweicloud.com/avatar.png
---

### Support Remixicon

```text
:i{class="ri-poker-hearts-fill"}
:i{class="ri-poker-clubs-fill"}
```

:i{class="ri-poker-hearts-fill"}
:i{class="ri-poker-clubs-fill"}

### Support Button

```text
:btn[Google]{href="https://www.google.com"}
```

:btn[Google]{href="https://www.google.com"}

```text
:::btn{href="#"}
:i{class="ri-share-box-line"} Open in new tab
:::
```

:::btn{href="#"}
:i{class="ri-share-box-line"} Open in new tab
:::

### Support Github Card

```text
::github{repo="actionanand/ollama-chat"}
```

::github{repo="actionanand/ollama-chat"}

### Support collapse

**Basic collapse (default title):**
```bash
:::collapse
Hello World!
:::
```

:::collapse
Hello World!
:::

**Collapse with custom title:**
```bash
:::collapse[Custom Title Here]
This is content inside a collapse with a custom title!
:::
```

:::collapse[Custom Title Here]
This is content inside a collapse with a custom title!
:::

**Another example with a longer title:**
```bash
:::collapse[Click to expand detailed information]
This collapse section has a descriptive title that explains what's inside.

You can put any content here:
- Lists
- Code blocks
- Images
- Any markdown content
:::
```

:::collapse[Click to expand detailed information]
This collapse section has a descriptive title that explains what's inside.

You can put any content here:
- Lists
- Code blocks  
- Images
- Any markdown content

**Testing overlapping fix:** This content should not overlap with the elements below when the collapse is expanded. The new CSS styling should provide proper spacing and container behavior.

```javascript
// This code block should be properly contained
function testFunction() {
  console.log("Testing collapse content");
  return "No overlap should occur";
}
```

1. First item in a list
2. Second item with more content to test spacing
3. Third item to ensure proper layout
:::

**Using 'details' syntax (alternative):**
```bash
:::details[Technical Details]
The collapse feature also supports the `:::details` syntax as an alternative to `:::collapse`.
:::
```

:::details[Technical Details]
The collapse feature also supports the `:::details` syntax as an alternative to `:::collapse`.
:::

### Testing Custom Titles and SVG Arrows

:::collapse[🎯 Custom Title with Emoji]
This collapse has a custom title with an emoji and should show a nice SVG arrow that rotates smoothly when expanded.

The arrow changes color based on the theme (light/dark mode) and has a subtle scale effect on hover.
:::

:::collapse[📋 Technical Features Demo]
**Features of the new SVG arrow:**

1. **Smooth rotation animation** (90 degrees)
2. **Theme-aware colors** (dark/light mode support)
3. **Hover effects** with subtle scaling
4. **Cubic-bezier easing** for professional feel
5. **No overlap issues** with proper spacing

```javascript
// Example code to test formatting
function testCollapse() {
  console.log("SVG arrow animation working!");
  return "Perfect spacing and animation";
}
```

**List items work perfectly:**
- First item
- Second item with longer content
- Third item to test spacing
:::

:::collapse[🎨 Visual Design Improvements]
The new design includes:

- **SVG-based arrow icon** instead of Unicode character
- **Flexbox layout** for better alignment  
- **Theme-aware styling** with proper contrast
- **Smooth animations** with easing functions
- **Hover interactions** for better UX

> This blockquote should also be properly spaced within the collapse content.
:::

### Support admonitions/Callouts 

```markdown
:::tip[Customized Title]
hello world
:::

:::note
note
:::

:::caution
caution
:::

:::danger
danger
:::

:::warning
warning
:::

:::info
info
:::

:::tip[New Tips]
How is my new idea?
:::


:::::info[Parent]

Parent content

::::danger[Child]

Child content

:::tip[Deep Child]

**AST**(Abstract Syntax Tree) in Admonitions

:::

::::

:::::

```

:::tip[Customized Title]
hello world
:::

:::note
note

```js
console.log('hello world')
```

:::

:::caution
caution
:::

:::danger
danger
:::

:::warning
warning
:::

:::info
info
:::

:::tip[New Tips]
How is my new idea?
:::

:::::info[Parent]

Parent content

::::danger[Child]

Child content

:::tip[Deep Child]

**AST**(Abstract Syntax Tree) in Admonitions

:::

::::

:::::

### Support mermaid

Use:

+ start with **```mermaid**
+ end with **```**
+ set markdown frontmatter `mermaid: true`.

Mermaid Code:

```html title="mermaid.md"
classDiagram
note "From Duck till Zebra"
Animal <|-- Duck
note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
Animal <|-- Fish
Animal <|-- Zebra
Animal : +int age
Animal : +String gender
Animal: +isMammal()
Animal: +mate()
class Duck{
+String beakColor
+swim()
+quack()
}
class Fish{
-int sizeInFeet
-canEat()
}
class Zebra{
+bool is_wild
+run()
}
```

Result:

```mermaid
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
```

### Support mathjax

+ set markdown frontmatter `mathjax: true`.

#### Block Mode

```yaml title="Mathjax.md"
---
mathjax: true
---
hello!
$$ \sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t $$
hello!
```

hello!
$$ \sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t $$
hello!

#### Inline Mode

```yaml title="Mathjax.md"
---
mathjax: true
---
hello! $ \sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t $ hello!
```

hello! $ \sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t $ hello!

### Integration with Expressive Code

For more usage, please refer to the official website [expressive-code](https://expressive-code.com/).

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
  console.log('this line is marked as deleted')
  // This line and the next one are marked as inserted
  console.log('this is the second inserted line')

  return 'this line uses the neutral default marker type'
}
```

### Code folding is supported by default

```js
var myArr = [1, 2]
console.log(myArr)

var myObj = {a: 1, b: 2}

for (let key of myArr) {
  console.log(key)
}

var it = myArr[Symbol.iterator]()
it.next() // {value: 1, done: false}

// VM704:12 Uncaught TypeError: myObj is not iterable
for (let key of myObj) {
  console.log(key)
}

```

### Testing New Admonitions/Callouts 

:::info[Custom Info Title]
This is a new info admonition with custom title and blue styling.
:::

:::warning[Custom Warning Title]
This is a warning admonition that should look like caution with orange styling.
:::

:::info
This is a standard info admonition without custom title.
:::

:::warning
This is a standard warning admonition without custom title.
:::
