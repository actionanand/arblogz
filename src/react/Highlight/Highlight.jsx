import React from 'react';

export default function Highlight({
  children,
  color,
  highlight = 'bg',
  fontWeight = 'normal',
  textDecoration = 'none',
  fontStyle = 'normal',
  textAlign = 'left',
  display = 'inline',
  fontSize = 'inherit'
}) {
  if (highlight === 'fg') {
    return (
      <span
        style={{
          color,
          fontWeight,
          textDecoration,
          fontStyle,
          textAlign,
          display
        }}
      >
        {children}
      </span>
    );
  } else if (highlight === 'format') {
    return (
      <div style={{
        textAlign,
        color,
        fontWeight,
        textDecoration,
        fontStyle,
        display,
        fontSize
      }}>
        {children}
      </div>
    );
  } else if (highlight === 'lightBg') {
    return (
      <span
        style={{
          backgroundColor: color,
          borderRadius: '4px',
          color: '#4B0082',
          padding: '0.2rem',
          paddingTop: '0',
        }}
      >
        {children}
      </span>
    );
  } else {
    return (
      <span
        style={{
          backgroundColor: color,
          borderRadius: '4px',
          color: '#fff',
          padding: '0.2rem',
          paddingTop: '0',
        }}
      >
        {children}
      </span>
    );
  }
}
