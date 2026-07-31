# 🎬 Media Embeds — Frontmatter Guide

The blog can embed videos and posts from several platforms at the end of any article via the `mediaEmbeds` frontmatter field. They render inside a **"Video Resources"** section by [`src/components/VideoResources.astro`](../src/components/VideoResources.astro), and the schema is defined in [`src/content/config.ts`](../src/content/config.ts).

## 📋 Field Shape

```yaml
mediaEmbeds:
  - type: <platform-type>
    id: "<platform-specific-id>"
    title: "Optional caption shown above the embed"
    startTime: 90        # optional, YouTube only (seconds)
    username: "handle"   # optional, TikTok only (without @)
```

`mediaEmbeds` is an **array**, so you can add multiple embeds to one article.

## ✅ Supported Types & What to Put in `id`

For each platform, `id` is **not the full URL** — it is the specific token described below. This keeps frontmatter short and avoids URL-encoding issues.

| `type` | What `id` should be | Example source URL | `id` value |
|--------|---------------------|--------------------|-----------|
| `youtube` | YouTube video id | `https://youtu.be/K6o9JTcPgOA` | `K6o9JTcPgOA` |
| `youtube-short` | Short video id | `https://www.youtube.com/shorts/WcLbw92V4qk` | `WcLbw92V4qk` |
| `instagram` | Reel shortcode | `https://www.instagram.com/reel/DagFUHJPUAc/` | `DagFUHJPUAc` |
| `instagram-post` | Post shortcode | `https://www.instagram.com/p/DanV_4Hn6ua/` | `DanV_4Hn6ua` |
| `facebook-post` | Photo/post numeric `fbid` | `https://www.facebook.com/photo?fbid=122123144576853303` | `122123144576853303` |
| `facebook-reel` | Reel numeric id | `https://www.facebook.com/reel/1369378695346639` | `1369378695346639` |
| `tiktok` | Numeric video id (last path segment) | `https://www.tiktok.com/@looplandia.kids/video/7567139089972006160` | `7567139089972006160` |
| `dailymotion` | Video id | `https://www.dailymotion.com/video/xani7te` | `xani7te` |

### Why `id` (not full URL)?

- **YouTube / Instagram / Dailymotion / TikTok:** the embed player only needs the short id, so we reconstruct the correct embed/permalink internally.
- **Facebook:** the id (`fbid` for photos, the reel id for reels) is enough — the component rebuilds the public permalink and feeds it to Facebook's iframe **social plugin**, so no Facebook App ID or SDK is required.
- **TikTok:** the numeric **video id** is all the iframe player (`/embed/v2/<id>`) needs. The **username is optional** — add it only so the "View on TikTok" button links to the nice `@user/video/id` URL.

## 🧩 How to Extract Each `id`

- **YouTube:** the part after `youtu.be/` or `v=` (e.g. `K6o9JTcPgOA`).
- **YouTube Short:** the part after `/shorts/`.
- **Instagram reel/post:** the code between `/reel/` or `/p/` and the trailing slash.
- **Facebook photo/post:** the number after `fbid=`.
- **Facebook reel:** the number after `/reel/`.
- **TikTok:** the number after `/video/` (the `@username` is optional metadata).
- **Dailymotion:** the code after `/video/`.

## 📝 Examples

### Single YouTube video with a start time

```yaml
mediaEmbeds:
  - type: youtube
    id: "K6o9JTcPgOA"
    title: "Full Tutorial"
    startTime: 85
```

### Instagram reel and post together

```yaml
mediaEmbeds:
  - type: instagram
    id: "DagFUHJPUAc"
    title: "Loading Dose in a Heart Attack"
  - type: instagram-post
    id: "DanV_4Hn6ua"
    title: "Common Medicines & Their Uses"
```

### Facebook photo/post and reel

```yaml
mediaEmbeds:
  - type: facebook-post
    id: "122123144576853303"
    title: "Facebook Photo Post"
  - type: facebook-reel
    id: "1369378695346639"
    title: "Facebook Reel"
```

### TikTok (username optional but recommended)

```yaml
mediaEmbeds:
  - type: tiktok
    id: "7567139089972006160"
    username: "looplandia.kids"
    title: "TikTok Clip"
```

### Dailymotion

```yaml
mediaEmbeds:
  - type: dailymotion
    id: "xani7te"
    title: "Dailymotion Video"
```

## ⚙️ How Rendering Works

- **YouTube / YouTube Short** — rendered via the YouTube IFrame API (with a mute toggle and PiP hint).
- **Instagram** — rendered via Instagram's `embed.js` blockquote. `instagram` → `/reel/`, `instagram-post` → `/p/`.
- **Facebook** — rendered via Facebook's **iframe social plugins** (`plugins/post.php` for posts, `plugins/video.php` for reels/videos). No SDK/App ID needed.
- **TikTok** — rendered via TikTok's iframe player `https://www.tiktok.com/embed/v2/<id>`.
- **Dailymotion** — rendered via `https://www.dailymotion.com/embed/video/<id>` in a 16:9 frame.

Each embed also shows a "View on …" link that opens the original post in a new tab.

## 🖼️ Picture-in-Picture (Watch While Reading)

Every embed has a **PiP** button so readers can pop the video into a small floating window and keep watching while they scroll and read the article.

- **Preferred:** uses the browser's **Document Picture-in-Picture API** (Chrome/Edge) to open a real, OS-level always-on-top window containing the player.
- **Fallback:** on browsers without that API (Firefox/Safari), it opens a **draggable, closable floating mini-player** pinned to the corner of the page.
- **YouTube extra:** PiP resumes at the **current playback time** and **pauses the inline player** to avoid double audio.
- Portrait content (Shorts, reels, TikTok) opens in a **9:16** window; landscape content in **16:9**.

No frontmatter is needed — PiP is available automatically for every embed.

## ⚠️ Notes & Caveats

- The content must be **public** for embeds to display.
- Facebook occasionally blocks plugin rendering depending on the post's privacy/region; the "View on Facebook" link always works as a fallback.
- Only YouTube supports `startTime`; only TikTok uses `username`. Extra fields on other types are ignored.
- Titles are optional; when omitted, no caption is shown.
