import React, { useState, useEffect, useRef } from 'react';

const Tabs = ({ children, defaultValue }) => {
  const containerRef = useRef(null);
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const tabRefs = useRef({});

  // 🧠 Extract tab info from DOM after hydration (works even if Astro stripped props)
  useEffect(() => {
    if (containerRef.current) {
      const tabNodes = containerRef.current.querySelectorAll('[data-tab]');
      const parsedTabs = Array.from(tabNodes).map((node, index) => ({
        value: node.getAttribute('data-value') || `tab-${index}`,
        label: node.getAttribute('data-label') || `Tab ${index + 1}`,
        content: node.innerHTML
      }));

      setTabs(parsedTabs);

      if (parsedTabs.length > 0) {
        const found =
          parsedTabs.find((t) => t.value === defaultValue) || parsedTabs[0];
        setActiveTab(found.value);
      }
    }
  }, [children, defaultValue]);

  // 🌓 Detect dark mode
  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme');
      setIsDarkMode(
        theme === 'dark' || document.documentElement.classList.contains('dark')
      );
    };
    checkTheme();

    window.addEventListener('storage', checkTheme);
    window.addEventListener('themeChanged', checkTheme);

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      window.removeEventListener('storage', checkTheme);
      window.removeEventListener('themeChanged', checkTheme);
      observer.disconnect();
    };
  }, []);

  // Underline animation
  useEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setUnderlineStyle({ width: offsetWidth, left: offsetLeft });
    }
  }, [activeTab, tabs]);

  const handleTabClick = (value) => setActiveTab(value);

  const activeContent =
    tabs.find((t) => t.value === activeTab)?.content || '';

  return (
    <div
      style={{
        fontFamily:
          'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif',
        marginBottom: '20px'
      }}
    >
      {/* Hidden container for Astro <Tab> children */}
      <div ref={containerRef} style={{ display: 'none' }}>
        {children}
      </div>

      {/* Tab Headers */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          marginBottom: '0',
          paddingLeft: '4px'
        }}
      >
        {tabs.map((tab) => (
          <div
            key={tab.value}
            ref={(el) => (tabRefs.current[tab.value] = el)}
            onClick={() => handleTabClick(tab.value)}
            style={{
              padding: '16px 28px 20px 28px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: activeTab === tab.value ? '700' : '600',
              color:
                activeTab === tab.value
                  ? isDarkMode
                    ? '#10b981'
                    : '#059669'
                  : isDarkMode
                  ? '#9ca3af'
                  : '#6b7280',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              outline: 'none',
              borderRadius: '12px 12px 0 0',
              backgroundColor:
                activeTab === tab.value
                  ? isDarkMode
                    ? 'transparent'
                    : '#f8fafc'
                  : 'transparent',
              border:
                activeTab === tab.value
                  ? `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                  : '1px solid transparent',
              borderBottom:
                activeTab === tab.value
                  ? isDarkMode
                    ? '1px solid transparent'
                    : '1px solid #f8fafc'
                  : '1px solid transparent',
              marginRight: '4px',
              transform: activeTab === tab.value ? 'translateY(0)' : 'translateY(2px)',
              zIndex: activeTab === tab.value ? 10 : 1,
              boxShadow:
                activeTab === tab.value
                  ? isDarkMode
                    ? '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.25)'
                    : '0 2px 4px -1px rgba(0, 0, 0, 0.1)'
                  : 'none'
            }}
          >
            {tab.label}
          </div>
        ))}

        {/* Underline */}
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

      {/* Tab Content */}
      <div
        style={{
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
        }}
        dangerouslySetInnerHTML={{ __html: activeContent }}
      />
    </div>
  );
};

// 🧩 Tab component – emits real DOM attributes Astro preserves
export const Tab = ({ children, value, label }) => {
  return (
    <div data-tab data-value={value} data-label={label}>
      {children}
    </div>
  );
};

export default Tabs;
