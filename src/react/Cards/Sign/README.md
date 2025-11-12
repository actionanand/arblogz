# Sign Cards

Sign Cards are React components that display text with a distinctive 3D cutout effect, perfect for warnings, announcements, notes, and custom messages in your blog posts. Features a bold design with an enclosed text box that creates visual emphasis.

## Features

- 🎨 **3D Perspective Effect** - Cards appear with realistic 3D rotation
- ✂️ **Split Text Design** - First part enclosed in contrasting box
- 🎭 **8 Predefined Types** - Warning, Continued, Note, Alert, Info, Important, Tip, Update
- 🎨 **Custom Mode** - Create your own with custom text and colors
- ✨ **Hover Animation** - Cards straighten on hover for clear readability
- 🖼️ **Border Frame** - Black border adds depth and definition
- 📱 **Responsive** - Works on all screen sizes
- 🌈 **Color Variety** - Each predefined type has its own color scheme

## Installation

These components are already part of your project. Import them from:

```jsx
import { SignCard, SignCardContainer } from '@/react/Cards';
```

## Predefined Sign Types

### 1. Warning
- Colors: Red background with white text
- Use for: Warnings, cautions, important alerts

### 2. To Be Continued
- Colors: Turquoise background with black text
- Use for: Series continuations, coming soon messages

### 3. Note
- Colors: Mint green background with black text
- Use for: Side notes, additional information

### 4. Alert
- Colors: Orange background with black text
- Use for: Alerts, attention-grabbing messages

### 5. Info
- Colors: Purple background with white text
- Use for: Information boxes, helpful tips

### 6. Important
- Colors: Pink background with black text
- Use for: Important notices, key points

### 7. Tip
- Colors: Light turquoise with black text
- Use for: Pro tips, helpful suggestions

### 8. Update
- Colors: Light blue background with black text
- Use for: Updates, new information

## Usage

### Predefined Sign Types

```jsx
// Warning sign
<SignCard type="warning" />

// To Be Continued
<SignCard type="continued" />

// Note
<SignCard type="note" />

// Alert
<SignCard type="alert" />

// Info
<SignCard type="info" />

// Important
<SignCard type="important" />

// Tip
<SignCard type="tip" />

// Update
<SignCard type="update" />
```

### Custom Sign with Split Text

```jsx
// Custom sign with default yellow color
<SignCard 
  type="custom"
  firstWord="Cut"
  secondWord="out"
/>

// Custom sign with custom colors
<SignCard 
  type="custom"
  firstWord="New"
  secondWord="Feature"
  bgColor="#3498db"
  textColor="#fff"
  enclosedBg="#fff"
  enclosedColor="#3498db"
/>
```

### Multiple Signs in Container

```jsx
<SignCardContainer>
  <SignCard type="warning" />
  <SignCard type="note" />
  <SignCard type="tip" />
</SignCardContainer>
```

## Props

### SignCard

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `type` | string | No | `'custom'` | Predefined type: `'warning'`, `'continued'`, `'note'`, `'alert'`, `'info'`, `'important'`, `'tip'`, `'update'`, `'custom'` |
| `firstWord` | string | Custom only | `''` | First word (enclosed in box) - required when `type='custom'` |
| `secondWord` | string | Custom only | `''` | Second word (normal style) - required when `type='custom'` |
| `bgColor` | string | No | `'#f9c61a'` | Background color (custom mode) |
| `textColor` | string | No | `'#000'` | Main text color (custom mode) |
| `enclosedBg` | string | No | `'#000'` | Enclosed box background color (custom mode) |
| `enclosedColor` | string | No | Matches `bgColor` | Enclosed box text color (custom mode) |

### SignCardContainer

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | ReactNode | Yes | - | SignCard components to display vertically |

## Examples

### Blog Section Break

```jsx
<SignCard type="continued" />
```

### Warning Box

```jsx
<SignCard type="warning" />
```

### Multiple Announcements

```jsx
<SignCardContainer>
  <SignCard type="important" />
  <SignCard type="update" />
  <SignCard type="info" />
</SignCardContainer>
```

### Custom Brand Sign

```jsx
<SignCard 
  type="custom"
  firstWord="Brand"
  secondWord="New"
  bgColor="#e74c3c"
  textColor="#fff"
  enclosedBg="#fff"
  enclosedColor="#e74c3c"
/>
```

### Tutorial Tips

```jsx
<SignCard type="tip" />
```

## Styling Details

### 3D Transform

**Default State:**
- Card: `translateX(10px) rotateY(25deg) rotateX(10deg)`
- Border: `translateX(-60px) rotateY(-30deg) rotateX(15deg) scale(1.03)`

**Hover State:**
- Both card and border reset to `transform: none`
- Smooth transition: `0.3s cubic-bezier(.25,.46,.45,1)`

### Enclosed Text Effect

The first word is styled with:
- Transform: `translate(-1px, 1px) scale(0.75)`
- Transform origin: `right center`
- Creates distinctive cutout appearance

### Card Dimensions

- Height: 200px
- Width: 400px
- Border width: 9px

## Color Schemes

| Type | Background | Text | Enclosed BG | Enclosed Text |
|------|-----------|------|-------------|---------------|
| Warning | `#ff6b6b` (Red) | White | White | Red |
| Continued | `#4ecdc4` (Turquoise) | Black | Black | Turquoise |
| Note | `#95e1d3` (Mint) | Black | Black | Mint |
| Alert | `#ff9a3c` (Orange) | Black | Black | Orange |
| Info | `#6c5ce7` (Purple) | White | White | Purple |
| Important | `#fd79a8` (Pink) | Black | Black | Pink |
| Tip | `#55efc4` (Lt. Turquoise) | Black | Black | Lt. Turquoise |
| Update | `#74b9ff` (Lt. Blue) | Black | Black | Lt. Blue |
| Custom | `#f9c61a` (Yellow) | Black | Black | Yellow |

## Use Cases

### Content Breaks
- **Series Posts** - "To be continued" between episodes
- **Section Dividers** - Separate major content sections
- **Coming Soon** - Tease upcoming content

### Announcements
- **Updates** - Site or content updates
- **Important News** - Breaking announcements
- **New Features** - Feature releases

### Alerts & Warnings
- **Warnings** - Caution users about something
- **Alerts** - Time-sensitive information
- **Deprecated** - Mark outdated content

### Educational Content
- **Tips** - Pro tips and best practices
- **Notes** - Side notes and clarifications
- **Info Boxes** - Additional information

### Custom Messages
- **Branding** - Custom brand messages
- **Events** - Event announcements
- **Promotions** - Special offers

## Tips

1. **Word Split** - For custom signs, split words meaningfully (e.g., "Cut|out", "War|ning", "Up|date")
2. **Contrast** - Ensure good contrast between background and text colors
3. **Spacing** - Use SignCardContainer for multiple signs with proper spacing
4. **Hover** - The hover effect makes text easier to read in the straightened view
5. **Context** - Choose predefined types that match your message intent
6. **Custom Colors** - For custom signs, use your brand colors
7. **Single Use** - Sign cards work best as standalone elements, not in grids
8. **Mobile** - Cards maintain their 400px width, ensure container handles overflow
9. **Readability** - Keep text short (1-3 words total) for best effect
10. **Dark Mode** - Test custom colors in both light and dark themes

## Accessibility

- Cards use semantic `<h1>` tags for the text
- Ensure sufficient color contrast for readability
- The hover effect improves readability by removing perspective
- Text is always readable even without 3D support

## Browser Support

Works in all modern browsers that support:
- CSS 3D Transforms
- CSS Transitions
- Flexbox
- React Hooks

## Related Components

- **DogearCard** - For bookmarked notes with corner fold
- **BookCard** - For flip card announcements
- **SimpleCard** - For full article cards

---

**Design Philosophy:** Sign Cards command attention with their bold 3D design and split text effect, making them perfect for important announcements, warnings, and content breaks that need to stand out visually.
