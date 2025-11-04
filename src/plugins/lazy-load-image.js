import {visit} from "unist-util-visit";
import getUrl from "../utils/getUrl.js";

export function lazyLoadImage() {
  return function (tree) {
    visit(tree, function (node) {
      if (node.tagName === 'img') {
        const originalSrc = node.properties.src;
        
        // Check if it's a relative path (starts with / but not //)
        // and not an external URL (http://, https://, data:, etc.)
        const isRelativePath = originalSrc && 
          originalSrc.startsWith('/') && 
          !originalSrc.startsWith('//') &&
          !originalSrc.startsWith('http://') && 
          !originalSrc.startsWith('https://') &&
          !originalSrc.startsWith('data:');
        
        // For relative paths, apply base URL using getUrl()
        const processedSrc = isRelativePath ? getUrl(originalSrc) : originalSrc;
        
        // Set data-src to the processed path (with base URL if needed)
        node.properties['data-src'] = processedSrc;
        
        // Set spinner as the initial src
        node.properties.src = getUrl('/images/spinner.gif');
        
        // Preserve alt attributes
        node.properties['data-alt'] = node.properties.alt;
        node.properties.alt = 'default';
      }
    })
  }
}
