/**
 * Steroid "Firefighter" Analogy
 * Kid-friendly: the body (house) catches a fire (inflammation); the adrenal
 * glands make cortisol (the body's own firefighter); steroid medicine is an
 * extra firefighter brought in from outside.
 */

export const STEROID_FIREFIGHTER = `
<svg width="720" height="380" viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="380" fill="#fff8f0" rx="8"/>
  <text x="360" y="30" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#b34700">
    Steroids = The Body's "Firefighter" Hormone
  </text>

  <!-- The house (body) -->
  <g>
    <rect x="70" y="120" width="200" height="150" fill="#ffe0b2" stroke="#e65100" stroke-width="2" rx="4"/>
    <polygon points="60,120 170,60 280,120" fill="#ffcc80" stroke="#e65100" stroke-width="2"/>
    <text x="170" y="300" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#e65100">Your Body (the house)</text>

    <!-- Fire = inflammation -->
    <path d="M150 250 Q140 210 165 195 Q160 225 180 210 Q200 225 185 250 Z" fill="#ff5722"/>
    <path d="M158 250 Q152 225 168 215 Q166 235 178 225 Q188 238 176 250 Z" fill="#ffca28"/>
    <text x="168" y="185" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#c62828">🔥 Inflammation</text>
  </g>

  <!-- Adrenal glands making cortisol -->
  <g>
    <ellipse cx="400" cy="110" rx="34" ry="22" fill="#fff3e0" stroke="#8d6e63" stroke-width="2"/>
    <path d="M375 108 q25 -22 50 0" fill="none" stroke="#8d6e63" stroke-width="3"/>
    <text x="400" y="150" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#5d4037">Adrenal glands</text>
    <text x="400" y="166" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#5d4037">(on top of kidneys)</text>
    <text x="400" y="90" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#2e7d32">make CORTISOL</text>
  </g>

  <!-- Firefighter (steroid) -->
  <g>
    <circle cx="560" cy="150" r="60" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
    <text x="560" y="140" font-family="Arial, sans-serif" font-size="34" text-anchor="middle">🧑‍🚒</text>
    <text x="560" y="185" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#2e7d32">Steroid medicine</text>
    <text x="560" y="201" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#2e7d32">= a copy of cortisol</text>
  </g>

  <!-- Arrows -->
  <defs>
    <marker id="sfArrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L8,3 L0,6 Z" fill="#2e7d32"/>
    </marker>
  </defs>
  <line x1="500" y1="150" x2="290" y2="200" stroke="#2e7d32" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#sfArrow)"/>
  <text x="395" y="240" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#2e7d32">puts out the fire fast 💧</text>

  <!-- Bottom line -->
  <text x="360" y="335" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#444">
    A steroid medicine is basically an <tspan font-weight="bold" fill="#2e7d32">extra copy of your own firefighter hormone</tspan> — very strong.
  </text>
  <text x="360" y="356" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#999">
    (This is a corticosteroid — NOT the muscle-building "anabolic steroid".)
  </text>
</svg>
`;
