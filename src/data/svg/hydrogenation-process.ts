/**
 * Hydrogenation Process - Before and After
 * Shows transformation from cis to saturated/trans
 */

export const HYDROGENATION_PROCESS = `
<svg width="700" height="400" viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="700" height="400" fill="#fafafa" rx="8"/>
  
  <!-- Title -->
  <text x="350" y="30" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#333">
    Partial Hydrogenation Process
  </text>
  
  <!-- BEFORE - Cis Configuration -->
  <g id="before-cis">
    <text x="150" y="70" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#2196f3">
      BEFORE: Liquid Oil (Cis)
    </text>
    
    <!-- Bent chain -->
    <circle cx="80" cy="130" r="14" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="80" y="136" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="140" cy="115" r="14" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <text x="140" y="121" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="180" cy="115" r="14" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <text x="180" y="121" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="220" cy="130" r="14" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="220" y="136" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <!-- Bonds -->
    <line x1="94" y1="125" x2="128" y2="118" stroke="#222" stroke-width="2"/>
    <line x1="154" y1="112" x2="166" y2="112" stroke="#d32f2f" stroke-width="2"/>
    <line x1="154" y1="118" x2="166" y2="118" stroke="#d32f2f" stroke-width="2"/>
    <line x1="194" y1="118" x2="206" y2="125" stroke="#222" stroke-width="2"/>
    
    <!-- H atoms on same side (cis) -->
    <circle cx="140" cy="80" r="10" fill="#2196f3" stroke="#1976d2" stroke-width="1.5"/>
    <text x="140" y="85" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="140" y1="101" x2="140" y2="90" stroke="#1976d2" stroke-width="1.5"/>
    
    <circle cx="180" cy="80" r="10" fill="#2196f3" stroke="#1976d2" stroke-width="1.5"/>
    <text x="180" y="85" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="180" y1="101" x2="180" y2="90" stroke="#1976d2" stroke-width="1.5"/>
    
    <text x="150" y="155" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#2196f3">
      Bent - LIQUID
    </text>
  </g>
  
  <!-- Process arrow -->
  <g id="process">
    <rect x="280" y="85" width="140" height="70" fill="#fff9e1" stroke="#ff9800" stroke-width="2" rx="6"/>
    <text x="350" y="105" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#ff9800">
      H₂ + Nickel
    </text>
    <text x="350" y="120" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#ff9800">
      150-200°C
    </text>
    <text x="350" y="135" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#666">
      Partial
    </text>
    <text x="350" y="148" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#666">
      Hydrogenation
    </text>
    
    <polygon points="265,120 280,115 280,125" fill="#ff9800"/>
    <polygon points="420,115 435,120 420,125" fill="#ff9800"/>
  </g>
  
  <!-- AFTER - Three Paths -->
  
  <!-- Path 1: Saturated (30%) -->
  <g id="path1-saturated">
    <text x="550" y="70" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#4caf50">
      Path 1: Saturated (30%)
    </text>
    
    <circle cx="480" cy="105" r="12" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="480" y="110" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="530" cy="105" r="12" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="530" y="110" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="580" cy="105" r="12" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="580" y="110" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="630" cy="105" r="12" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="630" y="110" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <line x1="492" y1="105" x2="518" y2="105" stroke="#222" stroke-width="2"/>
    <line x1="542" y1="105" x2="568" y2="105" stroke="#222" stroke-width="2"/>
    <line x1="592" y1="105" x2="618" y2="105" stroke="#222" stroke-width="2"/>
    
    <text x="555" y="135" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#4caf50">
      Straight - SOLID
    </text>
  </g>
  
  <!-- Path 2: Trans (50%) -->
  <g id="path2-trans">
    <text x="550" y="185" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#f44336">
      Path 2: Trans (50%) ⚠️
    </text>
    
    <circle cx="480" cy="230" r="12" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="480" y="235" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="530" cy="230" r="12" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <text x="530" y="235" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="580" cy="230" r="12" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <text x="580" y="235" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="630" cy="230" r="12" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="630" y="235" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <line x1="492" y1="230" x2="518" y2="230" stroke="#222" stroke-width="2"/>
    <line x1="542" y1="227" x2="568" y2="227" stroke="#d32f2f" stroke-width="2"/>
    <line x1="542" y1="233" x2="568" y2="233" stroke="#d32f2f" stroke-width="2"/>
    <line x1="592" y1="230" x2="618" y2="230" stroke="#222" stroke-width="2"/>
    
    <!-- H on opposite sides -->
    <circle cx="530" cy="200" r="9" fill="#ff5722" stroke="#d84315" stroke-width="1.5"/>
    <text x="530" y="205" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="530" y1="218" x2="530" y2="209" stroke="#d84315" stroke-width="1.5"/>
    
    <circle cx="580" cy="255" r="9" fill="#ff5722" stroke="#d84315" stroke-width="1.5"/>
    <text x="580" y="260" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="580" y1="242" x2="580" y2="246" stroke="#d84315" stroke-width="1.5"/>
    
    <text x="555" y="270" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#f44336" font-weight="bold">
      Straight - SEMI-SOLID
    </text>
    <text x="555" y="283" font-family="Arial, sans-serif" font-size="9" text-anchor="middle" fill="#f44336">
      DANGEROUS!
    </text>
  </g>
  
  <!-- Path 3: Remains Cis (20%) -->
  <g id="path3-cis">
    <text x="550" y="310" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#2196f3">
      Path 3: Remains Cis (20%)
    </text>
    
    <circle cx="490" cy="350" r="12" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="490" y="355" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="540" cy="335" r="12" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <text x="540" y="340" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="580" cy="335" r="12" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <text x="580" y="340" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="620" cy="350" r="12" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="620" y="355" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <line x1="502" y1="345" x2="530" y2="338" stroke="#222" stroke-width="2"/>
    <line x1="552" y1="332" x2="568" y2="332" stroke="#d32f2f" stroke-width="2"/>
    <line x1="552" y1="338" x2="568" y2="338" stroke="#d32f2f" stroke-width="2"/>
    <line x1="592" y1="338" x2="608" y2="345" stroke="#222" stroke-width="2"/>
    
    <text x="555" y="380" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#2196f3">
      Bent - LIQUID
    </text>
  </g>
  
  <!-- Summary -->
  <rect x="20" y="200" width="230" height="180" fill="#fff" stroke="#666" stroke-width="2" rx="6"/>
  <text x="135" y="225" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#333">
    Dalda Composition:
  </text>
  <text x="135" y="250" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#4caf50">
    ✓ 30% Saturated (safe)
  </text>
  <text x="135" y="275" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#f44336" font-weight="bold">
    ✗ 50% Trans (DANGER!)
  </text>
  <text x="135" y="300" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#2196f3">
    ✓ 20% Cis (safe)
  </text>
  
  <rect x="30" y="315" width="210" height="55" fill="#ffebee" stroke="#f44336" stroke-width="2" rx="4"/>
  <text x="135" y="335" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#c62828">
    The Problem:
  </text>
  <text x="135" y="350" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#666">
    50% artificial trans fats
  </text>
  <text x="135" y="363" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#666">
    created during processing!
  </text>
</svg>
`;
