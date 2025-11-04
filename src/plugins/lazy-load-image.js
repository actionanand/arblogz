import {visit} from "unist-util-visit";
import getUrl from "../utils/getUrl.js";

export function lazyLoadImage() {
  return function (tree) {
    visit(tree, function (node) {
      if (node.tagName === 'img') {
        const originalSrc = node.properties.src;
        const existingDataSrc = node.properties['dataSrc'] || node.properties['data-src'];
        
        // Check if it's a relative path (starts with / but not //)
        // and not an external URL (http://, https://, data:, etc.)
        const isRelativePath = (path) => path && 
          path.startsWith('/') && 
          !path.startsWith('//') &&
          !path.startsWith('http://') && 
          !path.startsWith('https://') &&
          !path.startsWith('data:');
        
        // If data-src already exists (manually set), process it
        if (existingDataSrc) {
          // Apply base URL to existing data-src if it's a relative path
          const processedDataSrc = isRelativePath(existingDataSrc) ? getUrl(existingDataSrc) : existingDataSrc;
          node.properties['data-src'] = processedDataSrc;
          
          // Also process the src (spinner) if it's relative
          if (isRelativePath(originalSrc)) {
            node.properties.src = getUrl(originalSrc);
          }
        } else {
          // No data-src exists, create it from src (for markdown images)
          const processedSrc = isRelativePath(originalSrc) ? getUrl(originalSrc) : originalSrc;
          node.properties['data-src'] = processedSrc;
          node.properties.src = getUrl('/images/spinner.gif');
        }
        
        // Preserve alt attributes
        node.properties['data-alt'] = node.properties.alt;
        node.properties.alt = 'default';
      }
    })
  }
}
