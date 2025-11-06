# Simple Card Component

A clean and elegant card component with smooth hover animations and a professional article-style layout.

## Features

- **Clean Design**: Professional article-style layout with image and content
- **Smooth Animations**: Image zoom and icon slide effects on hover
- **Read More Link**: Built-in call-to-action with animated arrow icon
- **Responsive Grid**: Automatically adjusts to available space
- **Dark Mode Support**: Seamless theme switching
- **Accessibility**: Screen reader support and keyboard navigation
- **Customizable**: Adjustable read more URL and alt text

## Usage

```jsx
import { SimpleCard, SimpleCardContainer } from '@/react/Cards';

<SimpleCardContainer>
  <SimpleCard 
    image="https://picsum.photos/id/1011/800/450"
    title="Your Card Title"
    readMoreUrl="/your-link"
    imageAlt="Description of image"
  >
    <p>Your card content goes here. You can add multiple paragraphs or any content.</p>
  </SimpleCard>
</SimpleCardContainer>
```

## Props

### SimpleCard

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | URL of the card image |
| `title` | string | Yes | - | Card title text |
| `children` | ReactNode | Yes | - | Card content (description) |
| `readMoreUrl` | string | No | `'#'` | URL for the "Read more" link |
| `imageAlt` | string | No | `title` | Alt text for the image |

### SimpleCardContainer

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | ReactNode | Yes | - | SimpleCard components |

## Styling Details

- **Image Aspect Ratio**: 16:9
- **Border Radius**: 16px rounded corners
- **Hover Effects**: 
  - Image scales to 1.1x
  - Title changes color
  - Arrow icon slides in from left
  - Box shadow appears
- **Grid Layout**: Auto-fill with minimum 320px card width
- **Typography**: Bebas Neue font for titles (with fallback)

## Best Practices

1. Use high-quality images with 16:9 aspect ratio for best results
2. Keep titles concise (2-6 words)
3. Provide descriptive alt text for accessibility
4. Use actual URLs for read more links (not '#')
5. Keep content descriptions brief and focused

## Example

```jsx
<SimpleCardContainer>
  <SimpleCard 
    image="https://picsum.photos/id/1011/800/450"
    title="Mountain Adventure"
    readMoreUrl="/blog/mountain-adventure"
    imageAlt="Scenic mountain landscape"
  >
    <p>Explore the breathtaking views and challenging trails of the Rocky Mountains. 
    Perfect for both beginners and experienced hikers.</p>
  </SimpleCard>
  
  <SimpleCard 
    image="https://picsum.photos/id/1005/800/450"
    title="Ocean Retreat"
    readMoreUrl="/blog/ocean-retreat"
  >
    <p>Discover tranquil beaches and crystal-clear waters. An ideal destination 
    for relaxation and water sports enthusiasts.</p>
  </SimpleCard>
</SimpleCardContainer>
```
