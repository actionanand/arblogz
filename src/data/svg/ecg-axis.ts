/**
 * Cardiac Axis - Hexaxial Quadrant Diagram
 * Shows the four axis quadrants (normal, left, right, extreme) based on
 * Lead I and Lead aVF deflections
 */

export const ECG_AXIS = `
<svg width="560" height="520" viewBox="0 0 560 520" xmlns="http://www.w3.org/2000/svg">
  <rect width="560" height="520" fill="#fbf7ff" rx="8"/>

  <text x="280" y="28" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#4a148c">
    Cardiac Axis Quadrants
  </text>

  <!-- Center of circle at 280,280, radius 190 -->
  <!-- Quadrant wedges -->
  <!-- Normal axis: -30 to +90 (upper-right + lower-right region) -->
  <path d="M 280 280 L 470 280 A 190 190 0 0 1 280 470 Z" fill="#c8e6c9" opacity="0.7"/>
  <path d="M 280 280 L 470 280 A 190 190 0 0 0 445 185 Z" fill="#c8e6c9" opacity="0.7"/>
  <!-- Left axis deviation: -30 to -90 (upper region toward left of vertical) -->
  <path d="M 280 280 L 445 185 A 190 190 0 0 0 280 90 Z" fill="#fff9c4" opacity="0.8"/>
  <!-- Right axis deviation: +90 to +180 (lower-left) -->
  <path d="M 280 280 L 280 470 A 190 190 0 0 1 90 280 Z" fill="#bbdefb" opacity="0.8"/>
  <!-- Extreme axis: -90 to -180 / +180 (upper-left) -->
  <path d="M 280 280 L 90 280 A 190 190 0 0 1 280 90 Z" fill="#ffcdd2" opacity="0.8"/>

  <!-- Circle outline -->
  <circle cx="280" cy="280" r="190" fill="none" stroke="#9575cd" stroke-width="2"/>

  <!-- Axes lines -->
  <line x1="90" y1="280" x2="470" y2="280" stroke="#777" stroke-width="1.5"/>
  <line x1="280" y1="90" x2="280" y2="470" stroke="#777" stroke-width="1.5"/>

  <!-- Degree labels -->
  <text x="484" y="285" font-family="Arial, sans-serif" font-size="12" fill="#555">0°</text>
  <text x="270" y="86" font-family="Arial, sans-serif" font-size="12" fill="#555" text-anchor="end">-90°</text>
  <text x="270" y="488" font-family="Arial, sans-serif" font-size="12" fill="#555" text-anchor="end">+90°</text>
  <text x="40" y="285" font-family="Arial, sans-serif" font-size="12" fill="#555">±180°</text>

  <!-- Lead direction labels -->
  <text x="488" y="270" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#2e7d32">Lead I →</text>
  <text x="290" y="500" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1565c0">↓ aVF</text>

  <!-- Quadrant labels -->
  <text x="370" y="240" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#2e7d32">NORMAL</text>
  <text x="370" y="256" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#2e7d32">I +ve, aVF +ve</text>

  <text x="185" y="185" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#c62828">EXTREME</text>
  <text x="185" y="200" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#c62828">I -ve, aVF -ve</text>

  <text x="375" y="150" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#f9a825">LEFT (LAD)</text>
  <text x="375" y="165" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#c19100">I +ve, aVF -ve</text>

  <text x="180" y="380" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#1565c0">RIGHT (RAD)</text>
  <text x="180" y="395" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#1565c0">I -ve, aVF +ve</text>
</svg>
`;
