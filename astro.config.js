import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { site, characters } from './src/consts.ts'
import remarkDirective from 'remark-directive'; /* Handle ::: directives as nodes */
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
// import remarkMath from 'remark-math' /* for latex math support */
// import rehypeKatex from 'rehype-katex' /* again, for latex math support */

import { remarkModifiedTime } from './src/plugins/remark-modified-time.mjs';
import { resetRemark } from './src/plugins/reset-remark.js';
import {remarkAsides} from './src/plugins/remark-asides.js'
import {remarkCollapse} from './src/plugins/remark-collapse.js';
import {remarkGithubCard} from './src/plugins/remark-github-card.js'
import {lazyLoadImage} from './src/plugins/lazy-load-image.js';
import {remarkButton} from './src/plugins/remark-button.js';  /* Add admonitions */
import remarkCharacterDialogue from './src/plugins/remark-character-dialogue' /* Custom plugin to handle character admonitions */
import {remarkHtml} from './src/plugins/remark-html.js';
import {remarkColorHighlight} from './src/plugins/remark-simple-highlight.js';

import react from '@astrojs/react';

export default defineConfig({
  site: site.url,
  base: import.meta.env.PROD ? site.baseUrl : '',
  server: {
    allowedHosts: true // Allows all hosts
  },
  trailingSlash: 'never',
  integrations: [
    react(),
    sitemap(), tailwind(), expressiveCode({
    plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
    themes: ['github-dark', 'github-light'],
    styleOverrides: {
      codeFontFamily: 'jetbrains-mono',
      uiFontFamily: 'jetbrains-mono',
    },
    themeCssSelector: (theme) => `[data-theme='${theme.type}']`
  }), mdx()],
  markdown: {
    remarkPlugins: [
      remarkModifiedTime, 
      resetRemark, 
      remarkDirective, 
      remarkAsides({}), 
      remarkCollapse({}), 
      remarkGithubCard(), 
      remarkButton(), 
      remarkHtml(), 
      remarkColorHighlight,
      [remarkCharacterDialogue, { characters }],
    ],
    rehypePlugins: [lazyLoadImage],
  }
});