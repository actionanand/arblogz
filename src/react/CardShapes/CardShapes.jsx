import React from 'react';

const CardShapes = ({
  shape = 'rectangle',
  title = 'Card Title',
  content = 'Card content goes here',
  image = null,
  backgroundImage = null,
  animation = 'none',
  size = 'medium',
  textAlign = 'center',
  textStyle = 'modern',
  titleWeight = 'bold',
  contentWeight = 'normal',
  textColor = 'white',
  shapeSize = 100,
  cornerRadius = 0
}) => {
  // Size configurations
  const sizeConfig = {
    tiny: { width: 'w-32', height: 'h-32', textSize: 'text-[10px]', titleSize: 'text-xs' },
    small: { width: 'w-40', height: 'h-40', textSize: 'text-xs', titleSize: 'text-sm' },
    medium: { width: 'w-56', height: 'h-56', textSize: 'text-sm', titleSize: 'text-base' },
    large: { width: 'w-72', height: 'h-72', textSize: 'text-base', titleSize: 'text-lg' },
    xlarge: { width: 'w-96', height: 'h-96', textSize: 'text-lg', titleSize: 'text-xl' },
    jumbo: { width: 'w-[28rem]', height: 'h-[28rem]', textSize: 'text-xl', titleSize: 'text-2xl' }
  };

  // Text alignment classes
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  // Text style configurations
  const textStyleConfig = {
    modern: { titleClass: 'tracking-tight', contentClass: 'leading-relaxed' },
    elegant: { titleClass: 'tracking-wide font-serif', contentClass: 'leading-loose font-serif' },
    bold: { titleClass: 'tracking-wider uppercase', contentClass: 'leading-normal font-semibold' },
    minimal: { titleClass: 'tracking-normal lowercase', contentClass: 'leading-snug' },
    playful: { titleClass: 'tracking-wide', contentClass: 'leading-relaxed italic' },
    tech: { titleClass: 'tracking-widest font-mono uppercase', contentClass: 'leading-normal font-mono text-xs' }
  };

  // Font weight classes
  const weightClasses = {
    thin: 'font-thin',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black'
  };

  // Text color variations
  const textColorClasses = {
    white: 'text-white',
    black: 'text-black',
    gray: 'text-gray-800',
    warm: 'text-orange-50',
    cool: 'text-blue-50',
    vibrant: 'text-pink-100'
  };

  // Animation classes
  const animationClasses = {
    none: '',
    hover: 'hover:-translate-y-2 hover:scale-105 transition-all duration-300',
    pulse: 'animate-pulse',
    bounce: 'hover:animate-bounce',
    rotate: 'hover:rotate-12 transition-all duration-500',
    glow: 'hover:shadow-2xl hover:scale-105 transition-all duration-300',
    shake: 'hover:animate-shake',
    wobble: 'hover:animate-wobble',
    float: 'hover:-translate-y-3 transition-all duration-500 ease-in-out',
    flip: 'hover:rotate-y-180 transition-all duration-700',
    morph: 'hover:rounded-full transition-all duration-700'
  };

  // Enhanced shape path definitions
  const getShapePath = (shapeType) => {
    const shapes = {
      // Classic shapes
      heart: "M50,85 C20,65 5,45 5,28 C5,15 14,5 25,5 C32,5 38,9 44,15 C50,9 56,5 63,5 C74,5 83,15 83,28 C83,45 68,65 50,85 Z",
      star: "M50,8 L58,32 L84,32 L63,48 L71,72 L50,56 L29,72 L37,48 L16,32 L42,32 Z",
      hexagon: "M50,8 L85,28 L85,68 L50,88 L15,68 L15,28 Z",
      triangle: "M50,12 L88,80 L12,80 Z",
      diamond: "M50,8 L88,50 L50,92 L12,50 Z",
      circle: "M50,8 A42,42 0 1,1 49.99,8 Z",
      pill: "M25,10 Q10,10 10,25 L10,75 Q10,90 25,90 L75,90 Q90,90 90,75 L90,25 Q90,10 75,10 Z",
      
      // New creative shapes
      pentagon: "M50,10 L90,40 L75,85 L25,85 L10,40 Z",
      octagon: "M30,10 L70,10 L90,30 L90,70 L70,90 L30,90 L10,70 L10,30 Z",
      trapezoid: "M25,15 L75,15 L90,85 L10,85 Z",
      arrow: "M20,40 L50,10 L80,40 L65,40 L65,90 L35,90 L35,40 Z",
      shield: "M50,10 L85,25 L85,55 Q85,75 50,90 Q15,75 15,55 L15,25 Z",
      leaf: "M50,10 Q75,30 80,55 Q82,70 70,80 Q60,88 50,90 Q35,88 25,75 Q18,60 22,45 Q26,30 50,10 Z",
      cloud: "M25,50 Q25,35 35,30 Q40,20 52,20 Q62,20 68,28 Q78,28 82,38 Q88,45 82,55 Q82,65 72,68 L28,68 Q18,65 18,55 Q18,50 25,50 Z",
      moon: "M60,15 Q40,20 30,35 Q20,50 30,65 Q40,80 60,85 Q50,80 45,65 Q40,50 45,35 Q50,20 60,15 Z",
      gem: "M50,15 L70,35 L85,35 L60,75 L40,75 L15,35 L30,35 Z",
      infinity: "M25,50 Q25,30 35,30 Q45,30 50,40 Q55,30 65,30 Q75,30 75,50 Q75,70 65,70 Q55,70 50,60 Q45,70 35,70 Q25,70 25,50 Z",
      
      // Geometric shapes
      parallelogram: "M20,20 L70,20 L80,80 L30,80 Z",
      kite: "M50,10 L70,50 L50,85 L30,50 Z",
      cross: "M40,15 L60,15 L60,40 L85,40 L85,60 L60,60 L60,85 L40,85 L40,60 L15,60 L15,40 L40,40 Z",
      
      // UI shapes
      speech: "M15,25 Q15,15 25,15 L75,15 Q85,15 85,25 L85,65 Q85,75 75,75 L55,75 L48,85 L41,75 L25,75 Q15,75 15,65 Z",
      badge: "M50,12 L78,30 L78,65 Q78,82 62,88 L50,92 L38,88 Q22,82 22,65 L22,30 Z",
      bookmark: "M25,10 L75,10 L75,88 L50,70 L25,88 Z",
      tag: "M15,15 L55,15 L85,50 L55,85 L15,85 L15,15 M35,35 A5,5 0 1,1 34.9,35 Z",
      
      // Default
      rectangle: "M12,12 L88,12 L88,88 L12,88 Z",
      rounded: `M${20+cornerRadius},12 L${80-cornerRadius},12 Q88,12 88,${20+cornerRadius} L88,${80-cornerRadius} Q88,88 ${80-cornerRadius},88 L${20+cornerRadius},88 Q12,88 12,${80-cornerRadius} L12,${20+cornerRadius} Q12,12 ${20+cornerRadius},12 Z`
    };
    return shapes[shapeType] || shapes.rectangle;
  };

  // Enhanced gradient definitions
  const getShapeGradient = (shapeType) => {
    const gradients = {
      heart: { start: '#ff6b9d', end: '#c44569', shadow: '#ff1744' },
      star: { start: '#ffd700', end: '#ff8c00', shadow: '#ff6f00' },
      hexagon: { start: '#667eea', end: '#764ba2', shadow: '#5a67d8' },
      triangle: { start: '#ff9a9e', end: '#fad0c4', shadow: '#ff6b9d' },
      diamond: { start: '#a8edea', end: '#fed6e3', shadow: '#79d5e8' },
      circle: { start: '#ffecd2', end: '#fcb69f', shadow: '#ff9a76' },
      pill: { start: '#4facfe', end: '#00f2fe', shadow: '#0096ff' },
      pentagon: { start: '#fa709a', end: '#fee140', shadow: '#fa5e87' },
      octagon: { start: '#30cfd0', end: '#330867', shadow: '#2ba8a9' },
      trapezoid: { start: '#a8e063', end: '#56ab2f', shadow: '#8bc34a' },
      arrow: { start: '#ff0844', end: '#ffb199', shadow: '#e91e63' },
      shield: { start: '#0575e6', end: '#021b79', shadow: '#0466c8' },
      leaf: { start: '#56ab2f', end: '#a8e063', shadow: '#4caf50' },
      cloud: { start: '#e0eafc', end: '#cfdef3', shadow: '#b3d4fc' },
      moon: { start: '#fbc2eb', end: '#a6c1ee', shadow: '#ea9fdd' },
      gem: { start: '#fa8bff', end: '#2bd2ff', shadow: '#e87aff' },
      infinity: { start: '#ff6e7f', end: '#bfe9ff', shadow: '#ff5771' },
      parallelogram: { start: '#f857a6', end: '#ff5858', shadow: '#f54291' },
      kite: { start: '#fdbb2d', end: '#22c1c3', shadow: '#f5a623' },
      cross: { start: '#ee0979', end: '#ff6a00', shadow: '#e91e63' },
      speech: { start: '#a8edea', end: '#fed6e3', shadow: '#79d5e8' },
      badge: { start: '#ff6b35', end: '#f7931e', shadow: '#ff5722' },
      bookmark: { start: '#667eea', end: '#764ba2', shadow: '#5a67d8' },
      tag: { start: '#f093fb', end: '#f5576c', shadow: '#ea5edc' },
      rectangle: { start: '#667eea', end: '#764ba2', shadow: '#5a67d8' },
      rounded: { start: '#667eea', end: '#764ba2', shadow: '#5a67d8' }
    };
    return gradients[shapeType] || gradients.rectangle;
  };

  // Text positioning configurations
  const getTextConfig = (shapeType) => {
    const configs = {
      heart: { x: 18, y: 28, width: 64, height: 48, padding: 'p-2', imageSize: 'w-8 h-8' },
      star: { x: 20, y: 25, width: 60, height: 50, padding: 'p-2', imageSize: 'w-8 h-8' },
      hexagon: { x: 18, y: 22, width: 64, height: 56, padding: 'p-3', imageSize: 'w-10 h-10' },
      triangle: { x: 22, y: 32, width: 56, height: 42, padding: 'p-2', imageSize: 'w-8 h-8' },
      diamond: { x: 18, y: 28, width: 64, height: 44, padding: 'p-2', imageSize: 'w-10 h-10' },
      circle: { x: 12, y: 12, width: 76, height: 76, padding: 'p-4', imageSize: 'w-12 h-12' },
      pill: { x: 12, y: 18, width: 76, height: 64, padding: 'p-4', imageSize: 'w-12 h-12' },
      pentagon: { x: 18, y: 28, width: 64, height: 50, padding: 'p-3', imageSize: 'w-10 h-10' },
      octagon: { x: 16, y: 20, width: 68, height: 60, padding: 'p-3', imageSize: 'w-10 h-10' },
      trapezoid: { x: 20, y: 25, width: 60, height: 50, padding: 'p-3', imageSize: 'w-10 h-10' },
      arrow: { x: 28, y: 35, width: 44, height: 50, padding: 'p-2', imageSize: 'w-8 h-8' },
      shield: { x: 18, y: 25, width: 64, height: 55, padding: 'p-3', imageSize: 'w-10 h-10' },
      leaf: { x: 22, y: 25, width: 56, height: 55, padding: 'p-2', imageSize: 'w-8 h-8' },
      cloud: { x: 20, y: 32, width: 60, height: 32, padding: 'p-2', imageSize: 'w-8 h-8' },
      moon: { x: 25, y: 30, width: 50, height: 40, padding: 'p-2', imageSize: 'w-8 h-8' },
      gem: { x: 20, y: 30, width: 60, height: 40, padding: 'p-2', imageSize: 'w-8 h-8' },
      infinity: { x: 18, y: 35, width: 64, height: 30, padding: 'p-2', imageSize: 'w-8 h-8' },
      parallelogram: { x: 22, y: 28, width: 56, height: 44, padding: 'p-3', imageSize: 'w-10 h-10' },
      kite: { x: 22, y: 30, width: 56, height: 45, padding: 'p-2', imageSize: 'w-8 h-8' },
      cross: { x: 28, y: 35, width: 44, height: 30, padding: 'p-2', imageSize: 'w-8 h-8' },
      speech: { x: 18, y: 20, width: 64, height: 52, padding: 'p-3', imageSize: 'w-10 h-10' },
      badge: { x: 20, y: 28, width: 60, height: 50, padding: 'p-3', imageSize: 'w-10 h-10' },
      bookmark: { x: 20, y: 18, width: 60, height: 62, padding: 'p-3', imageSize: 'w-10 h-10' },
      tag: { x: 18, y: 28, width: 56, height: 44, padding: 'p-3', imageSize: 'w-10 h-10' },
      rectangle: { x: 12, y: 12, width: 76, height: 76, padding: 'p-4', imageSize: 'w-12 h-12' },
      rounded: { x: 14, y: 14, width: 72, height: 72, padding: 'p-4', imageSize: 'w-12 h-12' }
    };
    return configs[shapeType] || configs.rectangle;
  };

  const gradient = getShapeGradient(shape);
  const shapePath = getShapePath(shape);
  const textConfig = getTextConfig(shape);
  const currentSize = sizeConfig[size];
  const currentTextStyle = textStyleConfig[textStyle];
  const currentAlignment = alignmentClasses[textAlign];
  const currentTextColor = textColorClasses[textColor];

  // Calculate scaled viewBox based on shapeSize prop
  const viewBoxSize = shapeSize;
  const viewBox = `0 0 ${viewBoxSize} ${viewBoxSize}`;

  return (
    <div className={`relative cursor-pointer overflow-visible ${currentSize.width} ${currentSize.height} ${animationClasses[animation]}`}>
      <svg viewBox={viewBox} className="w-full h-full drop-shadow-xl">
        <defs>
          {/* Enhanced gradient with shadow */}
          <linearGradient id={`gradient-${shape}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradient.start} stopOpacity="1" />
            <stop offset="50%" stopColor={gradient.end} stopOpacity="0.95" />
            <stop offset="100%" stopColor={gradient.shadow} stopOpacity="0.9" />
          </linearGradient>

          {/* Shape clip path */}
          <clipPath id={`shape-${shape}`}>
            <path d={shapePath} />
          </clipPath>

          {/* Background image pattern */}
          {backgroundImage && (
            <pattern id={`bgImage-${shape}`} patternUnits="userSpaceOnUse" width="100" height="100">
              <image
                href={backgroundImage}
                width="100"
                height="100"
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#shape-${shape})`}
              />
            </pattern>
          )}

          {/* Glow filter */}
          <filter id={`glow-${shape}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Shadow layer */}
        <path
          d={shapePath}
          fill="rgba(0,0,0,0.1)"
          transform="translate(2, 2)"
        />

        {/* Background shape */}
        <path
          d={shapePath}
          fill={backgroundImage ? `url(#bgImage-${shape})` : `url(#gradient-${shape})`}
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
          filter={`url(#glow-${shape})`}
        />

        {/* Content overlay */}
        <foreignObject
          x={textConfig.x}
          y={textConfig.y}
          width={textConfig.width}
          height={textConfig.height}
        >
          <div className={`w-full h-full flex flex-col justify-center ${currentAlignment} ${textConfig.padding}`}>
            {image && (
              <div className="mb-2 flex-shrink-0">
                <img
                  src={image}
                  alt={title}
                  className={`object-cover rounded-full border-2 border-white shadow-xl ${textConfig.imageSize}`}
                />
              </div>
            )}
            <h3 className={`${weightClasses[titleWeight]} ${currentSize.titleSize} ${currentTextColor} ${currentTextStyle.titleClass} drop-shadow-2xl mb-1 leading-tight flex-shrink-0`}>
              {title}
            </h3>
            <p className={`${weightClasses[contentWeight]} ${currentSize.textSize} ${currentTextColor} ${currentTextStyle.contentClass} drop-shadow-lg flex-1 overflow-hidden`}>
              {content}
            </p>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default CardShapes;
