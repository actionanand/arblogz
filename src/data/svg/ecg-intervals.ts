/**
 * ECG Intervals & Durations
 * Shows normal duration values for PR, QRS, QT intervals and ST segment
 * measured against the standard ECG paper grid (1 small box = 0.04 s)
 */

export const ECG_INTERVALS = `
<svg width="700" height="400" viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="700" height="400" fill="#f7fff7" rx="8"/>
  <defs>
    <pattern id="ivSmall" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#d6f0d6" stroke-width="0.6"/>
    </pattern>
    <pattern id="ivBig" width="50" height="50" patternUnits="userSpaceOnUse">
      <rect width="50" height="50" fill="url(#ivSmall)"/>
      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#aadcaa" stroke-width="1.1"/>
    </pattern>
  </defs>
  <rect x="0" y="40" width="700" height="250" fill="url(#ivBig)"/>

  <text x="350" y="26" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#1b5e20">
    Normal ECG Intervals &amp; Durations
  </text>

  <!-- Baseline -->
  <line x1="40" y1="200" x2="660" y2="200" stroke="#81c784" stroke-width="1" stroke-dasharray="4 4"/>

  <!-- Trace -->
  <path d="
    M 40 200
    L 90 200
    Q 115 160 140 200
    L 200 200
    L 215 200
    L 225 218
    L 240 80
    L 255 238
    L 270 200
    L 320 200
    Q 375 150 430 200
    L 660 200
  " fill="none" stroke="#2e7d32" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>

  <!-- Wave labels -->
  <text x="115" y="148" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#1565c0">P</text>
  <text x="240" y="72" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#6a1b9a">QRS</text>
  <text x="375" y="138" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#e65100">T</text>

  <!-- PR interval -->
  <line x1="90" y1="300" x2="225" y2="300" stroke="#1565c0" stroke-width="1.5"/>
  <line x1="90" y1="294" x2="90" y2="306" stroke="#1565c0" stroke-width="1.5"/>
  <line x1="225" y1="294" x2="225" y2="306" stroke="#1565c0" stroke-width="1.5"/>
  <text x="157" y="320" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#1565c0">PR: 0.12-0.20 s</text>
  <text x="157" y="334" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#1565c0">(3-5 small boxes)</text>

  <!-- QRS duration -->
  <line x1="225" y1="358" x2="270" y2="358" stroke="#6a1b9a" stroke-width="1.5"/>
  <line x1="225" y1="352" x2="225" y2="364" stroke="#6a1b9a" stroke-width="1.5"/>
  <line x1="270" y1="352" x2="270" y2="364" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="247" y="378" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#6a1b9a">QRS: &lt; 0.12 s</text>

  <!-- QT interval -->
  <line x1="225" y1="300" x2="430" y2="300" stroke="#e65100" stroke-width="1.5" transform="translate(0 40)"/>
  <line x1="225" y1="334" x2="225" y2="346" stroke="#e65100" stroke-width="1.5"/>
  <line x1="430" y1="334" x2="430" y2="346" stroke="#e65100" stroke-width="1.5"/>
  <line x1="225" y1="340" x2="430" y2="340" stroke="#e65100" stroke-width="1.5"/>
  <text x="500" y="336" font-family="Arial, sans-serif" font-size="11" text-anchor="start" fill="#e65100">QT: 0.35-0.45 s</text>
  <text x="500" y="350" font-family="Arial, sans-serif" font-size="10" text-anchor="start" fill="#e65100">(rate dependent)</text>

  <!-- Grid scale note -->
  <text x="660" y="60" font-family="Arial, sans-serif" font-size="10" text-anchor="end" fill="#1b5e20">1 small box = 0.04 s</text>
  <text x="660" y="74" font-family="Arial, sans-serif" font-size="10" text-anchor="end" fill="#1b5e20">1 big box = 0.20 s</text>
</svg>
`;
