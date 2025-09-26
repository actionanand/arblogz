# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

## Production URLs

https://arblogz.pages.dev



## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## GitHub Pages deployment

In /src/consts.ts, modify the contents of the site field:

```js
export const site = {
  // ...
  url: 'https://actionanand.github.io', // required,  website origin
  baseUrl: '/arblogz', // When using GitHubPages, you must enter the repository name startwith '/'
  // ...
}
```

merge the changes to the branch `main-github`

## Vercel deployment

In /src/consts.ts, modify the contents of the site field:

```js
export const site = {
  // ...
  url: 'https://arblogz.vercel.app', // required,  website origin
  baseUrl: '', // When using GitHubPages, you must enter the repository name startwith '/'
  // ...
}
```

merge the changes to the branch `main-vercel`

## Cloudflare deployment

In /src/consts.ts, modify the contents of the site field:

```js
export const site = {
  // ...
  url: 'https://arblogz.pages.dev', // required,  website origin
  baseUrl: '', // When using GitHubPages, you must enter the repository name startwith '/'
  // ...
}
```

merge the changes to the branch `main-cloudfare`

## Icons search

https://remixicon.com/

## 💰 Donation System

This blog includes a comprehensive donation system that allows readers to support your work through multiple payment methods.

### Quick Start

1. **Enable the system** in `src/consts.ts`:
   ```typescript
   export const donate = {
     enable: true,                    // Master switch
     enableForAllBlogs: false,        // Default for all blog posts
     tip: "Thanks for the coffee!",   // Default message
     
     // Add your payment details
     paypalUrl: "https://paypal.me/yourusername",
     githubSponsors: "yourusername",
     buyMeACoffee: "yourusername",
     // ... more payment methods
   };
   ```

2. **Add QR codes** (optional) to `/public/images/donation/`:
   - `gpay-qr.png` - Google Pay (India)
   - `paytm-qr.png` - Paytm (India)  
   - `phonepe-qr.png` - PhonePe (India)
   - `alipay-qr.png` - Alipay (China)
   - `wechat-qr.png` - WeChat Pay (China)

3. **Control donations** per page:
   ```yaml
   ---
   title: "My Blog Post"
   showDonate: true                    # Enable for this post
   donateMessage: "Enjoyed this? Support me!"
   ---
   ```

### Supported Payment Methods

**International**:
- PayPal - Global payments
- GitHub Sponsors - Developer community
- Buy Me a Coffee - Casual support
- Ko-fi - Creator platform
- Patreon - Subscription support
- Open Collective - Transparent funding

**Regional**:
- Google Pay, Paytm, PhonePe (India) - QR code based
- Alipay, WeChat Pay (China) - QR code based

### Control System

The donation system uses a three-tier control system:

1. **Master Switch**: `donate.enable` - Must be `true` for any donations to appear
2. **Manual Override**: `showDonate` in page frontmatter (highest priority)
3. **Global Default**: `donate.enableForAllBlogs` - Default for all blog posts

#### Examples:

```yaml
# Always show donations (overrides global setting)
showDonate: true

# Never show donations (overrides global setting)
showDonate: false

# Use global setting (omit showDonate field)
# Result depends on donate.enableForAllBlogs
```

### Usage Options

**In Blog Posts** (automatic integration):
```yaml
---
title: "My Post"
showDonate: true
donateMessage: "Custom message for this post"
customDonate:
  paypalUrl: "custom-paypal-url"
  gpayQRCode: "/custom-qr.png"
---
```

**In Components** (manual integration):
```astro
---
import Donate from "@/components/Donate.astro";
---

<Donate 
  showDonate={true}
  donateMessage="Support our work!"
  customDonateConfig={myConfig}
/>
```

**Quick Button** (inline usage):
```astro
---
import DonateButton from "@/components/DonateButton.astro";
---

<DonateButton 
  message="Buy me a coffee!"
  showMethods={['paypal', 'coffee']}
  style="card"
/>
```

### Features

- ✅ **Smart Controls**: Global + manual override system
- ✅ **Regional Support**: Payment methods for India, China, and international
- ✅ **Responsive Design**: Mobile-optimized with touch interactions
- ✅ **QR Code Popups**: Interactive hover/touch QR code display
- ✅ **Dark Theme**: Full support for light/dark themes
- ✅ **No Underlines**: Clean button styling without text decorations
- ✅ **TypeScript**: Full type safety and validation

### Documentation

- **Component Details**: See `src/components/readme.donation.md`
- **Complete Guide**: See `DONATION_SYSTEM.md`
- **Test Pages**: Visit `/blog/support-us-donation-demo` for demo

This system helps content creators monetize their work while providing readers with convenient ways to show support!

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
