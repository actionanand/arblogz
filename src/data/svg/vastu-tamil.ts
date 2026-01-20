export const VASTU_TAMIL = `<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <!-- Define styles -->
  <defs>
    <style>
      .box { fill: none; stroke: #333; stroke-width: 2; }
      .text-main { font-family: 'Noto Sans Tamil', Arial, sans-serif; font-size: 18px; fill: #333; text-anchor: middle; }
      .text-corner { font-family: 'Noto Sans Tamil', Arial, sans-serif; font-size: 16px; fill: #666; text-anchor: middle; }
      .text-side { font-family: 'Noto Sans Tamil', Arial, sans-serif; font-size: 16px; fill: #444; text-anchor: middle; }
      .arrow { stroke: #333; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .arrow-line { stroke: #333; stroke-width: 2; }
    </style>
    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#333" />
    </marker>
  </defs>
  
  <!-- Main square structure -->
  <rect x="200" y="200" width="400" height="400" class="box"/>
  
  <!-- Top row boxes -->
  <rect x="200" y="200" width="100" height="100" class="box"/>
  <rect x="300" y="200" width="100" height="100" class="box"/>
  <rect x="400" y="200" width="100" height="100" class="box"/>
  <rect x="500" y="200" width="100" height="100" class="box"/>
  
  <!-- Bottom row boxes -->
  <rect x="200" y="500" width="100" height="100" class="box"/>
  <rect x="300" y="500" width="100" height="100" class="box"/>
  <rect x="400" y="500" width="100" height="100" class="box"/>
  <rect x="500" y="500" width="100" height="100" class="box"/>
  
  <!-- Left side boxes -->
  <rect x="200" y="300" width="100" height="100" class="box"/>
  <rect x="200" y="400" width="100" height="100" class="box"/>
  
  <!-- Right side boxes -->
  <rect x="500" y="300" width="100" height="100" class="box"/>
  <rect x="500" y="400" width="100" height="100" class="box"/>
  
  <!-- Center space -->
  <rect x="300" y="300" width="200" height="200" class="box"/>
  
  <!-- Center text -->
  <text x="400" y="390" class="text-main">பிரம்ம</text>
  <text x="400" y="410" class="text-main">ஸ்தானம்</text>
  
  <!-- Top row text -->
  <text x="250" y="260" class="text-main">வட</text>
  <text x="250" y="280" class="text-main">மேற்கு</text>
  <text x="350" y="270" class="text-main">சனி</text>
  <text x="450" y="270" class="text-main">சனி</text>
  <text x="550" y="260" class="text-main">வட</text>
  <text x="550" y="280" class="text-main">கிழக்கு</text>
  
  <!-- Bottom row text -->
  <text x="250" y="545" class="text-main">தென்</text>
  <text x="250" y="565" class="text-main">மேற்கு</text>
  <text x="350" y="555" class="text-main">சூரியன்</text>
  <text x="450" y="555" class="text-main">சந்திரன்</text>
  <text x="550" y="545" class="text-main">தென்</text>
  <text x="550" y="565" class="text-main">கிழக்கு</text>
  
  <!-- Double arrows at top - 80% length through both boxes -->
  <line x1="310" y1="250" x2="370" y2="250" class="arrow-line"/>
  <polygon points="305,250 313,246 313,254" fill="#333"/>
  <line x1="490" y1="250" x2="430" y2="250" class="arrow-line"/>
  <polygon points="495,250 487,246 487,254" fill="#333"/>
  
  <!-- Double arrows at bottom - 80% length through both boxes -->
  <line x1="310" y1="525" x2="370" y2="525" class="arrow-line"/>
  <polygon points="305,525 313,521 313,529" fill="#333"/>
  <line x1="490" y1="525" x2="430" y2="525" class="arrow-line"/>
  <polygon points="495,525 487,521 487,529" fill="#333"/>
  
  <!-- Double arrows on left side (vertical) - 80% length through both boxes -->
  <line x1="250" y1="310" x2="250" y2="370" class="arrow-line"/>
  <polygon points="250,305 246,313 254,313" fill="#333"/>
  <line x1="250" y1="490" x2="250" y2="430" class="arrow-line"/>
  <polygon points="250,495 246,487 254,487" fill="#333"/>
  
  <!-- Double arrows on right side (vertical) - 80% length through both boxes -->
  <line x1="550" y1="310" x2="550" y2="370" class="arrow-line"/>
  <polygon points="550,305 546,313 554,313" fill="#333"/>
  <line x1="550" y1="490" x2="550" y2="430" class="arrow-line"/>
  <polygon points="550,495 546,487 554,487" fill="#333"/>
  
  <!-- Corner labels (outside) -->
  <text x="140" y="160" class="text-corner">வாயு</text>
  <text x="660" y="160" class="text-corner">ஈசான்யம்</text>
  <text x="660" y="650" class="text-corner">அக்னி</text>
  <text x="100" y="650" class="text-corner">கன்னி மூலை</text>
  <text x="100" y="670" class="text-corner">(நிருதி)</text>
  
  <!-- Side labels (outside, center of each side) -->
  <text x="400" y="170" class="text-side">வடக்கு குபேரன்</text>
  <text x="645" y="395" class="text-side">கிழக்கு</text>
  <text x="645" y="415" class="text-side">இந்திரன்</text>
  <text x="400" y="640" class="text-side">தெற்கு எமதர்மராஜா</text>
  <text x="155" y="395" class="text-side">மேற்கு</text>
  <text x="155" y="415" class="text-side">வருணன்</text>
  
  <!-- Diagonal lines from corners to boxes -->
  <line x1="160" y1="170" x2="200" y2="200" stroke="#999" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="640" y1="170" x2="600" y2="200" stroke="#999" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="640" y1="640" x2="600" y2="600" stroke="#999" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="160" y1="640" x2="200" y2="600" stroke="#999" stroke-width="1" stroke-dasharray="3,3"/>
</svg>`;
