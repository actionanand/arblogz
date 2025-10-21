import rss from '@astrojs/rss';
import {site} from "../consts";
import getUrl from "../utils/getUrl.js";
import {getCollection} from "astro:content";
import {getCollectionByName} from "@/utils/getCollectionByName";
import {sortPostsByDate} from "@/utils/sortPostsByDate";

export async function GET(context) {
  // const blogs = await getCollection('blog')
  const blogs = await getCollectionByName('blog')
  let sortPosts = await sortPostsByDate(blogs);
  let blog = sortPosts.splice(0, 20);

  return rss({
    title: site.title,
    description: site.description,
    site: `${site.url}${site.baseUrl}`,
    trailingSlash: false,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description? post.data.description : post.body.substring(0, 140).replace(/#/gi, "") + "...",
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      author: site.author,
      link: `${getUrl("/blog/")}${post.slug}`,
      // Add image field for RSS feed
      customData: post.data.ogImage 
        ? `<enclosure url="${post.data.ogImage.startsWith('http') ? post.data.ogImage : `${site.url}${site.baseUrl}${post.data.ogImage}`}" type="image/jpeg"/>` 
        : `<enclosure url="${site.avatar.startsWith('http') ? site.avatar : `${site.url}${site.baseUrl}${site.avatar}`}" type="image/jpeg"/>`,
    })),
    customData: `<language>en-us</language>`,
  });
}
