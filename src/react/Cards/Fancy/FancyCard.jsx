import React, { useState, useEffect } from 'react';

const FancyCard = ({ image, title, children, imageAlt = '' }) => {
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

  const colors = {
    light: {
      purple: '#603f8b',
      aqua: '#b4fee7',
      violet: '#a16ae8',
      fuchsia: '#fd49a0',
      white: '#efefef',
      black: '#222',
      trueBlack: '#000'
    },
    dark: {
      purple: '#8b5fc9',
      aqua: '#7effcc',
      violet: '#c494ff',
      fuchsia: '#ff6bb5',
      white: '#f5f5f5',
      black: '#1a1a1a',
      trueBlack: '#000'
    }
  };

  const theme = isDarkMode ? colors.dark : colors.light;

  const cardItemStyle = {
    display: 'flex'
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: theme.purple,
    borderRadius: '5px 25px 5px 50px',
    transition: 'transform 0.1s linear, box-shadow 0.2s',
    transform: isHovered ? 'scale(1.01)' : 'scale(1)',
    boxShadow: isHovered ? '0 10px 5px -5px rgba(0, 0, 0, 0.2)' : 'none',
    outline: 'none'
  };

  const imageContainerStyle = {
    display: 'flex',
    height: '250px',
    boxShadow: `0 50px 100px 0 ${theme.violet}`
  };

  const imageStyle = {
    display: 'block',
    width: '100%',
    height: 'auto',
    objectFit: 'cover'
  };

  const contentStyle = {
    padding: '0.5rem 1rem 1rem',
    color: theme.white
  };

  const titleStyle = {
    position: 'absolute',
    top: isHovered ? '2rem' : '0',
    right: '0',
    width: '90%',
    height: 'auto',
    color: theme.black,
    padding: '0.5rem',
    borderRadius: '5px 0 0 5px',
    transform: 'rotate(-3.3deg)',
    transformOrigin: 'left top',
    fontFamily: 'Georgia, Times, serif',
    fontWeight: '600',
    fontSize: isHovered ? '2rem' : '1.325rem',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    backgroundColor: 'rgba(253, 73, 160, 0.75)',
    transition: 'top 0.5s ease-in, font-size 0.5s ease-in'
  };

  const textContainerStyle = {
    fontFamily: 'Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica, Helvetica Neue, Arial, sans-serif',
    lineHeight: '1.5',
    padding: '0 1rem',
    maxHeight: '20rem',
    overflow: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: `${theme.aqua} ${theme.violet}`
  };

  return (
    <li style={cardItemStyle}>
      <div 
        style={cardStyle}
        tabIndex={0}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <div style={imageContainerStyle}>
          <img src={image} alt={imageAlt || title} style={imageStyle} />
        </div>
        <div style={contentStyle}>
          <h2 style={titleStyle}>{title}</h2>
          <div style={textContainerStyle}>
            {React.Children.map(children, (child) => {
              if (child?.type === 'p') {
                const firstParagraph = React.Children.toArray(children)[0] === child;
                const pStyle = {
                  margin: '0.5rem 0'
                };
                
                const firstLetterStyle = firstParagraph ? {
                  fontSize: '1.8em',
                  fontFamily: 'Georgia, Times, serif',
                  marginRight: '0.05em',
                  float: 'left',
                  lineHeight: '1'
                } : {};

                // Clone the child and apply styling
                return React.cloneElement(child, {
                  style: { ...child.props.style, ...pStyle }
                });
              }
              
              // Handle special classes
              if (child?.props?.className === 'upcharge') {
                const upchargeStyle = {
                  position: 'relative',
                  fontWeight: '600',
                  backgroundColor: theme.violet,
                  padding: '0.5rem 0.75rem',
                  color: theme.trueBlack,
                  borderRadius: '0 10px',
                  zIndex: 0,
                  overflow: 'hidden',
                  display: 'block',
                  margin: '0.5rem 0'
                };
                
                return (
                  <p style={upchargeStyle}>
                    {child.props.children}
                  </p>
                );
              }
              
              if (child?.props?.className === 'note') {
                const noteStyle = {
                  display: 'block',
                  textAlign: 'center',
                  padding: '0.5rem',
                  fontWeight: '900',
                  backgroundImage: `linear-gradient(-45deg, transparent 10%, ${theme.aqua} 10.5%, ${theme.aqua} 90%, transparent 90.5%)`,
                  color: theme.black,
                  fontSize: '1.3em',
                  fontStyle: 'italic',
                  marginTop: '1rem'
                };
                
                return React.cloneElement(child, {
                  style: { ...child.props.style, ...noteStyle }
                });
              }
              
              return child;
            })}
          </div>
        </div>
      </div>
    </li>
  );
};

export default FancyCard;
