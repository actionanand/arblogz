---
title: "Donation Disabled Test"
description: "Testing manual donation disable override"
date: 2025-09-26
tags: ["test"]
showDonate: false
# Explicitly disabled - should never show donations regardless of global settings
---

# Manual Donation Disable Test

This blog post has `showDonate: false` in its frontmatter.

Donations should **never** appear on this page, regardless of the global `donate.enableForAllBlogs` setting.

This demonstrates the manual override system - individual pages can always override global settings.

## Manual Control Priority

The manual `showDonate` setting in frontmatter always takes priority:
- `showDonate: true` → Always show donations
- `showDonate: false` → Never show donations  
- No `showDonate` field → Use global `enableForAllBlogs` setting

This ensures content creators have full control over donation placement.