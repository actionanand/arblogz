import React from 'react';

/**
 * SvgWrapper Component
 * Wraps imported SVG code with optional styling and caption
 * 
 * @param {string} svg - SVG code as string
 * @param {string} className - Additional CSS classes
 * @param {string} width - SVG width
 * @param {string} height - SVG height
 * @param {string} caption - Optional caption text shown below the SVG
 */
export function SvgWrapper({ svg, className = '', width, height, caption = '' }) {
  const wrapperClass = `remark-svg-wrapper ${className}`.trim();
  const containerClass = `svg-container ${className}`.trim();
  const style = {};
  
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div className={containerClass}>
      <div 
        className={wrapperClass} 
        style={style}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {caption && (
        <p className="svg-caption">{caption}</p>
      )}
    </div>
  );
}
