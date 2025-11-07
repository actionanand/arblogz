# DogearCard Component

A unique text-only card component with distinctive folded corner (dogear) effects on the top-right and bottom-left corners, reminiscent of a bookmarked page.

## Features

- **Text-Only Design** - Clean, focused content presentation without images
- **Dogear Corners** - Distinctive folded corner effects (top-right and bottom-left)
- **Shadow Effects** - Realistic drop shadows on dogear corners
- **Customizable Colors** - 8 predefined color schemes + custom color support
- **Background Matching** - Dogears adapt to your page background
- **Dark Mode Support** - Automatic theme switching with adjusted colors
- **Responsive Grid Layout** - Side-by-side cards that adapt to screen size
- **Typography** - Marvel font family with elegant styling

## Usage

### Basic Usage

```jsx
import { DogearCard, DogearCardContainer } from '@/react/Cards';

<DogearCardContainer>
  <DogearCard title="Important Note" bgColor="#ffd700">
    <p>Your content goes here. This card is perfect for highlighting key information, notes, or text-heavy content.</p>
  </DogearCard>
  
  <DogearCard title="Another Card" bgColor="#ffd700">
    <p>Add multiple cards to create a grid layout. Each card will have the distinctive dogear corners.</p>
  </DogearCard>
</DogearCardContainer>
```

**Important:** Set `bgColor` to match your page/container background for the dogear effect to work properly!

### With Predefined Colors

```jsx
<DogearCardContainer>
  <DogearCard title="Teal Card" color="teal" bgColor="white">
    <p>Default teal color scheme.</p>
  </DogearCard>
  
  <DogearCard title="Gray Card" color="gray" bgColor="white">
    <p>Neutral gray for general content.</p>
  </DogearCard>
  
  <DogearCard title="Blue Card" color="blue" bgColor="white">
    <p>Beautiful blue color scheme.</p>
  </DogearCard>
  
  <DogearCard title="Purple Card" color="purple" bgColor="white">
    <p>Elegant purple color scheme.</p>
  </DogearCard>
</DogearCardContainer>
```

### With Custom Color

```jsx
<DogearCard title="Custom Color" customColor="#ff6b6b" bgColor="#f0f0f0">
  <p>Use any custom color you want!</p>
</DogearCard>
```

## Props

### DogearCard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | required | The title text displayed at the top of the card |
| `children` | ReactNode | required | The content of the card |
| `color` | string | `'teal'` | Predefined color scheme (see available colors below) |
| `customColor` | string | `undefined` | Custom hex color to override predefined schemes |
| `bgColor` | string | `'transparent'` | **Important:** Set to match your page/container background for the dogear effect to work properly |

### DogearCardContainer

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | ReactNode | Yes | - | DogearCard components |

## Predefined Color Schemes

| Color Name | Light Mode | Dark Mode |
|------------|------------|-----------|
| `teal` | #008080 | #2d5f5d |
| `blue` | #3498db | #2c5f7f |
| `purple` | #9b59b6 | #6c4a7f |
| `orange` | #e67e22 | #a85f1a |
| `green` | #27ae60 | #1e7e4a |
| `red` | #e74c3c | #a83830 |
| `pink` | #e91e63 | #a81650 |
| `gray` | #95a5a6 | #5a6266 |

## Single Card Example

You can also use a single card without the container:

```jsx
<DogearCard title="Standalone Card">
  <p>This card works great on its own for highlighting a single piece of information.</p>
</DogearCard>
```

## Multiple Cards in Grid

```jsx
<DogearCardContainer>
  <DogearCard title="Feature One" color="teal">
    <p>Describe your first feature or important information here.</p>
  </DogearCard>
  
  <DogearCard title="Feature Two" color="blue">
    <p>Add another card to create a two-column layout automatically.</p>
  </DogearCard>
  
  <DogearCard title="Feature Three" color="purple">
    <p>Continue adding cards - they'll wrap into rows as needed.</p>
  </DogearCard>
  
  <DogearCard title="Feature Four" color="orange">
    <p>Perfect for organizing multiple pieces of related content.</p>
  </DogearCard>
</DogearCardContainer>
```

## Color Examples

```jsx
<DogearCardContainer>
  {/* Predefined colors */}
  <DogearCard title="Teal" color="teal">
    <p>Default teal color.</p>
  </DogearCard>
  
  <DogearCard title="Blue" color="blue">
    <p>Blue color scheme.</p>
  </DogearCard>
  
  <DogearCard title="Purple" color="purple">
    <p>Purple color scheme.</p>
  </DogearCard>
  
  <DogearCard title="Orange" color="orange">
    <p>Orange color scheme.</p>
  </DogearCard>
  
  <DogearCard title="Green" color="green">
    <p>Green color scheme.</p>
  </DogearCard>
  
  <DogearCard title="Red" color="red">
    <p>Red color scheme.</p>
  </DogearCard>
  
  <DogearCard title="Pink" color="pink">
    <p>Pink color scheme.</p>
  </DogearCard>
  
  {/* Custom color */}
  <DogearCard title="Custom" customColor="#ff6b6b">
    <p>Any custom hex color!</p>
  </DogearCard>
</DogearCardContainer>
```

## Styling Details

### Color Schemes
Each predefined color has light and dark mode variants that automatically switch based on your theme.

### Layout
- **Container Max Width**: 45rem (720px)
- **Grid**: Auto-fit with minimum 250px columns
- **Gap**: 2rem between cards
- **Card Padding**: 4rem top, 1rem sides, 7rem bottom
- **Top-Right Dogear**: 20px × 20px triangle
- **Bottom-Left Dogear**: 40px × 40px triangle
- **Single Card**: Takes full width when alone
- **Multiple Cards**: Displayed side-by-side in responsive grid

### Background
- **No background color is applied** - Cards work with your existing page background
- **Transparent dogears** - Corners are transparent to show through your background

## Typography

- **Font Family**: Marvel (with Arial fallback)
- **Title**: Uppercase, 400 weight, 1px letter-spacing
- **Content**: 1.1rem font size, 140% line height

## Use Cases

Perfect for:
- **Feature Highlights** - Showcase key features or benefits
- **Information Cards** - Display important notes or tips
- **Quote Cards** - Highlight testimonials or quotes
- **Step-by-Step Guides** - Break down processes into cards
- **FAQ Sections** - Present questions and answers
- **Service Offerings** - List services or packages
- **Educational Content** - Organize learning materials

## Best Practices

1. **Keep Text Concise** - These cards work best with focused, brief content
2. **Use Descriptive Titles** - Make titles clear and informative
3. **Maintain Consistency** - Use similar content length across cards in a grid
4. **Limit Paragraphs** - 1-2 paragraphs per card for optimal readability
5. **Choose Appropriate Colors** - Pick colors that match your content theme
6. **Mix Colors** - Use different color schemes for visual variety
7. **Custom Colors** - Use `customColor` for brand-specific colors
8. **Test Both Themes** - Preview in light and dark modes
9. **Responsive Design** - Cards automatically adapt from side-by-side to stacked on mobile

## Example Implementation

```jsx
<DogearCardContainer>
  <DogearCard title="Easy to Use" color="teal">
    <p>Simple, text-only design that focuses on your content without distractions. Perfect for when you don't have images or want a clean, minimal look.</p>
  </DogearCard>
  
  <DogearCard title="Unique Design" color="blue">
    <p>The distinctive dogear corners make these cards stand out from typical card components. They add visual interest while maintaining readability.</p>
  </DogearCard>
  
  <DogearCard title="Fully Responsive" color="purple">
    <p>Cards automatically adjust to different screen sizes and adapt to your theme preferences. Dark mode support is built-in and automatic.</p>
  </DogearCard>
  
  <DogearCard title="Flexible Colors" color="orange">
    <p>Choose from 7 predefined color schemes or use any custom color. Mix and match colors to create visually appealing layouts.</p>
  </DogearCard>
  
  <DogearCard title="Custom Brand" customColor="#2ecc71">
    <p>Use your exact brand colors with the customColor prop for perfect brand consistency across your site.</p>
  </DogearCard>
  
  <DogearCard title="Side by Side" color="pink">
    <p>Cards display side-by-side in a responsive grid that automatically adjusts based on screen size and content.</p>
  </DogearCard>
</DogearCardContainer>
```

## Font Loading

The component uses the Marvel font family. To ensure it loads properly, add this to your HTML head or import it in your CSS:

```html
<link href="https://fonts.googleapis.com/css?family=Marvel:400,700" rel="stylesheet">
```

Or in your CSS:

```css
@import url('https://fonts.googleapis.com/css?family=Marvel:400,700');
```
