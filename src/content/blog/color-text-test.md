---
title: "Color Highlighting Test"
description: "Testing the simple color highlighting feature"
date: 2025-10-05
colorHighlight: true
tags: ["test", "colors"]
---

# Color Highlighting Test

Let's test the simple color highlighting feature:

This is normal text, but ==this is red|#ff0000== and ==this is blue|#0066cc==.

You can also try ==green text|#28a745== and ==yellow background|#ffc107==.

Multiple colors in one line: ==red|#dc3545== and ==blue|#007bff== and ==green|#28a745==.

## How to Use

The syntax supports two modes:

### Background Mode (Default)
`==text|color==` → Colored background with white text

### Foreground Mode  
`==text|color|fg==` → Colored text only (no background)

Examples:
- `==Important|#ff0000==` → ==Important|#ff0000== (background mode)
- `==Important|#ff0000|fg==` → ==Important|#ff0000|fg== (foreground mode)
- `==Success|#28a745==` → ==Success|#28a745== (background mode)
- `==Success|#28a745|fg==` → ==Success|#28a745|fg== (foreground mode)
- `==Warning|#ffc107==` → ==Warning|#ffc107== (background mode)
- `==Warning|#ffc107|fg==` → ==Warning|#ffc107|fg== (foreground mode)
- `==Info|#17a2b8==` → ==Info|#17a2b8== (background mode)
- `==Info|#17a2b8|fg==` → ==Info|#17a2b8|fg== (foreground mode)
- `==WhatsApp|#25c2a0==` → ==WhatsApp|#25c2a0== (background mode)
- `==WhatsApp|#25c2a0|fg==` → ==WhatsApp|#25c2a0|fg== (foreground mode)
- `==Silver|#C0C0C0==` → ==Silver|#C0C0C0== (background mode)
- `==Silver|#C0C0C0|fg==` → ==Silver|#C0C0C0|fg== (foreground mode)

## Test Different Colors

### Standard Colors
- ==Red|#ff0000==
- ==Green|#28a745==
- ==Blue|#007bff==
- ==Yellow|#ffc107==
- ==Purple|#6f42c1==
- ==Orange|#fd7e14==
- ==Pink|#e83e8c==
- ==Teal|#20c997==

### Semantic Colors
- ==Important|#dc3545== (Red)
- ==Success|#28a745== (Green)
- ==Warning|#ffc107== (Yellow)
- ==Info|#17a2b8== (Blue)
- ==Primary|#007bff== (Blue)
- ==Secondary|#6c757d== (Gray)
- ==Danger|#dc3545== (Red)

### Special Colors
- ==WhatsApp|#25c2a0== (WhatsApp Green)
- ==Silver|#C0C0C0== (Silver)
- ==Dark|#343a40== (Dark Gray)
- ==Light|#f8f9fa== (Light Gray)

That's it! Simple and effective.

## Real-World Usage Examples

### Status Messages (Background Mode)
- ==Success|#28a745==: Your changes have been saved
- ==Warning|#ffc107==: Please review the settings before continuing
- ==Error|#dc3545==: Unable to connect to the server
- ==Info|#17a2b8==: New features are available in this update

### Text Highlighting (Foreground Mode)
- Reach me on ==WhatsApp|#25c2a0|fg== for quick responses
- ==Important|#dc3545|fg== deadline: October 15th
- ==Silver|#C0C0C0|fg== members get early access

### Mixed Modes in Content
This tutorial covers ==HTML|#e34c26== (background), ==CSS|#1572b6|fg== (foreground), and ==JavaScript|#f7df1e== fundamentals.

### Comparison Examples
- Background: ==Highlighted|#6f42c1== vs Foreground: ==Highlighted|#6f42c1|fg==
- Background: ==Important|#dc3545== vs Foreground: ==Important|#dc3545|fg==
- Background: ==Success|#28a745== vs Foreground: ==Success|#28a745|fg==

Perfect for highlighting key terms, status indicators, and important information! 🎨