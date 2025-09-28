# Enhanced Donation System Documentation

This document explains how to use the advanced donation system with global controls and regional payment methods.

## Overview

The donation system provides flexible ways to accept donations through multiple payment methods with intelligent global and manual controls:

### International Payment Methods
- **PayPal**: Global payment platform
- **GitHub Sponsors**: Developer community support
- **Buy Me a Coffee**: Casual supporter platform
- **Ko-fi**: Creator-focused platform  
- **Patreon**: Subscription-based support
- **Open Collective**: Transparent collective funding

### Regional Payment Methods
- **Google Pay**: India (QR code)
- **Paytm**: India (QR code)
- **PhonePe**: India (QR code)
- **Alipay**: China (QR code)
- **WeChat Pay**: China (QR code)

## Control System

### Global Configuration

Edit `src/consts.ts` to set up global donation settings:

```typescript
export const donate = {
  enable: true, // Master switch - must be true for any donations to work
  enableForAllBlogs: false, // Default setting for all blog posts
  tip: "Thanks for the coffee !!!☕",
  
  // QR Code images (place in /public/images/donation/)
  wechatQRCode: "/images/donation/wechat-qr.png",
  alipayQRCode: "/images/donation/alipay-qr.png", 
  gpayQRCode: "/images/donation/gpay-qr.png",
  paytmQRCode: "/images/donation/paytm-qr.png",
  phonepeQRCode: "/images/donation/phonepe-qr.png",
  
  // Direct payment URLs
  paypalUrl: "https://paypal.me/yourusername",
  githubSponsors: "yourusername",
  buyMeACoffee: "yourusername",
  kofi: "yourusername",
  patreon: "yourusername",
  opencollective: "yourproject",
};
```

### Control Logic Priority

The system uses a three-tier priority system:

1. **Master Switch**: `donate.enable` must be `true` for any donations to appear
2. **Manual Override**: Page-level `showDonate` setting (if present) takes precedence
3. **Global Default**: `donate.enableForAllBlogs` used when no manual setting exists

#### Examples:

```yaml
# Scenario 1: Manual override to show
showDonate: true
# Result: Always shows donations (if global enable is true)

# Scenario 2: Manual override to hide  
showDonate: false
# Result: Never shows donations

# Scenario 3: No manual setting
# (showDonate field omitted or undefined)
# Result: Uses donate.enableForAllBlogs setting
```

### Page-Level Configuration

Add donation settings to any page's frontmatter:

```yaml
---
title: "My Article"
showDonate: true # Manual control (optional)
donateMessage: "Custom message for this page"
customDonate:
  enable: true
  tip: "Page-specific tip message"
  paypalUrl: "https://paypal.me/yourusername"
  githubSponsors: "yourusername"
  buyMeACoffee: "yourusername"
  kofi: "yourusername"
  patreon: "yourusername"
  opencollective: "yourproject"
  gpayQRCode: "/images/donation/gpay-qr.png"
  paytmQRCode: "/images/donation/paytm-qr.png"
  phonepeQRCode: "/images/donation/phonepe-qr.png"
  alipayQRCode: "/images/donation/alipay-qr.png"
  wechatQRCode: "/images/donation/wechat-qr.png"
---
```

## Usage Examples

### 1. Full Donation Section

Use the main `Donate` component for a complete donation experience:

```astro
---
import Donate from "@/components/Donate.astro";
---

<Donate 
  showDonate={true}
  donateMessage="Support our work!"
  customDonateConfig={yourConfig}
/>
```

### 2. Quick Donation Button

Use `DonateButton` for a smaller, inline donation option:

```astro
---
import DonateButton from "@/components/DonateButton.astro";
---

<DonateButton 
  message="Buy me a coffee!"
  showMethods={['paypal', 'coffee', 'github']}
  size="medium"
  style="card"
/>
```

### 3. Blog Post Integration

For blog posts, just add to frontmatter:

```yaml
---
title: "Amazing Tutorial"
showDonate: true
donateMessage: "Found this helpful? Consider supporting us!"
---
```

The donation section will automatically appear after the post content.

### 4. Page Integration (About, etc.)

Import and add to any page:

```astro
---
import Donate from "@/components/Donate.astro";

const pageDonationConfig = {
  enable: true,
  tip: "Support our blog development! ☕✨",
  // ... other settings
};
---

<Donate 
  showDonate={true}
  customDonateConfig={pageDonationConfig}
/>
```

## Styling Options

### DonateButton Styles

- `button`: Inline button style
- `card`: Card-based layout (default)
- `minimal`: Simple bordered box

### DonateButton Sizes

- `small`: Compact version
- `medium`: Standard size (default)  
- `large`: Prominent version

## Payment Method Setup

### PayPal
1. Create PayPal.Me link
2. Add to `paypalUrl` field

### GitHub Sponsors
1. Enable GitHub Sponsors on your profile
2. Add username to `githubSponsors` field

### Buy Me a Coffee
1. Create account at buymeacoffee.com
2. Add username to `buyMeACoffee` field

### Ko-fi
1. Create account at ko-fi.com
2. Add username to `kofi` field

### Chinese Payment Methods
1. Generate QR codes for Alipay/WeChat
2. Save images to `/public/` directory
3. Update `alipayQRCode` and `wechatQRCode` paths

## Features

### Visual Features
- Beautiful gradient backgrounds
- Smooth hover animations
- Responsive design
- Dark theme support
- Interactive QR code popups

### Technical Features
- TypeScript support
- Configurable per page
- Global fallback settings
- Mobile-optimized interactions
- Accessibility friendly

## Testing & Examples

The system includes several test pages to demonstrate different scenarios:

### 1. Full Demo (`/blog/support-us-donation-demo`)
- **Configuration**: `showDonate: true` with custom settings
- **Shows**: All payment methods with custom message
- **Demonstrates**: Complete donation system functionality

### 2. Global Control Test (`/blog/global-donation-test`)  
- **Configuration**: No `showDonate` field
- **Shows**: Donations based on `donate.enableForAllBlogs` setting
- **Demonstrates**: Global default behavior

### 3. Manual Disable Test (`/blog/donation-disabled-test`)
- **Configuration**: `showDonate: false`
- **Shows**: No donations (overrides global setting)
- **Demonstrates**: Manual override to disable

### 4. About Page (`/about`)
- **Configuration**: Custom page-level donation setup
- **Shows**: Integrated donation section
- **Demonstrates**: Non-blog page integration

## Payment Method Setup

### QR Code Methods (India/China)

1. **Generate QR Codes**: Create payment QR codes from your payment apps
2. **Save Images**: Place QR code images in `/public/images/donation/`
   - `gpay-qr.png` - Google Pay
   - `paytm-qr.png` - Paytm  
   - `phonepe-qr.png` - PhonePe
   - `alipay-qr.png` - Alipay
   - `wechat-qr.png` - WeChat Pay
3. **Update Configuration**: Add paths to `src/consts.ts`

### Direct Payment Methods

1. **PayPal**: Create PayPal.Me link → Add to `paypalUrl`
2. **GitHub Sponsors**: Enable on GitHub → Add username to `githubSponsors`
3. **Buy Me a Coffee**: Create account → Add username to `buyMeACoffee`
4. **Ko-fi**: Create account → Add username to `kofi`
5. **Patreon**: Create page → Add username to `patreon`
6. **Open Collective**: Create project → Add project name to `opencollective`

## Features

### Visual Improvements
- ✅ **No Underlines**: Removed hover underlines from donation buttons
- ✅ **Regional Colors**: Platform-specific hover colors (Google Pay green, Paytm blue, etc.)
- ✅ **QR Code Popups**: Interactive hover/touch popups for scan-based payments
- ✅ **Responsive Design**: Optimized for all screen sizes
- ✅ **Dark Theme Support**: Consistent with site theme system

### Technical Features
- ✅ **Smart Controls**: Global + manual override system
- ✅ **Blog Integration**: Automatic integration in blog post layout
- ✅ **Custom Configuration**: Per-page payment method customization
- ✅ **TypeScript Support**: Full type safety
- ✅ **Mobile Optimized**: Touch-friendly QR code interactions

## Quick Setup Guide

1. **Enable Global System**:
   ```typescript
   // src/consts.ts
   export const donate = {
     enable: true, // Master switch
     enableForAllBlogs: false, // Manual control per blog
     // Add your payment details...
   };
   ```

2. **Add QR Code Images**: Place payment QR codes in `/public/images/donation/`

3. **Configure Payment Methods**: Update usernames/URLs in `src/consts.ts`

4. **Test Different Scenarios**:
   - Visit test pages to see different control behaviors
   - Try global enable/disable
   - Test manual page overrides

5. **Deploy**: Your donation system is ready!

## Best Practices

### Control Strategy
- **Conservative Approach**: Set `enableForAllBlogs: false`, manually enable on key posts
- **Aggressive Approach**: Set `enableForAllBlogs: true`, manually disable where inappropriate
- **Hybrid Approach**: Enable for specific post categories only

### Payment Method Selection
- **International Blog**: Focus on PayPal, GitHub Sponsors, Ko-fi
- **Indian Audience**: Include Google Pay, Paytm, PhonePe
- **Chinese Audience**: Include Alipay, WeChat Pay
- **Developer Content**: Emphasize GitHub Sponsors
- **Creative Content**: Focus on Patreon, Ko-fi

### User Experience
- **Don't Overwhelm**: Show 3-6 payment methods maximum
- **Regional Relevance**: Show appropriate methods for your audience
- **Clear Messaging**: Explain how donations help your work
- **Gratitude**: Always thank supporters publicly when possible

## Customization

### Colors
Edit the CSS in `Donate.astro` to match your brand colors:

```css
.donation-container {
  background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
}
```

### Icons
The system uses Remix Icons. You can change icons by modifying the `ri-*` classes.

### Messages
Customize donation messages through:
- Global `tip` setting
- Page-level `donateMessage` 
- Component `donateMessage` prop

## Best Practices

1. **Don't be pushy**: Place donations after valuable content
2. **Be grateful**: Always thank supporters
3. **Be transparent**: Explain how donations help
4. **Test thoroughly**: Verify all payment methods work
5. **Monitor usage**: Track which methods are most popular

## Support

If you encounter issues:
1. Check console for errors
2. Verify configuration syntax
3. Ensure all required assets exist
4. Test on different devices/browsers