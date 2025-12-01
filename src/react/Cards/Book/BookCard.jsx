import React, { useState, useEffect } from 'react';

const BookCard = ({ 
  icon = 'ri-book-open-line', // Remix icon class
  title, 
  subtitle, 
  heading, 
  children, 
  color = 'city' // city, ski, beach, camping
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
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

  // Color schemes
  const colorSchemes = {
    city: {
      gradient: 'linear-gradient(to bottom, #ff73b9, #ff40a1)',
      heading: '#ff62b2',
      button: '#ff40a1',
      buttonHover: '#ff40a1'
    },
    ski: {
      gradient: 'linear-gradient(to bottom, #47c2d7, #279eb2)',
      heading: '#2aaac1',
      button: '#279eb2',
      buttonHover: '#279eb2'
    },
    beach: {
      gradient: 'linear-gradient(to bottom, #fb9b88, #f86647)',
      heading: '#fa7f67',
      button: '#fa7f67',
      buttonHover: '#fa7f67'
    },
    camping: {
      gradient: 'linear-gradient(to bottom, #00db93, #00b97d)',
      heading: '#00b97c',
      button: '#00b97d',
      buttonHover: '#00b97d'
    }
  };

  const currentColor = colorSchemes[color] || colorSchemes.city;

  const cardStyle = {
    backgroundColor: isDarkMode ? 'rgba(255,255,255, .05)' : 'rgba(0,0,0, .05)',
    boxShadow: isHovered 
      ? '-.1rem 1.7rem 6.6rem -3.2rem rgba(0,0,0,0.75)' 
      : '-.1rem 1.7rem 6.6rem -3.2rem rgba(0,0,0,0.5)',
    height: '15rem',
    position: 'relative',
    transition: 'all 1s ease',
    width: isHovered ? '30rem' : '15rem',
    maxWidth: '100%'
  };

  const flipCardStyle = {
    height: '15rem',
    perspective: '100rem',
    position: 'absolute',
    right: 0,
    transition: 'all 1s ease',
    visibility: 'hidden',
    width: '15rem',
    zIndex: 100
  };

  const flipCardContainerStyle = {
    height: '100%',
    position: 'absolute',
    right: 0,
    transformOrigin: 'left',
    transformStyle: 'preserve-3d',
    transition: 'all 1s ease',
    width: '100%',
    transform: isHovered ? 'rotateY(-180deg)' : 'rotateY(0deg)'
  };

  const cardFrontStyle = {
    backfaceVisibility: 'hidden',
    backgroundColor: isDarkMode ? '#2d2d2d' : '#fafbfa',
    height: '15rem',
    width: '15rem',
    position: 'absolute',
    top: 0,
    left: 0
  };

  const cardFrontTpStyle = {
    alignItems: 'center',
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 57% 90%, 50% 100%, 43% 90%, 0 90%)',
    display: 'flex',
    flexDirection: 'column',
    height: '12rem',
    justifyContent: 'center',
    padding: '.75rem',
    background: currentColor.gradient,
    color: '#fafbfa'
  };

  const iconStyle = {
    fontSize: '3.25rem',
    color: '#fafbfa',
    marginTop: '-.5rem',
    marginBottom: '.5rem'
  };

  const headingStyle = {
    fontSize: '1.5rem',
    marginTop: '.25rem',
    color: '#fafbfa',
    fontWeight: 600
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    marginTop: '-.2rem',
    color: '#fafbfa',
    textAlign: 'center'
  };

  const cardFrontBtStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '3rem'
  };

  const textViewStyle = {
    fontSize: '1.3rem',
    fontWeight: 800,
    marginTop: '.2rem',
    color: currentColor.heading
  };

  const cardBackStyle = {
    backfaceVisibility: 'hidden',
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f0f0f0',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'rotateY(180deg)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: currentColor.gradient
  };

  const insidePageStyle = {
    backgroundColor: isDarkMode ? '#2d2d2d' : '#fafbfa',
    boxShadow: isHovered 
      ? 'inset 1rem 0px 5rem -2.5rem rgba(0,0,0,0.1)'
      : 'inset 20rem 0px 5rem -2.5rem rgba(0,0,0,0.25)',
    height: '100%',
    padding: '1rem',
    position: 'absolute',
    right: 0,
    transition: 'all 1s ease',
    width: '15rem',
    zIndex: 1,
    overflow: 'auto'
  };

  const insidePageContainerStyle = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center',
    width: '100%',
    justifyContent: 'space-between',
    overflowY: 'auto',
    overflowX: 'hidden',
    overscrollBehavior: 'contain'
  };

  const insideHeadingStyle = {
    paddingBottom: '1rem',
    width: '100%',
    fontSize: '1.3rem',
    fontWeight: 800,
    marginTop: '.2rem',
    color: currentColor.heading
  };

  const insideTextStyle = {
    color: isDarkMode ? '#e6e6e6' : '#333',
    fontSize: '1rem',
    lineHeight: '1.5'
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={flipCardStyle}>
        <div style={{ visibility: 'visible' }}>
          <div style={flipCardContainerStyle}>
            {/* Front of card */}
            <div style={cardFrontStyle}>
              <div style={cardFrontTpStyle}>
                <i className={icon} style={iconStyle}></i>
                <h2 style={headingStyle}>{title}</h2>
                {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
              </div>
              <div style={cardFrontBtStyle}>
                <p style={textViewStyle}>View me</p>
              </div>
            </div>

            {/* Back of card */}
            <div style={cardBackStyle}>
              <i className={icon} style={{ fontSize: '6rem', color: 'rgba(255,255,255,0.3)' }}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Inside page */}
      <div style={insidePageStyle}>
        <div style={insidePageContainerStyle}>
          <h3 style={insideHeadingStyle}>{heading}</h3>
          <div style={insideTextStyle}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
