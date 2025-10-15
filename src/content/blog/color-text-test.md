---
title: "Color Highlighting with CSS Styling Test"
description: "Testing the enhanced color highlighting feature with CSS styling modes"
date: 2025-10-05
colorHighlight: true
tags: ["test", "colors", "styling"]
---

# Color Highlighting with CSS Styling Test

Testing the three color modes with additional CSS styling: normal (background), foreground, and dual.

## How to enable `CSS Color Highlight`

To enable this feature, please add the property `colorHighlight: true` to the **Front matter** section like below

```md title="color-text-test.md" {4}
---
titile: 'title of the page'
date: yyyy-mm-dd
colorHighlight: true
---
```

## Basic Syntax: 

- `==your text|color==` - Default background mode
- `==your text|color|fg==` - Foreground mode
- `==your text|fgColor|bgColor|dual==` - Dual mode

## Extended Syntax with CSS Styling:

- `==text|color|mode|fontWeight|fontStyle|textAlign==`
- `==text|color|fontWeight|fontStyle|textAlign==` (default background mode)

## Normal/Background Mode with CSS Styling
- `==Bold red background|#ff6b6b|bg|bold==` → ==Bold red background|#ff6b6b|bg|bold==
- `==Bold red background|white|#ff6b6b|dual|bold==` → ==Bold red background|white|#ff6b6b|dual|bold==
- `==Italic blue background|#4299e1|bg||italic==` → ==Italic blue background|#4299e1|bg||italic==
- `==Bold italic green|#25c2a0|bg|bold|italic==` → ==Bold italic green|#25c2a0|bg|bold|italic==

## Foreground Mode with CSS Styling
- `==Bold dark red text|#800031|fg|bold==` → ==Bold dark red text|#800031|fg|bold==
- `==Italic navy text|#004080|fg||italic==` → ==Italic navy text|#004080|fg||italic==
- `==Bold italic teal|#006666|fg|bold|italic==` → ==Bold italic teal|#006666|fg|bold|italic==

## Dual Mode with CSS Styling
- `==Bold purple on green|#4B0082|#D1FFBD|dual|bold==` → ==Bold purple on green|#4B0082|#D1FFBD|dual|bold==
- `==Italic white on red|#ffffff|#ff0000|dual||italic==` → ==Italic white on red|#ffffff|#ff0000|dual||italic==
- `==Caribbean green & white text|white|#25c2a0|dual==` → ==Caribbean green & white text|white|#25c2a0|dual==
- `==Silver style|white|#C0C0C0|dual==` → ==Silver style|white|#C0C0C0|dual==

## Simplified Syntax (background mode)
- `==Bold warning|#ffc107|bold==` → ==Bold warning|#ffc107|bold==
- `==Italic success|#28a745||italic==` → ==Italic success|#28a745||italic==
- `==Bold italic error|#dc3545|bold|italic==` → ==Bold italic error|#dc3545|bold|italic==

## Font Weight Examples
- `==Normal weight|#ff6b6b==` → ==Normal weight|#ff6b6b==
- `==Bold weight|#ff6b6b|bold==` → ==Bold weight|#ff6b6b|bold==
- `==Bold weight explicit bg|#ff6b6b|bg|bold==` → ==Bold weight explicit bg|#ff6b6b|bg|bold==
- `==Lighter weight|#ff6b6b|lighter==` → ==Lighter weight|#ff6b6b|lighter==
- `==Bolder weight|#ff6b6b|bolder==` → ==Bolder weight|#ff6b6b|bolder==
- `==700 weight|#ff6b6b|700==` → ==700 weight|#ff6b6b|700==

## Font Style Examples
- `==Normal style|#4299e1==` → ==Normal style|#4299e1==
- `==Italic style|#4299e1||italic==` → ==Italic style|#4299e1||italic==
- `==Oblique style|#4299e1||oblique==` → ==Oblique style|#4299e1||oblique==

## Text Alignment Examples

Text alignment requires block display, which is automatically applied when text-align is used:

`==Left aligned text|#e3f2fd||||left==`

==Left aligned text|#e3f2fd||||left==

`==Center aligned text|#fff3e0||||center==`

==Center aligned text|#fff3e0||||center==

`==Right aligned text|#f3e5f5||||right==`

==Right aligned text|#f3e5f5||||right==

`==Justified text with longer content|#e8f5e8||||justify==`

==This is a longer text block that demonstrates justified alignment. When text is justified, it stretches to fill the full width of the container, creating even margins on both left and right sides. This alignment mode distributes spacing between words to achieve this effect.|#e8f5e8||||justify==

### Foreground Mode Text Alignment

`==Center aligned foreground text|#d32f2f|fg|||center==`

==Center aligned foreground text|#d32f2f|fg|||center==

**Original test case:**
`==Center aligned dual mode|#ffffff|#1976d2|dual|||center==`

==Center aligned dual mode|#ffffff|#1976d2|dual|||center==

`==Right aligned dual with bold|#000000|#ffeb3b|dual|bold||right==`

==Right aligned dual with bold|#000000|#ffeb3b|dual|bold||right==

## Combined Styling Examples
- `==Bold italic warning|#ffc107|bold|italic==` → ==Bold italic warning|#ffc107|bold|italic==
- `==Light italic info|#17a2b8|lighter|italic==` → ==Light italic info|#17a2b8|lighter|italic==
- `==Bold success message|#28a745|fg|bold==` → ==Bold success message|#28a745|fg|bold==
- `==Italic error text|#dc3545|fg||italic==` → ==Italic error text|#dc3545|fg||italic==

## Dual Mode Advanced Styling
- `==Bold white on dark|#ffffff|#343a40|dual|bold==` → ==Bold white on dark|#ffffff|#343a40|dual|bold==
- `==Italic light on primary|#ffffff|#007bff|dual||italic==` → ==Italic light on primary|#ffffff|#007bff|dual||italic==
- `==Bold italic special|#000000|#ffd700|dual|bold|italic==` → ==Bold italic special|#000000|#ffd700|dual|bold|italic==
- `==Normal dual colors|#4B0082|#D1FFBD|dual==` → ==Normal dual colors|#4B0082|#D1FFBD|dual==

Perfect for enhanced color highlighting with CSS styling! 🎨✨