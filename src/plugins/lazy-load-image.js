import {visit} from "unist-util-visit";
import getUrl from "../utils/getUrl.js";

// Lazy load identifiers
const LAZY_LOAD_TRIGGER = 'lazy';  // For HTML: <img src="lazy" data-src="...">
const LAZY_LOAD_ALT = 'lazy';      // For Markdown: ![lazy](/image.jpg)

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
      const src = props.src;
      const alt = props.alt;
      const existingDataSrc = props.dataSrc || props['data-src'];
      
      // Check if lazy loading is explicitly requested
      const isLazyLoadHTML = src === LAZY_LOAD_TRIGGER && existingDataSrc;
      const isLazyLoadMarkdown = alt === LAZY_LOAD_ALT && !existingDataSrc;
      
      if (isLazyLoadHTML) {
        // HTML: <img src="lazy" data-src="...">
        props.dataSrc = processPath(existingDataSrc);
        props['data-src'] = processPath(existingDataSrc);
        props.src = getUrl('/images/spinner.gif');
        props.alt = 'default';
      } else if (isLazyLoadMarkdown) {
        // Markdown: ![lazy](/image.jpg)
        props.dataSrc = processPath(src);
        props['data-src'] = processPath(src);
        props.src = getUrl('/images/spinner.gif');
        props.dataAlt = alt;
        props['data-alt'] = alt;
        props.alt = 'default';
      } else if (existingDataSrc) {
        // HTML with data-src but no lazy trigger: process paths only
        props.dataSrc = processPath(existingDataSrc);
        props['data-src'] = processPath(existingDataSrc);
        props.src = processPath(src);
      } else {
        // Regular image: just process src path
        props.src = processPath(src);
      }
    })
  }
}
