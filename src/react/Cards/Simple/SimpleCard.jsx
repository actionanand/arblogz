import React, { useState, useEffect } from 'react';

const SimpleCard = ({ image, title, children, readMoreUrl = '#', imageAlt = '' }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  // Theme-based colors
  const theme = isDarkMode 
    ? {
        background: '#1a1a1a',
        titleColor: isHovered ? '#4a9eff' : '#e0e0e0',
        textColor: '#b0b0b0',
        linkColor: '#4a9eff',
        shadowColor: 'rgba(255, 255, 255, 0.1)',
        focusOutline: '#4a9eff'
      }
    : {
        background: '#fff',
        titleColor: isHovered ? '#28666e' : '#000',
        textColor: '#333',
        linkColor: '#28666e',
        shadowColor: 'rgba(0, 0, 0, 0.16)',
        focusOutline: '#28666e'
      };

  const articleStyle = {
    position: 'relative',
    borderRadius: '16px',
    boxShadow: isHovered 
      ? `${theme.shadowColor} 0px 10px 36px 0px, ${theme.shadowColor} 0px 0px 0px 1px`
      : 'none',
    background: theme.background,
    transformOrigin: 'center',
    transition: 'all 0.4s ease-in-out',
    overflow: 'hidden'
  };

  const figureStyle = {
    margin: 0,
    padding: 0,
    aspectRatio: '16 / 9',
    overflow: 'hidden'
  };

  const imgStyle = {
    maxWidth: '100%',
    width: '100%',
    transformOrigin: 'center',
    transform: isHovered ? 'scale(1.1)' : 'scale(1.001)',
    transition: 'transform 0.4s ease-in-out',
    display: 'block'
  };

  const articleBodyStyle = {
    padding: '24px'
  };

  const h2Style = {
    margin: '0 0 18px 0',
    fontFamily: '"Bebas Neue", cursive, Arial, sans-serif',
    fontSize: '1.9rem',
    letterSpacing: '0.06em',
    color: theme.titleColor,
    transition: 'color 0.3s ease-out'
  };

  const paragraphStyle = {
    color: theme.textColor,
    fontSize: '1rem',
    lineHeight: '1.6',
    margin: '0 0 16px 0'
  };

  const linkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.linkColor,
    fontWeight: '500',
    position: 'relative'
  };

  const linkFocusStyle = {
    outline: `1px dotted ${theme.focusOutline}`
  };

  const iconStyle = {
    minWidth: '24px',
    width: '24px',
    height: '24px',
    marginLeft: '5px',
    transform: isHovered ? 'translateX(0)' : 'translateX(-20px)',
    opacity: isHovered ? 1 : 0,
    transition: 'all 0.3s'
  };

  const srOnlyStyle = {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  };

  return (
    <article 
      style={articleStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
    >
      <div className="article-wrapper">
        <figure style={figureStyle}>
          <img src={image} alt={imageAlt || title} style={imgStyle} />
        </figure>
        <div style={articleBodyStyle}>
          <h2 style={h2Style}>{title}</h2>
          <div style={paragraphStyle}>
            {children}
          </div>
          <a 
            href={readMoreUrl} 
            style={linkStyle}
            onFocus={(e) => e.currentTarget.style.outline = linkFocusStyle.outline}
            onBlur={(e) => e.currentTarget.style.outline = 'none'}
          >
            Read more <span style={srOnlyStyle}>about {title}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              style={iconStyle} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default SimpleCard;
