import React, { useState, useEffect } from 'react';
import { SPINNER_SVG } from '@/data/svg/spinner.ts';

/**
 * Base64Image Component
 * Displays base64 encoded images with optional lazy loading and spinner
 * 
 * @param {string} src - Base64 encoded image string (data:image/...)
 * @param {string} alt - Alt text for the image
 * @param {string} className - Additional CSS classes
 * @param {string} width - Image width (e.g., "300px", "100%")
 * @param {string} height - Image height
 * @param {boolean} lazy - Enable lazy loading with spinner (default: false)
 * @param {number} loadingDelay - Minimum loading time in ms (default: 1500ms, only if lazy=true)
 * 
 * NOTE: When using lazy={true}, you MUST add client:load directive for hydration:
 * <Base64Image src={IMAGE} lazy={true} client:load />
 */
export function Base64Image({ 
  src, 
  alt = '', 
  className = '', 
  width, 
  height,
  lazy = false,
  loadingDelay = 1500 
}) {
  const [isLoading, setIsLoading] = useState(lazy);
  const [imageLoaded, setImageLoaded] = useState(!lazy);
  const wrapperClass = `base64-image-wrapper ${className}`.trim();
  
  const containerStyle = {
    position: 'relative',
    display: 'block',
    textAlign: 'center',
    width: width || 'auto',
    margin: '0 auto',
  };

  const imageStyle = {
    width: width || 'auto',
    height: height || 'auto',
    maxWidth: '100%',
    display: lazy && isLoading ? 'none' : 'inline-block',
    opacity: lazy ? (imageLoaded ? 1 : 0) : 1,
    transition: lazy ? 'opacity 0.3s ease-in-out' : 'none',
  };

  const spinnerStyle = {
    display: lazy && isLoading ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    width: width || '200px',
    height: height || '200px',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    margin: '0 auto',
  };

  useEffect(() => {
    if (!lazy) return;

    // Create an Image object to preload
    const img = new Image();
    let minDelayTimer;
    let imgLoadComplete = false;
    let minDelayComplete = false;

    const checkBothComplete = () => {
      if (imgLoadComplete && minDelayComplete) {
        setIsLoading(false);
        setImageLoaded(true);
      }
    };

    // Set minimum delay timer
    minDelayTimer = setTimeout(() => {
      minDelayComplete = true;
      checkBothComplete();
    }, loadingDelay);

    // Load the image
    img.onload = () => {
      imgLoadComplete = true;
      checkBothComplete();
    };

    img.onerror = () => {
      console.error('Failed to load base64 image');
      imgLoadComplete = true;
      checkBothComplete();
    };

    img.src = src;

    // Cleanup
    return () => {
      if (minDelayTimer) clearTimeout(minDelayTimer);
    };
  }, [src, lazy, loadingDelay]);

  return (
    <div className={wrapperClass} style={containerStyle}>
      {/* Spinner (only shown when lazy loading) */}
      {lazy && (
        <div 
          style={spinnerStyle}
          dangerouslySetInnerHTML={{ __html: SPINNER_SVG }}
        />
      )}
      
      {/* Actual Image */}
      <img 
        src={src} 
        alt={alt} 
        style={imageStyle}
        onLoad={() => lazy && setImageLoaded(true)}
      />
    </div>
  );
}
