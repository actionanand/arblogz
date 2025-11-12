import React, { useState, useEffect } from 'react';

const Carousel = ({ images, height = '600px' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!images || images.length === 0) {
    return null;
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const carouselStyle = {
    marginLeft: isMobile ? '0' : '15%',
    marginRight: isMobile ? '0' : '15%'
  };

  const slidesStyle = {
    display: 'block',
    position: 'relative',
    height: isMobile ? '300px' : height,
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    listStyle: 'none'
  };

  const slideContainerStyle = {
    display: 'block'
  };

  const slideImageStyle = (isActive) => ({
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    opacity: isActive ? 1 : 0,
    transition: 'all .7s ease-in-out',
    transform: isActive ? 'scale(1)' : 'scale(1)'
  });

  const imgStyle = {
    width: 'auto',
    minWidth: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const carouselControlsStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    fontSize: isMobile ? '60px' : '100px',
    lineHeight: isMobile ? '300px' : height,
    color: '#fff',
    userSelect: 'none'
  };

  const controlLabelStyle = (isVisible) => ({
    display: isVisible ? 'block' : 'none',
    position: 'absolute',
    padding: isMobile ? '0 10px' : '0 20px',
    opacity: 0.5,
    transition: 'opacity .2s',
    cursor: 'pointer'
  });

  const prevSlideStyle = {
    width: '49%',
    textAlign: 'left',
    left: 0
  };

  const nextSlideStyle = {
    width: '49%',
    textAlign: 'right',
    right: 0
  };

  const carouselDotsStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: isMobile ? '10px' : '20px',
    zIndex: 999,
    textAlign: 'center'
  };

  const carouselDotStyle = (isActive) => ({
    display: 'inline-block',
    width: isMobile ? '20px' : '30px',
    height: isMobile ? '20px' : '30px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    opacity: isActive ? 1 : 0.5,
    margin: isMobile ? '5px' : '10px',
    cursor: 'pointer',
    transition: 'opacity .2s'
  });

  const [hoveredControl, setHoveredControl] = useState(null);

  return (
    <div style={carouselStyle}>
      <div>
        <ul style={slidesStyle}>
          {images.map((image, index) => {
            const isActive = currentSlide === index;
            return (
              <li key={index} style={slideContainerStyle}>
                <div style={slideImageStyle(isActive)}>
                  <img 
                    src={image.src} 
                    alt={image.alt || `Slide ${index + 1}`}
                    style={imgStyle}
                  />
                </div>
                {isActive && (
                  <div style={carouselControlsStyle}>
                    <label
                      style={{
                        ...controlLabelStyle(true),
                        ...prevSlideStyle,
                        opacity: hoveredControl === 'prev' ? 1 : 0.5
                      }}
                      onClick={handlePrevSlide}
                      onMouseEnter={() => setHoveredControl('prev')}
                      onMouseLeave={() => setHoveredControl(null)}
                    >
                      <span>‹</span>
                    </label>
                    <label
                      style={{
                        ...controlLabelStyle(true),
                        ...nextSlideStyle,
                        opacity: hoveredControl === 'next' ? 1 : 0.5
                      }}
                      onClick={handleNextSlide}
                      onMouseEnter={() => setHoveredControl('next')}
                      onMouseLeave={() => setHoveredControl(null)}
                    >
                      <span>›</span>
                    </label>
                  </div>
                )}
              </li>
            );
          })}
          <div style={carouselDotsStyle}>
            {images.map((_, index) => (
              <label
                key={index}
                style={carouselDotStyle(currentSlide === index)}
                onClick={() => handleDotClick(index)}
                onMouseEnter={(e) => {
                  if (currentSlide !== index) {
                    e.target.style.opacity = 0.75;
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentSlide !== index) {
                    e.target.style.opacity = 0.5;
                  }
                }}
              />
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
