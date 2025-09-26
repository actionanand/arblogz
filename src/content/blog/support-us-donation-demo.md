---
date: 2025-09-26
title: "Support Us - Donation Demo"
description: "A demonstration of our new donation system with multiple payment methods"
heroImage: "/images/hero-blog.webp"
tags: ["demo", "support", "donation"]
showDonate: true
donateMessage: "Love this content? Help us create more amazing tutorials!"
customDonate:
  enable: true
  tip: "Every donation helps us improve our content! 🚀"
  paypalUrl: "https://paypal.me/yourusername"
  githubSponsors: "yourusername"
  buyMeACoffee: "yourusername"
  kofi: "yourusername"
  patreon: "yourusername"
  opencollective: "yourproject"
  alipayQRCode: "/images/donation/alipay-qr.png"
  wechatQRCode: "/images/donation/wechat-qr.png"
  gpayQRCode: "/images/donation/gpay-qr.png"
  paytmQRCode: "/images/donation/paytm-qr.png"
  phonepeQRCode: "/images/donation/phonepe-qr.png"
---

# Support Our Work

Thank you for reading our blog! This post demonstrates our new donation system that allows readers to support our content creation efforts.

## How It Works

Our donation system is **flexible and configurable** through page metadata:

- **Multiple Payment Methods**: PayPal, GitHub Sponsors, Buy Me a Coffee, Ko-fi, Patreon, Open Collective
- **Regional Support**: Google Pay, Paytm, PhonePe (India), Alipay, WeChat Pay (China)
- **Page-Specific Configuration**: Each page can have its own donation settings
- **Global Control**: Enable donations for all blog posts or control manually per page
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **Interactive Elements**: Hover effects and QR code popups for scan-based payment methods

## Features

### 🎨 Beautiful Design
- Gradient backgrounds with subtle patterns
- Smooth animations and hover effects
- Professional card-based layout
- Dark theme support

### 📱 Mobile Optimized
- Touch-friendly interactions
- Responsive layout
- Auto-hiding QR codes on mobile

### 🔧 Easy Configuration
You can enable donations on any page by adding frontmatter:

```yaml
---
showDonate: true
donateMessage: "Custom message here"
customDonate:
  enable: true
  paypalUrl: "your-paypal-url"
  githubSponsors: "your-username"
---
```

### 🌍 Global Support
- **PayPal** for international payments
- **GitHub Sponsors** for developer community
- **Buy Me a Coffee** for casual support
- **Ko-fi** for creator community
- **Patreon** for subscription-based support
- **Open Collective** for transparent funding
- **Google Pay, Paytm, PhonePe** for Indian users
- **Alipay and WeChat Pay** for Chinese users

### 🎛️ Smart Controls
- **Global Enable/Disable**: Turn donation system on/off site-wide
- **Blog-wide Default**: Enable donations on all blog posts by default
- **Manual Override**: Each page can override global settings
- **Priority System**: Manual settings always take precedence

## Configuration Examples

### Global Settings (in `src/consts.ts`):
```typescript
export const donate = {
  enable: true, // Master switch
  enableForAllBlogs: false, // Default for all blog posts
  // Payment configurations...
};
```

### Page-Level Control:
```yaml
# Enable donations (overrides global setting)
showDonate: true

# Disable donations (overrides global setting)  
showDonate: false

# Use global setting (enableForAllBlogs)
# showDonate: undefined (or omit the field)
```

## Thank You!

If you find our content valuable, we'd greatly appreciate your support. Every contribution, no matter how small, helps us:

- Create more high-quality tutorials
- Maintain and improve our website
- Explore new technologies and share our findings
- Respond to community requests faster

*The donation section should appear below this content, demonstrating the system in action!*