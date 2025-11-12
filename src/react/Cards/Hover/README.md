# HoverCard Component

A beautiful card component that reveals descriptive content on hover with a smooth animation effect.

## Features

- ✨ Smooth hover animation revealing full description
- 🎨 Automatic dark/light mode theme detection
- 📱 Fully responsive design
- 🖼️ Image with overlay description
- 📜 Scrollable content area
- 🎯 Custom scrollbar styling
- ⚡ Smooth transitions
- 💅 Inline styles (no separate CSS file)
- 📦 Container component for grid layout

## Usage

### Basic Example

```jsx
import { HoverCard, HoverCardContainer } from '@/react/Cards';

<HoverCardContainer>
  <HoverCard
    image="https://example.com/image.jpg"
    title="Card Title"
    imageAlt="Description of image"
  >
    <p>Your description content goes here. Can include multiple paragraphs, lists, or any other content.</p>
  </HoverCard>
</HoverCardContainer>
```

### With Multiple Cards

```jsx
import { HoverCard, HoverCardContainer } from '@/react/Cards';

<HoverCardContainer>
  <HoverCard
    image="image1.jpg"
    title="Card 1"
    imageAlt="Alt text for card 1"
  >
    <p>Description for card 1</p>
  </HoverCard>

  <HoverCard
    image="image2.jpg"
    title="Card 2"
    imageAlt="Alt text for card 2"
  >
    <p>Description for card 2</p>
  </HoverCard>
  
  <HoverCard
    image="image3.jpg"
    title="Card 3"
  >
    <p>Description for card 3</p>
  </HoverCard>
</HoverCardContainer>
```

## Props

### HoverCard

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | URL of the image to display |
| `title` | string | Yes | - | Title displayed on the card header |
| `children` | ReactNode | Yes | - | Content to display on hover (description) |
| `imageAlt` | string | No | `title` | Alt text for the image (accessibility) |

### HoverCardContainer

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | ReactNode | Yes | - | HoverCard components to display in grid |

## Styling

The component uses inline styles that adapt to your theme:

### Light Mode
- White background for description overlay
- Dark text color (#333)
- Blue header (#6184a8)

### Dark Mode
- Dark background for description overlay
- Light text color
- Darker blue header (#4a6a8a)

## Component Structure

The HoverCard follows the same pattern as other card components:

- **HoverCard**: Individual card component (renders as `<li>`)
- **HoverCardContainer**: Container component (renders as `<ul>` with grid layout)

Always wrap HoverCards in a HoverCardContainer for proper layout.

## Behavior

### Hover Effect
- Initially shows only the image with title
- On hover, a white/dark overlay slides up from top
- Description content becomes visible with smooth opacity transition
- Card slightly lifts up with enhanced shadow

### Scrolling
- If content exceeds card height, description area becomes scrollable
- Custom-styled scrollbar matches the theme
- Scrollbar appears only when needed

## Responsive Design

The component automatically adjusts for different screen sizes through the container's grid layout:

- **Desktop**: Auto-fit grid with minimum 250px columns
- **Adapts to content**: Grid automatically adjusts based on available space
- Card max dimensions: 250x350px

## Theme Detection

The component automatically detects theme changes from:
- `localStorage.theme`
- HTML element classes (`dark` class)
- HTML/Body `data-theme` attributes
- Multiple theme change events
- Theme switching is reactive and instant

## Accessibility

- ✅ Proper `alt` text for images
- ✅ Semantic HTML structure (`<ul>` and `<li>`)
- ✅ Keyboard accessible (native focus states)
- ✅ Sufficient color contrast in both themes
- ✅ ARIA-friendly content structure

## Browser Support

- ✅ Chrome/Edge (modern)
- ✅ Firefox (modern)
- ✅ Safari (modern)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight component with minimal dependencies
- Inline styles for better performance
- CSS transitions for smooth animations
- Efficient theme detection with MutationObserver
- Proper cleanup of event listeners

## Examples

### With Custom Content

```jsx
<HoverCardContainer>
  <HoverCard
    image="/animals/seal.jpg"
    title="Seal"
    imageAlt="A seal swimming in the ocean"
  >
    <h3>About Seals</h3>
    <p>
      Pinnipeds, commonly known as seals, are fascinating marine mammals.
    </p>
    <ul>
      <li>Carnivorous diet</li>
      <li>Semiaquatic lifestyle</li>
      <li>Highly social animals</li>
    </ul>
  </HoverCard>
</HoverCardContainer>
```

## Tips

1. **Image Quality**: Use high-quality images (at least 800x600px) for best results
2. **Content Length**: Keep descriptions concise but informative
3. **Alt Text**: Always provide meaningful alt text for accessibility
4. **Container Required**: Always wrap HoverCards in HoverCardContainer
5. **Loading**: Consider using lazy loading for images if you have many cards

## Pattern Consistency

HoverCard follows the same pattern as other card components (FancyCard, DogearCard, etc.):
- Inline styles only (no separate CSS files)
- Container component for layout
- Comprehensive theme detection
- Dark/light mode support
- Responsive design built-in
