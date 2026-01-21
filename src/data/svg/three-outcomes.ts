/**
 * Three Hydrogenation Outcomes - Simple diagram showing the three paths
 * Full saturation, trans isomerization, and unchanged cis
 */

export const THREE_OUTCOMES = `
<svg width="700" height="400" viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="700" height="400" fill="#fafafa" rx="8"/>
  
  <!-- Title -->
  <text x="350" y="30" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#333">
    Three Possible Outcomes During Hydrogenation
  </text>
  
  <!-- Outcome 1: Full Hydrogenation -->
  <g id="outcome1">
    <rect x="20" y="60" width="200" height="100" fill="#e8f5e9" stroke="#4caf50" stroke-width="2" rx="6"/>
    <text x="120" y="85" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#2e7d32">
      1. Full Hydrogenation
    </text>
    <text x="120" y="100" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#388e3c">
      Cis double bond →
    </text>
    <text x="120" y="115" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#388e3c">
      NO double bond
    </text>
    <text x="120" y="130" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#2e7d32">
      —C=C— → —C—C—
    </text>
    <text x="120" y="150" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#666">
      LIQUID → SOLID
    </text>
  </g>
  
  <!-- Outcome 2: Isomerization to Trans -->
  <g id="outcome2">
    <rect x="250" y="60" width="200" height="160" fill="#ffebee" stroke="#f44336" stroke-width="3" rx="6"/>
    <text x="350" y="85" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#c62828">
      2. Isomerization ⚠️
    </text>
    <text x="350" y="100" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#d32f2f">
      Cis → Trans double bond
    </text>
    <text x="350" y="115" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#666" font-style="italic">
      (same # of H atoms!)
    </text>
    
    <!-- Visual representation -->
    <g transform="translate(270, 125)">
      <!-- CIS -->
      <text x="20" y="15" font-family="Arial, sans-serif" font-size="10" fill="#666">CIS:</text>
      <text x="5" y="30" font-family="monospace, sans-serif" font-size="10" fill="#333">H   H</text>
      <text x="5" y="42" font-family="monospace, sans-serif" font-size="10" fill="#333">|   |</text>
      <text x="0" y="54" font-family="monospace, sans-serif" font-size="10" fill="#333">-C=C-</text>
      
      <!-- Arrow -->
      <text x="55" y="42" font-family="Arial, sans-serif" font-size="14" fill="#f44336">→</text>
      
      <!-- TRANS -->
      <text x="80" y="15" font-family="Arial, sans-serif" font-size="10" fill="#666">TRANS:</text>
      <text x="85" y="30" font-family="monospace, sans-serif" font-size="10" fill="#333">   H</text>
      <text x="85" y="42" font-family="monospace, sans-serif" font-size="10" fill="#333">   |</text>
      <text x="80" y="54" font-family="monospace, sans-serif" font-size="10" fill="#333">-C=C-</text>
      <text x="85" y="66" font-family="monospace, sans-serif" font-size="10" fill="#333">   |</text>
      <text x="85" y="78" font-family="monospace, sans-serif" font-size="10" fill="#333">   H</text>
    </g>
    
    <text x="350" y="220" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#c62828">
      LIQUID → SEMI-SOLID
    </text>
    <text x="350" y="233" font-family="Arial, sans-serif" font-size="9" text-anchor="middle" fill="#666">
      Still has double bond!
    </text>
  </g>
  
  <!-- Outcome 3: Remains Cis -->
  <g id="outcome3">
    <rect x="480" y="60" width="200" height="100" fill="#e1f5ff" stroke="#2196f3" stroke-width="2" rx="6"/>
    <text x="580" y="85" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#1565c0">
      3. Remains Cis
    </text>
    <text x="580" y="100" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#1976d2">
      Cis double bond →
    </text>
    <text x="580" y="115" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#1976d2">
      Cis double bond
    </text>
    <text x="580" y="130" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#666" font-style="italic">
      (no reaction)
    </text>
    <text x="580" y="150" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#666">
      LIQUID → LIQUID
    </text>
  </g>
  
  <!-- Visual comparison -->
  <g id="comparison">
    <rect x="30" y="240" width="640" height="145" fill="#fff" stroke="#999" stroke-width="1" rx="6"/>
    
    <text x="350" y="265" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#333">
      Typical Partial Hydrogenation Results:
    </text>
    
    <!-- Saturated -->
    <rect x="50" y="280" width="180" height="90" fill="#e8f5e9" stroke="#4caf50" stroke-width="2" rx="4"/>
    <text x="140" y="300" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#2e7d32">
      30% Saturated
    </text>
    <text x="140" y="315" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#388e3c">
      Double bond removed
    </text>
    <text x="140" y="335" font-family="monospace, sans-serif" font-size="11" text-anchor="middle" fill="#333">
      ═══════════
    </text>
    <text x="140" y="355" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#4caf50" font-weight="bold">
      ✓ Safe
    </text>
    
    <!-- Trans -->
    <rect x="260" y="280" width="180" height="90" fill="#ffebee" stroke="#f44336" stroke-width="3" rx="4"/>
    <text x="350" y="300" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#c62828">
      50% Trans Fat
    </text>
    <text x="350" y="315" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#d32f2f">
      Double bond flipped
    </text>
    <text x="350" y="335" font-family="monospace, sans-serif" font-size="11" text-anchor="middle" fill="#333">
      ═══════════
    </text>
    <text x="350" y="355" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#f44336" font-weight="bold">
      ⚠️ DANGER!
    </text>
    
    <!-- Cis -->
    <rect x="470" y="280" width="180" height="90" fill="#e1f5ff" stroke="#2196f3" stroke-width="2" rx="4"/>
    <text x="560" y="300" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#1565c0">
      20% Still Cis
    </text>
    <text x="560" y="315" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#1976d2">
      Unchanged
    </text>
    <text x="560" y="328" font-family="monospace, sans-serif" font-size="11" text-anchor="middle" fill="#333">
      ═══╗
    </text>
    <text x="560" y="340" font-family="monospace, sans-serif" font-size="11" text-anchor="middle" fill="#333">
         ╚═══
    </text>
    <text x="560" y="355" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#2196f3" font-weight="bold">
      ✓ Safe
    </text>
  </g>
</svg>
`;
