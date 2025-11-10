import React, { useState, useEffect } from 'react';

const CircleCard = ({ 
  image, 
  imageAlt, 
  title,
  size = 'auto',
  width = '200px',
  height = '200px',
  bgColor = '#ff0082'
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme detection - only runs on client
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const bodyElement = document.body;
      
      const localStorageTheme = localStorage.getItem('theme');
      const htmlHasDark = htmlElement?.classList.contains('dark');
      const bodyHasDark = bodyElement?.classList.contains('dark');
      const htmlDataTheme = htmlElement?.getAttribute('data-theme');
      const bodyDataTheme = bodyElement?.getAttribute('data-theme');
      
      const isDark = 
        localStorageTheme === 'dark' ||
        htmlHasDark ||
        bodyHasDark ||
        htmlDataTheme === 'dark' ||
        bodyDataTheme === 'dark';
      
      setIsDarkMode(isDark);
    };
    
    checkTheme();
    window.addEventListener('storage', checkTheme);
    window.addEventListener('themeChanged', checkTheme);
    window.addEventListener('theme-change', checkTheme);
    window.addEventListener('astro:theme-change', checkTheme);
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme', 'theme']
    });
    
    if (document.body) {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class', 'data-theme', 'theme']
      });
    }

    return () => {
      window.removeEventListener('storage', checkTheme);
      window.removeEventListener('themeChanged', checkTheme);
      window.removeEventListener('theme-change', checkTheme);
      window.removeEventListener('astro:theme-change', checkTheme);
      observer.disconnect();
    };
  }, []);

  const circleStyle = {
    width: size === 'auto' ? (image ? width : '200px') : size,
    height: size === 'auto' ? (image ? height : '200px') : size,
    textAlign: 'center',
    position: 'relative',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: image ? 'transparent' : bgColor,
    flexShrink: 0,
    display: 'inline-block'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  };

  const titleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: isDarkMode ? '#fff' : '#fff',
    margin: 0,
    padding: '10px',
    fontSize: 'clamp(0.8rem, 1.5vw, 1.5rem)',
    fontWeight: 600,
    textAlign: 'center',
    width: '90%',
    wordWrap: 'break-word'
  };

  return (
    <li style={circleStyle}>
      {image ? (
        <img 
          src={image} 
          alt={imageAlt || title || 'Circle image'} 
          style={imageStyle}
        />
      ) : title ? (
        <h3 style={titleStyle}>{title}</h3>
      ) : null}
    </li>
  );
};

export default CircleCard;
