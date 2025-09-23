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

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
