import React, { useState, useEffect, useRef } from 'react';

const Tabs = ({ children, defaultValue }) => {
  // Process children to extract tab info
  const tabs = [];
  const childrenArray = React.Children.toArray(children);
  
  childrenArray.forEach((child, index) => {
    let value, label;
    
    // Try to extract props (this might not work with Astro)
    if (child?.props) {
      value = child.props.value;
      label = child.props.label;
    }
    
    // Fallback: try to extract from component type or other sources
    if (!value || !label) {
      // Check if component has default props or other metadata
      if (child?.type?.defaultProps) {
        value = value || child.type.defaultProps.value;
        label = label || child.type.defaultProps.label;
      }
    }
    
    // Hardcoded fallback that matches your MDX file
    if (!value || !label) {
      const predefinedTabs = [
        { value: 'first', label: 'Angular Era' },
        { value: 'second', label: 'React Logic' },
        { value: 'third', label: 'Plain JS' }
      ];
      
      if (predefinedTabs[index]) {
        value = predefinedTabs[index].value;
        label = predefinedTabs[index].label;
      }
    }
    
    // Final fallback
    if (!value) value = `tab-${index}`;
    if (!label) label = `Tab ${index + 1}`;
    
    tabs.push({
      value,
      label,
      child,
      index
    });
  });

  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const tabRefs = useRef({});

  // Check localStorage for theme on mount and listen for changes
  useEffect(() => {
    const checkTheme = () => {
      if (typeof window !== 'undefined') {
        const theme = localStorage.getItem('theme');
        setIsDarkMode(theme === 'dark');
      }
    };

    // Check theme on mount
    checkTheme();

    // Listen for storage changes (when theme changes in other tabs)
    window.addEventListener('storage', checkTheme);

    // Listen for custom theme change events (for same-tab changes)
    window.addEventListener('themeChanged', checkTheme);

    // Watch for class changes on document element (common theme switching method)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          checkTheme();
        }
      });
    });

    if (document.documentElement) {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
    }

    // Override localStorage.setItem to detect changes
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function(key, value) {
      originalSetItem.apply(this, arguments);
      if (key === 'theme') {
        checkTheme();
        // Dispatch custom event
        window.dispatchEvent(new Event('themeChanged'));
      }
    };

    return () => {
      window.removeEventListener('storage', checkTheme);
      window.removeEventListener('themeChanged', checkTheme);
      observer.disconnect();
      // Restore original localStorage.setItem
      localStorage.setItem = originalSetItem;
    };
  }, []);

  // Update underline position and width when active tab changes
  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      setUnderlineStyle({
        width: offsetWidth,
        left: offsetLeft
      });
    }
  }, [activeTab]);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <div style={{
      fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif',
      marginBottom: '20px'
    }}>
      {/* Tab Navigation - Outside the box */}
      <div style={{
        position: 'relative',
        display: 'flex',
        marginBottom: '0',
        paddingLeft: '4px'
      }}>
        {tabs.map((tab, index) => (
          <div
            key={tab.index}
            ref={el => tabRefs.current[tab.value] = el}
            onClick={() => handleTabClick(tab.value)}
            style={{
              padding: '16px 28px 20px 28px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: activeTab === tab.value ? '700' : '600',
              color: activeTab === tab.value 
                ? (isDarkMode ? '#10b981' : '#059669')
                : (isDarkMode ? '#9ca3af' : '#6b7280'),
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              borderBottom: 'none',
              outline: 'none',
              borderRadius: '12px 12px 0 0',
              backgroundColor: activeTab === tab.value 
                ? (isDarkMode ? 'transparent' : '#f8fafc')
                : 'transparent',
              border: activeTab === tab.value 
                ? `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                : '1px solid transparent',
              borderBottom: activeTab === tab.value 
                ? (isDarkMode ? '1px solid transparent' : '1px solid #f8fafc')
                : '1px solid transparent',
              marginRight: '4px',
              transform: activeTab === tab.value ? 'translateY(0)' : 'translateY(2px)',
              zIndex: activeTab === tab.value ? 10 : 1,
              boxShadow: activeTab === tab.value 
                ? (isDarkMode 
                  ? '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.25)'
                  : '0 2px 4px -1px rgba(0, 0, 0, 0.1)')
                : 'none'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.value) {
                e.target.style.color = isDarkMode ? '#e5e7eb' : '#374151';
                e.target.style.backgroundColor = isDarkMode ? '#374151' : '#f1f5f9';
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = isDarkMode ? '#4b5563' : '#d1d5db';
                e.target.style.boxShadow = isDarkMode 
                  ? '0 2px 4px -1px rgba(0, 0, 0, 0.3)'
                  : '0 2px 4px -1px rgba(0, 0, 0, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.value) {
                e.target.style.color = isDarkMode ? '#9ca3af' : '#6b7280';
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(2px)';
                e.target.style.borderColor = 'transparent';
                e.target.style.boxShadow = 'none';
              }
            }}
          >
            {tab.label}
          </div>
        ))}
        
        {/* Sliding underline - positioned to align with tab content */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            height: '3px',
            backgroundColor: '#10b981',
            borderRadius: '2px 2px 0 0',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: `translateX(${underlineStyle.left - 4}px)`,
            width: `${underlineStyle.width}px`,
            zIndex: 20
          }}
        />
      </div>
      
      {/* Tab Content - Inside the box */}
      <div style={{
        backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc',
        borderRadius: '0 12px 12px 12px',
        padding: '32px',
        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
        boxShadow: isDarkMode 
          ? '0 8px 10px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.25)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        minHeight: '120px',
        color: isDarkMode ? '#e5e7eb' : '#374151',
        lineHeight: '1.6',
        fontSize: '15px',
        position: 'relative',
        zIndex: 5
      }}>
        {tabs.find(tab => tab.value === activeTab)?.child}
      </div>
    </div>
  );
};

export const Tab = ({ children, value, label }) => {
  return <div>{children}</div>;
};

export default Tabs;