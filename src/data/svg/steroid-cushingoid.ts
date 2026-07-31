/**
 * Cushingoid Body Changes
 * Why long-term / high-dose steroids make people look "big and fatty":
 * moon face, buffalo hump, central obesity, thin limbs, stretch marks.
 */

export const STEROID_CUSHINGOID = `
<svg width="620" height="470" viewBox="0 0 620 470" xmlns="http://www.w3.org/2000/svg">
  <rect width="620" height="470" fill="#fff5f7" rx="8"/>
  <text x="310" y="30" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#ad1457">
    Why Long-Term Steroids Change the Body Shape
  </text>
  <text x="310" y="50" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#880e4f">("Cushingoid" look — from too much steroid/cortisol)</text>

  <!-- body -->
  <g stroke="#8e24aa" stroke-width="2" fill="#f3e5f5">
    <!-- moon face -->
    <circle cx="310" cy="110" r="42"/>
    <!-- buffalo hump -->
    <path d="M268 120 q-24 -6 -18 26 q22 -8 30 -6 Z" fill="#e1bee7"/>
    <!-- neck/torso: central obesity -->
    <path d="M282 150 q28 20 56 0 q26 60 22 150 q-50 26 -100 0 q-4 -90 22 -150 Z"/>
    <!-- thin arms -->
    <path d="M286 175 q-40 30 -46 90" fill="none"/>
    <path d="M334 175 q40 30 46 90" fill="none"/>
    <!-- thin legs -->
    <path d="M296 300 q-8 70 -12 120" fill="none"/>
    <path d="M324 300 q8 70 12 120" fill="none"/>
  </g>
  <!-- stretch marks -->
  <g stroke="#e53935" stroke-width="2" fill="none">
    <path d="M300 230 q6 8 0 18"/>
    <path d="M320 235 q6 8 0 18"/>
  </g>

  <!-- Labels with arrows -->
  <g font-family="Arial, sans-serif" font-size="12" fill="#4a148c">
    <line x1="352" y1="95" x2="470" y2="80" stroke="#8e24aa" stroke-width="1.2"/>
    <text x="476" y="78" font-weight="bold">Moon face 🌙</text>
    <text x="476" y="94" font-size="10">round, puffy cheeks</text>

    <line x1="250" y1="130" x2="150" y2="120" stroke="#8e24aa" stroke-width="1.2"/>
    <text x="145" y="118" text-anchor="end" font-weight="bold">Buffalo hump</text>
    <text x="145" y="134" text-anchor="end" font-size="10">fat on upper back</text>

    <line x1="360" y1="250" x2="470" y2="250" stroke="#8e24aa" stroke-width="1.2"/>
    <text x="476" y="248" font-weight="bold">Central obesity</text>
    <text x="476" y="264" font-size="10">belly fat gain</text>

    <line x1="330" y1="243" x2="470" y2="320" stroke="#e53935" stroke-width="1.2"/>
    <text x="476" y="322" font-weight="bold" fill="#c62828">Stretch marks</text>
    <text x="476" y="338" font-size="10" fill="#c62828">purple striae</text>

    <line x1="260" y1="300" x2="150" y2="330" stroke="#8e24aa" stroke-width="1.2"/>
    <text x="145" y="328" text-anchor="end" font-weight="bold">Thin arms &amp; legs</text>
    <text x="145" y="344" text-anchor="end" font-size="10">muscle wasting</text>
  </g>

  <!-- Cause line -->
  <rect x="70" y="420" width="480" height="38" rx="8" fill="#f8bbd0"/>
  <text x="310" y="437" font-family="Arial, sans-serif" font-size="11.5" text-anchor="middle" fill="#880e4f">
    Cause: more appetite + fat moved to face/neck/belly + salt &amp; water retention
  </text>
  <text x="310" y="452" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#ad1457">
    Mostly from long-term TABLETS/INJECTIONS — not normal-dose inhalers/sprays
  </text>
</svg>
`;
