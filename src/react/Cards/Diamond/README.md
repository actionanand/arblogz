# Diamond Cards

Diamond Cards are React components that display images with distinctive diagonal rounded corners (top-right and bottom-left), creating an elegant asymmetric look. Perfect for galleries, portfolios, and product showcases.

## Features

- 📐 **Diagonal Rounded Corners** - Top-right and bottom-left corners have 48px radius
- 📏 **Flexible Sizing** - Two display modes: fixed dimensions or natural image size
- 🎨 **Dark Mode Support** - Automatically adapts shadows to current theme
- ✨ **Hover Effects** - Smooth lift animation on hover with enhanced shadow
- 📱 **Responsive** - Works on all screen sizes
- 🖼️ **Image-Only** - Focused on showcasing images beautifully

## Installation

These components are already part of your project. Import them from:

```jsx
import { DiamondCard, DiamondCardContainer } from '@/react/Cards';
```

## Usage

### Single Diamond Card

```jsx
<DiamondCard 
  image="/images/product1.jpg"
  imageAlt="Premium Product"
/>
```

### Multiple Diamond Cards in Container

```jsx
<DiamondCardContainer>
  <DiamondCard 
    image="/images/photo1.jpg"
    imageAlt="Gallery Image 1"
  />
  <DiamondCard 
    image="/images/photo2.jpg"
    imageAlt="Gallery Image 2"
  />
  <DiamondCard 
    image="/images/photo3.jpg"
    imageAlt="Gallery Image 3"
  />
</DiamondCardContainer>
```

### Free Size Mode (Natural Image Dimensions)

```jsx
<DiamondCard 
  image="/images/large-photo.jpg"
  imageAlt="Full size image"
  isFreeSize={true}
/>
```

### Custom Fixed Size

```jsx
<DiamondCard 
  image="/images/product.jpg"
  imageAlt="Product showcase"
  width="400px"
  height="400px"
/>
```

### Responsive Sizing with Percentage

```jsx
<DiamondCard 
  image="/images/portfolio.jpg"
  imageAlt="Portfolio piece"
  size="30%"
/>
```

## Props

### DiamondCard

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | **Yes** | - | URL or path to the image to display |
| `imageAlt` | string | No | `'Diamond card image'` | Alt text for accessibility |
| `size` | string | No | `'auto'` | Card size as CSS value (%, px, rem, etc.). When `'auto'`, uses `width` and `height` props |
| `width` | string | No | `'300px'` | Width of card (used when `size='auto'`) |
| `height` | string | No | `'300px'` | Height of card (used when `size='auto'`) |
| `isFreeSize` | boolean | No | `false` | When `true`, image displays at natural dimensions. Ignores `size`, `width`, and `height` |

### DiamondCardContainer

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | ReactNode | Yes | - | DiamondCard components to display in grid |

## Examples

### Gallery Grid

```jsx
<DiamondCardContainer>
  <DiamondCard 
    image="/gallery/img1.jpg"
    imageAlt="Gallery item 1"
    width="250px"
    height="250px"
  />
  <DiamondCard 
    image="/gallery/img2.jpg"
    imageAlt="Gallery item 2"
    width="250px"
    height="250px"
  />
  <DiamondCard 
    image="/gallery/img3.jpg"
    imageAlt="Gallery item 3"
    width="250px"
    height="250px"
  />
  <DiamondCard 
    image="/gallery/img4.jpg"
    imageAlt="Gallery item 4"
    width="250px"
    height="250px"
  />
</DiamondCardContainer>
```

### Featured Image with Free Size

```jsx
<DiamondCard 
  image="/featured/hero-image.jpg"
  imageAlt="Featured content"
  isFreeSize={true}
/>
```

### Product Showcase with Square Dimensions

```jsx
<DiamondCardContainer>
  <DiamondCard 
    image="/products/product1.jpg"
    imageAlt="Product 1"
    width="350px"
    height="350px"
  />
  <DiamondCard 
    image="/products/product2.jpg"
    imageAlt="Product 2"
    width="350px"
    height="350px"
  />
</DiamondCardContainer>
```

## Styling Details

### Border Radius Pattern

The diagonal rounded corner pattern is achieved with:
- **Top-left**: 8px (subtle)
- **Top-right**: 48px (prominent)
- **Bottom-right**: 8px (subtle)
- **Bottom-left**: 48px (prominent)

This creates a distinctive diamond-like appearance that's modern and eye-catching.

### Shadow Effects

**Light Mode:**
- Default: `0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)`
- Hover: `0 8px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)`

**Dark Mode:**
- Default: `0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.08)`
- Hover: `0 8px 12px rgba(255, 255, 255, 0.15), 0 2px 4px rgba(255, 255, 255, 0.12)`

### Hover Animation

Cards lift up 4px on hover with a smooth transition (0.3s ease) and enhanced shadow.

## Sizing Modes

### 1. Fixed Mode (Default)

Use `width` and `height` props for controlled dimensions:

```jsx
<DiamondCard 
  image="/image.jpg"
  width="300px"
  height="300px"
/>
```

### 2. Free Size Mode

Use `isFreeSize={true}` for natural image dimensions:

```jsx
<DiamondCard 
  image="/image.jpg"
  isFreeSize={true}
/>
```

### 3. Percentage-Based Responsive

Use `size` prop with percentage:

```jsx
<DiamondCard 
  image="/image.jpg"
  size="25%"
/>
```

## Use Cases

- **Portfolio Galleries** - Showcase creative work with distinctive style
- **Product Photography** - E-commerce product displays
- **Photography Portfolios** - Professional photo presentations
- **Image Galleries** - Any collection of images
- **Featured Content** - Highlight special images or promotions
- **Travel Photos** - Destination and journey showcases
- **Art Displays** - Digital art and illustration galleries
- **Event Photos** - Conference, wedding, or event photography

## Accessibility

- Always provide meaningful `imageAlt` text
- Alt text should describe the image content
- Use descriptive alt text for SEO benefits

## Browser Support

Works in all modern browsers that support:
- CSS Flexbox
- CSS Transitions
- ES6 JavaScript
- React Hooks

## Tips

1. **Consistent sizing** - Use same width/height for uniform grids
2. **High-quality images** - Use at least 600x600px for best results
3. **Aspect ratios** - Square images (1:1) work best for uniform grids
4. **Free size for heroes** - Use `isFreeSize={true}` for large featured images
5. **Gap spacing** - Container has 20px gap; adjust via custom styles if needed
6. **Dark mode testing** - Always test in both light and dark themes
7. **Mobile responsive** - Container wraps automatically on smaller screens

## Related Components

- **CircleCard** - For circular image displays
- **HoverCard** - For images with text overlay on hover
- **SimpleCard** - For images with text content below

---

**Design Philosophy:** The diagonal rounded corners create visual interest without being overwhelming, making Diamond Cards perfect for modern, elegant image displays that stand out from traditional rectangular cards.
