import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { site, characters } from './src/consts.ts'
import remarkDirective from 'remark-directive';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import remarkMath from 'remark-math';

import { remarkModifiedTime } from './src/plugins/remark-modified-time.mjs';
import { resetRemark } from './src/plugins/reset-remark.js';
import {remarkAsides} from './src/plugins/remark-asides.js'
import {remarkCollapse} from './src/plugins/remark-collapse.js';
import {remarkExplore} from './src/plugins/remark-explore.js';
import {remarkGithubCard} from './src/plugins/remark-github-card.js'
import {lazyLoadImage} from './src/plugins/lazy-load-image.js';
import {remarkButton} from './src/plugins/remark-button.js';
import remarkCharacterDialogue from './src/plugins/remark-character-dialogue'
import {remarkHtml} from './src/plugins/remark-html.js';
import {remarkColorHighlight} from './src/plugins/remark-simple-highlight.js';
import {remarkSvgRender} from './src/plugins/remark-svg-render.js';
import {rehypeConditionalKatex} from './src/plugins/rehype-conditional-katex.js';
import rehypeRaw from 'rehype-raw';

import react from '@astrojs/react';

export default defineConfig({
  site: site.url,
  base: import.meta.env.PROD ? site.baseUrl : '',
  server: {
    allowedHosts: true
  },
  trailingSlash: 'never',
  integrations: [
    react(),
    sitemap(),
    tailwind(),
    expressiveCode({
      plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
      themes: ['github-dark', 'github-light'],
      styleOverrides: {
        codeFontFamily: 'jetbrains-mono',
        uiFontFamily: 'jetbrains-mono',
      },
      themeCssSelector: (theme) => `[data-theme='${theme.type}']`
    }),
    mdx()
  ],
  markdown: {
    remarkPlugins: [
      // Needed during parsing so MDX treats $...$/$$...$$ as math instead of
      // passing TeX braces such as \text{...} to Acorn as JS expressions.
      remarkMath,

      remarkModifiedTime,
      resetRemark,
      remarkDirective,
      remarkAsides({}),
      remarkCollapse({}),
      remarkExplore(),
      remarkGithubCard(),
      remarkButton(),
      remarkHtml(),
      remarkColorHighlight,
      remarkSvgRender(),
      [remarkCharacterDialogue, { characters }],
    ],
    rehypePlugins: [
      rehypeRaw,

      // KaTeX rendering is still controlled by frontmatter `mathjax: true`.
      // This plugin also handles literal ₹ safely before KaTeX sees it.
      rehypeConditionalKatex,

      lazyLoadImage,
    ],
  }
});
