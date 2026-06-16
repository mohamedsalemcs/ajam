import { cn } from '../../lib/cn'

// Official brand logo set (design system §5). Local assets only — never rebuilt.
const SOURCES = {
  default: '/assets/Brand/default.svg', // main header / primary usage
  secondary: '/assets/Brand/secondary.svg', // alternate contrast surfaces
  icon: '/assets/Brand/app-icon.svg', // compact / favicon-like
}

const HEIGHTS = {
  sm: 'h-7',
  md: 'h-9',
  lg: 'h-12',
}

// Source SVG viewBox ratios — needed to size the masked (recoloured) variant.
const RATIOS = {
  default: '617 / 220',
  secondary: '1006 / 220',
  icon: '1 / 1',
}

// `tint` recolours the official logo to a brand colour (via CSS mask) without
// rebuilding it — used e.g. for a beige logo on the dark footer.
export function Logo({ variant = 'default', size = 'md', tint, className }) {
  const src = SOURCES[variant] ?? SOURCES.default
  if (tint) {
    return (
      <span
        role="img"
        aria-label="أجام"
        className={cn('inline-block w-auto select-none', HEIGHTS[size], className)}
        style={{
          aspectRatio: RATIOS[variant] ?? RATIOS.default,
          backgroundColor: tint,
          maskImage: `url(${src})`,
          WebkitMaskImage: `url(${src})`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
    )
  }
  return (
    <img
      src={src}
      alt="أجام"
      className={cn('w-auto select-none', HEIGHTS[size], className)}
      draggable={false}
    />
  )
}
