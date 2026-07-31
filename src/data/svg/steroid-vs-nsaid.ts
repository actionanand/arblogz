/**
 * Steroid vs NSAID — How Each Works
 * Steroid enters the cell and switches OFF many inflammation genes (broad, strong).
 * NSAID blocks the COX enzyme so fewer prostaglandins are made (narrow, milder).
 */

export const STEROID_VS_NSAID = `
<svg width="720" height="420" viewBox="0 0 720 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="420" fill="#f7f9fc" rx="8"/>
  <text x="360" y="30" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#1a237e">
    How They Work: Steroid vs NSAID
  </text>

  <!-- LEFT: Steroid -->
  <g>
    <rect x="30" y="55" width="320" height="320" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2" rx="10"/>
    <text x="190" y="82" font-family="Arial, sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="#2e7d32">STEROID (corticosteroid)</text>

    <!-- cell -->
    <ellipse cx="190" cy="215" rx="130" ry="110" fill="#ffffff" stroke="#66bb6a" stroke-width="2"/>
    <text x="190" y="120" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#555">cell</text>
    <!-- nucleus -->
    <circle cx="190" cy="230" r="55" fill="#c8e6c9" stroke="#2e7d32" stroke-width="2"/>
    <text x="190" y="228" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#1b5e20">NUCLEUS</text>
    <text x="190" y="244" font-family="Arial, sans-serif" font-size="9" text-anchor="middle" fill="#1b5e20">(the genes)</text>

    <!-- steroid molecule entering -->
    <circle cx="120" cy="150" r="12" fill="#2e7d32"/>
    <text x="120" y="154" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#fff">S</text>
    <line x1="130" y1="158" x2="165" y2="205" stroke="#2e7d32" stroke-width="2" stroke-dasharray="4 3"/>

    <text x="190" y="305" font-family="Arial, sans-serif" font-size="10.5" text-anchor="middle" fill="#1b5e20">Switches OFF many</text>
    <text x="190" y="320" font-family="Arial, sans-serif" font-size="10.5" text-anchor="middle" fill="#1b5e20">inflammation genes</text>
    <text x="190" y="352" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#2e7d32">➜ BROAD &amp; STRONG</text>
  </g>

  <!-- RIGHT: NSAID -->
  <g>
    <rect x="370" y="55" width="320" height="320" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="10"/>
    <text x="530" y="82" font-family="Arial, sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="#1565c0">NSAID (non-steroidal)</text>

    <!-- COX enzyme blocked -->
    <rect x="450" y="150" width="160" height="60" rx="30" fill="#ffffff" stroke="#42a5f5" stroke-width="2"/>
    <text x="530" y="185" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#1565c0">COX enzyme</text>

    <!-- blocker -->
    <circle cx="450" cy="180" r="16" fill="#e53935"/>
    <text x="450" y="184" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#fff">✕</text>
    <text x="450" y="140" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#c62828">NSAID blocks it</text>

    <line x1="530" y1="212" x2="530" y2="250" stroke="#1565c0" stroke-width="2" marker-end="url(#svnArrow)"/>
    <defs>
      <marker id="svnArrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L8,3 L0,6 Z" fill="#1565c0"/>
      </marker>
    </defs>

    <text x="530" y="272" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#0d47a1">Fewer prostaglandins</text>
    <text x="530" y="290" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#0d47a1">(pain + swelling chemicals)</text>
    <text x="530" y="322" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#1565c0">➜ NARROW &amp; MILDER</text>
    <text x="530" y="352" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#555">relieves pain + fever too</text>
  </g>
</svg>
`;
