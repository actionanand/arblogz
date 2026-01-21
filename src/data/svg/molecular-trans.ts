/**
 * Trans Configuration - Straight Molecular Structure
 * Shows hydrogen atoms on OPPOSITE sides keeping chain straight
 */

export const MOLECULAR_TRANS = `
<svg width="600" height="350" viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="600" height="350" fill="#fafafa" rx="8"/>
  
  <!-- Title -->
  <text x="300" y="30" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#333">
    Trans Configuration (Dalda - Artificial)
  </text>
  
  <!-- Straight Carbon Chain -->
  <g id="carbon-chain-straight">
    <!-- Carbon atoms -->
    <circle cx="100" cy="175" r="18" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="100" y="182" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="200" cy="175" r="18" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="200" y="182" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <!-- Double bond carbons -->
    <circle cx="300" cy="175" r="18" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <text x="300" y="182" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="400" cy="175" r="18" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <text x="400" y="182" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="500" cy="175" r="18" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="500" y="182" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <!-- Single bonds -->
    <line x1="118" y1="175" x2="182" y2="175" stroke="#222" stroke-width="3"/>
    <line x1="218" y1="175" x2="282" y2="175" stroke="#222" stroke-width="3"/>
    <line x1="418" y1="175" x2="482" y2="175" stroke="#222" stroke-width="3"/>
    
    <!-- Double bond -->
    <line x1="318" y1="170" x2="382" y2="170" stroke="#d32f2f" stroke-width="3"/>
    <line x1="318" y1="180" x2="382" y2="180" stroke="#d32f2f" stroke-width="3"/>
  </g>
  
  <!-- Hydrogen atoms - TRANS configuration (H on OPPOSITE sides) -->
  <g id="hydrogen-trans">
    <!-- Left H on TOP -->
    <circle cx="300" cy="110" r="14" fill="#ff5722" stroke="#d84315" stroke-width="2"/>
    <text x="300" y="116" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="300" y1="157" x2="300" y2="124" stroke="#d84315" stroke-width="2"/>
    
    <!-- Right H on BOTTOM -->
    <circle cx="400" cy="240" r="14" fill="#ff5722" stroke="#d84315" stroke-width="2"/>
    <text x="400" y="246" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="400" y1="193" x2="400" y2="226" stroke="#d84315" stroke-width="2"/>
    
    <!-- Other H atoms -->
    <circle cx="100" cy="240" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="100" y="246" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="100" y1="193" x2="100" y2="226" stroke="#1976d2" stroke-width="2"/>
    
    <circle cx="200" cy="240" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="200" y="246" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="200" y1="193" x2="200" y2="226" stroke="#1976d2" stroke-width="2"/>
    
    <circle cx="500" cy="240" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="500" y="246" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="500" y1="193" x2="500" y2="226" stroke="#1976d2" stroke-width="2"/>
  </g>
  
  <!-- Extension lines -->
  <line x1="50" y1="175" x2="82" y2="175" stroke="#222" stroke-width="3"/>
  <line x1="518" y1="175" x2="550" y2="175" stroke="#222" stroke-width="3"/>
  
  <!-- Straight line annotation -->
  <line x1="50" y1="175" x2="550" y2="175" stroke="#ff9800" stroke-width="2" stroke-dasharray="8,4" opacity="0.6"/>
  <text x="300" y="60" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#ff9800">
    STRAIGHT (No Kink Despite Double Bond!)
  </text>
  
  <!-- Opposite sides annotation -->
  <rect x="230" y="85" width="80" height="35" fill="#ffebee" stroke="#f44336" stroke-width="2" rx="4"/>
  <text x="270" y="103" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#c62828">
    H on
  </text>
  <text x="270" y="116" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#c62828">
    OPPOSITE
  </text>
  
  <rect x="330" y="200" width="80" height="35" fill="#ffebee" stroke="#f44336" stroke-width="2" rx="4"/>
  <text x="370" y="218" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#c62828">
    H on
  </text>
  <text x="370" y="231" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#c62828">
    OPPOSITE
  </text>
  
  <!-- Caption -->
  <text x="300" y="300" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666">
    Straight shape → Can pack tightly → SEMI-SOLID (Dalda)
  </text>
  <text x="300" y="320" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#d32f2f" font-weight="bold">
    Artificial configuration - Dangerous for health! ✗
  </text>
  <text x="300" y="335" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#999" font-style="italic">
    Created by industrial hydrogenation process
  </text>
</svg>
`;
