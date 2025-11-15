---
title: "Introducing Password Protection for Blog Posts"
description: "Learn how to protect your blog content with password authentication, featuring SHA1 encryption, session management, and a beautiful lock screen interface."
date: 2025-11-15
category: ["Features", "Security"]
tags: ["password-protection", "security", "astro", "blog-features"]
draft: false
passwordProtected: true
---

## 🔒 Secure Your Content with Password Protection

We're excited to introduce a powerful new feature: **Password Protection** for your blog posts! This feature allows you to restrict access to specific articles or your entire blog with a secure password system.

## ✨ Key Features

### 🛡️ Security & Privacy
- **SHA1 Password Hashing**: Your passwords are hashed using SHA1 encryption, never stored in plain text
- **Session Management**: Once authenticated, users stay logged in for 24 hours (configurable)
- **Password Change Detection**: Automatically logs out all users when the password changes
- **LocalStorage Persistence**: Sessions persist across browser tabs and page refreshes

### 🎨 Beautiful User Interface
- **Elegant Lock Screen**: Clean, modern design with smooth animations
- **Theme Integration**: Perfectly matches your site's green theme in both light and dark modes
- **Password Visibility Toggle**: Eye icon lets users see what they're typing
- **Responsive Design**: Works flawlessly on desktop, tablet, and mobile devices

### 🔧 Flexible Configuration
- **Global Protection**: Enable password protection for all blog posts
- **Per-Post Control**: Use frontmatter to protect individual posts
- **Customizable Messages**: Change all UI text to match your needs
- **Session Timeout**: Configure how long users stay authenticated

### 🔄 Smart Features
- **Lock Status Badge**: Floating indicator shows when content is protected
- **Re-lock Button**: Click the badge to lock content again
- **Automatic Unlock**: Seamlessly unlocks content after successful authentication
- **Error Feedback**: Clear messages with shake animations for wrong passwords

## 🚀 How to Use

### Protect a Single Post

Simply add `passwordProtected: true` to your post's frontmatter:

```yaml
---
title: "My Secret Article"
date: 2024-11-15
passwordProtected: true
---

Your exclusive content here...
```

### Protect All Posts Globally

In your `src/consts.ts` file, set:

```typescript
export const passwordProtection = {
  enable: true,  // Enable for all posts
  passwordHash: "your_sha1_hash_here",
  // ... other settings
}
```

### Set Your Password

1. Visit an online SHA1 generator: [https://emn178.github.io/online-tools/sha1.html](https://emn178.github.io/online-tools/sha1.html)
2. Enter your desired password (e.g., "MySecurePassword123")
3. Copy the generated SHA1 hash
4. Update `passwordHash` in `src/consts.ts`

**Example:**
- Password: `"secret"`
- SHA1 Hash: `"e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4"`

## 🎯 Use Cases

### Private Content
Perfect for:
- Draft articles you're still working on
- Member-only content
- Beta testing new features
- Personal notes or journaling

### Exclusive Access
Great for:
- Premium subscriber content
- Client-specific documentation
- Team internal posts
- Limited release announcements

### Development & Testing
Useful for:
- Pre-launch content testing
- Staging environment protection
- Client review pages
- Work-in-progress articles

## 💡 Configuration Options

### Customize the Lock Screen

Edit `src/consts.ts` to personalize the experience:

```typescript
export const passwordProtection = {
  enable: false,
  passwordHash: "e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4",
  storageKey: "site_auth_token",
  sessionTimeout: 24 * 60 * 60 * 1000, // 24 hours
  
  // Customize these texts
  title: "Protected Content",
  message: "This content is password protected. Please enter the password to continue.",
  placeholder: "Enter password",
  buttonText: "Unlock",
  errorMessage: "Incorrect password. Please try again.",
  successMessage: "Access granted!",
}
```

### Session Timeout Options

Control how long users stay logged in:

```typescript
sessionTimeout: 24 * 60 * 60 * 1000,    // 24 hours (default)
sessionTimeout: 7 * 24 * 60 * 60 * 1000, // 7 days
sessionTimeout: 60 * 60 * 1000,          // 1 hour
sessionTimeout: 0,                       // Never expire
```

## 🎨 Visual Design

### Light Mode
- Clean white modal with subtle shadows
- Green gradient button matching site theme
- Soft gray input backgrounds
- Clear, readable typography

### Dark Mode
- Dark gray modal (#1f2937)
- Bright text for excellent contrast
- Darker input fields (#374151)
- Green gradient theme maintained

### Animations
- **Fade In**: Smooth entrance for lock screen
- **Slide Up**: Modal slides in from bottom
- **Pulse**: Lock icon gently pulses
- **Shake**: Error feedback with shake animation
- **Spin**: Loading spinner during authentication

## 🔐 Security Considerations

### What This Protects
✅ Casual visitors from accessing content  
✅ Content from appearing in search results (when configured correctly)  
✅ Accidental exposure of private posts

### What This Doesn't Protect
❌ **Not for highly sensitive data**: This is client-side protection  
❌ Determined users can view page source  
❌ Password hash is visible in code

### Best Practices
1. **Use Strong Passwords**: Combine letters, numbers, and symbols
2. **Change Regularly**: Update your password hash periodically
3. **Don't Share Freely**: Limit password distribution
4. **For Sensitive Data**: Consider server-side authentication instead

## 📱 User Experience

### On Desktop
1. User visits protected post
2. Beautiful lock screen appears with blur backdrop
3. Enter password with optional visibility toggle
4. Click unlock or press Enter
5. Success message appears briefly
6. Content smoothly fades in
7. Lock badge appears in top-right corner
8. Click badge to re-lock if needed

### On Mobile
- Touch-friendly buttons (36px minimum)
- Eye icon easily tappable
- Responsive modal fits all screen sizes
- Badge shows icon only to save space
- Smooth animations optimized for mobile

## 🔄 Advanced Features

### Re-lock Functionality
After unlocking content, users see a **Lock Status Badge** in the top-right corner:
- **Desktop**: Shows icon + "Protected Content" text
- **Mobile**: Shows icon only
- **Click**: Clears session and reloads with lock screen
- **Useful**: For shared computers or public devices

### Password Change Flow
When you update the password hash:
1. All existing sessions become invalid
2. Users see lock screen on next visit
3. Must authenticate with new password
4. Previous sessions automatically cleared

### Session Management
The system stores authentication data in localStorage:
```json
{
  "hash": "e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4",
  "timestamp": 1699200000000
}
```

## 🛠️ Technical Implementation

### Architecture
- **Native Astro Component**: No React dependencies
- **Inline Scripts**: Fast execution, no hydration delay
- **External CSS**: Clean separation of concerns
- **SHA1 Hashing**: Web Crypto API for security
- **LocalStorage API**: Browser-native persistence

### Performance
- ⚡ **Minimal Overhead**: ~5KB JavaScript
- 🚀 **No React Runtime**: Faster page loads
- 💨 **Instant Unlock**: SHA1 hashing is fast
- 📦 **Self-Contained**: No external dependencies

### Browser Compatibility
- ✅ Chrome/Edge 37+
- ✅ Firefox 34+
- ✅ Safari 11+
- ✅ All modern mobile browsers

## 📊 Example Scenarios

### Scenario 1: Beta Content
```yaml
---
title: "New Feature Preview (Beta)"
passwordProtected: true
---

Share this password with beta testers only!
```

### Scenario 2: Client Projects
```yaml
---
title: "Project Documentation - Client XYZ"
passwordProtected: true
category: ["Clients"]
---

Confidential project details...
```

### Scenario 3: Personal Journal
```yaml
---
title: "My Private Thoughts"
passwordProtected: true
tags: ["personal", "private"]
---

Personal reflections and ideas...
```

## 🎓 Tips & Tricks

### Multiple Password Levels
While the system uses one global password, you can create different post categories:
- **Public**: No protection
- **Members**: `passwordProtected: false` (use external auth)
- **Private**: `passwordProtected: true`

### Password Management
Generate unique passwords for different purposes:
1. **Main Content**: Strong, memorable password
2. **Testing**: Simple password for development
3. **Temporary**: Short-term access codes

### Clear Instructions
Add a note above protected content:
```markdown
> 📧 Don't have the password? Email me at your@email.com
```

## 🔮 Future Enhancements

Potential future features:
- Multiple password support (different passwords per post)
- Time-based access (automatic expiration)
- User access logs
- Email-based password requests
- Two-factor authentication
- Social login integration

## 📚 Resources

- **SHA1 Generator**: [https://emn178.github.io/online-tools/sha1.html](https://emn178.github.io/online-tools/sha1.html)
- **Documentation**: Check `README-PASSWORD_PROTECTION.md` in the repo
- **User Guide**: See `PASSWORD-PROTECTION-USER-GUIDE.md`
- **Migration Guide**: Review `MIGRATION-PASSWORD-PROTECTION.md`

## 🎉 Conclusion

Password protection adds a powerful layer of control to your blog, allowing you to:
- 🔒 Secure sensitive content
- 👥 Create exclusive experiences
- 🧪 Test features privately
- 📝 Protect work-in-progress

The feature is designed to be:
- **Easy to use**: Simple frontmatter toggle
- **Beautiful**: Matches your site's design
- **Secure**: SHA1 hashing and session management
- **Flexible**: Global or per-post control

Try it out on your next post and enjoy the peace of mind that comes with controlled access!

---

**Questions?** Feel free to reach out or check the documentation files in the repository.

**Default Password for Testing**: `secret`  
(Remember to change this in production!)
