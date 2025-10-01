# Daily Status/Updates System

This document explains how the daily status and updates system works in the blog, covering both local markdown-based updates and external API integration.

## 📋 Overview

The daily status system allows temporary, time-sensitive content to appear on the feed page. These updates automatically appear and disappear based on their publication time and a 24-hour expiration window.

## 🏗️ ArchitectuThis comprehensive rendering system ensures daily updates appear seamlessly in the feed with appropriate styling, timing, and user experience while maintaining performance and reliability.

## 🔄 Client-Side API Integration (Real-Time Updates)

The system now uses a hybrid approach: local markdown updates are processed server-side, while API updates are fetched client-side for real-time functionality.

### **DailyStatusLoader Component**

Location: `/src/components/DailyStatusLoader.astro`

#### **A. Initialization & Auto-Refresh**
```javascript
// Initialize on page load
new DailyStatusLoader();

// Auto-refresh every 5 minutes (configurable)
setInterval(() => this.loadApiUpdates(), this.config.dailyUpdatesApi.cacheTime || 300000);
```

#### **B. Client-Side API Fetching**
```javascript
// Real-time API call (visible in Network tab)
const response = await fetch(this.config.dailyUpdatesApi.url, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${this.config.dailyUpdatesApi.apiKey}`,
    'Content-Type': 'application/json'
  }
});
```

**Benefits:**
- ✅ **Visible in Network Tab**: You can now see API calls in browser DevTools
- ✅ **Real-Time Updates**: Changes appear without rebuilding
- ✅ **No Build Dependency**: API updates work immediately
- ✅ **Auto-Refresh**: Periodic checks for new content

#### **C. Dynamic DOM Insertion**
```javascript
// Insert API updates before regular posts but after local daily updates
const firstRegularPost = feedContainer.querySelector('[data-post-type="regular"]');
if (firstRegularPost) {
  feedContainer.insertBefore(updateElement, firstRegularPost);
}
```

**Insertion Order:**
1. **Local Daily Updates** (server-side, at build time)
2. **API Daily Updates** (client-side, real-time)
3. **Regular Blog Posts** (server-side, at build time)

#### **D. Duplicate Prevention**
```javascript
// Track loaded updates to prevent duplicates
this.loadedUpdates = new Set();
const updateId = `api-${item.date}-${item.content.substring(0, 50)}`;

if (!this.loadedUpdates.has(updateId)) {
  this.loadedUpdates.add(updateId);
  // Process update...
}
```

#### **E. Content Processing & Styling**
API updates receive the same content cleaning and styling as server-side updates:
- Markdown formatting removal
- 1000 character limit
- Blue "Live" badge with cloud icon
- Real-time countdown timer integration

### **Network Debugging**

Now you can easily debug API calls with multiple fallback methods:

1. **Open Browser DevTools** → Network tab
2. **Filter by XHR/Fetch** to see API calls
3. **Look for these request patterns:**

#### **Method 1: Internal API Route (Primary)**
```
Request: GET /api/daily-status (or /arblogz/api/daily-status for GitHub Pages)
Status: 200 OK
Response: JSON array of daily updates
```
- ✅ **No CORS issues** (same-origin request)
- ✅ **Works in production** with proper base URL detection
- ✅ **Fastest method** (direct server-side fetch)

#### **Method 2: Direct API Call with Angular-like Headers (Secondary)**
```
Request: GET https://raw.githubusercontent.com/your-user/repo/main/path/daily-status.json
Headers: Accept: application/json, text/plain, */*
         Referer: current-page-url
         User-Agent: browser-user-agent
Status: Should work (mimics working Angular app)
Response: JSON array
```
- ✅ **Same headers as your working Angular app**
- ✅ **No proxy dependency** (direct connection)
- ✅ **Fastest if successful** (no intermediary)
- ⚠️ **CORS dependent** on GitHub's response headers

#### **Method 3: Minimal Headers Direct Call (Tertiary)**
```
Request: GET https://raw.githubusercontent.com/your-user/repo/main/path/daily-status.json
Headers: Accept: application/json
Status: Fallback if full headers fail
Response: JSON array
```
- ✅ **Simplified approach** for better compatibility
- ✅ **Reduced header complexity** that might cause issues
- ✅ **Still direct connection** (no proxy)

#### **Method 4: AllOrigins CORS Proxy (Last Resort)**
```
Request: GET https://api.allorigins.win/get?url=https%3A//raw.githubusercontent.com/...
Status: 200 OK
Response: { contents: "JSON string", status: { ... } }
```
- ⚠️ **Rate limited** (used only as last resort)
- ✅ **Bypasses CORS** using public proxy service
- ⚠️ **Slower** due to proxy overhead
- ⚠️ **External dependency** on AllOrigins service

#### **Method 5: GitHub API (Final Fallback)**
```
Request: GET https://api.github.com/repos/user/repo/contents/path/daily-status.json
Headers: Accept: application/vnd.github.v3+json
Status: 200 OK
Response: { content: "base64-encoded-json", ... }
```
- ✅ **Official GitHub API** with proper CORS headers
- ✅ **Most reliable** for GitHub-hosted content
- ⚠️ **Rate limited** (60 requests/hour for unauthenticated)
- ✅ **Base64 decoded** automatically

### **API Method Priority & Debugging**

**Request Sequence (Updated to minimize proxy usage):**
1. **Internal API** (`/api/daily-status`) → Same origin, no CORS
2. **Direct GitHub with Angular headers** (`raw.githubusercontent.com`) → Mimics working app
3. **Direct GitHub minimal headers** (`raw.githubusercontent.com`) → Simplified approach
4. **AllOrigins Proxy** (`api.allorigins.win`) → Last resort due to rate limits
5. **GitHub API** (`api.github.com`) → Official API with rate limits

**Console Output Example (Updated):**
```
🔄 Fetching real-time daily updates from API...
🔄 Trying internal API route: https://your-site.com/api/daily-status
⚠️ Internal API route failed, trying direct fetch... Error: Internal API failed: HTTP 404
🔄 Trying direct fetch with Angular-like headers...
✅ Direct fetch successful
✅ API Response received: [{ date: "2025-10-02 14:30", content: "..." }]
📱 Rendering 1 new API daily updates
```

**If Angular-like headers also fail:**
```
🔄 Trying direct fetch with Angular-like headers...
⚠️ Direct fetch failed, trying alternative method... Error: CORS policy blocks request
🔄 Trying direct fetch with minimal headers...
✅ Minimal headers fetch successful
```

**Only if all direct methods fail:**
```
🔄 Trying direct fetch with minimal headers...
⚠️ Minimal headers fetch failed, trying CORS proxy... Error: CORS policy blocks request
⚠️ Using AllOrigins proxy as fallback (has rate limits)
🔄 Trying CORS proxy: https://api.allorigins.win/get?url=...
✅ CORS proxy successful
```

### **Configuration for Client-Side**
```typescript
// In /src/consts.ts
dailyUpdatesApi: {
  enabled: true,
  url: 'https://your-api-endpoint.com/daily-status.json',
  apiKey: 'optional-bearer-token',
  cacheTime: 5 * 60 * 1000 // 5 minutes refresh interval
}
```

### **Production Deployment & URL Handling**

The system automatically detects the correct base URL for different deployment scenarios:

#### **Local Development**
```
Internal API: http://localhost:4321/api/daily-status
Base URL: No prefix needed
```

#### **GitHub Pages Deployment**
```
Internal API: https://username.github.io/arblogz/api/daily-status
Base URL: Auto-detected from current path (/arblogz)
```

#### **Custom Domain Deployment**
```
Internal API: https://your-domain.com/api/daily-status
Base URL: No prefix needed
```

**Base URL Detection Logic:**
```javascript
// Automatic base URL detection
const currentPath = window.location.pathname;
const basePath = currentPath.includes('/arblogz') ? '/arblogz' : '';
const internalApiUrl = `${window.location.origin}${basePath}/api/daily-status`;
```

This ensures the internal API route works correctly across all deployment environments without manual configuration.

### **Error Handling**
- Failed API calls are logged to console
- Page continues to work with local updates only
- Graceful degradation if API is unavailable
- No impact on site performance or SEO

## 🎨 Client-Side Behavior
### Components Involved

1. **`/src/content/daily-status/daily-updates.md`** - Local markdown file for manual updates
2. **`/src/pages/feed/[page].astro`** - Server-side processing for local updates
3. **`/src/components/DailyStatusLoader.astro`** - Client-side API fetching and real-time updates
4. **`/src/components/FeedPreview.astro`** - Daily post rendering with special styling
5. **`/src/components/FeedPostDate.astro`** - Time display and countdown functionality
6. **`/src/consts.ts`** - API configuration
7. **External API** - Remote daily updates source (fetched client-side)

## 📝 Local Updates (daily-updates.md)

### File Location
```
/src/content/daily-status/daily-updates.md
```

### Format
```markdown
---
title: Daily Updates
description: Temporary daily feed updates
---

2025-10-02 10:30: Your update message here.

This can be a multi-line update with more details.
You can include **markdown formatting** too.

2025-10-02 14:45: Another update for the same day.

2025-10-03 09:00: Future update that won't show until its time.
```

### Rules
- **Date Format**: `YYYY-MM-DD HH:MM:` (24-hour format, IST timezone)
- **Content**: Supports markdown formatting
- **Length**: Auto-truncated to 1000 characters max
- **Multi-line**: Content continues until next date entry
- **Timezone**: All times are in IST (Indian Standard Time, UTC+5:30)

### Example Entry
```markdown
2025-10-02 15:30: Welcome to today's special update! 🎉

This is additional content that explains more about the update.
You can use **bold text** and other markdown features.

The content will automatically expire 24 hours after publication.
```

## 🌐 API Integration

### Configuration
In `/src/consts.ts`:
```typescript
dailyUpdatesApi: {
  enabled: true, // Set to false to disable API updates
  url: 'https://your-api-endpoint.com/daily-status.json',
  apiKey: 'your-optional-api-key' // Optional authentication
}
```

### API Response Format
```json
[
  {
    "date": "2025-10-02 14:30",
    "content": "Your API update content here",
    "title": "Optional Custom Title"
  },
  {
    "date": "2025-10-02 16:45", 
    "content": "Another API update",
    "title": "API Daily Update"
  }
]
```

### API Requirements
- **Date Format**: `YYYY-MM-DD HH:MM` (IST timezone)
- **Content Field**: Required, contains the update text
- **Title Field**: Optional, defaults to "API Daily Update"
- **Authentication**: Optional Bearer token support

## ⚙️ Server-Side Processing

### Location
`/src/pages/feed/[page].astro` - `getStaticPaths()` function

### Processing Logic

1. **Parse Markdown Updates** (Server-side)
   - Read `daily-updates.md` content
   - Extract date-prefixed entries
   - Parse IST timestamps to UTC
   - Filter and include valid updates at build time

2. **Fetch API Updates** (Client-side - Real-time)
   - Make HTTP request to configured API endpoint from browser
   - Parse JSON response in real-time
   - Convert IST timestamps to UTC
   - Insert valid updates dynamically into DOM

3. **Hybrid Filtering**
   - Local updates: Server-side filtering during build
   - API updates: Client-side filtering for real-time updates
   - Apply 1000 character content limit to both

4. **Content Preparation**
   - Generate slugs and metadata
   - Create description excerpts (200 chars)
   - Mark entries with appropriate source flags

### Time Calculations
```javascript
// IST offset (UTC + 5.5 hours)
const istOffset = 5.5 * 60 * 60 * 1000;

// Convert IST time to UTC for consistent processing
const contentUtcTime = Date.UTC(year, month - 1, day, hours, minutes, 0) - istOffset;

// Check validity (published and not expired)
const timeDiffHours = (currentTime - contentTime) / (1000 * 60 * 60);
const isValid = contentTime <= currentTime && timeDiffHours <= 24;
```

## � Daily Status Rendering Logic (Post-Filtering)

After server-side filtering, valid daily updates are integrated into the feed rendering pipeline. Here's the detailed flow:

### 1. **Data Structure Creation**

Once filtering is complete, each valid daily update is transformed into a standardized post object:

```javascript
// Structure of a daily update post object
{
  slug: `daily-${Date.now()}-${todaysUpdates.length}`, // Unique identifier
  data: {
    title: 'Daily Update',                              // Display title
    description: content.substring(0, 200) + '...',     // Meta description
    date: publishDate,                                   // Publication date (Date object)
    draft: false,                                        // Always published
    isDaily: true,                                       // Key flag for special handling
    source: 'api' | undefined                           // Source indicator (API vs local)
  },
  body: content,                                         // Full content text
  rawContent: content,                                   // Raw content (same as body)
  render: () => ({ Content: () => content })            // Render function for Astro
}
```

### 2. **Feed Integration & Ordering**

The filtered daily updates are prepended to the regular feed posts:

```javascript
// In /src/pages/feed/[page].astro
// Prepend today's updates to posts (static + API)
posts = [...todaysUpdates, ...apiUpdates, ...posts];

// Then passed to Astro's paginate function
return paginate(posts, { pageSize: site.feedPageSize });
```

**Ordering Logic:**
1. **Local Daily Updates** (from daily-updates.md) - appear first
2. **API Daily Updates** - appear second  
3. **Regular Blog Posts** - appear last

### 3. **Component Rendering Pipeline**

#### **A. FeedPreview Component Detection**

In `/src/components/FeedPreview.astro`, daily posts are detected:

```javascript
const isDaily = data.isDaily || slug.startsWith('daily-');
```

This flag triggers special rendering behavior throughout the component tree.

#### **B. Content Processing & Display**

Daily posts receive special content processing:

```javascript
// Content cleaning for display
body
  .replace(/^#+/gm, "")              // Remove markdown headers
  .replace(/!?\[.*?\]\(.*?\)/g, "")  // Remove images and links  
  .replace(/\*\*(.*?)\*\*/g, "$1")   // Remove bold formatting
  .replace(/__(.*?)__/g, "$1")       // Remove bold underscores
  .replace(/\*(.*?)\*/g, "$1")       // Remove italic asterisks
  .replace(/_(.*?)_/g, "$1")         // Remove italic underscores
  .replace(/~~(.*?)~~/g, "$1")       // Remove strikethrough
  .replace(/`(.*?)`/g, "$1")         // Remove inline code
  .replace(/^\s*[-*+]\s+/gm, "")     // Remove bullet points
  .replace(/^\s*\d+\.\s+/gm, "")     // Remove numbered lists
  .trim()
```

#### **Understanding Regex Capture Groups & Replacement Patterns**

The `$1`, `$2`, etc. syntax in regex replacements refers to **capture groups** - portions of the matched text that are "captured" for reuse:

**Basic Concept:**
```javascript
// Pattern: /\*\*(.*?)\*\*/g
// Breakdown:
//   \*\*     - Matches literal "**" (escaped asterisks)
//   (.*?)    - Capture group 1: matches any characters (non-greedy)
//   \*\*     - Matches literal "**" again
//   g        - Global flag: replace all occurrences

// Replacement: "$1"
//   $1       - Insert the content of capture group 1
```

**Real Examples:**

```javascript
// Example 1: Bold text removal
"**Hello World**".replace(/\*\*(.*?)\*\*/g, "$1")
// Result: "Hello World"
// Explanation: Captures "Hello World" and replaces the entire match with just the captured content

// Example 2: Multiple capture groups
"[Link Text](https://example.com)".replace(/\[(.*?)\]\((.*?)\)/g, "$1 ($2)")
// Result: "Link Text (https://example.com)"
// $1 = "Link Text", $2 = "https://example.com"

// Example 3: Reordering with capture groups
"John Doe".replace(/(\w+) (\w+)/g, "$2, $1")
// Result: "Doe, John"
// $1 = "John", $2 = "Doe"
```

**Complete Capture Group Reference:**
- `$1` - First capture group `(.*?)`
- `$2` - Second capture group (if exists)
- `$3` - Third capture group (if exists)
- `$&` - Entire matched string
- `$`` - Everything before the match
- `$'` - Everything after the match

**Why Use Capture Groups in Daily Status Processing:**

1. **Preserve Content**: We want to keep the text but remove the formatting
2. **Clean Display**: Bold markers `**text**` become just `text`
3. **Maintain Meaning**: The actual message content is preserved
4. **Performance**: Single regex operation instead of complex string manipulation

**More Complex Example from Daily Status:**
```javascript
// If we had this content: "**Important:** Check out this __great__ feature!"
// After processing:
//   .replace(/\*\*(.*?)\*\*/g, "$1")  → "Important: Check out this __great__ feature!"
//   .replace(/__(.*?)__/g, "$1")      → "Important: Check out this great feature!"
// Final result: Clean text without any markdown formatting
```

**Alternative Approaches (Less Efficient):**
```javascript
// Without capture groups (more verbose):
text.replace(/\*\*(.*?)\*\*/g, function(match, p1) {
  return p1; // p1 is the same as $1
});

// Or split-based approach (inefficient):
text.split('**').filter((_, i) => i % 2 === 1).join('');
```

This capture group approach ensures daily status content displays cleanly in the feed while preserving the original message meaning.

**Key Differences for Daily Posts:**
- **No Text Clamping**: Regular posts use `line-clamp-3`, daily posts show full content
- **Full Content Display**: Daily posts don't truncate with "..."
- **Rich Formatting**: Markdown is processed but formatting markers are removed for clean display

#### **C. Visual Styling & Badges**

Daily posts get distinctive visual treatment:

```javascript
// Badge rendering logic
{isDaily && (
  <span class={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mr-2 animate-pulse shadow-lg ${
    data.source === 'api' 
      ? 'bg-blue-500/10 text-blue-600 border border-blue-500/20 shadow-blue-500/30'  // API badge
      : 'bg-skin-active/10 text-skin-active border border-skin-active/20 shadow-skin-active/30' // Local badge
  }`}>
    <i class={`mr-1 ${data.source === 'api' ? 'ri-cloud-line' : 'ri-flashlight-line'}`}></i>
    {data.source === 'api' ? 'Live' : 'Daily'}
  </span>
)}
```

**Badge Types:**
- **Local Updates**: Orange/theme-colored badge with flashlight icon + "Daily" text
- **API Updates**: Blue badge with cloud icon + "Live" text
- **Animation**: Both badges have pulsing animation to draw attention

### 4. **Time Display & Countdown Logic**

#### **A. FeedPostDate Component Integration**

Daily posts use special time display logic in `/src/components/FeedPostDate.astro`:

```javascript
// Time display determination
if (isDaily) {
  // Show countdown to expiration instead of "time ago"
  const publishDate = date ? dayjs(date) : dayjs();
  const now = dayjs();
  const expirationDate = publishDate.add(24, 'hour');
  const timeDiff = dayjs.duration(expirationDate.diff(now));
  
  // Build countdown display
  let countdownParts = [];
  if (hours > 0) countdownParts.push(`${hours}h`);
  if (minutes > 0) countdownParts.push(`${minutes}m`);
  countdownParts.push(`${seconds}s`);
  postDateFromNow = countdownParts.join(' ');
} else {
  // Regular posts show "time ago"
  postDateFromNow = date ? dayjs(date).fromNow() : dayjs().format("YYYY-MM-DD");
}
```

#### **B. Real-Time Updates**

Daily posts get live countdown updates:

```javascript
// Set up interval for real-time countdown
if (this.dataset.isDaily === 'true') {
  this.intervalId = setInterval(() => {
    this.updateDisplay(); // Update every second
  }, 1000);
}
```

#### **C. Auto-Expiration (Failsafe)**

If a daily post somehow exists past its expiration (rare due to server-side filtering):

```javascript
// Check if expired and hide if necessary
if (timeDiff.asMilliseconds() <= 0) {
  const postContainer = this.closest('.py-4') as HTMLElement;
  if (postContainer) {
    postContainer.style.display = 'none'; // Hide entire post
  }
  return; // Stop further processing
}
```

### 5. **Rendering Flow Summary**

```
📝 daily-updates.md (source) 
    ↓
⚙️ Server-side parsing & filtering 
    ↓ 
📦 Post object creation
    ↓
🔄 Feed integration & ordering
    ↓
🎨 FeedPreview component 
    ↓
🏷️ Daily detection (isDaily flag)
    ↓ 
🎯 Special rendering logic:
    ├── Content processing (no truncation)
    ├── Badge display (source-specific)
    ├── Time countdown (instead of "ago")
    └── Real-time updates (1-second intervals)
```

### 6. **Memory Management & Performance**

#### **A. Efficient DOM Updates**
- Only countdown text is updated every second
- No full component re-renders
- Minimal DOM manipulation

#### **B. Cleanup Handling**
```javascript
disconnectedCallback() {
  if (this.intervalId) {
    clearInterval(this.intervalId); // Prevent memory leaks
  }
}
```

#### **C. Conditional Processing**
- Server-side filtering reduces client-side work
- No unnecessary DOM elements created for expired posts
- Optimized for minimal performance impact

### 7. **Error Handling & Fallbacks**

#### **A. Missing Data Protection**
```javascript
const publishDate = date ? dayjs(date) : dayjs(); // Fallback to current time
const isDaily = this.dataset.isDaily === 'true';  // Safe boolean conversion
```

#### **B. DOM Element Safety**
```javascript
const postContainer = this.closest('.py-4') as HTMLElement;
if (postContainer) { // Check exists before manipulation
  postContainer.style.display = 'none';
}
```

This comprehensive rendering system ensures daily updates appear seamlessly in the feed with appropriate styling, timing, and user experience while maintaining performance and reliability.

## �🎨 Client-Side Behavior

### Display Features
- **Special Styling**: Daily posts have animated badges and different appearance
- **Countdown Timer**: Shows time remaining until expiration
- **Auto-Hide**: Posts disappear when expired (failsafe)
- **Source Indicators**: Different badges for local vs API updates

### Time Display
- **Regular Posts**: "Published 2 hours ago"
- **Daily Posts**: "Expires in 21h 45m 30s"
- **Update Frequency**: Every second for daily posts

### Visual Indicators
- **Local Updates**: Orange badge with flashlight icon
- **API Updates**: Blue badge with cloud icon
- **Animated**: Pulsing animation to draw attention

## 🔄 Lifecycle Example

### Scenario: Update posted at 2025-10-02 10:00 IST

1. **Before 10:00**: Update not visible (server-side filtered)
2. **10:00 - 10:01**: Update appears with "Expires in 23h 59m" 
3. **Throughout day**: Countdown decreases in real-time
4. **Next day 09:59**: Shows "Expires in 1m 30s"
5. **Next day 10:00**: Update disappears (24 hours expired)

## 🚀 Performance Optimizations

### Server-Side Benefits (Local Updates)
- **No Flash**: Local updates are pre-filtered and sent to client
- **Reduced Build Payload**: Expired local content never reaches browser
- **SEO Friendly**: Search engines see relevant local content
- **Fast Initial Rendering**: No server-side API wait time

### Client-Side Benefits (API Updates)
- **Real-Time Updates**: API changes appear without rebuild
- **Automatic Refresh**: Updates fetched every 5 minutes
- **Network Visibility**: API calls visible in browser Network tab
- **No Build Dependency**: Independent of deployment pipeline

### Hybrid Efficiency
- **Best of Both**: Static local content + dynamic API content
- **Minimal DOM Manipulation**: Only countdown and new API updates
- **Smart Caching**: Prevents duplicate API update rendering
- **Memory Management**: Proper cleanup and deduplication

## 🛠️ Development Workflow

### Adding Local Updates
1. Edit `/src/content/daily-status/daily-updates.md`
2. Add new entry with IST timestamp
3. Commit and deploy
4. Update appears automatically at specified time

### Testing
```bash
# Build to test server-side filtering
npm run build

# Run dev server to test real-time countdown
npm run dev
```

### Debugging
- Check browser console for API fetch errors
- Verify IST timestamps are correctly formatted
- Ensure API response matches expected JSON structure

## 📋 Configuration Options

### Enable/Disable Features
```typescript
// In /src/consts.ts
dailyUpdatesApi: {
  enabled: false, // Disable API updates
  url: '',        // Keep empty if not using API
  apiKey: ''      // Optional authentication
}
```

### Feed Settings
```typescript
// In /src/consts.ts  
site: {
  feedPageSize: 10 // Number of posts per feed page
}
```

## 🔒 Security Considerations

### API Integration
- Use HTTPS endpoints only
- Implement proper authentication if needed
- Validate API response structure
- Handle API failures gracefully

### Content Safety
- Content is processed server-side (safe from XSS)
- Markdown is rendered securely
- Length limits prevent abuse
- Time-based expiration prevents stale content

## 📊 Monitoring

### Logs to Watch
- API fetch failures: Check browser console
- Build-time processing: Check Astro build output
- Client-side errors: Monitor countdown timer issues

### Performance Metrics
- Page load time impact (minimal due to server-side filtering)
- API response times
- Client-side memory usage for timers

## 🎯 Best Practices

1. **Time Management**
   - Always use IST timezone for consistency
   - Plan updates during high-traffic hours
   - Keep messages concise and actionable

2. **Content Guidelines**
   - Write engaging, time-sensitive content
   - Use clear, simple language
   - Include relevant emojis for visual appeal

3. **Technical**
   - Test updates in development first
   - Monitor API endpoint reliability
   - Keep backup plans for API failures
   - Regularly clean old entries from markdown file

## 🔧 Troubleshooting

### Common Issues

**Updates not appearing:**
- Check timestamp format (must be exact)
- Verify IST timezone conversion
- Ensure publication time has passed

**API updates failing:**
- Verify endpoint URL and authentication
- Check API response format
- Monitor network connectivity
- **Check console for specific error messages:**
  - `Internal API failed: HTTP 404` → API route not deployed
  - `CORS policy blocks request` → Direct fetch blocked, using fallback
  - `AllOrigins proxy failed` → Public proxy service down
  - `GitHub API fallback failed` → Rate limit or invalid URL

**Countdown not updating:**
- Check browser console for JavaScript errors
- Verify client-side timer initialization
- Test with different browsers
- **Common fixes:**
  - `Cannot set properties of undefined (setting 'innerHTML')` → Fixed in latest version
  - Empty "Expires in" → Component initialization timing issue

**Performance issues:**
- Review number of concurrent daily posts
- Check for memory leaks in timers
- Optimize content length and frequency
- **Monitor network requests:**
  - Too many API calls → Check refresh interval (default 5 minutes)
  - Slow CORS proxy → Consider hosting your own proxy
  - Rate limiting → GitHub API has 60 requests/hour limit

**Production deployment issues:**
- **Internal API 404 errors** → Ensure `/api/daily-status.js` is deployed
- **Base URL problems** → Check automatic base URL detection in console
- **HTTPS mixed content** → Ensure all API URLs use HTTPS

---

*This system provides a flexible, performant way to share time-sensitive updates while maintaining good user experience and SEO practices.*