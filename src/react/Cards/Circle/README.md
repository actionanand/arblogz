# CircleCard Component

A circular card component for displaying images or text in perfect circles, ideal for profile pictures, avatars, icons, or circular galleries.

## Features

- **Circular Images**: Images are automatically cropped to perfect circles
- **Text Mode**: Display text in circular containers when no image is provided
- **Responsive**: Uses percentage-based sizing that adapts to container
- **Customizable Size**: Adjust circle size with the `size` prop
- **Custom Colors**: Change background color for text-only circles
- **Dark Mode**: Automatically adapts to theme
- **Flexbox Layout**: Works perfectly in responsive grid layouts
- **Object Fit**: Images cover the entire circle without distortion

## Usage

### Import

```jsx
import { CircleCard, CircleCardContainer } from '@/react/Cards';
```

### Basic Image Example

```jsx
<CircleCardContainer>
  <CircleCard image="https://example.com/photo1.jpg" imageAlt="Profile picture" />
  <CircleCard image="https://example.com/photo2.jpg" imageAlt="Team member" />
  <CircleCard image="https://example.com/photo3.jpg" imageAlt="Product image" />
</CircleCardContainer>
```

### Text-Only Circles

```jsx
<CircleCardContainer>
  <CircleCard title="React" bgColor="#61dafb" />
  <CircleCard title="Vue" bgColor="#42b883" />
  <CircleCard title="Angular" bgColor="#dd0031" />
  <CircleCard title="Svelte" bgColor="#ff3e00" />
</CircleCardContainer>
```

### Mixed Content

```jsx
<CircleCardContainer>
  <CircleCard image="/team/john.jpg" imageAlt="John Doe" />
  <CircleCard image="/team/jane.jpg" imageAlt="Jane Smith" />
  <CircleCard title="Join Us!" bgColor="#ff0082" />
</CircleCardContainer>
```

### Custom Sizes

```jsx
<CircleCardContainer>
  <CircleCard image="/avatar.jpg" size="20%" />
  <CircleCard image="/avatar2.jpg" size="25%" />
  <CircleCard image="/avatar3.jpg" size="15%" />
</CircleCardContainer>
```

## Props

### CircleCard

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | No | - | URL or path to the image |
| `imageAlt` | string | No | `title` or 'Circle image' | Alt text for accessibility |
| `title` | string | No | - | Text to display (used when no image provided) |
| `size` | string | No | `'15%'` | Size of the circle (CSS percentage or px) |
| `bgColor` | string | No | `'#ff0082'` | Background color for text-only circles |

### CircleCardContainer

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | ReactNode | Yes | - | CircleCard components to display |

## Examples

### Profile Gallery

```jsx
<CircleCardContainer>
  <CircleCard 
    image="/profiles/user1.jpg" 
    imageAlt="Alice Johnson"
    size="18%"
  />
  <CircleCard 
    image="/profiles/user2.jpg" 
    imageAlt="Bob Smith"
    size="18%"
  />
  <CircleCard 
    image="/profiles/user3.jpg" 
    imageAlt="Carol Williams"
    size="18%"
  />
  <CircleCard 
    image="/profiles/user4.jpg" 
    imageAlt="David Brown"
    size="18%"
  />
  <CircleCard 
    image="/profiles/user5.jpg" 
    imageAlt="Eve Davis"
    size="18%"
  />
</CircleCardContainer>
```

### Tech Stack Icons

```jsx
<CircleCardContainer>
  <CircleCard title="HTML" bgColor="#e34c26" size="15%" />
  <CircleCard title="CSS" bgColor="#264de4" size="15%" />
  <CircleCard title="JS" bgColor="#f0db4f" size="15%" />
  <CircleCard title="React" bgColor="#61dafb" size="15%" />
  <CircleCard title="Node" bgColor="#68a063" size="15%" />
  <CircleCard title="Git" bgColor="#f34f29" size="15%" />
</CircleCardContainer>
```

### Product Showcase

```jsx
<CircleCardContainer>
  <CircleCard 
    image="/products/product1.jpg" 
    imageAlt="Product 1"
    size="20%"
  />
  <CircleCard 
    image="/products/product2.jpg" 
    imageAlt="Product 2"
    size="20%"
  />
  <CircleCard 
    image="/products/product3.jpg" 
    imageAlt="Product 3"
    size="20%"
  />
  <CircleCard 
    image="/products/product4.jpg" 
    imageAlt="Product 4"
    size="20%"
  />
</CircleCardContainer>
```

## Styling

The component uses inline styles with:
- **Flexbox layout**: For responsive grid arrangement
- **Position absolute**: For image positioning within circle
- **Object-fit cover**: Images fill circle without distortion
- **Border-radius 50%**: Creates perfect circles
- **Overflow hidden**: Clips images to circular shape
- **Percentage sizing**: Responsive sizing based on container
- **Gap spacing**: 20px gap between circles

## Accessibility

- ✅ Alt text support for images
- ✅ Semantic HTML structure
- ✅ Text alternatives for non-image content
- ✅ Proper contrast for text circles

## Best Practices

1. **Square images**: Use square (1:1 aspect ratio) images for best results
2. **Face centering**: For profile pictures, ensure faces are centered
3. **Consistent sizing**: Use same size for all circles in a container
4. **Alt text**: Always provide descriptive alt text for images
5. **Color contrast**: Ensure text is readable on background colors
6. **Image optimization**: Compress images (300x300px recommended)
7. **Minimum size**: Keep circles at least 100px for visibility
8. **Maximum items**: 6-8 circles per row for desktop, fewer for mobile
9. **Background colors**: Use brand colors for text-only circles
10. **Loading states**: Consider placeholder while images load

## Browser Compatibility

Works in all modern browsers supporting:
- CSS Flexbox
- Border-radius
- Object-fit
- ES6+ JavaScript

## Important Notes

- Images are cropped using `object-fit: cover` to fill circles
- Minimum width of 100px ensures visibility on all devices
- Size prop accepts CSS units (%, px, rem, etc.)
- Text circles require `title` prop and optional `bgColor`
- Container uses flexbox with `space-between` and wrapping
- Works best with 4-6 circles per row on desktop

## Design Credit

CircleCard design inspired by responsive circular image galleries with flexbox layout.
