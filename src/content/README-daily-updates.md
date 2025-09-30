# Daily Status Updates

This folder con```
2025-09-28 10:30: Today's update will appear.

This content will show since it's within 24 hours.

2025-09-27 14:20: Yesterday's update.

This might show if it's still within 24 hours of current time.
```ns temporary status updates that appear at the top of the blog feed for 24 hours from their publish time.

## File: `daily-updates.md`

This file contains the status update content that gets displayed on the blog feed.

### Format

Each status update follows this format:

```
YYYY-MM-DD HH:MM: Content goes here

Additional paragraphs can follow with blank lines between them.

More content...
```

### Key Points

- **Date and Time**: Use format `YYYY-MM-DD HH:MM:` (24-hour time)
- **Expiration**: Posts automatically expire 24 hours after the specified publish time
- **Multi-paragraph**: Blank lines create separate paragraphs
- **24-Hour Window**: All content published within the last 24 hours will be displayed
- **Character Limit**: Content is truncated at 1000 characters

### Examples

```
2025-09-28 10:30: Welcome to today's special update!

This is a multi-paragraph update. Each paragraph is separated by blank lines.

Here's another paragraph with more details about today's news.
```

```
2025-09-29 14:15: Tomorrow's update will appear here.

This content won't show today since it's for tomorrow.
```

### How It Works

1. **Parsing**: The system reads the file and checks publish times
2. **Display**: All content published within the last 24 hours appears at the top of the feed
3. **Expiration**: Content disappears exactly 24 hours after the publish time
4. **Styling**: Status updates have a special "Daily" badge and "Expires in X" timing

### Updating Content

1. Open `daily-updates.md`
2. Add new entries with today's date and time
3. Use blank lines for paragraph breaks
4. Save the file
5. The content will appear in the feed immediately

### Timezone

All times are in IST (Indian Standard Time, UTC+5:30). The system automatically handles timezone conversion.

### Notes

- Multiple status updates can appear if published within 24 hours
- Content is displayed in full (not truncated like regular posts)
- Status updates appear above all regular blog posts
- The "Expires in" countdown shows remaining time until disappearance

## API Integration

In addition to static MD file updates, you can also fetch daily status updates from an external API. This allows for dynamic content from external sources while maintaining the same 24-hour expiration logic.

### Configuration

Enable API fetching in `src/consts.ts`:

```typescript
export const config = {
  // ... other config
  dailyUpdatesApi: {
    enabled: true, // Set to true to enable API fetching
    url: 'https://your-api-endpoint.com/daily-updates', // API endpoint URL
    apiKey: 'your-api-key', // Optional API key for authentication
    cacheTime: 5 * 60 * 1000, // Cache API responses for 5 minutes
  },
}
```

### API Response Format

Your API should return a JSON array with the following structure:

```json
[
  {
    "date": "2025-09-29 14:30",
    "content": "API-sourced daily update content here.\n\nMultiple paragraphs supported.",
    "title": "Optional Custom Title"
  },
  {
    "date": "2025-09-29 16:45", 
    "content": "Another API update",
    "title": "Breaking News"
  }
]
```

### API Requirements

- **Method**: GET
- **Authentication**: Optional Bearer token (if `apiKey` is provided)
- **Response**: JSON array of update objects
- **Date Format**: `YYYY-MM-DD HH:MM` (24-hour format, IST timezone)
- **Content**: Plain text with `\n\n` for paragraph breaks

### How API Updates Work

1. **Build Time**: API is called during site build (or revalidation)
2. **Filtering**: Only updates from the last 24 hours are displayed
3. **Merging**: API updates are combined with static MD file updates
4. **Ordering**: All updates are sorted by publish date (newest first)
5. **Expiration**: API updates follow the same 24-hour expiration as static updates

### API Update Features

- ✅ **Automatic expiration** after 24 hours
- ✅ **Multi-paragraph support** with `\n\n` separators  
- ✅ **Custom titles** (optional)
- ✅ **Error handling** - API failures don't break the site
- ✅ **Caching** - Configurable cache time to reduce API calls
- ✅ **Authentication** - Optional API key support

### Combined Usage

You can use both static MD files and API updates simultaneously:

```
Static MD file content + API updates = Complete daily status feed
```

- Static updates are ideal for planned announcements
- API updates are perfect for dynamic, real-time status information
- Both sources are merged and sorted chronologically
- Users see a unified feed with all current updates

### API Error Handling

- API failures are logged but don't break the site
- Static MD content continues to work normally
- Graceful fallback ensures the feed always loads
- Optional caching prevents excessive API calls

### Security Notes

- API keys are stored in configuration (not committed to git)
- HTTPS is recommended for API endpoints
- Consider rate limiting on your API server
- Validate API responses to prevent malformed content