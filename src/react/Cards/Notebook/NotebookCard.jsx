import React, { useState, useEffect } from 'react';

const NotebookCard = ({ image, title, children, imageAlt = '' }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme detection
  useEffect(() => {
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const bodyElement = document.body;
      
      const localStorageTheme = localStorage.getItem('theme');
      const htmlHasDark = htmlElement.classList.contains('dark');
      const bodyHasDark = bodyElement?.classList.contains('dark');
      const htmlDataTheme = htmlElement.getAttribute('data-theme');
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

  const cardStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : 'white',
    borderRadius: '0.25rem',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    paddingLeft: '30px',
    background: isDarkMode 
      ? `repeating-linear-gradient(#0000 0 calc(1.2rem - 1px), #4a90c0 0 1.2rem) right bottom / 100% 100%, linear-gradient(#c44 0 0) 30px 0 / 2px 100% #1a1a1a`
      : `repeating-linear-gradient(#0000 0 calc(1.2rem - 1px), #66afe1 0 1.2rem) right bottom / 100% 100%, linear-gradient(red 0 0) 30px 0 / 2px 100% #fff`,
    backgroundRepeat: 'no-repeat',
    lineHeight: '1.2rem',
    WebkitMask: 'radial-gradient(circle 0.8rem at 2px 50%, #0000 98%, #000) 0 0 / 100% 2.4rem',
    mask: 'radial-gradient(circle 0.8rem at 2px 50%, #0000 98%, #000) 0 0 / 100% 2.4rem'
  };

  const cardItemStyle = {
    display: 'flex',
    padding: '1rem',
    filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.25))'
  };

  const imageContainerStyle = {
    height: 'calc(13 * 1.2rem)',
    padding: '1.2rem 1.2rem 0',
    position: 'relative'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const tapeStyle = {
    content: '""',
    position: 'absolute',
    width: '20px',
    height: '45px',
    background: isDarkMode ? '#333333b8' : '#e6e6e6b8',
    transform: 'rotate(45deg)'
  };

  const tapeTopStyle = {
    ...tapeStyle,
    left: '60%',
    top: '0'
  };

  const tapeBottomStyle = {
    ...tapeStyle,
    transform: 'rotate(-45deg)',
    top: 'auto',
    bottom: '-22px',
    left: '40%'
  };

  const contentStyle = {
    padding: '1.2rem'
  };

  const titleStyle = {
    margin: '1.2rem 0',
    fontSize: '1.3em',
    fontFamily: 'monospace',
    color: isDarkMode ? '#e0e0e0' : 'inherit'
  };

  const textStyle = {
    fontFamily: 'monospace',
    color: isDarkMode ? '#d0d0d0' : 'inherit'
  };

  const paragraphStyle = {
    margin: '1.2rem 0',
    lineHeight: '1.2rem'
  };

  return (
    <li style={cardItemStyle}>
      <div style={cardStyle}>
        <div style={imageContainerStyle}>
          <div style={tapeTopStyle}></div>
          <div style={tapeBottomStyle}></div>
          <img src={image} alt={imageAlt || title} style={imageStyle} />
        </div>
        <div style={contentStyle}>
          <h2 style={titleStyle}>{title}</h2>
          <div style={textStyle}>
            {React.Children.map(children, child => {
              if (child?.type === 'p') {
                return React.cloneElement(child, { style: { ...child.props.style, ...paragraphStyle } });
              }
              return child;
            })}
          </div>
        </div>
      </div>
    </li>
  );
};

export default NotebookCard;
