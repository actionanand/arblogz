import {site} from '@/consts'

/*
Open Graph (OG) images is the preview image that appears
when you share your blog post on social media platforms 
and messaging apps.
*/

/**
 * Converts a relative or absolute image path to a full URL for OG images
 * @param imagePath - The image path from frontmatter or default
 * @returns Full absolute URL for the image
 */
export function getOgImageUrl(imagePath: string | undefined): string {
  // If no image path provided, use avatar
  if (!imagePath) {
    const avatarPath = site.avatar.startsWith('http://') || site.avatar.startsWith('https://') 
      ? site.avatar 
      : `${site.url}${import.meta.env.PROD ? site.baseUrl : ''}${site.avatar}`
    return avatarPath
  }

  // If already a full URL (external image), return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }

  // For relative paths, construct full URL
  // Remove leading slash if present to avoid double slashes
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
  
  // Construct full URL with base URL only in production
  const baseUrl = import.meta.env.PROD ? site.baseUrl : ''
  return `${site.url}${baseUrl}${cleanPath}`
}
