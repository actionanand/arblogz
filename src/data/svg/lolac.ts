export const LOLAC = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-size="20" font-weight="bold" fill="#2c3e50">
    Lactose Breakdown in Lo-Lac Formula
  </text>
  
  <!-- Regular Formula -->
  <rect x="50" y="60" width="300" height="180" fill="#ffe6e6" stroke="#c0392b" stroke-width="2" rx="10"/>
  <text x="200" y="85" text-anchor="middle" font-weight="bold" font-size="16" fill="#c0392b">
    Regular Formula (High Lactose)
  </text>
  
  <!-- Lactose molecule diagram -->
  <circle cx="120" cy="140" r="25" fill="#3498db" stroke="#2c3e50" stroke-width="2"/>
  <text x="120" y="147" text-anchor="middle" font-size="12" fill="white">Glucose</text>
  
  <line x1="145" y1="140" x2="175" y2="140" stroke="#e74c3c" stroke-width="3"/>
  <text x="160" y="130" text-anchor="middle" font-size="10" fill="#e74c3c">bond</text>
  
  <circle cx="200" cy="140" r="25" fill="#9b59b6" stroke="#2c3e50" stroke-width="2"/>
  <text x="200" y="147" text-anchor="middle" font-size="12" fill="white">Galactose</text>
  
  <text x="160" y="180" text-anchor="middle" font-size="14" fill="#2c3e50">
    Lactose (C₁₂H₂₂O₁₁)
  </text>
  
  <text x="200" y="210" text-anchor="middle" font-size="11" fill="#e74c3c">
    ❌ Hard to digest
  </text>
  <text x="200" y="230" text-anchor="middle" font-size="11" fill="#e74c3c">
    Causes gas &amp; diarrhea
  </text>
  
  <!-- Arrow -->
  <path d="M 360 150 L 430 150" fill="none" stroke="#27ae60" stroke-width="3" marker-end="url(#arrowhead)"/>
  <text x="395" y="140" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">
    Pre-digested
  </text>
  
  <!-- Lo-Lac Formula -->
  <rect x="450" y="60" width="300" height="180" fill="#e6ffe6" stroke="#27ae60" stroke-width="2" rx="10"/>
  <text x="600" y="85" text-anchor="middle" font-weight="bold" font-size="16" fill="#27ae60">
    Lo-Lac Formula (Low Lactose)
  </text>
  
  <!-- Separated molecules -->
  <circle cx="540" cy="140" r="25" fill="#3498db" stroke="#2c3e50" stroke-width="2"/>
  <text x="540" y="147" text-anchor="middle" font-size="12" fill="white">Glucose</text>
  
  <text x="590" y="147" text-anchor="middle" font-size="20" fill="#27ae60">+</text>
  
  <circle cx="640" cy="140" r="25" fill="#9b59b6" stroke="#2c3e50" stroke-width="2"/>
  <text x="640" y="147" text-anchor="middle" font-size="12" fill="white">Galactose</text>
  
  <text x="590" y="180" text-anchor="middle" font-size="14" fill="#2c3e50">
    Already separated!
  </text>
  
  <text x="600" y="210" text-anchor="middle" font-size="11" fill="#27ae60">
    ✓ Easy to digest
  </text>
  <text x="600" y="230" text-anchor="middle" font-size="11" fill="#27ae60">
    No fermentation
  </text>
  
  <!-- Bottom explanation -->
  <rect x="50" y="270" width="700" height="200" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="10"/>
  <text x="400" y="295" text-anchor="middle" font-size="16" font-weight="bold" fill="#34495e">
    How Manufacturing Pre-Digests Lactose
  </text>
  
  <text x="70" y="325" font-size="13" fill="#2c3e50">
    <tspan x="70" dy="0">1. <tspan font-weight="bold">Enzyme Treatment:</tspan> Lactase enzyme added during manufacturing</tspan>
    <tspan x="70" dy="25">2. <tspan font-weight="bold">Breaks Glycosidic Bond:</tspan> Lactase breaks β-1,4-glycosidic bond between glucose &amp; galactose</tspan>
    <tspan x="70" dy="25">3. <tspan font-weight="bold">Result:</tspan> Lactose → Glucose + Galactose (90-99% lactose removed)</tspan>
    <tspan x="70" dy="25">4. <tspan font-weight="bold">Benefit:</tspan> Baby's intestine receives already-digested sugars</tspan>
    <tspan x="70" dy="25">5. <tspan font-weight="bold">No Fermentation:</tspan> Since already broken down, bacteria can't ferment it</tspan>
    <tspan x="70" dy="25">6. <tspan font-weight="bold">Quick Absorption:</tspan> Glucose &amp; galactose directly absorbed → No gas, no diarrhea</tspan>
  </text>
  
  <!-- Arrow marker definition -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#27ae60"/>
    </marker>
  </defs>
</svg>`;
