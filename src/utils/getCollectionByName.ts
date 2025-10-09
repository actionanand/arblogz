import {getCollection} from "astro:content";

export const getCollectionByName = async (name: string) => {
  let posts = await getCollection(name as any);
  if (posts && posts.length > 0 ) {
    return posts.filter(({data}) => {
      // In production: hide draft posts
      // In development: show all posts (including drafts for preview)
      return import.meta.env.PROD ? !data.draft : true
    });
  } else {
    return []
  }
}

// Helper function to check if we're in development mode
export const isDevelopment = () => import.meta.env.DEV;

// Helper function to check if a post is a draft
export const isDraft = (post: any) => post.data?.draft === true;
