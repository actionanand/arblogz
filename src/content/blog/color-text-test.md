---
title: "Color Highlighting with CSS Styling Test"
description: "Testing the enhanced color highlighting feature with CSS styling modes"
date: 2025-10-05
colorHighlight: true
tags: ["test", "colors", "styling"]
---

# Color Highlighting with CSS Styling Test

Testing the three color modes with additional CSS styling: normal (background), foreground, and dual.

## Basic Syntax: 

- `==your text|color==` - Default background mode
- `==your text|color|fg==` - Foreground mode
- `==your text|fgColor|bgColor|dual==` - Dual mode

## Extended Syntax with CSS Styling:

- `==text|color|mode|fontWeight|fontStyle|textAlign==`
- `==text|color|fontWeight|fontStyle|textAlign==` (default background mode)

## Normal/Background Mode with CSS Styling
- `==Bold red background|#ff6b6b|bg|bold==` → ==Bold red background|#ff6b6b|bg|bold==
- `==Italic blue background|#4299e1|bg||italic==` → ==Italic blue background|#4299e1|bg||italic==
- `==Bold italic green|#25c2a0|bg|bold|italic==` → ==Bold italic green|#25c2a0|bg|bold|italic==

## Foreground Mode with CSS Styling
- `==Bold dark red text|#800031|fg|bold==` → ==Bold dark red text|#800031|fg|bold==
- `==Italic navy text|#004080|fg||italic==` → ==Italic navy text|#004080|fg||italic==
- `==Bold italic teal|#006666|fg|bold|italic==` → ==Bold italic teal|#006666|fg|bold|italic==

## Dual Mode with CSS Styling
- `==Bold purple on green|#4B0082|#D1FFBD|dual|bold==` → ==Bold purple on green|#4B0082|#D1FFBD|dual|bold==
- `==Italic white on red|#ffffff|#ff0000|dual||italic==` → ==Italic white on red|#ffffff|#ff0000|dual||italic==

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