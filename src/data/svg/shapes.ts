export const GRADIENT_RECT = `<svg width="300" height="150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(255,95,109);stop-opacity:1" />
      <stop offset="50%" style="stop-color:rgb(255,195,113);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(168,85,247);stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="300" height="150" rx="10" fill="url(#grad1)" />
  <text x="150" y="80" font-family="Arial" font-size="24" fill="white" text-anchor="middle">Gradient!</text>
</svg>`;

export const SIMPLE_CIRCLE = `<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50" fill="#ff6b6b" stroke="#c92a2a" stroke-width="3"/>
</svg>`;

export const SMILEY_FACE = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="80" height="80" rx="10" fill="#4CAF50"/>
  <circle cx="35" cy="35" r="8" fill="white"/>
  <circle cx="65" cy="35" r="8" fill="white"/>
  <path d="M 30 60 Q 50 75 70 60" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
</svg>`;
