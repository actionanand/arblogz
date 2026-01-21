/**
 * Cis Configuration - Bent Molecular Structure
 * Shows hydrogen atoms on SAME side creating a bend
 */

export const MOLECULAR_CIS = `
<svg width="600" height="350" viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="600" height="350" fill="#fafafa" rx="8"/>
  
  <!-- Title -->
  <text x="300" y="30" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#333">
    Cis Configuration (Natural Oils)
  </text>
  
  <!-- Bent Carbon Chain -->
  <g id="carbon-chain-bent">
    <!-- Left straight section -->
    <circle cx="80" cy="175" r="18" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="80" y="182" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="180" cy="175" r="18" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="180" y="182" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <!-- Double bond carbons - creating the bend -->
    <circle cx="270" cy="140" r="18" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <text x="270" y="147" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="330" cy="140" r="18" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <text x="330" y="147" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <!-- Right straight section -->
    <circle cx="420" cy="175" r="18" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="420" y="182" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="520" cy="175" r="18" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="520" y="182" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <!-- Single bonds (angled) -->
    <line x1="98" y1="175" x2="162" y2="175" stroke="#222" stroke-width="3"/>
    <line x1="196" y1="168" x2="254" y2="146" stroke="#222" stroke-width="3"/>
    <line x1="346" y1="146" x2="404" y2="168" stroke="#222" stroke-width="3"/>
    <line x1="438" y1="175" x2="502" y2="175" stroke="#222" stroke-width="3"/>
    
    <!-- Double bond -->
    <line x1="288" y1="137" x2="312" y2="137" stroke="#d32f2f" stroke-width="3"/>
    <line x1="288" y1="143" x2="312" y2="143" stroke="#d32f2f" stroke-width="3"/>
  </g>
  
  <!-- Hydrogen atoms - CIS configuration (both H on SAME side) -->
  <g id="hydrogen-cis">
    <!-- H atoms on top (same side) -->
    <circle cx="270" cy="80" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="270" y="86" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="270" y1="122" x2="270" y2="94" stroke="#1976d2" stroke-width="2"/>
    
    <circle cx="330" cy="80" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="330" y="86" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="330" y1="122" x2="330" y2="94" stroke="#1976d2" stroke-width="2"/>
    
    <!-- Other H atoms -->
    <circle cx="80" cy="235" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="80" y="241" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="80" y1="193" x2="80" y2="221" stroke="#1976d2" stroke-width="2"/>
    
    <circle cx="180" cy="235" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="180" y="241" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="180" y1="193" x2="180" y2="221" stroke="#1976d2" stroke-width="2"/>
    
    <circle cx="420" cy="235" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="420" y="241" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="420" y1="193" x2="420" y2="221" stroke="#1976d2" stroke-width="2"/>
    
    <circle cx="520" cy="235" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="520" y="241" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="520" y1="193" x2="520" y2="221" stroke="#1976d2" stroke-width="2"/>
  </g>
  
  <!-- Extension lines -->
  <line x1="30" y1="175" x2="62" y2="175" stroke="#222" stroke-width="3"/>
  <line x1="538" y1="175" x2="570" y2="175" stroke="#222" stroke-width="3"/>
  
  <!-- Bend annotation -->
  <path d="M 250 160 Q 300 120 350 160" stroke="#ff9800" stroke-width="2" fill="none" stroke-dasharray="5,5"/>
  <text x="300" y="115" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#ff9800">
    30° KINK
  </text>
  
  <!-- Same side annotation -->
  <rect x="240" y="39" width="100" height="35" fill="#e3f2fd" stroke="#2196f3" stroke-width="2" rx="4"/>
  <text x="290" y="57" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#1565c0">
    H atoms on
  </text>
  <text x="290" y="70" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#1565c0">
    SAME side
  </text>
  
  <!-- Caption -->
  <text x="300" y="310" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666">
    Bent shape → Cannot pack tightly → LIQUID (Palmolein, Olive Oil)
  </text>
  <text x="300" y="330" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#999" font-style="italic">
    Natural configuration - Heart healthy ✓
  </text>
</svg>
`;
