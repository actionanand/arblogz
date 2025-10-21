import React, { useState, useEffect } from 'react';

const HorizontalRuler = ({ 
  variant = "flowers", 
  color = "auto",
  size = "medium",
  spacing = "normal"
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 🌓 Theme detection
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
    
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function(key, value) {
      originalSetItem.apply(this, arguments);
      if (key === 'theme') {
        setTimeout(checkTheme, 0);
      }
    };

    return () => {
      window.removeEventListener('storage', checkTheme);
      window.removeEventListener('themeChanged', checkTheme);
      window.removeEventListener('theme-change', checkTheme);
      window.removeEventListener('astro:theme-change', checkTheme);
      observer.disconnect();
      localStorage.setItem = originalSetItem;
    };
  }, []);

  // Size configurations
  const sizes = {
    small: { height: 40, iconSize: 16, gap: 20 },
    medium: { height: 60, iconSize: 20, gap: 30 },
    large: { height: 80, iconSize: 24, gap: 40 }
  };

  // Spacing configurations
  const spacings = {
    tight: { marginTop: 20, marginBottom: 20 },
    normal: { marginTop: 40, marginBottom: 40 },
    loose: { marginTop: 60, marginBottom: 60 }
  };

  const currentSize = sizes[size] || sizes.medium;
  const currentSpacing = spacings[spacing] || spacings.normal;

  // Color determination
  const getColor = () => {
    if (color !== "auto") return color;
    return isDarkMode ? "#10b981" : "#059669"; // emerald-500/600
  };

  const getLineColor = () => {
    if (color !== "auto") {
      // Use a lighter version of the custom color
      return color + "40"; // Add opacity
    }
    return isDarkMode ? "#374151" : "#e5e7eb"; // gray-700/200
  };

  // Variant designs
  const variants = {
    flowers: {
      icon: "🌸",
      pattern: ["🌸", "🌼", "🌺", "🌻", "🌷"]
    },
    stars: {
      icon: "⭐",
      pattern: ["⭐", "✨", "💫", "🌟"]
    },
    dots: {
      icon: "•",
      pattern: ["•", "◦", "•", "◦"]
    },
    hearts: {
      icon: "💚",
      pattern: ["💚", "💛", "💙", "💜"]
    },
    geometric: {
      icon: "◆",
      pattern: ["◆", "◇", "◆", "◇"]
    },
    minimal: {
      icon: "—",
      pattern: ["—"]
    }
  };

  const currentVariant = variants[variant] || variants.flowers;
  const pattern = currentVariant.pattern;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: `${currentSpacing.marginTop}px`,
        marginBottom: `${currentSpacing.marginBottom}px`,
        width: '100%',
        height: `${currentSize.height}px`,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Left line */}
      <div
        style={{
          flex: 1,
          height: '2px',
          background: `linear-gradient(to right, transparent, ${getLineColor()})`,
          marginRight: `${currentSize.gap}px`
        }}
      />

      {/* Center decoration */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: `${currentSize.iconSize / 2}px`,
          fontSize: `${currentSize.iconSize}px`,
          animation: 'fadeIn 0.6s ease-in',
          color: getColor()
        }}
      >
        {pattern.map((icon, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              animation: `floatIcon 3s ease-in-out ${index * 0.2}s infinite`,
              filter: isDarkMode ? 'brightness(1.1)' : 'brightness(1)'
            }}
          >
            {icon}
          </span>
        ))}
      </div>

      {/* Right line */}
      <div
        style={{
          flex: 1,
          height: '2px',
          background: `linear-gradient(to left, transparent, ${getLineColor()})`,
          marginLeft: `${currentSize.gap}px`
        }}
      />

      {/* Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes floatIcon {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-4px);
            }
          }
        `
      }} />
    </div>
  );
};

export default HorizontalRuler;
