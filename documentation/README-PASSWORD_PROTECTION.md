# Password Protection System

This document explains how to use the password protection feature to secure blog posts and other content.

## Overview

The password protection system allows you to lock content behind a password prompt. It uses SHA1 hashing for password validation and localStorage for session persistence.

## Features

- 🔒 **Client-side password protection** with SHA1 hashing
- 🌐 **Global or per-post control** via frontmatter
- 💾 **Session persistence** with configurable timeout
- 🔄 **Password change detection** (invalidates old sessions)
- 👁️ **Password visibility toggle** with eye icon
- 🎨 **Theme-aware design** with dark mode support
- 📱 **Mobile responsive** interface
- ⚡ **Smooth animations** for better UX
- 🚀 **Native Astro component** (no React dependencies, faster loading)

## Configuration

All password protection settings are in `/src/consts.ts`:

```typescript
export const passwordProtection = {
  enable: false,                    // Global enable/disable
  passwordHash: "e5e9fa1ba...",    // SHA1 hash of your password
  storageKey: "site_auth_token",   // localStorage key name
  sessionTimeout: 24 * 60 * 60 * 1000, // Session duration (24 hours)
  
  // UI Text (customizable)
  title: "Protected Content",
  message: "This content is password protected. Please enter the password to continue.",
  placeholder: "Enter password",
  buttonText: "Unlock",
  errorMessage: "Incorrect password. Please try again.",
  successMessage: "Access granted!",
}
```

## How to Set Your Password

The system uses SHA1 hashing. You need to generate a SHA1 hash of your desired password:

### Method 1: Online Tool
1. Visit: https://emn178.github.io/online-tools/sha1.html
2. Enter your desired password (e.g., "MySecurePassword123")
3. Copy the generated hash
4. Paste it into `consts.ts` as the `passwordHash` value

### Method 2: Command Line

**Using OpenSSL (Linux/Mac):**
```bash
echo -n "MySecurePassword123" | openssl sha1
```

**Using Node.js:**
```bash
node -e "console.log(require('crypto').createHash('sha1').update('MySecurePassword123').digest('hex'))"
```

## Usage

### Global Protection (All Blog Posts)

Set `enable: true` in `/src/consts.ts`:

```typescript
export const passwordProtection = {
  enable: true,  // All blog posts now require password
  passwordHash: "your_sha1_hash_here",
  // ... other settings
}
```

### Per-Post Protection (Frontmatter Override)

Add `passwordProtected: true` to any blog post's frontmatter:

```markdown
---
title: "My Secret Article"
date: 2024-01-15
passwordProtected: true
---

This content will be password protected, regardless of global settings.
```

### Disable for Specific Posts

Even when global protection is enabled, you can disable it for specific posts:

```markdown
---
title: "Public Article"
date: 2024-01-15
passwordProtected: false
---

This content will be publicly accessible, even if global protection is enabled.
```

## Priority System

The system follows this priority order:

1. **Frontmatter `passwordProtected: true`** → Always protect
2. **Frontmatter `passwordProtected: false`** → Never protect
3. **Frontmatter undefined** → Use global `passwordProtection.enable` setting

## Session Management

### Session Duration
Users stay authenticated for the duration specified in `sessionTimeout`. After timeout, they must re-enter the password.

```typescript
sessionTimeout: 24 * 60 * 60 * 1000  // 24 hours
sessionTimeout: 7 * 24 * 60 * 60 * 1000  // 7 days
sessionTimeout: 0  // No timeout (session lasts indefinitely)
```

### Password Change Detection
When you change the password hash in `consts.ts`, all existing sessions are automatically invalidated. Users must authenticate with the new password.

### Manual Session Clear
Users can clear their session by deleting the localStorage key (default: `site_auth_token`) via browser DevTools, or you can provide a logout button.

## Security Considerations

⚠️ **Important:** This is **client-side protection** suitable for blogs and non-sensitive content.

**What it protects:**
- Casual visitors from viewing content
- Content from appearing in browser without password
- Inconvenience for unauthorized users

**What it does NOT protect:**
- Determined users can view page source and see the password hash
- Content can be accessed by inspecting network requests
- Not suitable for truly sensitive or confidential information

**For higher security:**
- Use server-side authentication
- Consider services like Cloudflare Access, AWS Cognito, or Auth0
- Implement backend password verification

## Customization

### Change UI Text

Update any text in `consts.ts`:

```typescript
export const passwordProtection = {
  title: "Private Area",
  message: "🔐 Enter password to access exclusive content",
  placeholder: "Secret code",
  buttonText: "Submit",
  errorMessage: "❌ Wrong password!",
  successMessage: "✅ Welcome!",
}
```

### Styling

The component styles are inline in `/src/components/PasswordProtection.astro`. You can customize:
- Colors (theme variables)
- Animations (fadeIn, slideUp, shake, pulse, spin)
- Layout (modal width, spacing)
- Dark mode appearance
- Eye icon appearance and behavior

## Troubleshooting

### Password not working
1. Verify the SHA1 hash is correct
2. Check for extra spaces in the hash
3. Ensure the hash is lowercase

### Lock screen not appearing
1. Check `passwordProtection.enable` is true, or
2. Verify frontmatter has `passwordProtected: true`
3. Check browser console for errors
4. Clear localStorage and try again
5. Ensure you're viewing a blog post page (not homepage or archive)

### Password visibility toggle not working
1. Check that JavaScript is enabled in browser
2. Verify eye icons are rendering correctly
3. Check browser console for JavaScript errors

### Session not persisting
1. Check `sessionTimeout` value
2. Verify localStorage is enabled in browser
3. Check `storageKey` hasn't been changed

### Users stay locked out after password change
This is expected behavior. When you change the password hash, all sessions are invalidated for security. Users must authenticate with the new password.

### Footer floating or TOC not visible
This issue has been fixed by converting from React to native Astro component. The native component doesn't interfere with page layout.

### API calls blocked or "Waiting for api.github.com"
This issue has been fixed. The native Astro component doesn't use `client:only` hydration, which was blocking API calls.

## Examples

### Example 1: Protect all premium content
```typescript
// consts.ts
export const passwordProtection = {
  enable: true,
  passwordHash: "a1b2c3d4e5f6...",
  title: "Premium Content",
  message: "Subscribe and get password to access premium articles",
}
```

### Example 2: Single protected article
```markdown
---
title: "Members Only: Advanced Tutorial"
passwordProtected: true
---

Exclusive content for members...
```

### Example 3: Temporary protection
```typescript
// During development or pre-launch
export const passwordProtection = {
  enable: true,
  passwordHash: "dev_site_hash",
  title: "Site Under Construction",
  message: "This site is currently in beta. Password required.",
  sessionTimeout: 2 * 60 * 60 * 1000, // 2 hours only
}
```

## Architecture

The system uses a native Astro component for optimal performance:

1. **Configuration Layer** (`/src/consts.ts`)
   - Central config object
   - Password hash storage

2. **Astro Component** (`/src/components/PasswordProtection.astro`)
   - Authentication logic with SHA1 hashing
   - localStorage session management
   - Password visibility toggle
   - UI rendering with inline styles and scripts
   - No React dependencies

3. **Layout Integration** (`/src/layouts/BlogPost.astro`)
   - Wraps blog content
   - Passes configuration
   - Prevents API blocking and layout issues

## Support

If you encounter issues or need help:
1. Check this documentation
2. Review browser console for errors
3. Verify configuration in `consts.ts`
4. Test with a simple password like "test" (SHA1: `a94a8fe5ccb19ba61c4c0873d391e987982fbbd3`)

---

**Last Updated:** 2024-01-15  
**Version:** 1.0.0
