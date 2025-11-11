# Fancy Card Component - Usage Example

## Import the Components

```jsx
import { FancyCard, FancyCardContainer } from '@/react/Cards';
```

## Basic Usage

```jsx
<FancyCardContainer>
  <FancyCard 
    image="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" 
    title="Farmstand Salad • $9"
    imageAlt="Mixed vegetable salad in a mason jar"
  >
    <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer's market.</p>
    <p>Served with your choice of dressing on the side: <strong>housemade ranch, cherry balsamic vinaigrette, creamy chipotle, avocado green goddess, or honey mustard.</strong></p>
    <p className="upcharge">Add your choice of protein for $2 more.</p>
  </FancyCard>

  <FancyCard 
    image="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" 
    title="Ultimate Reuben • $18"
    imageAlt="A Reuben sandwich on wax paper"
  >
    <p>All great meals take time, but this one takes it to the next level! More than 650 hours of fermenting, brining, aging, and curing goes into each and every one of our legendary Reuben sandwiches.</p>
    <p>Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipe to the cave-aged Swiss cheese, right down to the pickle.</p>
    <p>This unforgettable sandwich has all of the classic Reuben elements: <strong>corned beef, rye bread, creamy Russian dressing, sauerkraut, plus a sweet gherkin pickle.</strong> <em>No substitutions please!</em></p>
    <p className="upcharge">Add a side of french fries or sweet potato fries for $2 more, or our housemade pub chips for $1.</p>
  </FancyCard>

  <FancyCard 
    image="https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg" 
    title="Fig & Berry Plate • $16"
    imageAlt="A side view of a plate of figs and berries"
  >
    <span className="note">Seasonal.</span>
    <p>A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in this refreshing, shareable dessert.</p>
    <p>Choose your drizzle: <strong>cherry-balsamic vinegar, local honey, or housemade chocolate sauce.</strong></p>
  </FancyCard>
</FancyCardContainer>
```

## Component Props

### FancyCardContainer
Wrapper component that creates the grid layout.

- **children**: FancyCard components

### FancyCard
Individual card with fancy styling and animations.

- **image** (required): URL of the image
- **title** (required): Card title
- **imageAlt** (optional): Alt text for image
- **children**: Card content (paragraphs, HTML)

## Special Classes

### `.upcharge`
Highlight additional cost information with special styling:

```jsx
<p className="upcharge">Add your choice of protein for $2 more.</p>
```

### `.note`
Display important seasonal or special notes:

```jsx
<span className="note">Seasonal.</span>
```

## Features

- ✅ Animated title on hover/focus (flies in from right)
- ✅ Card scale effect on hover
- ✅ Gorgeous color scheme with purple, aqua, and violet
- ✅ Automatic dark mode support
- ✅ Custom scrollbar for overflow content
- ✅ Drop cap on first paragraph
- ✅ Special styling for `<strong>` tags (aqua color)
- ✅ Responsive grid layout
- ✅ Keyboard accessible (tab navigation)
- ✅ Rounded corners with unique border-radius
- ✅ Box shadow effects

## Styling Details

- **First Letter**: Larger drop cap on first paragraph
- **Strong Text**: Highlighted in aqua color
- **Upcharge Elements**: Purple background with "+" decorations
- **Note Elements**: Diagonal striped background
- **Scrollable Content**: Custom styled scrollbar (max-height: 20rem)

## Tips

1. Use `className="upcharge"` for pricing add-ons
2. Use `className="note"` for seasonal/special information
3. Use `<strong>` tags to highlight important text in aqua
4. First paragraph automatically gets a drop cap
5. Content is scrollable if it exceeds 20rem height
6. Title animates beautifully on hover/focus
