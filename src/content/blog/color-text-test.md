---
title: "Color Highlighting Test"
description: "Testing the color highlighting feature - three modes only"
date: 2025-10-05
colorHighlight: true
tags: ["test", "colors"]
---

# Color Highlighting Test

Testing the three color modes: normal (background), foreground, and dual.

## syntax: 

`==your text|color==`, `==your text|color|mode==`, or `==your text|fgColor|bgColor|dual==`

## Normal/Background Mode (default)
- `==This is red background|#ff6b6b==` → ==This is red background|#ff6b6b==
- `==This is blue background|#4299e1==` → ==This is blue background|#4299e1==
- `==This is green background|#25c2a0==` → ==This is green background|#25c2a0==

## Foreground Mode
- `==Dark red text|#800031|fg==` → ==Dark red text|#800031|fg==
- `==Navy blue text|#004080|fg==` → ==Navy blue text|#004080|fg==
- `==Teal text|#006666|fg==` → ==Teal text|#006666|fg==

## Dual Mode (foreground + background)
- `==Purple on light green|#4B0082|#D1FFBD|dual==` → ==Purple on light green|#4B0082|#D1FFBD|dual==
- `==White on red|#ffffff|#ff0000|dual==` → ==White on red|#ffffff|#ff0000|dual==
- `==Black on yellow|#000000|#ffff00|dual==` → ==Black on yellow|#000000|#ffff00|dual==

## Test Cases for All Modes

### Background Mode Tests
- `==Success message|#28a745==` → ==Success message|#28a745==
- `==Warning alert|#ffc107==` → ==Warning alert|#ffc107==
- `==Error notice|#dc3545==` → ==Error notice|#dc3545==
- `==Info text|#17a2b8==` → ==Info text|#17a2b8==

### Foreground Mode Tests
- `==Important note|#800031|fg==` → ==Important note|#800031|fg==
- `==Technical detail|#004080|fg==` → ==Technical detail|#004080|fg==
- `==Success indicator|#006666|fg==` → ==Success indicator|#006666|fg==
- `==Secondary info|#6c757d|fg==` → ==Secondary info|#6c757d|fg==

### Dual Mode Tests
- `==Main highlight|#4B0082|#D1FFBD|dual==` → ==Main highlight|#4B0082|#D1FFBD|dual==
- `==Urgent alert|#ffffff|#dc3545|dual==` → ==Urgent alert|#ffffff|#dc3545|dual==
- `==Success notification|#000000|#28a745|dual==` → ==Success notification|#000000|#28a745|dual==
- `==Warning message|#000000|#ffc107|dual==` → ==Warning message|#000000|#ffc107|dual==

Perfect for simple color highlighting! 🎨