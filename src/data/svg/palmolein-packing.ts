/**
 * Palmolein Packing Diagram - Shows bent chains can't pack tightly
 * Visual representation of liquid oil molecular arrangement
 */

export const PALMOLEIN_PACKING = `
<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="400" height="300" fill="#fafafa" rx="8"/>
  
  <!-- Title -->
  <text x="200" y="25" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#333">
    Palmolein (Unsaturated - Bent Chains)
  </text>
  
  <!-- Bent molecule 1 -->
  <g id="molecule1">
    <path d="M 30 80 L 80 80 L 100 100 L 140 100 L 160 80 L 210 80" 
          stroke="#2196f3" stroke-width="4" fill="none" stroke-linecap="round"/>
  </g>
  
  <!-- Bent molecule 2 (inverted) -->
  <g id="molecule2">
    <path d="M 250 120 L 280 140 L 320 140 L 340 120 L 370 120" 
          stroke="#2196f3" stroke-width="4" fill="none" stroke-linecap="round"/>
  </g>
  
  <!-- Bent molecule 3 -->
  <g id="molecule3">
    <path d="M 40 160 L 70 180 L 110 180 L 130 160 L 180 160" 
          stroke="#2196f3" stroke-width="4" fill="none" stroke-linecap="round"/>
  </g>
  
  <!-- Bent molecule 4 -->
  <g id="molecule4">
    <path d="M 220 200 L 250 180 L 290 180 L 320 200 L 360 200" 
          stroke="#2196f3" stroke-width="4" fill="none" stroke-linecap="round"/>
  </g>
  
  <!-- Bent molecule 5 (inverted) -->
  <g id="molecule5">
    <path d="M 60 240 L 90 220 L 130 220 L 150 240 L 190 240" 
          stroke="#2196f3" stroke-width="4" fill="none" stroke-linecap="round"/>
  </g>
  
  <!-- Gap indicators -->
  <circle cx="230" cy="100" r="8" fill="#ff9800" opacity="0.6"/>
  <circle cx="200" cy="140" r="8" fill="#ff9800" opacity="0.6"/>
  <circle cx="260" cy="170" r="8" fill="#ff9800" opacity="0.6"/>
  <circle cx="210" cy="220" r="8" fill="#ff9800" opacity="0.6"/>
  
  <text x="280" cy="105" font-family="Arial, sans-serif" font-size="11" fill="#ff6f00" font-weight="bold">
    Gaps
  </text>
  
  <!-- Annotations -->
  <rect x="20" y="255" width="360" height="35" fill="#e1f5ff" stroke="#2196f3" stroke-width="2" rx="4"/>
  <text x="200" y="273" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#1565c0" font-weight="bold">
    Bent chains can't pack tightly
  </text>
  <text x="200" y="287" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#1976d2">
    Large gaps → Molecules slide freely → LIQUID
  </text>
</svg>
`;
