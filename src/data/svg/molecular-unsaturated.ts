/**
 * Unsaturated Fat Molecular Structure - With Double Bond
 * Shows double bond (C=C) in the chain
 */

export const MOLECULAR_UNSATURATED = `
<svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="600" height="300" fill="#fafafa" rx="8"/>
  
  <!-- Title -->
  <text x="300" y="30" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#333">
    Unsaturated Fat (With Double Bond)
  </text>
  
  <!-- Horizontal Carbon Chain -->
  <g id="carbon-chain">
    <!-- Carbon atoms -->
    <circle cx="100" cy="150" r="18" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="100" y="157" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="200" cy="150" r="18" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="200" y="157" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <!-- Double bond carbons -->
    <circle cx="300" cy="150" r="18" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <text x="300" y="157" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="400" cy="150" r="18" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <text x="400" y="157" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="500" cy="150" r="18" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="500" y="157" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <!-- Single bonds -->
    <line x1="118" y1="150" x2="182" y2="150" stroke="#222" stroke-width="3"/>
    <line x1="418" y1="150" x2="482" y2="150" stroke="#222" stroke-width="3"/>
    
    <!-- Double bond -->
    <line x1="318" y1="145" x2="382" y2="145" stroke="#d32f2f" stroke-width="3"/>
    <line x1="318" y1="155" x2="382" y2="155" stroke="#d32f2f" stroke-width="3"/>
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
    
    <!-- Double bond H - only top -->
    <circle cx="300" cy="90" r="14" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
    <text x="300" y="96" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="300" y1="132" x2="300" y2="104" stroke="#1976d2" stroke-width="2"/>
    
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
    
    <!-- Double bond H - only bottom -->
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
  
  <!-- Double bond annotation -->
  <text x="350" y="185" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#d32f2f" font-weight="bold">
    C=C Double Bond
  </text>
  
  <!-- Caption -->
  <text x="300" y="270" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666">
    Fewer H atoms at double bond
  </text>
</svg>
`;
