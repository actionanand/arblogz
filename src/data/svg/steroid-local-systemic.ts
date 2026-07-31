/**
 * Local vs Systemic Steroids
 * Local delivery (nasal spray, inhaler, cream) = tiny dose right where needed →
 * few whole-body effects. Systemic (tablet/injection) = spreads everywhere →
 * more side effects. Explains why steroids are "everywhere" yet usually safe.
 */

export const STEROID_LOCAL_SYSTEMIC = `
<svg width="720" height="430" viewBox="0 0 720 430" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="430" fill="#fbfbf5" rx="8"/>
  <text x="360" y="30" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#33691e">
    Why Steroids Are Everywhere — Local vs Whole-Body
  </text>

  <!-- LEFT: local -->
  <g>
    <rect x="25" y="55" width="330" height="345" fill="#e8f5e9" stroke="#43a047" stroke-width="2" rx="10"/>
    <text x="190" y="80" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#2e7d32">LOCAL (targeted) — usually SAFE</text>

    <text x="70" y="120" font-family="Arial, sans-serif" font-size="22" text-anchor="middle">👃</text>
    <text x="100" y="118" font-family="Arial, sans-serif" font-size="12" text-anchor="start" fill="#333">Nasal spray → nose only</text>
    <text x="70" y="165" font-family="Arial, sans-serif" font-size="22" text-anchor="middle">🫁</text>
    <text x="100" y="163" font-family="Arial, sans-serif" font-size="12" text-anchor="start" fill="#333">Inhaler → lungs only</text>
    <text x="70" y="210" font-family="Arial, sans-serif" font-size="22" text-anchor="middle">🧴</text>
    <text x="100" y="208" font-family="Arial, sans-serif" font-size="12" text-anchor="start" fill="#333">Cream → skin only</text>
    <text x="70" y="255" font-family="Arial, sans-serif" font-size="22" text-anchor="middle">👁️</text>
    <text x="100" y="253" font-family="Arial, sans-serif" font-size="12" text-anchor="start" fill="#333">Eye drops → eye only</text>

    <rect x="55" y="285" width="270" height="95" rx="8" fill="#c8e6c9"/>
    <text x="190" y="312" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#1b5e20">Tiny dose, right at the spot</text>
    <text x="190" y="334" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#1b5e20">Very little reaches the bloodstream</text>
    <text x="190" y="356" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#1b5e20">➜ Few whole-body side effects ✅</text>
  </g>

  <!-- RIGHT: systemic -->
  <g>
    <rect x="365" y="55" width="330" height="345" fill="#ffebee" stroke="#e53935" stroke-width="2" rx="10"/>
    <text x="530" y="80" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#c62828">SYSTEMIC (whole body) — RISKIER</text>

    <text x="410" y="122" font-family="Arial, sans-serif" font-size="22" text-anchor="middle">💊</text>
    <text x="440" y="120" font-family="Arial, sans-serif" font-size="12" text-anchor="start" fill="#333">Tablets (e.g., prednisolone)</text>
    <text x="410" y="162" font-family="Arial, sans-serif" font-size="22" text-anchor="middle">💉</text>
    <text x="440" y="160" font-family="Arial, sans-serif" font-size="12" text-anchor="start" fill="#333">Injections</text>

    <!-- body spread -->
    <circle cx="530" cy="245" r="46" fill="#ffcdd2" stroke="#e53935" stroke-width="2"/>
    <text x="530" y="240" font-family="Arial, sans-serif" font-size="22" text-anchor="middle">🧍</text>
    <text x="530" y="270" font-family="Arial, sans-serif" font-size="9" text-anchor="middle" fill="#b71c1c">spreads everywhere</text>

    <rect x="395" y="300" width="270" height="80" rx="8" fill="#ffcdd2"/>
    <text x="530" y="325" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#b71c1c">High dose reaches the whole body</text>
    <text x="530" y="347" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#b71c1c">Weight gain, high sugar, bone thinning…</text>
    <text x="530" y="369" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#b71c1c">➜ Needs a doctor ⚠️</text>
  </g>
</svg>
`;
