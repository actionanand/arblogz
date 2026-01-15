import { h as _h } from "hastscript";
import { visit } from "unist-util-visit";

/** Hacky function that generates an mdast HTML tree ready for conversion to HTML by rehype. */
function h(el, attrs = {}, children = []) {
  const { tagName, properties } = _h(el, attrs);
  return {
    type: "paragraph",
    data: { hName: tagName, hProperties: properties },
    children,
  };
}

/**
 * Remark plugin to render SVG code as inline SVG images
 * 
 * Supports two syntaxes:
 * 
 * 1. Code blocks with 'svg' language:
 *    ```svg
 *    <svg>...</svg>
 *    ```
 * 
 * 2. Container directive (requires remark-directive):
 *    :::svg
 *    <svg>...</svg>
 *    :::
 * 
 * 3. For imports, use the SvgWrapper component:
 *    import { HOUSE } from '@/data/svg/house.ts'
 *    import { SvgWrapper } from '@/components/SvgWrapper'
 *    <SvgWrapper svg={HOUSE} className="centered" width="300px" />
 * 
 * Optional attributes for styling:
 *    ```svg {class="my-class" width="200" height="200"}
 *    <svg>...</svg>
 *    ```
 * 
 *    :::svg{class="my-class" width="200" height="200"}
 *    <svg>...</svg>
 *    :::
 */
export function remarkSvgRender(options = {}) {
  const defaultOptions = {
    wrapperClass: 'remark-svg-wrapper',
    defaultWidth: null,
    defaultHeight: null,
    sanitize: true, // Basic SVG sanitization
    ...options,
  };

  /**
   * Sanitize SVG content to prevent XSS attacks
   * Removes script tags and event handlers
   */
  function sanitizeSvg(svgContent) {
    if (!defaultOptions.sanitize) return svgContent;

    // Remove script tags
    let sanitized = svgContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    // Remove event handlers (onclick, onload, etc.)
    sanitized = sanitized.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '');
    sanitized = sanitized.replace(/\s*on\w+\s*=\s*[^\s>]*/gi, '');
    
    // Remove javascript: protocol
    sanitized = sanitized.replace(/javascript:/gi, '');
    
    return sanitized;
  }

  /**
   * Extract SVG content from text node or code block
   */
  function extractSvgContent(node) {
    let svgContent = '';

    if (node.type === 'code') {
      svgContent = node.value;
    } else if (node.type === 'containerDirective' || node.type === 'leafDirective') {
      // For directive syntax, extract text from children
      const textNodes = [];
      visit(node, 'text', (textNode) => {
        textNodes.push(textNode.value);
      });
      visit(node, 'code', (codeNode) => {
        textNodes.push(codeNode.value);
      });
      svgContent = textNodes.join('\n');
    }

    return svgContent.trim();
  }

  /**
   * Validate if content is valid SVG
   */
  function isValidSvg(content) {
    const trimmed = content.trim();
    return trimmed.startsWith('<svg') && trimmed.includes('</svg>');
  }

  const transformer = (tree) => {
    // Handle code blocks with 'svg' language
    visit(tree, 'code', (node, index, parent) => {
      if (!parent || index === undefined) return;
      if (node.lang !== 'svg') return;

      const svgContent = extractSvgContent(node);
      
      if (!isValidSvg(svgContent)) {
        console.warn('Invalid SVG content detected, skipping render');
        return;
      }

      const sanitizedSvg = sanitizeSvg(svgContent);
      
      // Extract attributes from meta string (e.g., ```svg {class="custom"})
      const metaAttrs = {};
      if (node.meta) {
        const metaRegex = /(\w+)=["']([^"']*)["']/g;
        let match;
        while ((match = metaRegex.exec(node.meta)) !== null) {
          metaAttrs[match[1]] = match[2];
        }
      }

      // Combine default wrapper class with custom class
      const classNames = [defaultOptions.wrapperClass];
      if (metaAttrs.class) {
        classNames.push(metaAttrs.class);
      }

      const wrapperAttrs = {
        class: classNames.join(' '),
        style: ''
      };

      if (metaAttrs.width || defaultOptions.defaultWidth) {
        wrapperAttrs.style += `width: ${metaAttrs.width || defaultOptions.defaultWidth};`;
      }
      if (metaAttrs.height || defaultOptions.defaultHeight) {
        wrapperAttrs.style += `height: ${metaAttrs.height || defaultOptions.defaultHeight};`;
      }

      // Create a raw HTML node with the SVG
      parent.children[index] = {
        type: 'html',
        value: `<div class="${wrapperAttrs.class}" style="${wrapperAttrs.style}">${sanitizedSvg}</div>`
      };
    });

    // Handle container/leaf directives (:::svg)
    visit(tree, (node, index, parent) => {
      if (node.type !== 'containerDirective' && node.type !== 'leafDirective') {
        return;
      }
      if (!parent || index === undefined) {
        return;
      }
      if (node.name !== 'svg') {
        return;
      }

      const svgContent = extractSvgContent(node);
      
      if (!isValidSvg(svgContent)) {
        console.warn('Invalid SVG content in directive, skipping render');
        return;
      }

      const sanitizedSvg = sanitizeSvg(svgContent);
      
      // Extract attributes from directive
      const attributes = node.attributes || {};
      
      // Combine default wrapper class with custom class
      const classNames = [defaultOptions.wrapperClass];
      if (attributes.class) {
        classNames.push(attributes.class);
      }

      const wrapperAttrs = {
        class: classNames.join(' '),
        style: ''
      };

      if (attributes.width || defaultOptions.defaultWidth) {
        wrapperAttrs.style += `width: ${attributes.width || defaultOptions.defaultWidth};`;
      }
      if (attributes.height || defaultOptions.defaultHeight) {
        wrapperAttrs.style += `height: ${attributes.height || defaultOptions.defaultHeight};`;
      }

      // Create a raw HTML node with the SVG
      parent.children[index] = {
        type: 'html',
        value: `<div class="${wrapperAttrs.class}" style="${wrapperAttrs.style}">${sanitizedSvg}</div>`
      };
    });
  };

  return () => transformer;
}
