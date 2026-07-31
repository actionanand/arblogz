# Password Protection - User Guide

## Quick Start

### For Site Owners

1. **Set Your Password**
   - Go to https://emn178.github.io/online-tools/sha1.html
   - Enter your password (e.g., "MySecurePassword123")
   - Copy the SHA1 hash
   - Update in `/src/consts.ts`:
   ```typescript
   export const passwordProtection = {
     enable: false, // Set to true for global protection
     passwordHash: "paste_your_hash_here",
     // ... other settings
   }
   ```

2. **Protect a Single Post**
   Add to post frontmatter:
   ```yaml
   ---
   title: "My Secret Article"
   passwordProtected: true
   ---
   ```

3. **Test It**
   - Visit the protected page
   - You'll see a lock screen
   - Enter your password (not the hash!)
   - Click "Unlock" or press Enter

### For Visitors

When you visit a password-protected page:

1. **Lock Screen Appears**
   - Shows lock icon 🔒
   - Title: "Protected Content"
   - Message explaining protection
   - Password input field

2. **Enter Password**
   - Type in the password field
   - Click the eye icon 👁️ to see what you're typing
   - Click again to hide password

3. **Submit**
   - Click "Unlock" button or press Enter
   - Loading spinner appears during verification
   - Success message ✓ shows if correct
   - Error message ✗ shows if wrong (with shake animation)

4. **Access Content**
   - Content unlocks smoothly
   - Your session is saved in browser
   - No need to re-enter password on same device

## Features

### 👁️ Password Visibility Toggle

Click the eye icon to:
- **See password:** Eye icon (open) → switches to text input
- **Hide password:** Eye-off icon (crossed) → switches to password input

### 💾 Session Management

Your authentication is remembered:
- **Duration:** 24 hours by default (configurable)
- **Storage:** Browser localStorage
- **Auto-logout:** After session expires
- **Password Change:** Logs out all users immediately

### 🔄 Multi-Device Behavior

- **Same browser:** Stay logged in across tabs
- **Different browser:** Must authenticate again
- **Private/Incognito:** Must authenticate (session not saved)
- **Cleared cache:** Must authenticate again

## Visual Guide

### Lock Screen Elements

```
┌─────────────────────────────────┐
│                                 │
│           🔒                    │  ← Lock Icon (animated pulse)
│                                 │
│      Protected Content          │  ← Title
│                                 │
│   This content is password      │  ← Message
│   protected...                  │
│                                 │
│  ┌──────────────────────────┐  │
│  │ Enter password       👁️ │  │  ← Input + Eye Toggle
│  └──────────────────────────┘  │
│                                 │
│  ┌──────────────────────────┐  │
│  │       🔓 Unlock          │  │  ← Submit Button
│  └──────────────────────────┘  │
│                                 │
│  ✗ Incorrect password (red)    │  ← Error (if shown)
│  ✓ Access granted! (green)     │  ← Success (if shown)
│                                 │
└─────────────────────────────────┘
```

### States

1. **Initial State**
   - Lock icon visible
   - Input field empty
   - Eye icon (open)
   - Button ready

2. **Typing State**
   - Input shows dots (•••)
   - Eye icon clickable
   - Focus border (blue glow)

3. **Eye Toggled**
   - Eye-off icon appears
   - Input shows plain text
   - Password visible

4. **Submitting State**
   - Button disabled
   - Loading spinner appears
   - "Unlock" text hidden

5. **Error State**
   - Red error box appears
   - Shake animation
   - Input clears
   - Button re-enables

6. **Success State**
   - Green success box appears
   - Brief celebration animation
   - Unlocks after 0.8s

7. **Unlocked State**
   - Lock overlay fades out
   - Content fades in
   - Normal page behavior

## Customization Guide

### Change UI Text

Edit in `/src/consts.ts`:

```typescript
export const passwordProtection = {
  // ... other settings
  title: "Members Only",              // Lock screen heading
  message: "Enter your member code",   // Instruction text
  placeholder: "Member Code",          // Input placeholder
  buttonText: "Enter",                 // Submit button
  errorMessage: "Invalid code",        // Wrong password
  successMessage: "Welcome!",          // Correct password
}
```

### Change Session Duration

```typescript
export const passwordProtection = {
  // ... other settings
  sessionTimeout: 24 * 60 * 60 * 1000,    // 24 hours
  sessionTimeout: 7 * 24 * 60 * 60 * 1000, // 7 days
  sessionTimeout: 60 * 60 * 1000,          // 1 hour
  sessionTimeout: 0,                       // Never expire
}
```

### Change Colors

Edit styles in `/src/components/PasswordProtection.astro`:

```css
/* Primary color */
color: rgb(var(--color-theme-primary));

/* Background */
background: rgb(var(--color-bg-primary));

/* Error color */
color: rgb(239, 68, 68); /* Red */

/* Success color */
color: rgb(34, 197, 94); /* Green */
```

## Security Notes

### What This Protects

✅ Casual visitors from viewing content
✅ Content from search engine indexing (if used correctly)
✅ Accidental exposure

### What This DOESN'T Protect

❌ Determined attackers (client-side only)
❌ Content source code (visible in page source)
❌ Truly sensitive data

### Best Practices

1. **Use strong passwords:** Mix letters, numbers, symbols
2. **Change regularly:** Update hash in config
3. **Don't share freely:** Limit password distribution
4. **Monitor access:** Check analytics for unusual patterns
5. **Consider alternatives:** For sensitive data, use server-side auth

## Troubleshooting

### "I forgot the password"

1. Check `/src/consts.ts` for `passwordHash`
2. Generate new hash at https://emn178.github.io/online-tools/sha1.html
3. Replace old hash
4. Redeploy site

### "Password not working"

- Check hash is correct
- Ensure no extra spaces
- Verify hash is lowercase
- Try clearing browser cache
- Check browser console for errors

### "Locked out after changing password"

This is normal! Changing the hash logs out all users for security.

### "Eye icon not visible"

- Check browser JavaScript is enabled
- Verify no browser extensions blocking it
- Try different browser
- Check console for errors

### "Footer floating weird"

This should be fixed in v2.0 (native Astro component). If still happening:
- Clear browser cache
- Hard refresh (Ctrl+F5)
- Check you're using latest version

## FAQ

**Q: Can users bypass this?**
A: Yes, it's client-side. View page source or disable JavaScript.

**Q: Is the password visible in code?**
A: Only the SHA1 hash is visible, not the actual password.

**Q: Can I have different passwords per post?**
A: No, currently one global password. Can be added as feature.

**Q: Does this work with SSR?**
A: Yes, works with static and SSR deployments.

**Q: Performance impact?**
A: Minimal. SHA1 hashing is fast, no external dependencies.

**Q: Mobile compatible?**
A: Yes, fully responsive design.

**Q: Accessible?**
A: Yes, proper ARIA labels and keyboard navigation.

**Q: Dark mode support?**
A: Yes, adapts to site theme automatically.

---

**Version:** 2.0.0 (Native Astro)
**Last Updated:** November 15, 2025
**Support:** Check documentation or GitHub issues
