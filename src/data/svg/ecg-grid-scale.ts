/**
 * ECG Grid Scale
 * Magnified view of ECG paper showing what each box represents:
 * horizontal axis = time, vertical axis = voltage (at 25 mm/s, 10 mm/mV)
 */

export const ECG_GRID_SCALE = `
<svg width="680" height="420" viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="420" fill="#fff" rx="8"/>

  <text x="340" y="28" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#c62828">
    What Each Box Means (25 mm/s, 10 mm/mV)
  </text>

  <!-- Grid area: from x=120 y=60 to x=520 y=360 (400 x 300) -->
  <!-- Small boxes: 20px each -> 20 wide, 15 tall small boxes -->
  <defs>
    <pattern id="gsSmall" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffcdd2" stroke-width="1"/>
    </pattern>
    <pattern id="gsBig" width="100" height="100" patternUnits="userSpaceOnUse">
      <rect width="100" height="100" fill="url(#gsSmall)"/>
      <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#e57373" stroke-width="2"/>
    </pattern>
  </defs>
  <rect x="120" y="60" width="400" height="300" fill="url(#gsBig)" stroke="#e57373" stroke-width="2"/>

  <!-- Highlight ONE small box (top-left) -->
  <rect x="120" y="60" width="20" height="20" fill="#fff59d" opacity="0.9" stroke="#f9a825" stroke-width="1.5"/>
  <!-- Highlight ONE large box -->
  <rect x="220" y="160" width="100" height="100" fill="#bbdefb" opacity="0.55" stroke="#1565c0" stroke-width="2"/>

  <!-- Small box callout -->
  <line x1="130" y1="70" x2="600" y2="70" stroke="#f9a825" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="605" y="66" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#c19100">1 small box</text>
  <text x="605" y="80" font-family="Arial, sans-serif" font-size="10" fill="#c19100">0.04 s  &amp;  0.1 mV</text>

  <!-- Large box callout -->
  <line x1="270" y1="210" x2="600" y2="210" stroke="#1565c0" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="605" y="206" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#1565c0">1 large box</text>
  <text x="605" y="220" font-family="Arial, sans-serif" font-size="10" fill="#1565c0">0.20 s  &amp;  0.5 mV</text>
  <text x="605" y="233" font-family="Arial, sans-serif" font-size="9" fill="#1565c0">(= 5 x 5 small)</text>

  <!-- Horizontal axis = TIME -->
  <line x1="120" y1="385" x2="520" y2="385" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L8,3 L0,6 Z" fill="#333"/>
    </marker>
  </defs>
  <text x="320" y="405" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#333">Horizontal = TIME (speed) →</text>

  <!-- Vertical axis = VOLTAGE -->
  <line x1="100" y1="360" x2="100" y2="60" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="60" y="210" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#333" transform="rotate(-90 60 210)">Vertical = VOLTAGE (height) ↑</text>

  <!-- 1 second scale bar (5 large boxes = 500px would exceed; use 300px = 3 large = 0.6s? make 5 small labels) -->
  <text x="120" y="52" font-family="Arial, sans-serif" font-size="10" fill="#777">Each row of 5 small boxes across = 1 large box = 0.20 s</text>
</svg>
`;
