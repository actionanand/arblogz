/**
 * How to Identify ECG Waves
 * Annotated single complex showing the order to spot each wave:
 * find R first, then Q and S, then P, then T
 */

export const ECG_IDENTIFY = `
<svg width="720" height="420" viewBox="0 0 720 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="420" fill="#fffdf5" rx="8"/>
  <defs>
    <pattern id="idSmall" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#ffe0b2" stroke-width="0.6"/>
    </pattern>
    <pattern id="idBig" width="50" height="50" patternUnits="userSpaceOnUse">
      <rect width="50" height="50" fill="url(#idSmall)"/>
      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#ffcc80" stroke-width="1.1"/>
    </pattern>
  </defs>
  <rect x="0" y="40" width="720" height="270" fill="url(#idBig)"/>

  <text x="360" y="26" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#bf360c">
    How to Spot Each Wave (in order)
  </text>

  <!-- Baseline -->
  <line x1="40" y1="210" x2="680" y2="210" stroke="#ffab91" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="46" y="204" font-family="Arial, sans-serif" font-size="10" fill="#8d6e63">baseline (isoelectric line)</text>

  <!-- Trace -->
  <path d="
    M 40 210
    L 110 210
    Q 150 165 190 210
    L 250 210
    L 265 210
    L 278 235
    L 300 80
    L 322 250
    L 338 210
    L 400 210
    Q 470 150 540 210
    L 680 210
  " fill="none" stroke="#d84315" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>

  <!-- R marker (step 1) -->
  <circle cx="300" cy="80" r="6" fill="#c62828"/>
  <line x1="300" y1="74" x2="300" y2="45" stroke="#c62828" stroke-width="1.5"/>
  <text x="300" y="40" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#c62828">R</text>
  <text x="300" y="60" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#c62828">1. tallest spike</text>

  <!-- Q marker (step 2) -->
  <circle cx="278" cy="235" r="5" fill="#6a1b9a"/>
  <line x1="278" y1="240" x2="255" y2="285" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="230" y="298" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#6a1b9a">Q</text>
  <text x="230" y="312" font-family="Arial, sans-serif" font-size="9" text-anchor="middle" fill="#6a1b9a">2. dip before R</text>

  <!-- S marker (step 2) -->
  <circle cx="322" cy="250" r="5" fill="#00838f"/>
  <line x1="322" y1="255" x2="360" y2="290" stroke="#00838f" stroke-width="1.5"/>
  <text x="382" y="294" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#00838f">S</text>
  <text x="382" y="308" font-family="Arial, sans-serif" font-size="9" text-anchor="middle" fill="#00838f">3. dip after R</text>

  <!-- P marker (step 4) -->
  <circle cx="150" cy="165" r="5" fill="#1565c0"/>
  <line x1="150" y1="160" x2="150" y2="120" stroke="#1565c0" stroke-width="1.5"/>
  <text x="150" y="115" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#1565c0">P</text>
  <text x="150" y="135" font-family="Arial, sans-serif" font-size="9" text-anchor="middle" fill="#1565c0">4. small bump before QRS</text>

  <!-- T marker (step 5) -->
  <circle cx="470" cy="150" r="5" fill="#2e7d32"/>
  <line x1="470" y1="145" x2="470" y2="110" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="470" y="105" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#2e7d32">T</text>
  <text x="470" y="125" font-family="Arial, sans-serif" font-size="9" text-anchor="middle" fill="#2e7d32">5. rounded bump after QRS</text>

  <!-- QRS bracket -->
  <line x1="265" y1="330" x2="338" y2="330" stroke="#5e35b1" stroke-width="1.5"/>
  <line x1="265" y1="324" x2="265" y2="336" stroke="#5e35b1" stroke-width="1.5"/>
  <line x1="338" y1="324" x2="338" y2="336" stroke="#5e35b1" stroke-width="1.5"/>
  <text x="301" y="348" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#5e35b1">Q + R + S = QRS complex</text>

  <!-- Legend -->
  <text x="40" y="378" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#555">Trick:</text>
  <text x="82" y="378" font-family="Arial, sans-serif" font-size="11" fill="#555">Always find the big R spike first, then work outward to Q, S, P and T.</text>
  <text x="40" y="398" font-family="Arial, sans-serif" font-size="10" fill="#777">P = atria fire  •  QRS = ventricles fire  •  T = ventricles reset</text>
</svg>
`;
