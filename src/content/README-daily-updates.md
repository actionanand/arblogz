# Daily Status Updates

This folder contains temporary daily status updates that appear at the top of the blog feed for 24 hours.

## File: `daily-updates.md`

This file contains the daily update content that gets displayed on the blog feed.

### Format

Each daily update follows this format:

```
YYYY-MM-DD HH:MM: Content goes here

Additional paragraphs can follow with blank lines between them.

More content...
```

### Key Points

- **Date and Time**: Use format `YYYY-MM-DD HH:MM:` (24-hour time)
- **Expiration**: Posts automatically expire 24 hours after the specified publish time
- **Multi-paragraph**: Blank lines create separate paragraphs
- **Today's Content Only**: Only content for the current date (in IST timezone) will be displayed
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

1. **Parsing**: The system reads the file and looks for today's date
2. **Display**: Only today's content appears at the top of the feed
3. **Expiration**: Content disappears exactly 24 hours after the publish time
4. **Styling**: Daily updates have a special "Daily" badge and "Expires in X" timing

### Updating Content

1. Open `daily-updates.md`
2. Add new entries with today's date and time
3. Use blank lines for paragraph breaks
4. Save the file
5. The content will appear in the feed immediately

### Timezone

All times are in IST (Indian Standard Time, UTC+5:30). The system automatically handles timezone conversion.

### Notes

- Only one daily update per day is supported
- Content is displayed in full (not truncated like regular posts)
- Daily updates appear above all regular blog posts
- The "Expires in" countdown shows remaining time until disappearance