import React, { useState, useEffect } from 'react';

// Predefined color schemes
const COLOR_SCHEMES = {
  teal: {
    light: { bg: 'teal', dark: '#006666' },
    dark: { bg: '#2d5f5d', dark: '#1f4442' }
  },
  blue: {
    light: { bg: '#3498db', dark: '#2980b9' },
    dark: { bg: '#2c5f7f', dark: '#1e4158' }
  },
  purple: {
    light: { bg: '#9b59b6', dark: '#8e44ad' },
    dark: { bg: '#6c4a7f', dark: '#4a3358' }
  },
  orange: {
    light: { bg: '#e67e22', dark: '#d35400' },
    dark: { bg: '#a85f1a', dark: '#7a4412' }
  },
  green: {
    light: { bg: '#27ae60', dark: '#229954' },
    dark: { bg: '#1e7e4a', dark: '#165a34' }
  },
  red: {
    light: { bg: '#e74c3c', dark: '#c0392b' },
    dark: { bg: '#a83830', dark: '#7a2822' }
  },
  pink: {
    light: { bg: '#e91e63', dark: '#c2185b' },
    dark: { bg: '#a81650', dark: '#7a103a' }
  },
  gray: {
    light: { bg: '#95a5a6', dark: '#7f8c8d' },
    dark: { bg: '#5a6266', dark: '#4a5054' }
  }
};

const DogearCard = ({ title, children, color = 'teal', customColor, bgColor = 'transparent' }) => {
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

  // Get color scheme
  const getColorScheme = () => {
    if (customColor) {
      // Custom color provided
      return {
        cardBg: customColor,
        cardBgDark: customColor,
        text: '#f0f0f0'
      };
    }
    
    // Use predefined color scheme
    const scheme = COLOR_SCHEMES[color] || COLOR_SCHEMES.teal;
    const themeColors = isDarkMode ? scheme.dark : scheme.light;
    
    return {
      cardBg: themeColors.bg,
      cardBgDark: themeColors.dark,
      text: isDarkMode ? '#f0f0f0' : 'snow'
    };
  };

  const theme = getColorScheme();

  const cardStyle = {
    display: 'inline-block',
    width: '100%',
    padding: '4rem 1rem 7rem 1rem',
    backgroundColor: theme.cardBg,
    position: 'relative',
    fontFamily: "'Marvel', 'Arial', sans-serif"
  };

  // Top-right dogear (folded corner)
  const afterStyle = {
    content: '""',
    display: 'block',
    width: '0px',
    height: '0px',
    top: '0px',
    right: '0px',
    borderBottom: `20px solid ${theme.cardBgDark}`,
    borderLeft: `20px solid ${theme.cardBgDark}`,
    borderRight: `20px solid ${bgColor}`,
    borderTop: `20px solid ${bgColor}`,
    position: 'absolute',
    filter: 'drop-shadow(-5px 5px 3px rgba(0,0,0,0.5))'
  };

  // Bottom-left dogear (folded corner)
  const beforeStyle = {
    content: '""',
    display: 'block',
    width: '0px',
    height: '0px',
    borderTop: `40px solid ${theme.cardBgDark}`,
    borderRight: `40px solid ${theme.cardBgDark}`,
    borderLeft: `40px solid ${bgColor}`,
    borderBottom: `40px solid ${bgColor}`,
    bottom: '0px',
    left: '0px',
    position: 'absolute',
    filter: 'drop-shadow(7px -7px 5px rgba(0,0,0,0.5))'
  };

  const h2Style = {
    color: theme.text,
    marginBottom: '1rem',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const pStyle = {
    color: theme.text,
    fontSize: '1.1rem',
    lineHeight: '140%'
  };

  return (
    <div style={cardStyle}>
      <div style={afterStyle}></div>
      <div style={beforeStyle}></div>
      <h2 style={h2Style}>{title}</h2>
      <div style={pStyle}>
        {React.Children.map(children, child => {
          if (child?.type === 'p') {
            return React.cloneElement(child, { 
              style: { 
                ...child.props.style, 
                color: theme.text,
                fontSize: '1.1rem',
                lineHeight: '140%',
                margin: '0 0 1rem 0'
              } 
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default DogearCard;
