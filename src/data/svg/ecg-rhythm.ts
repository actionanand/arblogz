/**
 * ECG Rhythm - Regular vs Irregular
 * Shows evenly spaced R waves (regular) versus unevenly spaced R waves (irregular)
 */

export const ECG_RHYTHM = `
<svg width="700" height="380" viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg">
  <rect width="700" height="380" fill="#f5faff" rx="8"/>

  <text x="350" y="26" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#0d47a1">
    Rhythm: Regular vs Irregular
  </text>

  <!-- REGULAR RHYTHM -->
  <text x="30" y="60" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2e7d32">Regular Rhythm (equal R-R gaps)</text>
  <line x1="30" y1="120" x2="670" y2="120" stroke="#c8e6c9" stroke-width="1"/>
  <path d="
    M 30 120 L 70 120 L 78 90 L 86 150 L 94 120 L 140 120
    L 180 120 L 188 90 L 196 150 L 204 120 L 250 120
    L 290 120 L 298 90 L 306 150 L 314 120 L 360 120
    L 400 120 L 408 90 L 416 150 L 424 120 L 470 120
    L 510 120 L 518 90 L 526 150 L 534 120 L 580 120
    L 620 120 L 628 90 L 636 150 L 644 120 L 670 120
  " fill="none" stroke="#2e7d32" stroke-width="2.5" stroke-linejoin="round"/>
  <!-- Equal spacing markers -->
  <g stroke="#2e7d32" stroke-width="1" stroke-dasharray="3 3">
    <line x1="86" y1="150" x2="86" y2="175"/>
    <line x1="196" y1="150" x2="196" y2="175"/>
    <line x1="306" y1="150" x2="306" y2="175"/>
    <line x1="416" y1="150" x2="416" y2="175"/>
    <line x1="526" y1="150" x2="526" y2="175"/>
    <line x1="636" y1="150" x2="636" y2="175"/>
  </g>
  <g font-family="Arial, sans-serif" font-size="10" fill="#2e7d32" text-anchor="middle">
    <text x="141" y="188">= gap =</text>
    <text x="251" y="188">= gap =</text>
    <text x="361" y="188">= gap =</text>
    <text x="471" y="188">= gap =</text>
    <text x="581" y="188">= gap =</text>
  </g>

  <!-- IRREGULAR RHYTHM -->
  <text x="30" y="240" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#c62828">Irregular Rhythm (unequal R-R gaps)</text>
  <line x1="30" y1="300" x2="670" y2="300" stroke="#ffcdd2" stroke-width="1"/>
  <path d="
    M 30 300 L 60 300 L 68 270 L 76 330 L 84 300 L 120 300
    L 200 300 L 208 270 L 216 330 L 224 300 L 260 300
    L 300 300 L 308 270 L 316 330 L 324 300 L 360 300
    L 470 300 L 478 270 L 486 330 L 494 300 L 530 300
    L 560 300 L 568 270 L 576 330 L 584 300 L 670 300
  " fill="none" stroke="#c62828" stroke-width="2.5" stroke-linejoin="round"/>
  <!-- Unequal spacing markers -->
  <g stroke="#c62828" stroke-width="1" stroke-dasharray="3 3">
    <line x1="76" y1="330" x2="76" y2="355"/>
    <line x1="216" y1="330" x2="216" y2="355"/>
    <line x1="316" y1="330" x2="316" y2="355"/>
    <line x1="486" y1="330" x2="486" y2="355"/>
    <line x1="576" y1="330" x2="576" y2="355"/>
  </g>
  <g font-family="Arial, sans-serif" font-size="10" fill="#c62828" text-anchor="middle">
    <text x="146" y="368">long</text>
    <text x="266" y="368">short</text>
    <text x="401" y="368">longer</text>
    <text x="531" y="368">short</text>
  </g>
</svg>
`;
