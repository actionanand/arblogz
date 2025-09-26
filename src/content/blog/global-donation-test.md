---
title: "Global Donation Test"
description: "Testing global donation control without explicit showDonate setting"
date: 2025-09-26
tags: ["test"]
# No showDonate field - should use global enableForAllBlogs setting
---

# Global Donation Control Test

This blog post **does not** have `showDonate` set in its frontmatter.

Whether donations appear depends on the global `donate.enableForAllBlogs` setting in `src/consts.ts`:

- If `enableForAllBlogs: true` - donations will appear
- If `enableForAllBlogs: false` - no donations will appear

This demonstrates the global control system for blog posts.

## Testing Different Scenarios

1. **Global enabled, no manual setting** - Donations appear
2. **Global disabled, no manual setting** - No donations
3. **Global enabled, manual `showDonate: false`** - No donations (manual override)
4. **Global disabled, manual `showDonate: true`** - Donations appear (manual override)

The manual `showDonate` setting always takes precedence over global settings.