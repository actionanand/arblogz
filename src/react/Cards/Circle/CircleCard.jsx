import React, { useState, useEffect } from 'react';

const CircleCard = ({ 
  image, 
  imageAlt, 
  title,
  size = '15%',
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
    width: size,
    textAlign: 'center',
    position: 'relative',
    paddingBottom: size,
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: image ? 'transparent' : bgColor,
    minWidth: '100px',
    flexShrink: 0
  };

  const imageStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    objectFit: 'cover'
  };

  const titleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: isDarkMode ? '#fff' : '#fff',
    margin: 0,
    padding: '10px',
    fontSize: '1.5vw',
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
