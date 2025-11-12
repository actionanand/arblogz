import { useState, useEffect } from 'react';

/**
 * SignCard Component
 * 
 * A 3D card component with split text effect, perfect for warnings, announcements, and custom messages.
 * Features a distinctive cutout design where part of the text is enclosed in a contrasting box.
 * 
 * @param {string} type - Predefined sign type: 'warning', 'continued', 'note', 'alert', 'info', 'custom' (default: 'custom')
 * @param {string} firstWord - First word (will be in enclosed box) - required for custom type
 * @param {string} secondWord - Second word (normal style) - required for custom type
 * @param {string} bgColor - Background color (default: '#f9c61a' - yellow)
 * @param {string} textColor - Text color (default: '#000')
 * @param {string} enclosedBg - Enclosed box background color (default: '#000')
 * @param {string} enclosedColor - Enclosed box text color (default: matches bgColor)
 */
const SignCard = ({ 
  type = 'custom',
  firstWord = '',
  secondWord = '',
  bgColor,
  textColor = '#000',
  enclosedBg = '#000',
  enclosedColor
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Predefined sign configurations
  const signConfigs = {
    warning: {
      first: 'War',
      second: 'ning',
      bgColor: '#ff6b6b',
      textColor: '#fff',
      enclosedBg: '#fff',
      enclosedColor: '#ff6b6b'
    },
    continued: {
      first: 'To be',
      second: 'continued',
      bgColor: '#4ecdc4',
      textColor: '#000',
      enclosedBg: '#000',
      enclosedColor: '#4ecdc4'
    },
    note: {
      first: 'No',
      second: 'te',
      bgColor: '#95e1d3',
      textColor: '#000',
      enclosedBg: '#000',
      enclosedColor: '#95e1d3'
    },
    alert: {
      first: 'Ale',
      second: 'rt',
      bgColor: '#ff9a3c',
      textColor: '#000',
      enclosedBg: '#000',
      enclosedColor: '#ff9a3c'
    },
    info: {
      first: 'In',
      second: 'fo',
      bgColor: '#6c5ce7',
      textColor: '#fff',
      enclosedBg: '#fff',
      enclosedColor: '#6c5ce7'
    },
    important: {
      first: 'Impor',
      second: 'tant',
      bgColor: '#fd79a8',
      textColor: '#000',
      enclosedBg: '#000',
      enclosedColor: '#fd79a8'
    },
    tip: {
      first: 'Ti',
      second: 'p',
      bgColor: '#55efc4',
      textColor: '#000',
      enclosedBg: '#000',
      enclosedColor: '#55efc4'
    },
    update: {
      first: 'Up',
      second: 'date',
      bgColor: '#74b9ff',
      textColor: '#000',
      enclosedBg: '#000',
      enclosedColor: '#74b9ff'
    },
    custom: {
      first: firstWord,
      second: secondWord,
      bgColor: bgColor || '#f9c61a',
      textColor: textColor,
      enclosedBg: enclosedBg,
      enclosedColor: enclosedColor || bgColor || '#f9c61a'
    }
  };

  const config = signConfigs[type] || signConfigs.custom;

  // Wrapper styles
  const wrapperStyle = {
    position: 'relative',
    perspective: '40em',
    display: 'grid',
    transformStyle: 'preserve-3d',
    margin: '60px auto',
    width: 'fit-content'
  };

  // Card styles
  const cardStyle = {
    gridArea: '1 / 1',
    height: '200px',
    width: '400px',
    transform: isHovered ? 'none' : 'translateX(10px) rotateY(25deg) rotateX(10deg)',
    background: config.bgColor,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '30px',
    color: config.textColor,
    textTransform: 'uppercase',
    fontSize: '60px',
    fontWeight: '900',
    backfaceVisibility: 'hidden',
    boxShadow: '0 10px 30px -3px rgba(0,0,0,.1)',
    willChange: 'transform',
    transition: '.3s transform cubic-bezier(.25,.46,.45,1)'
  };

  // Heading styles
  const headingStyle = {
    fontSize: '60px',
    fontWeight: '900',
    margin: '0',
    lineHeight: '1'
  };

  // Enclosed span styles
  const enclosedStyle = {
    background: config.enclosedBg,
    lineHeight: '1',
    color: config.enclosedColor,
    padding: '0 5px',
    display: 'inline-block',
    transform: 'translate(-1px, 1px) scale(0.75)',
    transformOrigin: 'right center'
  };

  // Border pseudo-element styles (applied as a separate div)
  const borderStyle = {
    gridArea: '1 / 1',
    backfaceVisibility: 'hidden',
    height: '100%',
    width: '100%',
    marginTop: '-9px',
    marginLeft: '-9px',
    background: 'transparent',
    transform: isHovered ? 'none' : 'translateX(-60px) rotateY(-30deg) rotateX(15deg) scale(1.03)',
    pointerEvents: 'none',
    border: '9px solid #000',
    boxSizing: 'content-box',
    willChange: 'transform',
    transition: '.3s transform cubic-bezier(.25,.46,.45,1)'
  };

  return (
    <div 
      style={wrapperStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={borderStyle}></div>
      <div style={cardStyle}>
        <h1 style={headingStyle}>
          <span style={enclosedStyle}>{config.first}</span>{config.second}
        </h1>
      </div>
    </div>
  );
};

export default SignCard;
