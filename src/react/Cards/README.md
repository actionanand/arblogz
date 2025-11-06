# Notebook Card Component - Usage Example

This document shows how to use the Notebook Card components in your MDX files.

## Import the Components

```jsx
import { NotebookCard, NotebookCardContainer } from '@/react/Cards';
```

## Basic Usage

<NotebookCardContainer>
  <NotebookCard 
    image="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" 
    title="Farmstand Salad • $9"
    imageAlt="Mixed vegetable salad in a mason jar"
  >
    <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer's market.</p>
    <p>Served with your choice of dressing on the side: housemade ranch, cherry balsamic vinaigrette, creamy chipotle, avocado green goddess, or honey mustard. Add your choice of protein for $2 more.</p>
  </NotebookCard>

  <NotebookCard 
    image="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" 
    title="Ultimate Reuben • $18"
    imageAlt="A Reuben sandwich on wax paper"
  >
    <p>All great meals take time, but this one takes it to the next level! More than 650 hours of fermenting, brining, aging, and curing goes into each and every one of our legendary Reuben sandwiches.</p>
    <p>Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipe to the cave-aged Swiss cheese, right down to the pickle.</p>
    <p>This unforgettable sandwich has all of the classic Reuben elements: corned beef, rye bread, creamy Russian dressing, sauerkraut, plus a sweet gherkin pickle. No substitutions please!</p>
    <p>Add a side of french fries or sweet potato fries for $2 more, or our housemade pub chips for $1.</p>
  </NotebookCard>

  <NotebookCard 
    image="https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg" 
    title="Fig & Berry Plate • $16"
    imageAlt="A side view of a plate of figs and berries"
  >
    <p><strong>Seasonal.</strong></p>
    <p>A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in this refreshing, shareable dessert.</p>
    <p>Choose your drizzle: cherry-balsamic vinegar, local honey, or housemade chocolate sauce.</p>
  </NotebookCard>
</NotebookCardContainer>

## Component Props

### NotebookCardContainer
Wrapper component that creates the grid layout for cards.

- **children**: NotebookCard components

### NotebookCard
Individual card component with notebook styling.

- **image** (required): URL of the image to display
- **title** (required): Card title/heading
- **imageAlt** (optional): Alt text for the image (defaults to title)
- **children**: Card content (can include paragraphs, text, HTML)

## Features

- ✅ Responsive grid layout (auto-fit columns)
- ✅ Notebook-style design with lined paper effect
- ✅ Automatic dark mode support with theme detection
- ✅ Inline styles (no separate CSS files)
- ✅ Automatic binding holes and tape effects
- ✅ Drop shadow for depth
- ✅ Mobile responsive
- ✅ Real-time theme switching

## Implementation Details

- Uses inline styles following the project's React component patterns
- Includes comprehensive theme detection (localStorage, data-theme attribute, class-based)
- Automatically adapts colors for light/dark mode
- No external CSS dependencies

## Tips

1. Wrap multiple `NotebookCard` components in a single `NotebookCardContainer`
2. Use proper alt text for accessibility
3. Cards automatically adjust to screen size
4. Content can include any valid JSX/HTML
5. Theme changes are detected in real-time without page refresh
