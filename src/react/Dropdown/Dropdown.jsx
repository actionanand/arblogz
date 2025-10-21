import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ children, defaultValue, placeholder = "Select an option...", stripCss = false }) => {
  const containerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 🧠 Extract dropdown options from DOM after hydration
  useEffect(() => {
    if (containerRef.current) {
      const optionNodes = containerRef.current.querySelectorAll('[data-dropdown-option]');
      const parsedOptions = Array.from(optionNodes).map((node, index) => {
        const value = node.getAttribute('data-value') || `option-${index}`;
        const label = node.getAttribute('data-label') || `Option ${index + 1}`;
        let content = node.innerHTML;

        // Check if value contains a reference pattern (e.g., ":::drop apple")
        const referenceMatch = value.match(/^:::(\w+)\s+(.+)$/);
        if (referenceMatch) {
          const [, refType, refId] = referenceMatch;
          // Look for the referenced content in the document
          const refElement = document.querySelector(`[data-dropdown-ref="${refType}"][data-ref-id="${refId}"]`);
          if (refElement) {
            content = refElement.innerHTML;
          }
        }

        return {
          value,
          label,
          content,
          isReference: !!referenceMatch
        };
      });

      setOptions(parsedOptions);

      if (parsedOptions.length > 0) {
        const found =
          parsedOptions.find((o) => o.value === defaultValue) || parsedOptions[0];
        setSelectedValue(found.value);
      }
    }
  }, [children, defaultValue]);

  // 🌓 Enhanced theme detection for real-time switching
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const selectedOption = options.find((o) => o.value === selectedValue);
  // Show placeholder if no selection has been made yet (when selectedValue is empty or matches first option on mount)
  const isInitialState = !selectedValue || (selectedValue === options[0]?.value && !defaultValue);
  const selectedLabel = (isInitialState && placeholder) ? placeholder : (selectedOption?.label || placeholder);
  const selectedContent = selectedOption?.content || '';
  const hasOptions = options.length > 0;

  return (
    <div
      style={{
        fontFamily:
          'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif',
        marginBottom: '20px'
      }}
    >
      {/* Hidden container for Astro <DropdownOption> children */}
      <div ref={containerRef} style={{ display: 'none' }}>
        {children}
      </div>

      {/* Dropdown Selector */}
      <div ref={dropdownRef} style={{ position: 'relative', marginBottom: '16px' }}>
        <button
          onClick={() => hasOptions && setIsOpen(!isOpen)}
          disabled={!hasOptions}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 20px',
            fontSize: '15px',
            fontWeight: '600',
            color: isDarkMode ? '#e5e7eb' : '#374151',
            backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
            border: `2px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
            borderRadius: '12px',
            cursor: hasOptions ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s ease',
            outline: 'none',
            opacity: hasOptions ? 1 : 0.6,
            boxShadow: isOpen
              ? isDarkMode
                ? '0 0 0 3px rgba(16, 185, 129, 0.3)'
                : '0 0 0 3px rgba(5, 150, 105, 0.2)'
              : 'none'
          }}
          onMouseEnter={(e) => {
            if (!isOpen && hasOptions) {
              e.currentTarget.style.borderColor = isDarkMode ? '#10b981' : '#059669';
            }
          }}
          onMouseLeave={(e) => {
            if (!isOpen && hasOptions) {
              e.currentTarget.style.borderColor = isDarkMode ? '#374151' : '#e5e7eb';
            }
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {!hasOptions && (
              <span style={{ 
                fontSize: '18px',
                lineHeight: '1'
              }}>
                📋
              </span>
            )}
            {selectedLabel}
          </span>
          {hasOptions && (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke={isDarkMode ? '#10b981' : '#059669'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        {/* Dropdown Menu */}
        {isOpen && hasOptions && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: '0',
              right: '0',
              backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
              border: `2px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
              borderRadius: '12px',
              boxShadow: isDarkMode
                ? '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4)'
                : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
              maxHeight: '300px',
              overflowY: 'auto',
              zIndex: 50,
              animation: 'dropdownSlideIn 0.2s ease-out'
            }}
          >
            {options.map((option, index) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option.value)}
                style={{
                  padding: '12px 20px',
                  fontSize: '15px',
                  fontWeight: selectedValue === option.value ? '600' : '500',
                  color: selectedValue === option.value
                    ? isDarkMode ? '#10b981' : '#059669'
                    : isDarkMode ? '#e5e7eb' : '#374151',
                  backgroundColor: selectedValue === option.value
                    ? isDarkMode ? '#0f172a' : '#f0fdf4'
                    : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  borderBottom: index < options.length - 1 ? `1px solid ${isDarkMode ? '#334155' : '#f3f4f6'}` : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  if (selectedValue !== option.value) {
                    e.currentTarget.style.backgroundColor = isDarkMode ? '#0f172a' : '#f9fafb';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedValue !== option.value) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {selectedValue === option.value && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13.3333 4L6 11.3333L2.66667 8"
                      stroke={isDarkMode ? '#10b981' : '#059669'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Selected Content */}
      {hasOptions && (
        <div
          style={stripCss ? {
            color: isDarkMode ? '#e5e7eb' : '#374151',
            lineHeight: '1.6',
            fontSize: '15px'
          } : {
            backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc',
            borderRadius: '12px',
            padding: '32px',
            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
            boxShadow: isDarkMode
              ? '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.25)'
              : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            minHeight: '120px',
            color: isDarkMode ? '#e5e7eb' : '#374151',
            lineHeight: '1.6',
            fontSize: '15px'
          }}
          dangerouslySetInnerHTML={{ __html: selectedContent }}
        />
      )}

      {/* Animation styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes dropdownSlideIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      }} />
    </div>
  );
};

// 🧩 DropdownOption component — emits real DOM attributes Astro preserves
export const DropdownOption = ({ children, value, label }) => {
  return (
    <div data-dropdown-option data-value={value} data-label={label}>
      {children}
    </div>
  );
};

// 🔗 DropdownRef component — for external content references
export const DropdownRef = ({ children, type = "drop", id }) => {
  return (
    <div data-dropdown-ref={type} data-ref-id={id} style={{ display: 'none' }}>
      {children}
    </div>
  );
};

export default Dropdown;
export { DropdownOption as Option }; // Keep backward compatibility
