import {defineCollection, z} from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional().nullable(),
    date: z.date(),
    outdated: z.number().int().min(0).max(2).default(0).nullable(), // 0=auto (6 months), 1=never outdated, 2=legacy/immediately outdated
    lastUpdated: z.date().optional().nullable(),
    tags: z.array(z.string()).or(z.string()).optional().nullable(),
    category: z.array(z.string()).or(z.string()).default('uncategorized').nullable(),
    sticky: z.number().default(0).nullable(),
    mathjax: z.boolean().default(false).nullable(),
    mermaid: z.boolean().default(false).nullable(),
    colorHighlight: z.boolean().default(false).nullable(),
    draft: z.boolean().default(false).nullable(),
    toc: z.boolean().default(true).nullable(),
    donate: z.boolean().default(true).nullable(),
    comment: z.boolean().default(true).nullable(),
    hideDivider: z.boolean().default(false).nullable(),
    //  Open Graph (OG) images
    ogImage: z.string().optional(),
    
    // Related articles feature - max 5 articles
    relatedArticles: z.array(z.string()).max(5).optional().nullable(),
    
    // Enhanced donation system fields
    showDonate: z.boolean().optional(),
    donateMessage: z.string().optional(),
    customDonate: z.object({
      enable: z.boolean().optional(),
      tip: z.string().optional(),
      wechatQRCode: z.string().optional(),
      alipayQRCode: z.string().optional(),
      gpayQRCode: z.string().optional(),
      paytmQRCode: z.string().optional(),
      phonepeQRCode: z.string().optional(),
      paypalUrl: z.string().optional(),
      githubSponsors: z.string().optional(),
      buyMeACoffee: z.string().optional(),
      kofi: z.string().optional(),
      patreon: z.string().optional(),
      opencollective: z.string().optional(),
      bitcoin: z.string().optional(),
      ethereum: z.string().optional(),
    }).optional(),
  }),
});

const feed = defineCollection({
  schema: z.object({
    date: z.date().or(z.string()).optional().nullable(),
    donate: z.boolean().default(true),
    comment: z.boolean().default(true),
  })
})

const dailyStatus = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
})

export const collections = {blog, feed, 'daily-status': dailyStatus};
