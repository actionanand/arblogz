import React, { useState, useEffect } from 'react';

const HoverCard = ({ image, title, children, imageAlt = '' }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to false for SSR
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Theme detection - only runs on client
  useEffect(() => {
    setIsMounted(true);
    
    const checkTheme = () => {
      if (typeof window === 'undefined') return;
      
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

  const cardItemStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '250px',
    maxHeight: '350px',
    boxShadow: isHovered 
      ? '0 45px 70px -6px rgba(0, 0, 0, 0.7)' 
      : '0 40px 60px -6px rgba(0, 0, 0, 0.5)',
    borderRadius: '4px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
    listStyle: 'none'
  };

  const titleStyle = {
    display: 'block',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: isDarkMode ? '#4a6a8a' : '#6184a8',
    padding: '8px 2%',
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 600,
    position: 'relative',
    zIndex: 2
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '300px'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    pointerEvents: 'none' // Prevent external scripts from adding attributes
  };

  const descStyle = {
    display: 'block',
    fontSize: '1rem',
    lineHeight: '1.5',
    position: 'absolute',
    top: isHovered ? '0' : '100%',
    left: 0,
    right: 0,
    height: '100%',
    opacity: isHovered ? 1 : 0,
    padding: '18px 8%',
    backgroundColor: isDarkMode ? 'rgba(45, 45, 45, 0.98)' : 'rgba(255, 255, 255, 0.98)',
    color: isDarkMode ? 'rgb(230, 230, 230)' : '#333',
    overflowY: 'auto',
    transition: 'opacity 0.5s ease, top 0.5s ease',
    zIndex: 10,
    boxSizing: 'border-box',
    pointerEvents: isHovered ? 'auto' : 'none'
  };

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;
    
    const scrollbarStyles = `
      .hover-card-desc::-webkit-scrollbar {
        width: 6px;
      }
      .hover-card-desc::-webkit-scrollbar-track {
        background: ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#f1f1f1'};
      }
      .hover-card-desc::-webkit-scrollbar-thumb {
        background: #6184a8;
        border-radius: 3px;
      }
      .hover-card-desc::-webkit-scrollbar-thumb:hover {
        background: ${isDarkMode ? '#7a9abe' : '#4a6a8a'};
      }
    `;
    
    // Inject scrollbar styles
    const styleElement = document.createElement('style');
    styleElement.innerHTML = scrollbarStyles;
    document.head.appendChild(styleElement);

    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, [isDarkMode, isMounted]);

  // Prevent external scripts from modifying image attributes
  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;
    
    const images = document.querySelectorAll('.hover-card-image');
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-fancybox') {
          mutation.target.removeAttribute('data-fancybox');
        }
      });
    });
    
    images.forEach((img) => {
      observer.observe(img, { attributes: true });
    });
    
    return () => observer.disconnect();
  }, [isMounted]);

  return (
    <li 
      style={cardItemStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 style={titleStyle}>{title}</h2>
      <div style={imageContainerStyle}>
        <img 
          className="hover-card-image"
          src={image} 
          alt={imageAlt || title}
          style={imageStyle}
        />
        <div 
          className="hover-card-desc"
          style={descStyle}
        >
          {children}
        </div>
      </div>
    </li>
  );
};

export default HoverCard;
