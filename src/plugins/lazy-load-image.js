import {visit} from "unist-util-visit";
import getUrl from "../utils/getUrl.js";

// Check if path is relative (not external URL)
const isRelativePath = (path) => path && 
  path.startsWith('/') && 
  !path.startsWith('//') &&
  !path.startsWith('http://') && 
  !path.startsWith('https://') &&
  !path.startsWith('data:');

// Process path: add base URL if relative, otherwise return as-is
const processPath = (path) => isRelativePath(path) ? getUrl(path) : path;

export function lazyLoadImage() {
  return function (tree) {
    visit(tree, (node) => {
      if (node.tagName !== 'img') return;
      
      const props = node.properties;
      const existingDataSrc = props.dataSrc || props['data-src'];
      
      if (existingDataSrc) {
        // HTML with data-src: process both src and data-src
        const processedDataSrc = processPath(existingDataSrc);
        props.dataSrc = processedDataSrc;
        props['data-src'] = processedDataSrc;
        props.src = processPath(props.src);
      } else {
        // Markdown image: move src to data-src, replace src with spinner
        const processedSrc = processPath(props.src);
        props.dataSrc = processedSrc;
        props['data-src'] = processedSrc;
        props.src = getUrl('/images/spinner.gif');
      }
      
      // Preserve alt attributes
      if (props.alt) {
        props.dataAlt = props.alt;
        props['data-alt'] = props.alt;
        props.alt = 'default';
      }
    })
  }
}
