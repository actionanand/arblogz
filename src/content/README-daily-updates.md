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