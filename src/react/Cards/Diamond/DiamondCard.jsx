import { useState, useEffect } from 'react';

/**
 * DiamondCard Component
 * 
 * A card component that displays images with diagonal rounded corners (top-right and bottom-left).
 * Creates an elegant asymmetric look perfect for galleries and portfolios.
 * 
 * @param {string} image - URL or path to the image (required)
 * @param {string} imageAlt - Alt text for accessibility (defaults to 'Diamond card image')
 * @param {string} size - Card size as CSS value (default: 'auto')
 * @param {string} width - Width of card when size is 'auto' (default: '300px')
 * @param {string} height - Height of card when size is 'auto' (default: '300px')
 * @param {boolean} isFreeSize - When true, image displays at natural dimensions (default: false)
 */
const DiamondCard = ({ 
  image, 
  imageAlt = 'Diamond card image',
  size = 'auto',
  width = '300px',
  height = '300px',
  isFreeSize = false
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const currentTheme = htmlElement.getAttribute('data-theme') || 
                          localStorage.getItem('theme') || 
                          'light';
      setIsDarkMode(currentTheme === 'dark');
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Also listen to storage events for theme changes
    const handleStorageChange = (e) => {
      if (e.key === 'theme') {
        checkTheme();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (!image) {
    return null;
  }

  // Diagonal rounded corners: top-right and bottom-left
  const borderRadius = '8px 48px 8px 48px';

  // Card style based on isFreeSize
  const cardStyle = isFreeSize ? {
    display: 'inline-block',
    maxWidth: '100%',
    borderRadius: borderRadius,
    overflow: 'hidden',
    boxShadow: isDarkMode 
      ? '0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.08)'
      : '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  } : {
    width: size === 'auto' ? width : size,
    height: size === 'auto' ? height : size,
    borderRadius: borderRadius,
    overflow: 'hidden',
    boxShadow: isDarkMode 
      ? '0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.08)'
      : '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  // Image style based on isFreeSize
  const imageStyle = isFreeSize ? {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    display: 'block',
  } : {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  };

  // Hover effect
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = isHovered ? {
    transform: 'translateY(-4px)',
    boxShadow: isDarkMode
      ? '0 8px 12px rgba(255, 255, 255, 0.15), 0 2px 4px rgba(255, 255, 255, 0.12)'
      : '0 8px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
  } : {};

  return (
    <div 
      style={{ ...cardStyle, ...hoverStyle }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={imageAlt}
        style={imageStyle}
      />
    </div>
  );
};

export default DiamondCard;
