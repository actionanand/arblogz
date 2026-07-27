/**
 * ECG Waveform - Labeled P-QRS-T Complex
 * Shows one full cardiac cycle with named waves, segments and intervals
 */

export const ECG_WAVEFORM = `
<svg width="700" height="360" viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg">
  <!-- Background grid -->
  <rect width="700" height="360" fill="#fff5f5" rx="8"/>
  <defs>
    <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#ffd6d6" stroke-width="0.6"/>
    </pattern>
    <pattern id="bigGrid" width="50" height="50" patternUnits="userSpaceOnUse">
      <rect width="50" height="50" fill="url(#smallGrid)"/>
      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#ffb3b3" stroke-width="1.2"/>
    </pattern>
  </defs>
  <rect x="0" y="40" width="700" height="280" fill="url(#bigGrid)"/>

  <!-- Title -->
  <text x="350" y="26" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#b30000">
    The ECG Waveform: One Cardiac Cycle
  </text>

  <!-- Baseline -->
  <line x1="40" y1="220" x2="660" y2="220" stroke="#e57373" stroke-width="1" stroke-dasharray="4 4"/>

  <!-- ECG trace: P wave, PR segment, QRS, ST, T wave -->
  <path d="
    M 40 220
    L 90 220
    Q 115 175 140 220
    L 200 220
    L 225 220
    L 235 240
    L 250 90
    L 265 260
    L 280 220
    L 330 220
    Q 380 165 430 220
    L 660 220
  " fill="none" stroke="#c62828" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>

  <!-- Wave labels -->
  <text x="115" y="160" font-family="Arial, sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="#1565c0">P</text>
  <text x="228" y="258" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#6a1b9a">Q</text>
  <text x="250" y="80" font-family="Arial, sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="#2e7d32">R</text>
  <text x="272" y="280" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#6a1b9a">S</text>
  <text x="380" y="150" font-family="Arial, sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="#e65100">T</text>

  <!-- PR interval bracket -->
  <line x1="90" y1="300" x2="235" y2="300" stroke="#1565c0" stroke-width="1.5"/>
  <line x1="90" y1="294" x2="90" y2="306" stroke="#1565c0" stroke-width="1.5"/>
  <line x1="235" y1="294" x2="235" y2="306" stroke="#1565c0" stroke-width="1.5"/>
  <text x="162" y="318" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#1565c0">PR interval</text>

  <!-- QRS bracket -->
  <line x1="235" y1="55" x2="280" y2="55" stroke="#6a1b9a" stroke-width="1.5"/>
  <line x1="235" y1="49" x2="235" y2="61" stroke="#6a1b9a" stroke-width="1.5"/>
  <line x1="280" y1="49" x2="280" y2="61" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="257" y="46" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#6a1b9a">QRS</text>

  <!-- ST segment bracket -->
  <line x1="280" y1="200" x2="330" y2="200" stroke="#00838f" stroke-width="1.5"/>
  <text x="305" y="194" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#00838f">ST</text>

  <!-- QT interval bracket -->
  <line x1="235" y1="338" x2="430" y2="338" stroke="#e65100" stroke-width="1.5"/>
  <line x1="235" y1="332" x2="235" y2="344" stroke="#e65100" stroke-width="1.5"/>
  <line x1="430" y1="332" x2="430" y2="344" stroke="#e65100" stroke-width="1.5"/>
  <text x="332" y="354" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#e65100">QT interval</text>
</svg>
`;
