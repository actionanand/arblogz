import React from 'react';

export function SvgWrapper({ svg, className = '', width, height }) {
  const wrapperClass = `remark-svg-wrapper ${className}`.trim();
  const style = {};
  
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div 
      className={wrapperClass} 
      style={style}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
