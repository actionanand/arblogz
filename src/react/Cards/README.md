# Card Components

This folder contains various card component styles for use in MDX blog posts.

## Available Card Types

### 1. Notebook Cards (`/Notebook`)
Classic notebook-style cards with lined paper effect, binding holes, and tape decorations.

**Features:**
- Lined paper background
- Red margin line
- Binding holes effect
- Tape decorations
- Monospace font
- Dark mode support

**Import:**
```jsx
import { NotebookCard, NotebookCardContainer } from '@/react/Cards';
```

[View Notebook Card Documentation](./Notebook/README.md)

---

### 2. Fancy Cards (`/Fancy`)
Animated cards with vibrant colors, hover effects, and special styling options.

**Features:**
- Animated title on hover
- Purple/aqua/violet color scheme
- Scale effect on hover
- Custom scrollbar
- Special classes for notes and upcharges
- Drop cap on first paragraph
- Dark mode support

**Import:**
```jsx
import { FancyCard, FancyCardContainer } from '@/react/Cards';
```

[View Fancy Card Documentation](./Fancy/README.md)

---

### 3. Hover Cards (`/Hover`)
Beautiful cards that reveal detailed descriptions on hover with smooth animations.

**Features:**
- Image with description overlay on hover
- Smooth slide-up animation
- Scrollable content area
- Custom scrollbar styling
- Auto dark/light mode detection
- Fully responsive
- No container needed

**Import:**
```jsx
import { HoverCard } from '@/react/Cards';
```

[View Hover Card Documentation](./Hover/README.md)

---

## General Usage Pattern

All card components follow the same pattern:

1. Import the card and container components
2. Wrap multiple cards in a container for grid layout
3. Pass image, title, and content as props
4. Use `.mdx` file extension in your blog posts

```jsx
import { CardType, CardTypeContainer } from '@/react/Cards';

<CardTypeContainer>
  <CardType 
    image="image-url.jpg" 
    title="Card Title"
    imageAlt="Alt text"
  >
    <p>Your content here...</p>
  </CardType>
  
  <CardType 
    image="another-image.jpg" 
    title="Another Card"
  >
    <p>More content...</p>
  </CardType>
</CardTypeContainer>
```

## Adding New Card Types

To add a new card type:

1. Create a new subfolder (e.g., `/NewCardType`)
2. Create component files:
   - `NewCard.jsx` - Main card component
   - `NewCardContainer.jsx` - Container component
   - `index.js` - Export file
   - `README.md` - Documentation
3. Use inline styles (no separate CSS files)
4. Include theme detection for dark mode
5. Update `/Cards/index.js` to export new components

## File Structure

```
Cards/
├── Notebook/
│   ├── NotebookCard.jsx
│   ├── NotebookCardContainer.jsx
│   ├── index.js
│   └── README.md
├── Fancy/
│   ├── FancyCard.jsx
│   ├── FancyCardContainer.jsx
│   ├── index.js
│   └── README.md
├── index.js (exports all card types)
└── README.md (this file)
```

## Best Practices

- ✅ Always use inline styles (no separate CSS files)
- ✅ Include comprehensive theme detection
- ✅ Support both light and dark modes
- ✅ Make components responsive
- ✅ Use semantic HTML
- ✅ Include proper alt text for images
- ✅ Document special features and props
- ✅ Follow existing component patterns
