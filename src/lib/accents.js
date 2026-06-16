// Brand accent rotation — the single source of truth for balanced colour use.
// Every page cycles icon tiles, borders and active states through these four
// identity colours so no single colour dominates and the system stays consistent
// across the whole site (design system §6.3 controlled distribution).

// Soft accent tiles — tinted background + brand foreground + hairline ring.
// Use for icon chips on light surfaces.
export const SOFT_TILES = [
  'bg-heritage-100 text-heritage-700 ring-1 ring-heritage-200',
  'bg-teal-100 text-teal-700 ring-1 ring-teal-200',
  'bg-gold-100 text-gold-900 ring-1 ring-gold-200',
  'bg-mint-100 text-mint-700 ring-1 ring-mint-200',
]

// Solid accent tiles — saturated fill, for stronger emphasis chips.
export const SOLID_TILES = [
  'bg-heritage-700 text-white',
  'bg-teal-700 text-white',
  'bg-gold-700 text-teal-900',
  'bg-mint-700 text-white',
]

// Accent text/line colours, same order — for numbers, eyebrows, dividers.
export const ACCENT_TEXT = [
  'text-heritage-700',
  'text-teal-700',
  'text-gold-700',
  'text-mint-700',
]

// Hover border colours, same order — for cards that lift to a brand edge.
export const ACCENT_BORDER_HOVER = [
  'hover:border-heritage-200',
  'hover:border-teal-200',
  'hover:border-gold-200',
  'hover:border-mint-200',
]

// Pick a class from a rotation by index (wraps around).
export const rotate = (arr, i) => arr[i % arr.length]
