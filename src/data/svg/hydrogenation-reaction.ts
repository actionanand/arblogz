/**
 * Hydrogenation Reaction - Before and After
 * Shows the chemical transformation from unsaturated to saturated fat
 */

export const HYDROGENATION_REACTION = `
<svg width="600" height="350" viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="600" height="350" fill="#fafafa" rx="8"/>
  
  <!-- Title -->
  <text x="300" y="30" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#333">
    Hydrogenation Reaction
  </text>
  
  <!-- BEFORE Section -->
  <g id="before">
    <rect x="20" y="50" width="250" height="135" fill="#e1f5ff" stroke="#2196f3" stroke-width="2" rx="6"/>
    <text x="145" y="70" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1565c0">
      BEFORE: Unsaturated (Liquid)
    </text>
    
    <!-- Double bond molecule -->
    <circle cx="80" cy="120" r="16" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="80" y="127" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="140" cy="120" r="16" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <text x="140" y="127" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="180" cy="120" r="16" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <text x="180" y="127" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="220" cy="120" r="16" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="220" y="127" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <!-- Bonds -->
    <line x1="96" y1="120" x2="124" y2="120" stroke="#222" stroke-width="2"/>
    <line x1="156" y1="117" x2="164" y2="117" stroke="#d32f2f" stroke-width="2"/>
    <line x1="156" y1="123" x2="164" y2="123" stroke="#d32f2f" stroke-width="2"/>
    <line x1="196" y1="120" x2="204" y2="120" stroke="#222" stroke-width="2"/>
    
    <!-- H atoms -->
    <circle cx="140" cy="85" r="11" fill="#2196f3" stroke="#1976d2" stroke-width="1.5"/>
    <text x="140" y="90" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="140" y1="104" x2="140" y2="96" stroke="#1976d2" stroke-width="1.5"/>
    
    <circle cx="180" cy="155" r="11" fill="#2196f3" stroke="#1976d2" stroke-width="1.5"/>
    <text x="180" y="160" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="180" y1="136" x2="180" y2="144" stroke="#1976d2" stroke-width="1.5"/>
    
    <text x="145" y="180" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#666">
      C=C Double Bond
    </text>
  </g>
  
  <!-- Process arrow and conditions -->
  <g id="process">
    <rect x="180" y="195" width="240" height="80" fill="#fff9e1" stroke="#ff9800" stroke-width="2" rx="6"/>
    <text x="300" y="215" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#ff9800">
      + H₂ (Hydrogen gas)
    </text>
    <text x="300" y="235" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#ff9800">
      + Catalyst (Nickel/Palladium)
    </text>
    <text x="300" y="255" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#ff9800">
      + Heat (150-200°C)
    </text>
    
    <!-- Arrow pointing down -->
    <polygon points="290,180 310,180 300,195" fill="#ff9800"/>
    <polygon points="290,285 310,285 300,275" fill="#ff9800"/>
  </g>
  
  <!-- AFTER Section -->
  <g id="after">
    <rect x="330" y="50" width="250" height="135" fill="#fff4e1" stroke="#ff9800" stroke-width="2" rx="6"/>
    <text x="455" y="70" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#e65100">
      AFTER: Saturated (Solid)
    </text>
    
    <!-- Single bond molecule -->
    <circle cx="380" cy="120" r="16" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="380" y="127" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="430" cy="120" r="16" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="430" y="127" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="480" cy="120" r="16" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="480" y="127" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <circle cx="530" cy="120" r="16" fill="#444" stroke="#222" stroke-width="2"/>
    <text x="530" y="127" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">C</text>
    
    <!-- Single bonds only -->
    <line x1="396" y1="120" x2="414" y2="120" stroke="#222" stroke-width="2"/>
    <line x1="446" y1="120" x2="464" y2="120" stroke="#222" stroke-width="2"/>
    <line x1="496" y1="120" x2="514" y2="120" stroke="#222" stroke-width="2"/>
    
    <!-- More H atoms -->
    <circle cx="430" cy="85" r="11" fill="#2196f3" stroke="#1976d2" stroke-width="1.5"/>
    <text x="430" y="90" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="430" y1="104" x2="430" y2="96" stroke="#1976d2" stroke-width="1.5"/>
    
    <circle cx="480" cy="85" r="11" fill="#2196f3" stroke="#1976d2" stroke-width="1.5"/>
    <text x="480" y="90" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="480" y1="104" x2="480" y2="96" stroke="#1976d2" stroke-width="1.5"/>
    
    <circle cx="430" cy="155" r="11" fill="#2196f3" stroke="#1976d2" stroke-width="1.5"/>
    <text x="430" y="160" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="430" y1="136" x2="430" y2="144" stroke="#1976d2" stroke-width="1.5"/>
    
    <circle cx="480" cy="155" r="11" fill="#2196f3" stroke="#1976d2" stroke-width="1.5"/>
    <text x="480" y="160" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#fff">H</text>
    <line x1="480" y1="136" x2="480" y2="144" stroke="#1976d2" stroke-width="1.5"/>
    
    <text x="455" y="180" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#666">
      C-C Single Bonds Only
    </text>
  </g>
  
  <!-- Summary -->
  <rect x="50" y="300" width="500" height="35" fill="#e8f5e9" stroke="#4caf50" stroke-width="2" rx="4"/>
  <text x="300" y="318" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#2e7d32" font-weight="bold">
    Double bond removed → Straight chain → LIQUID becomes SOLID
  </text>
  <text x="300" y="332" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#388e3c">
    Hydrogen atoms added at former double bond location
  </text>
</svg>
`;
