# Notebook Card Component

Classic notebook-style cards with lined paper effect, binding holes, and decorative tape.

## Import

```jsx
import { NotebookCard, NotebookCardContainer } from '@/react/Cards';
```

## Usage

### Multiple Cards in Grid

```jsx
<NotebookCardContainer>
  <NotebookCard 
    image="image-url.jpg" 
    title="Card Title"
    imageAlt="Alt text"
  >
    <p>Your content here...</p>
  </NotebookCard>
  
  <NotebookCard 
    image="another-image.jpg" 
    title="Another Title"
  >
    <p>More content...</p>
  </NotebookCard>
</NotebookCardContainer>
```

### Single Card

```jsx
<NotebookCard 
  image="image-url.jpg" 
  title="Card Title"
  imageAlt="Alt text"
>
  <p>Your content...</p>
</NotebookCard>
```

## Props

### NotebookCardContainer
- **children**: NotebookCard components

### NotebookCard
- **image** (required): Image URL or path
- **title** (required): Card heading
- **imageAlt** (optional): Image alt text (defaults to title)
- **children** (required): Card content

## Features

- ✅ Lined paper effect (blue horizontal lines)
- ✅ Red vertical margin line
- ✅ Binding holes on left side
- ✅ Decorative tape at top and bottom
- ✅ Monospace typography
- ✅ Responsive grid layout
- ✅ Dark mode support
- ✅ Drop shadow effect
- ✅ Real-time theme detection

## Styling

- **Background**: Repeating horizontal lines with vertical margin
- **Binding**: Circular cutouts via CSS mask
- **Tape**: Rotated pseudo-elements
- **Typography**: Monospace font family
- **Colors**: Adapts to light/dark theme automatically

## Tips

1. Use in `.mdx` files only
2. Provide descriptive alt text
3. Works standalone or in container
4. Content can include any HTML/JSX
5. Automatically responsive
