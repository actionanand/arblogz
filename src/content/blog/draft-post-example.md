---
title: "Draft Post Example - Testing Draft Functionality"
description: "This is a test draft post to demonstrate the draft functionality in development mode"
date: 2025-10-09
draft: true
tags: ["draft", "test", "development"]
category: ["examples"]
---

# 🚧 Draft Post Example

This post demonstrates the **draft functionality** implemented in the blog system.

## Draft Features

### ✅ **What Works:**

1. **Development Mode Preview**: This post is visible in development but hidden in production
2. **Visual Indicators**: Draft badges and styling clearly mark this as a draft
3. **Professional Styling**: Dashed borders and warning indicators
4. **Smart Filtering**: Automatically hidden from public listings in production

### 🔍 **Draft Behavior:**

#### In Development Mode:
- ✅ Draft posts are **visible** for preview
- ✅ **Draft badges** appear prominently
- ✅ **Visual styling** indicates draft status
- ✅ **All functionality** works normally

#### In Production Mode:
- ❌ Draft posts are **automatically hidden**
- ❌ **Not included** in blog listings
- ❌ **Not accessible** via direct URLs
- ❌ **Search engines** cannot index them

## Testing Draft Functionality

This post has `draft: true` in its frontmatter, which means:

```yaml
---
title: "Draft Post Example"
draft: true  # This makes it a draft
---
```

## Implementation Details

The draft system includes:

1. **Smart Filtering**: `getCollectionByName` utility filters drafts in production
2. **Visual Indicators**: `DraftIndicator` component shows draft badges
3. **Enhanced Styling**: Special CSS styling for draft posts
4. **Development Preview**: Full functionality in development mode

## Usage Guide

### Creating a Draft Post:
```yaml
---
title: "Your Post Title"
description: "Post description"
date: 2025-10-09
draft: true  # Add this line to make it a draft
---
```

### Publishing a Draft:
```yaml
---
title: "Your Post Title"
description: "Post description"
date: 2025-10-09
draft: false  # Change to false or remove the line
---
```

---

**Note**: This post will only be visible in development mode. In production, it will be automatically hidden from all listings and direct access.

Perfect for testing and previewing content before publication! 🎉