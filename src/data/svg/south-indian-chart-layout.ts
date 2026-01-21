/**
 * South Indian Chart Layout - Rectangular grid format
 * Shows the fixed house positions with numbers and Tamil names
 */

export const SOUTH_INDIAN_CHART_LAYOUT = `<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="600" fill="#fafafa"/>
  
  <!-- Title -->
  <text x="400" y="30" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#333">
    South Indian Chart Layout
  </text>
  
  <!-- Outer border -->
  <rect x="50" y="60" width="700" height="450" fill="none" stroke="#333" stroke-width="3"/>
  
  <!-- Row 1 - Top row (4 cells) -->
  <line x1="50" y1="172.5" x2="750" y2="172.5" stroke="#333" stroke-width="2"/>
  <line x1="225" y1="60" x2="225" y2="172.5" stroke="#333" stroke-width="2"/>
  <line x1="400" y1="60" x2="400" y2="172.5" stroke="#333" stroke-width="2"/>
  <line x1="575" y1="60" x2="575" y2="172.5" stroke="#333" stroke-width="2"/>
  
  <!-- Row 2 - Middle row (2 cells + center) -->
  <line x1="50" y1="285" x2="225" y2="285" stroke="#333" stroke-width="2"/>
  <line x1="575" y1="285" x2="750" y2="285" stroke="#333" stroke-width="2"/>
  <line x1="225" y1="172.5" x2="225" y2="397.5" stroke="#333" stroke-width="2"/>
  <line x1="575" y1="172.5" x2="575" y2="397.5" stroke="#333" stroke-width="2"/>
  
  <!-- Row 3 - Bottom middle row (2 cells) -->
  <line x1="50" y1="397.5" x2="750" y2="397.5" stroke="#333" stroke-width="2"/>
  
  <!-- Row 4 - Bottom row (4 cells) -->
  <line x1="225" y1="397.5" x2="225" y2="510" stroke="#333" stroke-width="2"/>
  <line x1="400" y1="397.5" x2="400" y2="510" stroke="#333" stroke-width="2"/>
  <line x1="575" y1="397.5" x2="575" y2="510" stroke="#333" stroke-width="2"/>
  
  <!-- House 12 (Top-Left) -->
  <text x="137.5" y="100" font-family="Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#800031">12</text>
  <text x="137.5" y="125" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#004080">வியாயம்</text>
  
  <!-- House 1 (Top-Center-Left) - LAGNA -->
  <rect x="227" y="62" width="171" height="108.5" fill="#e8f5e9" stroke="#4caf50" stroke-width="2"/>
  <text x="312.5" y="100" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#2e7d32">1</text>
  <text x="312.5" y="125" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1b5e20">லக்னம்</text>
  
  <!-- House 2 (Top-Center-Right) -->
  <text x="487.5" y="100" font-family="Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#800031">2</text>
  <text x="487.5" y="125" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#004080">தனம்</text>
  
  <!-- House 3 (Top-Right) -->
  <text x="662.5" y="100" font-family="Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#800031">3</text>
  <text x="662.5" y="125" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#004080">சகோதரம்</text>
  
  <!-- House 11 (Middle-Left) -->
  <text x="137.5" y="220" font-family="Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#800031">11</text>
  <text x="137.5" y="245" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#004080">லாபம்</text>
  
  <!-- Center text -->
  <text x="400" y="270" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#555">RASI CHART</text>
  <text x="400" y="290" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#888">ராசி அட்டவணை</text>
  
  <!-- House 4 (Middle-Right) -->
  <text x="662.5" y="220" font-family="Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#800031">4</text>
  <text x="662.5" y="245" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#004080">சுகம்</text>
  
  <!-- House 10 (Lower-Middle-Left) -->
  <text x="137.5" y="330" font-family="Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#800031">10</text>
  <text x="137.5" y="355" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#004080">கர்மஸ்தானம்</text>
  
  <!-- House 5 (Lower-Middle-Right) -->
  <text x="662.5" y="330" font-family="Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#800031">5</text>
  <text x="662.5" y="355" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#004080">புத்திரம்</text>
  
  <!-- House 9 (Bottom-Left) -->
  <text x="137.5" y="440" font-family="Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#800031">9</text>
  <text x="137.5" y="465" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#004080">பாக்கியம்</text>
  
  <!-- House 8 (Bottom-Center-Left) -->
  <text x="312.5" y="440" font-family="Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#800031">8</text>
  <text x="312.5" y="465" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#004080">ஆயுள்</text>
  
  <!-- House 7 (Bottom-Center-Right) -->
  <text x="487.5" y="440" font-family="Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#800031">7</text>
  <text x="487.5" y="465" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#004080">கலத்திரம்</text>
  
  <!-- House 6 (Bottom-Right) -->
  <text x="662.5" y="440" font-family="Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#800031">6</text>
  <text x="662.5" y="465" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#004080">ரிபு</text>
  
  <!-- Counter-clockwise indicator -->
  <path d="M 312.5 75 Q 290 70 270 75" fill="none" stroke="#ff6b6b" stroke-width="2" marker-end="url(#arrowred)"/>
  <text x="240" y="72" font-family="Arial, sans-serif" font-size="11" fill="#ff6b6b">↺</text>
  
  <defs>
    <marker id="arrowred" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#ff6b6b"/>
    </marker>
  </defs>
  
  <!-- Note -->
  <text x="400" y="550" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#666">
    Houses are FIXED. Signs &amp; Planets rotate. Houses proceed counter-clockwise from Lagna (1).
  </text>
</svg>`;
