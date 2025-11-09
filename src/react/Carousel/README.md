# Carousel Component

A React carousel component with image slides, navigation controls, and dot indicators.

## Features

- **Image Slides**: Display multiple images in a carousel
- **Navigation Controls**: Previous/Next arrows with hover effects
- **Dot Indicators**: Visual indicators showing current slide
- **Smooth Transitions**: Fade in/out animations between slides
- **Keyboard Navigation**: Support for keyboard controls (optional)
- **Responsive**: Adjustable height and margins
- **Dark Mode Compatible**: Works in both light and dark themes

## Usage

### Import

```jsx
import { Carousel } from '@/react/Carousel';
```

### Basic Example

```jsx
<Carousel 
  client:load
  images={[
    {
      src: 'https://example.com/image1.jpg',
      alt: 'Description 1'
    },
    {
      src: 'https://example.com/image2.jpg',
      alt: 'Description 2'
    },
    {
      src: 'https://example.com/image3.jpg',
      alt: 'Description 3'
    }
  ]}
/>
```

### With Custom Height

```jsx
<Carousel 
  client:load
  images={[
    { src: '/images/slide1.jpg', alt: 'Slide 1' },
    { src: '/images/slide2.jpg', alt: 'Slide 2' },
    { src: '/images/slide3.jpg', alt: 'Slide 3' }
  ]}
  height="400px"
/>
```

### In MDX

```mdx
import { Carousel } from '@/react/Carousel';

<Carousel 
  client:load
  images={[
    { src: '/images/photo1.jpg', alt: 'Photo 1' },
    { src: '/images/photo2.jpg', alt: 'Photo 2' }
  ]}
/>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `images` | Array | Yes | - | Array of image objects with `src` and `alt` properties |
| `height` | string | No | `'600px'` | Height of the carousel |
| `client:load` | directive | Yes | - | Required for React hydration in Astro/MDX |

### Image Object Structure

```typescript
{
  src: string;      // Image URL or path (required)
  alt: string;      // Alt text for accessibility (optional)
}
```

## Examples

### Gallery Carousel

```jsx
<Carousel 
  client:load
  images={[
    { src: '/gallery/img1.jpg', alt: 'Gallery Image 1' },
    { src: '/gallery/img2.jpg', alt: 'Gallery Image 2' },
    { src: '/gallery/img3.jpg', alt: 'Gallery Image 3' },
    { src: '/gallery/img4.jpg', alt: 'Gallery Image 4' }
  ]}
  height="500px"
/>
```

### Compact Carousel

```jsx
<Carousel 
  client:load
  images={[
    { src: '/thumbnails/thumb1.jpg', alt: 'Thumbnail 1' },
    { src: '/thumbnails/thumb2.jpg', alt: 'Thumbnail 2' }
  ]}
  height="300px"
/>
```

## Styling

The carousel uses inline styles by default and includes:
- 15% left and right margins for centering
- Smooth fade transitions (0.7s)
- Semi-transparent navigation controls
- White dot indicators with opacity changes

## Accessibility

- Includes proper `alt` text for images
- Clickable navigation controls
- Visual indicators for current slide
- Keyboard-friendly (click-based navigation)

## Browser Compatibility

Works in all modern browsers that support:
- CSS transitions
- Flexbox
- ES6+ JavaScript

## Important Notes

- Requires `client:load` directive in Astro/MDX for interactivity
- Images should be optimized for web (recommended max width: 1920px)
- Always provide descriptive `alt` text for accessibility
- Minimum 2 images recommended for carousel functionality
- Navigation controls appear on the active slide

## Design Credit

Carousel design inspired by pure CSS carousel patterns with React state management.
