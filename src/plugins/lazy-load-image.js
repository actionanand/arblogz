import {visit} from "unist-util-visit";
import getUrl from "../utils/getUrl.js";

export function lazyLoadImage() {
  return function (tree) {
    visit(tree, function (node) {
      if (node.tagName === 'img') {
        const originalSrc = node.properties.src;
        // Check both camelCase and hyphenated versions for data-src
        const existingDataSrc = node.properties.dataSrc || node.properties['data-src'];
        
        // Check if it's a relative path (starts with / but not //)
        // and not an external URL (http://, https://, data:, etc.)
        const isRelativePath = (path) => path && 
          path.startsWith('/') && 
          !path.startsWith('//') &&
          !path.startsWith('http://') && 
          !path.startsWith('https://') &&
          !path.startsWith('data:');
        
        // If data-src already exists (manually written in HTML), preserve and process it
        if (existingDataSrc) {
          // Process the existing data-src to add base URL if needed
          const processedDataSrc = isRelativePath(existingDataSrc) ? getUrl(existingDataSrc) : existingDataSrc;
          node.properties.dataSrc = processedDataSrc;
          node.properties['data-src'] = processedDataSrc;
          
          // Also process the src attribute if it's relative
          if (isRelativePath(originalSrc)) {
            node.properties.src = getUrl(originalSrc);
          }
        } else {
          // No data-src exists (markdown images), create it from src
          const processedSrc = isRelativePath(originalSrc) ? getUrl(originalSrc) : originalSrc;
          node.properties.dataSrc = processedSrc;
          node.properties['data-src'] = processedSrc;
          // Replace src with spinner
          node.properties.src = getUrl('/images/spinner.gif');
        }
        
        // Preserve alt attributes
        if (node.properties.alt) {
          node.properties.dataAlt = node.properties.alt;
          node.properties['data-alt'] = node.properties.alt;
          node.properties.alt = 'default';
        }
      }
    })
  }
}
