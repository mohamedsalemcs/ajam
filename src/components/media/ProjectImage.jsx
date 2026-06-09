// ===========================================================================
// Offline real-estate imagery. Generated locally as SVG architectural scenes
// (no remote images, no CDN). Each project gets a distinct but on-brand render
// driven by `seed`. Real-estate themed: building skylines, towers, villas.
// ===========================================================================

const PALETTES = [
  { sky1: '#0B4A54', sky2: '#062C33', b1: '#86B1B7', b2: '#DCEAED', accent: '#D4AE6A' },
  { sky1: '#062C33', sky2: '#041C20', b1: '#0B4A54', b2: '#86B1B7', accent: '#E2C58A' },
  { sky1: '#8D6E3A', sky2: '#5F200B', b1: '#D7A08A', b2: '#F2DDD5', accent: '#D4AE6A' },
  { sky1: '#0E6E63', sky2: '#08463F', b1: '#8FD3C8', b2: '#E1F5F2', accent: '#D4AE6A' },
]

// Deterministic pseudo-random from seed (no Math.random — stable renders).
function rng(seed) {
  let s = seed * 9301 + 49297
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

export function ProjectImage({ seed = 1, variant = 'tower', className, label }) {
  const p = PALETTES[(seed - 1) % PALETTES.length]
  const rand = rng(seed)
  const gid = `g${seed}`
  const sgid = `sg${seed}`

  // Build a row of buildings with varying heights/widths.
  const buildings = []
  let x = 8
  const isVilla = variant === 'villa'
  const count = isVilla ? 3 : 6
  for (let i = 0; i < count; i++) {
    const w = isVilla ? 90 + rand() * 30 : 36 + rand() * 26
    const h = isVilla ? 70 + rand() * 30 : 90 + rand() * 130
    buildings.push({ x, w, h, fill: i % 2 === 0 ? p.b1 : p.b2 })
    x += w + (isVilla ? 14 : 12)
  }

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label || 'صورة المشروع'}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.sky1} />
          <stop offset="1" stopColor={p.sky2} />
        </linearGradient>
        <linearGradient id={sgid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.10" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="400" height="300" fill={`url(#${gid})`} />
      {/* Sun / moon accent */}
      <circle cx="330" cy="62" r="26" fill={p.accent} opacity="0.18" />
      <circle cx="330" cy="62" r="14" fill={p.accent} opacity="0.30" />

      {/* Sand-stone overlay motif band (design system §13.2) */}
      <rect width="400" height="300" fill="#6A6964" opacity="0.06" />

      {/* Skyline */}
      <g>
        {buildings.map((b, i) => {
          const top = 300 - b.h - 36
          return (
            <g key={i}>
              <rect x={b.x} y={top} width={b.w} height={b.h} rx="2" fill={b.fill} opacity="0.92" />
              <rect x={b.x} y={top} width={b.w} height={b.h} rx="2" fill={`url(#${sgid})`} />
              {/* villa roof */}
              {isVilla && (
                <polygon
                  points={`${b.x - 4},${top} ${b.x + b.w / 2},${top - 18} ${b.x + b.w + 4},${top}`}
                  fill={p.accent}
                  opacity="0.85"
                />
              )}
              {/* windows */}
              {!isVilla &&
                Array.from({ length: Math.floor(b.h / 22) }).map((_, r) =>
                  Array.from({ length: Math.max(1, Math.floor(b.w / 16)) }).map((__, c) => (
                    <rect
                      key={`${r}-${c}`}
                      x={b.x + 6 + c * 14}
                      y={top + 10 + r * 20}
                      width="7"
                      height="10"
                      rx="1"
                      fill={p.accent}
                      opacity={(r + c) % 3 === 0 ? 0.55 : 0.18}
                    />
                  )),
                )}
            </g>
          )
        })}
      </g>

      {/* Ground */}
      <rect x="0" y="264" width="400" height="36" fill="#101010" opacity="0.22" />
      <rect x="0" y="264" width="400" height="2" fill={p.accent} opacity="0.5" />
    </svg>
  )
}

// Subtle architectural arch motif (logo-inspired) for backgrounds / dividers.
export function ArchMotif({ className, color = '#D4AE6A', opacity = 0.12 }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden role="presentation">
      <path
        d="M30 190 V70 a70 70 0 0 1 140 0 V190 H130 V70 a30 30 0 0 0 -60 0 V190 Z"
        fill={color}
        opacity={opacity}
      />
    </svg>
  )
}
