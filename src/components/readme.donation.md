# Donation System Components Documentation

This document explains how the donation system components work internally and how to use them.

## Components Overview

### 1. `Donate.astro` - Main Donation Component

The primary donation component that displays a complete donation section with multiple payment methods.

#### Props Interface
```typescript
interface Props {
  showDonate?: boolean;           // Whether to show the donation section
  donateMessage?: string;         // Custom message for this instance
  customDonateConfig?: {          // Override global configuration
    enable: boolean;
    tip: string;
    // ... payment method configurations
  };
}
```

#### Internal Logic Flow

1. **Configuration Resolution**:
   ```astro
   const donateConfig = customDonateConfig || donate; // Fallback to global
   const shouldShow = showDonate && donateConfig.enable; // Master enable check
   const tipMessage = donateMessage || donateConfig.tip; // Message priority
   ```

2. **Conditional Rendering**:
   - Only renders if `shouldShow` is true
   - Each payment method checks if its configuration exists
   - QR-based methods create interactive popups
   - Direct payment methods create external links

3. **Payment Method Types**:
   - **QR Code Methods**: Google Pay, Paytm, PhonePe, Alipay, WeChat Pay
     - Hover/touch to show QR popup
     - Mobile-optimized interactions
   - **Direct Link Methods**: PayPal, GitHub Sponsors, Buy Me a Coffee, Ko-fi, Patreon, Open Collective
     - Direct external links
     - Platform-specific styling

#### CSS Architecture

```css
.donation-container          /* Main container with gradient background */
├── .donation-header         /* Title and message section */
├── .donation-methods        /* Payment methods grid */
│   ├── .donation-method     /* Individual payment button */
│   │   ├── .method-icon     /* Payment method icon */
│   │   ├── .method-label    /* Payment method name */
│   │   └── .qr-popup        /* QR code popup (for QR methods) */
│   │       └── .qr-content  /* QR image and text */
└── .donation-footer         /* Thank you message */
```

#### QR Code Popup System

**Desktop Interaction**:
- Hover to show popup
- Automatic hide on mouse leave

**Mobile Interaction**:
- Touch to show popup
- Auto-hide after 3 seconds
- Touch again to reset timer

**Popup Positioning**:
- Centered above the payment button
- Responsive sizing (160px desktop, 130px mobile)
- Backdrop blur and shadow effects

### 2. `DonateButton.astro` - Quick Donation Button

A lightweight donation button for inline use.

#### Props Interface
```typescript
interface Props {
  message?: string;                                    // Button message
  showMethods?: ('paypal' | 'github' | 'coffee')[];   // Which methods to show
  size?: 'small' | 'medium' | 'large';                // Button size
  style?: 'button' | 'card' | 'minimal';              // Visual style
}
```

#### Usage Examples
```astro
<!-- Basic usage -->
<DonateButton />

<!-- Custom configuration -->
<DonateButton 
  message="Support this tutorial!"
  showMethods={['paypal', 'github']}
  size="large"
  style="card"
/>
```

## Integration with Blog System

### BlogPost Layout Integration

The donation system is integrated into `BlogPost.astro` with smart logic:

```astro
// Priority logic
const shouldShowDonate = donate.enable && (
  frontmatter.showDonate !== undefined 
    ? frontmatter.showDonate          // Manual control (highest priority)
    : donate.enableForAllBlogs        // Global default
);

// Conditional rendering
{shouldShowDonate && (
  <Donate 
    showDonate={true}
    donateMessage={frontmatter.donateMessage}
    customDonateConfig={frontmatter.customDonate}
  />
)}
```

### Content Collection Schema

Donation fields are validated through Astro's content collection:

```typescript
const blog = defineCollection({
  schema: z.object({
    // ... other fields
    showDonate: z.boolean().optional(),      // Manual control
    donateMessage: z.string().optional(),    // Custom message
    customDonate: z.object({                 // Custom configuration
      enable: z.boolean().optional(),
      tip: z.string().optional(),
      paypalUrl: z.string().optional(),
      // ... all payment methods
    }).optional(),
  }),
});
```

## Configuration System

### Global Configuration (`src/consts.ts`)

```typescript
export const donate = {
  enable: true,                    // Master switch
  enableForAllBlogs: false,        // Default for blog posts
  tip: "Thanks for the coffee!",   // Default message
  
  // QR Code paths (relative to /public/)
  gpayQRCode: "/images/donation/gpay-qr.png",
  wechatQRCode: "/images/donation/wechat-qr.png",
  // ... other QR codes
  
  // Direct payment URLs/usernames
  paypalUrl: "https://paypal.me/username",
  githubSponsors: "username",
  // ... other payment methods
};
```

### Page-Level Configuration

```yaml
---
title: "My Post"
showDonate: true                   # Manual override
donateMessage: "Custom message"    # Page-specific message
customDonate:                      # Page-specific config
  enable: true
  tip: "Page-specific tip"
  paypalUrl: "different-paypal-url"
  gpayQRCode: "/custom-qr.png"
---
```

## Control Flow Logic

### Decision Tree

```
Is global donate.enable true?
├── No → Never show donations
└── Yes → Check page-level control
    ├── showDonate: true → Always show
    ├── showDonate: false → Never show
    └── showDonate: undefined → Check global default
        ├── enableForAllBlogs: true → Show
        └── enableForAllBlogs: false → Hide
```

### Priority Order

1. **Master Switch**: `donate.enable` must be `true`
2. **Manual Override**: `showDonate` in frontmatter (if set)
3. **Global Default**: `donate.enableForAllBlogs` (if no manual setting)

## Styling System

### Theme Integration

The donation components fully support the site's theme system:

```css
/* Light theme (default) */
.donation-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Dark theme */
html[data-theme="dark"] .donation-container {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}
```

### Platform-Specific Colors

Each payment method has its own brand colors:

```css
.donation-method.paypal:hover    { background: rgba(0, 48, 135, 0.8); }
.donation-method.gpay:hover      { background: rgba(52, 168, 83, 0.8); }
.donation-method.github:hover    { background: rgba(36, 41, 46, 0.8); }
/* ... more platforms */
```

### Responsive Design

```css
/* Desktop */
.qr-content img { width: 160px; height: 160px; }
.qr-popup { min-width: 200px; }

/* Mobile */
@media (max-width: 640px) {
  .qr-content img { width: 130px; height: 130px; }
  .qr-popup { min-width: 170px; }
}
```

## Performance Considerations

### Lazy Loading
- QR popups only load when hovered/touched
- Images are optimized for web display
- CSS animations use hardware acceleration

### Bundle Size
- Icons use existing Remix Icon library
- Minimal JavaScript for interactions
- CSS is scoped to components

### SEO Impact
- Donation sections don't affect content indexing
- External links have proper `rel` attributes
- Accessible for screen readers

## Debugging Tips

### Common Issues

1. **Donations not showing**:
   - Check `donate.enable` is `true`
   - Verify frontmatter syntax
   - Ensure schema validation passes

2. **QR codes not appearing**:
   - Verify image paths are correct
   - Check file exists in `/public/images/donation/`
   - Ensure QR field is configured

3. **Styling issues**:
   - Check CSS specificity
   - Verify theme classes are applied
   - Test hover/touch interactions

### Debug Console

Add this to check donation state:

```javascript
// In browser console
console.log('Donation Config:', window.donateConfig);
console.log('Page Show Donate:', document.querySelector('[data-donate-enabled]'));
```

## Maintenance

### Adding New Payment Methods

1. **Update Component**: Add new payment method in `Donate.astro`
2. **Update Schema**: Add field to content collection schema
3. **Update Config**: Add configuration option to `consts.ts`
4. **Update Docs**: Document the new method

### Updating QR Codes

1. Generate new QR codes from payment apps
2. Optimize images (recommend PNG, 300x300px minimum)
3. Place in `/public/images/donation/`
4. Update configuration paths

This documentation should help developers understand and maintain the donation system components.