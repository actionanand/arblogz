# BookCard Component

A flip card component with gradient background and expandable inside page, inspired by book/card flipping animations.

## Features

- **Flip Animation**: Card flips to reveal gradient background on hover
- **Expandable**: Card expands horizontally to show inside page content
- **Remix Icons**: Uses Remix Icon library for consistent iconography
- **4 Color Themes**: City (pink), Ski (cyan), Beach (coral), Camping (green)
- **Dark Mode**: Automatically adapts to theme

## Usage

### Import

```jsx
import { BookCard, BookCardContainer } from '@/react/Cards';
```

> **Important**: Make sure Remix Icon CSS is loaded in your project.

### Basic Example

```jsx
<BookCardContainer>
  <BookCard
    client:load
    icon="ri-map-pin-line"
    title="City break"
    subtitle="Urban adventure"
    heading="For urban lovers"
    color="city"
  >
    <p>As cities never sleep, there are always something going on!</p>
  </BookCard>
</BookCardContainer>
```

### Multiple Cards

```jsx
<BookCardContainer>
  <BookCard color="city" icon="ri-building-line" title="City break" ...>
    Content here
  </BookCard>
  <BookCard color="ski" icon="ri-snowflake-line" title="Ski trip" ...>
    Content here
  </BookCard>
  <BookCard color="beach" icon="ri-sun-line" title="Beach time" ...>
    Content here
  </BookCard>
</BookCardContainer>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `icon` | string | No | `'ri-book-open-line'` | Remix Icon class name (e.g., `ri-map-pin-line`) |
| `title` | string | Yes | - | Main card title |
| `subtitle` | string | No | - | Subtitle text below title |
| `heading` | string | Yes | - | Heading for inside page |
| `children` | ReactNode | Yes | - | Content for inside page |
| `color` | string | No | `'city'` | Color scheme: `city`, `ski`, `beach`, `camping` |
| `client:load` | directive | Yes | - | Required for React hydration |

## Color Themes

- **city**: Pink gradient (`#ff73b9` to `#ff40a1`)
- **ski**: Cyan gradient (`#47c2d7` to `#279eb2`)
- **beach**: Coral gradient (`#fb9b88` to `#f86647`)
- **camping**: Green gradient (`#00db93` to `#00b97d`)

## Remix Icons

Use any Remix Icon class. Popular choices:
- `ri-map-pin-line` - City/Location
- `ri-snowflake-line` - Winter/Ski
- `ri-sun-line` - Beach/Summer
- `ri-tent-line` - Camping/Outdoor
- `ri-plane-line` - Travel
- `ri-compass-line` - Adventure

Browse all icons at: [remixicon.com](https://remixicon.com/)

## Important Notes

- Requires `client:load` directive in Astro/MDX for interactivity
- Card expands from 15rem to 30rem on hover
- Requires Remix Icon CSS to be loaded in your project
- Works best with 2-4 cards in a row

## Design Credit

Design inspired by [Maza designDev's flip card concept](https://codepen.io/).
