/**
 * Saturated Fat Molecular Structure - Single Bonds Only
 * Shows straight chain with C-C single bonds and all C-H bonds
 */

export const MOLECULAR_SATURATED = `
<svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="600" height="300" fill="#fafafa" rx="8"/>
  
  <!-- Title -->
  <text x="300" y="30" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#333">
    Saturated Fat (Single Bonds Only)
  </text>
  
  <!-- Horizontal Carbon Chain -->
  <g id="carbon-chain">
    <!-- Carbon atoms -->
    <circle cx="100" cy="150" r="18" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="100" y="157" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="200" cy="150" r="18" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="200" y="157" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="300" cy="150" r="18" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="300" y="157" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="400" cy="150" r="18" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="400" y="157" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="500" cy="150" r="18" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="500" y="157" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <!-- Single bonds between carbons -->
    <line x1="118" y1="150" x2="182" y2="150" stroke="#222" stroke-width="3"/>
    <line x1="218" y1="150" x2="282" y2="150" stroke="#222" stroke-width="3"/>
    <line x1="318" y1="150" x2="382" y2="150" stroke="#222" stroke-width="3"/>
    <line x1="418" y1="150" x2="482" y2="150" stroke="#222" stroke-width="3"/>
  </g>
  
  <!-- Hydrogen atoms -->
  <g id="hydrogen-atoms">
    <!-- Top H atoms -->
    <circle cx="100" cy="90" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="100" y="96" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="100" y1="132" x2="100" y2="104" stroke="#1976d2" stroke-width="2"/>
    
    <circle cx="200" cy="90" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="200" y="96" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="200" y1="132" x2="200" y2="104" stroke="#1976d2" stroke-width="2"/>
    
    <circle cx="300" cy="90" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="300" y="96" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="300" y1="132" x2="300" y2="104" stroke="#1976d2" stroke-width="2"/>
    
    <circle cx="400" cy="90" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="400" y="96" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="400" y1="132" x2="400" y2="104" stroke="#1976d2" stroke-width="2"/>
    
    <circle cx="500" cy="90" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="500" y="96" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="500" y1="132" x2="500" y2="104" stroke="#1976d2" stroke-width="2"/>
    
    <!-- Bottom H atoms -->
    <circle cx="100" cy="210" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="100" y="216" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="100" y1="168" x2="100" y2="196" stroke="#1976d2" stroke-width="2"/>
    
    <circle cx="200" cy="210" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="200" y="216" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="200" y1="168" x2="200" y2="196" stroke="#1976d2" stroke-width="2"/>
    
    <circle cx="300" cy="210" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="300" y="216" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="300" y1="168" x2="300" y2="196" stroke="#1976d2" stroke-width="2"/>
    
    <circle cx="400" cy="210" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="400" y="216" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="400" y1="168" x2="400" y2="196" stroke="#1976d2" stroke-width="2"/>
    
    <circle cx="500" cy="210" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="500" y="216" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="500" y1="168" x2="500" y2="196" stroke="#1976d2" stroke-width="2"/>
  </g>
  
  <!-- Left extension line -->
  <line x1="50" y1="150" x2="82" y2="150" stroke="#222" stroke-width="3"/>
  
  <!-- Right extension line -->
  <line x1="518" y1="150" x2="550" y2="150" stroke="#222" stroke-width="3"/>
  
  <!-- Caption -->
  <text x="300" y="270" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666">
    Straight chain → Tight packing → SOLID
  </text>
</svg>
`;
