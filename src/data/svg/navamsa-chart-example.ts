/**
 * Navamsa (D9) Chart Example - Sample birth chart
 * Shows planetary positions in Navamsa for marriage and detailed analysis
 */

export const NAVAMSA_CHART_EXAMPLE = `
<svg width="800" height="680" viewBox="0 0 800 680" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="680" fill="#fafafa"/>
  
  <!-- Title -->
  <text x="400" y="30" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#333">
    Sample Navamsa (D9) Chart - அம்சம் அட்டவணை
  </text>
  
  <!-- Outer border -->
  <rect x="50" y="60" width="700" height="450" fill="none" stroke="#333" stroke-width="3"/>
  
  <!-- Row 1 - Top row (4 cells) -->
  <line x1="50" y1="172.5" x2="750" y2="172.5" stroke="#333" stroke-width="2"/>
  <line x1="225" y1="60" x2="225" y2="172.5" stroke="#333" stroke-width="2"/>
  <line x1="400" y1="60" x2="400" y2="172.5" stroke="#333" stroke-width="2"/>
  <line x1="575" y1="60" x2="575" y2="172.5" stroke="#333" stroke-width="2"/>
  
  <!-- Row 2 - Middle row (2 cells + center) -->
  <line x1="50" y1="285" x2="225" y2="285" stroke="#333" stroke-width="2"/>
  <line x1="575" y1="285" x2="750" y2="285" stroke="#333" stroke-width="2"/>
  <line x1="225" y1="172.5" x2="225" y2="397.5" stroke="#333" stroke-width="2"/>
  <line x1="575" y1="172.5" x2="575" y2="397.5" stroke="#333" stroke-width="2"/>
  
  <!-- Row 3 - Bottom middle row (2 cells) -->
  <line x1="50" y1="397.5" x2="750" y2="397.5" stroke="#333" stroke-width="2"/>
  
  <!-- Row 4 - Bottom row (4 cells) -->
  <line x1="225" y1="397.5" x2="225" y2="510" stroke="#333" stroke-width="2"/>
  <line x1="400" y1="397.5" x2="400" y2="510" stroke="#333" stroke-width="2"/>
  <line x1="575" y1="397.5" x2="575" y2="510" stroke="#333" stroke-width="2"/>
  
  <!-- House 12 - Gemini - Mercury, Ketu -->
  <text x="137.5" y="85" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#4caf50">Gemini</text>
  <circle cx="120" cy="125" r="16" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
  <text x="120" y="131" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">Me</text>
  <text x="120" y="150" font-family="Arial, sans-serif" font-size="8" text-anchor="middle" fill="#4caf50">Mercury</text>
  <circle cx="155" cy="125" r="16" fill="#795548" stroke="#5d4037" stroke-width="2"/>
  <text x="155" y="131" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">Ke</text>
  <text x="155" y="150" font-family="Arial, sans-serif" font-size="8" text-anchor="middle" fill="#795548">Ketu</text>
  
  <!-- House 1 - Cancer (NAVAMSA LAGNA) - Moon -->
  <rect x="227" y="62" width="171" height="108.5" fill="#fff9c4" stroke="#fbc02d" stroke-width="3"/>
  <text x="312.5" y="85" font-family="Arial, sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="#f57f17">Cancer (NAVAMSA LAGNA)</text>
  <circle cx="312.5" cy="125" r="18" fill="#f5f5f5" stroke="#9e9e9e" stroke-width="2"/>
  <text x="312.5" y="131" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#333">Mo</text>
  <text x="312.5" y="152" font-family="Arial, sans-serif" font-size="8" text-anchor="middle" fill="#757575">Moon</text>
  
  <!-- House 2 - Leo - Sun -->
  <text x="487.5" y="90" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#f57f17">Leo</text>
  <circle cx="487.5" cy="130" r="18" fill="#ff6b00" stroke="#e65100" stroke-width="2"/>
  <text x="487.5" y="136" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#fff">Su</text>
  <text x="487.5" y="158" font-family="Arial, sans-serif" font-size="9" text-anchor="middle" fill="#ff6b00">Sun</text>
  
  <!-- House 3 - Virgo - Mars -->
  <text x="662.5" y="90" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#e65100">Virgo</text>
  <circle cx="662.5" cy="130" r="18" fill="#f44336" stroke="#c62828" stroke-width="2"/>
  <text x="662.5" y="136" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#fff">Ma</text>
  <text x="662.5" y="158" font-family="Arial, sans-serif" font-size="9" text-anchor="middle" fill="#f44336">Mars</text>
  
  <!-- House 11 - Taurus - Venus -->
  <text x="137.5" y="215" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#283593">Taurus</text>
  <circle cx="137.5" cy="255" r="18" fill="#e91e63" stroke="#c2185b" stroke-width="2"/>
  <text x="137.5" y="261" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#fff">Ve</text>
  <text x="137.5" y="280" font-family="Arial, sans-serif" font-size="9" text-anchor="middle" fill="#e91e63">Venus</text>
  
  <!-- Center text -->
  <text x="400" y="270" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#555">NAVAMSA (D9)</text>
  <text x="400" y="290" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#888">அம்சம்</text>
  
  <!-- House 4 - Libra -->
  <text x="662.5" y="230" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#e65100">Libra</text>
  
  <!-- House 10 - Aries -->
  <text x="137.5" y="340" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#e65100">Aries</text>
  
  <!-- House 5 - Scorpio - Jupiter -->
  <text x="662.5" y="325" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#c62828">Scorpio</text>
  <circle cx="662.5" cy="365" r="18" fill="#ff9800" stroke="#e65100" stroke-width="2"/>
  <text x="662.5" y="371" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#fff">Ju</text>
  <text x="662.5" y="390" font-family="Arial, sans-serif" font-size="9" text-anchor="middle" fill="#ff9800">Jupiter</text>
  
  <!-- House 9 - Pisces -->
  <text x="137.5" y="455" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1565c0">Pisces</text>
  
  <!-- House 8 - Aquarius -->
  <text x="312.5" y="455" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1565c0">Aquarius</text>
  
  <!-- House 7 - Capricorn - Saturn -->
  <text x="487.5" y="430" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#e65100">Capricorn</text>
  <circle cx="487.5" cy="470" r="18" fill="#9c27b0" stroke="#6a1b9a" stroke-width="2"/>
  <text x="487.5" y="476" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#fff">Sa</text>
  <text x="487.5" y="495" font-family="Arial, sans-serif" font-size="9" text-anchor="middle" fill="#9c27b0">Saturn</text>
  
  <!-- House 6 - Sagittarius - Rahu -->
  <text x="662.5" y="430" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#c62828">Sagittarius</text>
  <circle cx="662.5" cy="470" r="18" fill="#607d8b" stroke="#455a64" stroke-width="2"/>
  <text x="662.5" y="476" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#fff">Ra</text>
  <text x="662.5" y="495" font-family="Arial, sans-serif" font-size="9" text-anchor="middle" fill="#607d8b">Rahu</text>
  
  <!-- Summary at bottom -->
  <text x="400" y="545" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#333">
    Navamsa Lagna: Cancer (D9 focus on emotions, nurturing in marriage)
  </text>
  
  <text x="400" y="575" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#666">
    Moon in own sign (1st) - Strong emotions | Venus in 11th (Taurus) - Gains through spouse
  </text>
  <text x="400" y="595" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#666">
    Jupiter in 5th (Scorpio, debilitated) - Children need care | Saturn in 7th (Capricorn) - Mature spouse
  </text>
  <text x="400" y="615" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#666">
    Mars in 3rd (exalted in Virgo) - Courage, siblings support | Sun in 2nd - Family wealth
  </text>
  <text x="400" y="640" font-family="Arial, sans-serif" font-size="10" font-style="italic" text-anchor="middle" fill="#999">
    Navamsa shows TRUE strength of planets and detailed marriage life
  </text>
  <text x="400" y="660" font-family="Arial, sans-serif" font-size="10" font-style="italic" text-anchor="middle" fill="#999">
    Saturn in 7th house (D9) indicates delayed but stable marriage
  </text>
</svg>
`;
