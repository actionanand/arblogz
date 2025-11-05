import React, { useState, useEffect, useRef } from 'react';

const SectionSeparator = ({ 
  position = "left",
  color = "auto",
  length = 25,
  height = "normal",
  style = "ribbon",
  spacing = "normal",
  title = "",
  children
}) => {
  const containerRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [extractedTitle, setExtractedTitle] = useState('');

  // 🧠 Extract title from markdown heading or plain text in children
  useEffect(() => {
    let textContent = '';
    
    if (children) {
      // Direct string
      if (typeof children === 'string') {
        textContent = children;
      }
      // React element - check for props.value first (Astro passes HTML here)
      else if (React.isValidElement(children)) {
        if (children.props?.value) {
          // Astro passes rendered HTML in props.value
          // Extract text from HTML string
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = children.props.value;
          textContent = tempDiv.textContent || tempDiv.innerText || '';
        } else if (typeof children.props?.children === 'string') {
          textContent = children.props.children;
        } else if (children.props?.children) {
          textContent = String(children.props.children);
        }
      }
      // Array of children
      else if (Array.isArray(children)) {
        textContent = children.map(child => {
          if (typeof child === 'string') return child;
          if (React.isValidElement(child)) {
            if (child.props?.value) {
              const tempDiv = document.createElement('div');
              tempDiv.innerHTML = child.props.value;
              return tempDiv.textContent || '';
            }
            if (child.props?.children) {
              return String(child.props.children);
            }
          }
          return '';
        }).join('');
      }
      
      // Always try DOM as final fallback
      if (!textContent && containerRef.current) {
        textContent = containerRef.current.textContent || containerRef.current.innerText || '';
      }
      
      // Clean up the text
      textContent = textContent.trim();
      
      // Parse markdown heading (## Title or ### Title, etc.) from raw text
      const headingMatch = textContent.match(/^#{1,6}\s+(.+)$/);
      if (headingMatch) {
        const newTitle = headingMatch[1].trim();
        if (newTitle !== extractedTitle) {
          setExtractedTitle(newTitle);
        }
      } else if (textContent) {
        // If no markdown heading found, use the text as-is
        if (textContent !== extractedTitle) {
          setExtractedTitle(textContent);
        }
      } else {
        if (extractedTitle !== '') {
          setExtractedTitle('');
        }
      }
    } else {
      if (extractedTitle !== '') {
        setExtractedTitle('');
      }
    }
  }, [children, extractedTitle]);

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

  // Height configurations
  const heights = {
    thin: { size: 20, depth: 6, cutout: 8 },
    normal: { size: 32, depth: 10, cutout: 12 },
    thick: { size: 48, depth: 14, cutout: 18 }
  };

  // Spacing configurations
  const spacings = {
    tight: { marginTop: 16, marginBottom: 16 },
    normal: { marginTop: 24, marginBottom: 24 },
    loose: { marginTop: 40, marginBottom: 40 }
  };

  const currentHeight = heights[height] || heights.normal;
  const currentSpacing = spacings[spacing] || spacings.normal;

  // Parse length - convert to number if string
  const numericLength = typeof length === 'string' 
    ? parseFloat(length) 
    : length;
  
  const ribbonLength = `${numericLength}%`;
  
  // Determine if there's text content - prioritize extracted title from children
  const finalTitle = extractedTitle || title;
  const hasTitle = finalTitle && finalTitle.trim().length > 0;

  // Color determination
  const getColor = () => {
    if (color === "auto") {
      return isDarkMode ? "#10b981" : "#059669";
    }
    
    const colorPresets = {
      emerald: isDarkMode ? "#10b981" : "#059669",
      blue: isDarkMode ? "#3b82f6" : "#2563eb",
      purple: isDarkMode ? "#a855f7" : "#9333ea",
      pink: isDarkMode ? "#ec4899" : "#db2777",
      orange: isDarkMode ? "#f97316" : "#ea580c",
      red: isDarkMode ? "#ef4444" : "#dc2626",
      yellow: isDarkMode ? "#eab308" : "#ca8a04",
      green: isDarkMode ? "#22c55e" : "#16a34a",
      indigo: isDarkMode ? "#6366f1" : "#4f46e5",
      teal: isDarkMode ? "#14b8a6" : "#0d9488",
      cyan: isDarkMode ? "#06b6d4" : "#0891b2",
      rose: isDarkMode ? "#f43f5e" : "#e11d48"
    };
    
    return colorPresets[color] || color;
  };

  const ribbonColor = getColor();

  // Position styles
  const getPositionStyles = () => {
    switch (position) {
      case "center":
        return { margin: '0 auto' };
      case "right":
        return { marginLeft: 'auto', marginRight: 0 };
      case "left":
      default:
        return { marginRight: 'auto', marginLeft: 0 };
    }
  };

  const renderStyle = () => {
    const isFullWidth = numericLength >= 100;
    const s = currentHeight.size;
    const d = currentHeight.depth;
    const c = currentHeight.cutout;

    // Common title styling
    const titleStyle = hasTitle ? {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif',
      fontSize: height === 'thin' ? '12px' : height === 'thick' ? '18px' : '14px',
      fontWeight: '600',
      color: '#ffffff',
      textShadow: '0 1px 2px rgba(0,0,0,0.2)',
      padding: '0 20px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    } : {};

    switch (style) {
      case "ribbon":
        return (
          <div
            style={{
              width: ribbonLength,
              height: `${s}px`,
              background: ribbonColor,
              position: 'relative',
              clipPath: !isFullWidth && position === "left"
                ? `polygon(0 0, 100% 0, calc(100% - ${s/2}px) 50%, 100% 100%, 0 100%)`
                : !isFullWidth && position === "right"
                ? `polygon(0 0, 100% 0, 100% 100%, 0 100%, ${s/2}px 50%)`
                : !isFullWidth && position === "center"
                ? `polygon(${s/2}px 0, calc(100% - ${s/2}px) 0, 100% 50%, calc(100% - ${s/2}px) 100%, ${s/2}px 100%, 0 50%)`
                : 'none',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
              ...getPositionStyles(),
              ...titleStyle
            }}
          >
            {hasTitle && finalTitle}
          </div>
        );

      case "folded":
        return (
          <div
            style={{
              width: ribbonLength,
              padding: !isFullWidth ? `0 ${s + d}px ${d}px` : `0 0 ${d}px`,
              background: position === "center" || isFullWidth
                ? `conic-gradient(at left ${s}px bottom ${d}px, #0000 25%, #0008 0 37.5%, #0004 0) 0 / 50% no-repeat,
                   conic-gradient(at right ${s}px bottom ${d}px, #0004 62.5%, #0008 0 75%, #0000 0) 100% / 50% no-repeat`
                : position === "left"
                ? `conic-gradient(at right ${s}px bottom ${d}px, #0004 62.5%, #0008 0 75%, #0000 0) 100% / 100% no-repeat`
                : `conic-gradient(at left ${s}px bottom ${d}px, #0000 25%, #0008 0 37.5%, #0004 0) 0 / 100% no-repeat`,
              clipPath: !isFullWidth && position === "center"
                ? `polygon(
                    0 ${d}px, 
                    ${s}px ${d}px, 
                    ${s}px 0, 
                    calc(100% - ${s}px) 0, 
                    calc(100% - ${s}px) ${d}px, 
                    100% ${d}px, 
                    calc(100% - ${c}px) calc(50% + ${d/2}px), 
                    100% 100%, 
                    calc(100% - ${s}px - ${d}px) 100%, 
                    calc(100% - ${s}px - ${d}px) calc(100% - ${d}px), 
                    calc(${s}px + ${d}px) calc(100% - ${d}px), 
                    calc(${s}px + ${d}px) 100%, 
                    0 100%, 
                    ${c}px calc(50% + ${d/2}px)
                  )`
                : !isFullWidth && position === "left"
                ? `polygon(
                    0 ${d}px, 
                    0 0, 
                    calc(100% - ${s}px) 0, 
                    calc(100% - ${s}px) ${d}px, 
                    100% ${d}px, 
                    calc(100% - ${c}px) calc(50% + ${d/2}px), 
                    100% 100%, 
                    calc(100% - ${s}px - ${d}px) 100%, 
                    calc(100% - ${s}px - ${d}px) calc(100% - ${d}px), 
                    0 calc(100% - ${d}px)
                  )`
                : !isFullWidth && position === "right"
                ? `polygon(
                    calc(${s}px + ${d}px) calc(100% - ${d}px),
                    calc(${s}px + ${d}px) 100%,
                    0 100%,
                    ${c}px calc(50% + ${d/2}px),
                    0 ${d}px,
                    ${s}px ${d}px,
                    ${s}px 0,
                    100% 0,
                    100% calc(100% - ${d}px)
                  )`
                : isFullWidth
                ? `polygon(
                    0 ${d}px, 
                    ${s}px ${d}px, 
                    ${s}px 0, 
                    calc(100% - ${s}px) 0, 
                    calc(100% - ${s}px) ${d}px, 
                    100% ${d}px, 
                    100% 100%, 
                    calc(100% - ${s}px - ${d}px) 100%, 
                    calc(100% - ${s}px - ${d}px) calc(100% - ${d}px), 
                    calc(${s}px + ${d}px) calc(100% - ${d}px), 
                    calc(${s}px + ${d}px) 100%, 
                    0 100%
                  )`
                : 'none',
              backgroundColor: ribbonColor,
              minHeight: `${s + d}px`,
              ...getPositionStyles(),
              ...(hasTitle ? {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif',
                fontSize: height === 'thin' ? '11px' : height === 'thick' ? '17px' : '13px',
                fontWeight: '600',
                color: '#ffffff',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              } : {})
            }}
          >
            {hasTitle && finalTitle}
          </div>
        );

      case "notched":
        return (
          <div
            style={{
              width: ribbonLength,
              height: `${s}px`,
              background: ribbonColor,
              position: 'relative',
              clipPath: !isFullWidth && position === "left"
                ? `polygon(0 0, calc(100% - ${s/2}px) 0, 100% 50%, calc(100% - ${s/2}px) 100%, 0 100%)`
                : !isFullWidth && position === "right"
                ? `polygon(${s/2}px 0, 100% 0, 100% 100%, ${s/2}px 100%, 0 50%)`
                : !isFullWidth && position === "center"
                ? `polygon(${s/2}px 0, calc(100% - ${s/2}px) 0, 100% 50%, calc(100% - ${s/2}px) 100%, ${s/2}px 100%, 0 50%)`
                : 'none',
              ...getPositionStyles(),
              ...titleStyle
            }}
          >
            {hasTitle && finalTitle}
          </div>
        );

      case "bookmark":
        return (
          <div
            style={{
              width: ribbonLength,
              height: `${s + 8}px`,
              background: ribbonColor,
              position: 'relative',
              clipPath: !isFullWidth && position === "left"
                ? `polygon(0 0, 100% 0, calc(100% - ${s/2}px) 50%, 100% 100%, 0 100%)`
                : !isFullWidth && position === "right"
                ? `polygon(0 0, 100% 0, 100% 100%, 0 100%, ${s/2}px 50%)`
                : 'none',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              ...getPositionStyles(),
              ...titleStyle
            }}
          >
            {hasTitle && finalTitle}
          </div>
        );

      case "tag":
        return (
          <div
            style={{
              width: ribbonLength,
              height: `${s}px`,
              background: ribbonColor,
              position: 'relative',
              clipPath: !isFullWidth && position === "left"
                ? `polygon(0 0, calc(100% - ${s/2}px) 0, 100% 50%, calc(100% - ${s/2}px) 100%, 0 100%, ${c}px 50%)`
                : !isFullWidth && position === "right"
                ? `polygon(${s/2}px 0, 100% 0, calc(100% - ${c}px) 50%, 100% 100%, ${s/2}px 100%, 0 50%)`
                : 'none',
              ...getPositionStyles(),
              ...titleStyle
            }}
          >
            {hasTitle && finalTitle}
            {!isFullWidth && (
              <div
                style={{
                  position: 'absolute',
                  [position === "right" ? 'left' : 'right']: `${c + 4}px`,
                  top: '50%',
                  width: `${Math.max(6, s/4)}px`,
                  height: `${Math.max(6, s/4)}px`,
                  borderRadius: '50%',
                  background: isDarkMode ? '#1f2937' : '#ffffff',
                  transform: 'translateY(-50%)',
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3)'
                }}
              />
            )}
          </div>
        );

      case "stitched":
        return (
          <div
            style={{
              width: ribbonLength,
              height: `${s}px`,
              background: ribbonColor,
              position: 'relative',
              borderTop: `${Math.max(1, Math.floor(s/16))}px dashed rgba(255,255,255,0.3)`,
              borderBottom: `${Math.max(1, Math.floor(s/16))}px dashed rgba(255,255,255,0.3)`,
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
              clipPath: !isFullWidth && position === "left"
                ? `polygon(0 0, calc(100% - ${s/2}px) 0, 100% 50%, calc(100% - ${s/2}px) 100%, 0 100%)`
                : !isFullWidth && position === "right"
                ? `polygon(0 0, 100% 0, 100% 100%, 0 100%, ${s/2}px 50%)`
                : !isFullWidth && position === "center"
                ? `polygon(${s/2}px 0, calc(100% - ${s/2}px) 0, 100% 50%, calc(100% - ${s/2}px) 100%, ${s/2}px 100%, 0 50%)`
                : 'none',
              ...getPositionStyles(),
              ...titleStyle
            }}
          >
            {hasTitle && finalTitle}
          </div>
        );

      case "zigzag":
        // Split title into words for zigzag effect
        const words = finalTitle ? finalTitle.split(' ').filter(w => w.trim()) : [];
        const hasWords = words.length > 0;
        
        // Calculate number of sections: each word needs an outer section + inner sections between
        // For n words, we need 2n-1 sections (word, inner, word, inner, word)
        const numSections = hasWords ? Math.max(3, words.length * 2 - 1) : 3;
        
        // Base skew angle
        const skewAngle = 11;
        
        // Calculate dimensions
        const sectionHeight = Math.max(s, 40);
        
        return (
          <div
            style={{
              position: 'relative',
              width: ribbonLength,
              margin: position === 'center' ? '0 auto' : position === 'right' ? '0 0 0 auto' : '0 auto 0 0',
              ...getPositionStyles()
            }}
          >
            {/* Zigzag sections */}
            <div
              style={{
                display: 'grid',
                gridAutoRows: `${sectionHeight}px`,
                width: '100%'
              }}
            >
              {[...Array(numSections)].map((_, index) => {
                const isEven = index % 2 === 0;
                const cutSize = Math.floor(sectionHeight / 2);
                const isFirst = index === 0;
                const isLast = index === numSections - 1;
                
                // Determine clipPath based on position - INWARD cuts
                let clipPath = 'none';
                if (isFirst && isLast) {
                  // Only one section - inward notches on both sides
                  clipPath = `polygon(0 0, calc(100% - ${cutSize}px) 0, 100% 50%, calc(100% - ${cutSize}px) 100%, 0 100%, ${cutSize}px 50%)`;
                } else if (isFirst) {
                  // First section - inward notch on left only
                  clipPath = `polygon(0 0, 100% 0, 100% 100%, 0 100%, ${cutSize}px 50%)`;
                } else if (isLast) {
                  // Last section - inward notch on right only
                  clipPath = `polygon(0 0, calc(100% - ${cutSize}px) 0, 100% 50%, calc(100% - ${cutSize}px) 100%, 0 100%)`;
                }
                
                // Get word for outer sections only (even indices)
                const wordIndex = Math.floor(index / 2);
                const word = (hasWords && isEven && wordIndex < words.length) ? words[wordIndex] : null;
                
                return (
                  <div
                    key={index}
                    style={{
                      background: isEven 
                        ? ribbonColor
                        : `linear-gradient(135deg, ${ribbonColor} 0%, ${isDarkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.15)'} 100%)`,
                      lineHeight: `${sectionHeight}px`,
                      textAlign: 'center',
                      transform: isEven ? `skewY(${skewAngle}deg)` : `skewY(-${skewAngle}deg)`,
                      clipPath: clipPath,
                      zIndex: isEven ? 1 : 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
                    }}
                  >
                    {word && (
                      <span
                        style={{
                          fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif',
                          fontSize: height === 'thin' ? '14px' : height === 'thick' ? '20px' : '16px',
                          fontWeight: '700',
                          color: '#ffffff',
                          display: 'block',
                          whiteSpace: 'nowrap',
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          padding: '0 20px'
                        }}
                      >
                        {word}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Hidden container for extracting text from children */}
      <div ref={containerRef} style={{ display: 'none' }}>
        {children}
      </div>
      
      <div
        style={{
          marginTop: `${currentSpacing.marginTop}px`,
          marginBottom: `${currentSpacing.marginBottom}px`,
          width: '100%',
          display: 'flex'
        }}
      >
        {renderStyle()}
      </div>
    </>
  );
};

export default SectionSeparator;
