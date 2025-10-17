---
title: Emoji using text
date: 2025-10-18
description: test
---

> Note: This feature is not released to prod. blog

## Emoji :star_struck:

Emojis can be added in markdown by including a literal emoji character or a GitHub shortcode. You can browse an unofficial database [here](https://emojibase.dev/emojis?shortcodePresets=github).

```md title="Example markdown with GitHub emoji shortcodes"
Good morning! :sleeping: :coffee: :pancakes:
```

Good morning! :sleeping: :coffee: :pancakes:

> All emojis \(both literal and shortcoded\) are made more accessible by wrapping them in a `span` tag like this:

```html
<span role="img" aria-label="coffee">☕️</span>
```

<span role="img" aria-label="coffee">☕️</span>