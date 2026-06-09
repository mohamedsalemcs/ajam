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

export function Logo({ variant = 'default', size = 'md', className }) {
  return (
    <img
      src={SOURCES[variant] ?? SOURCES.default}
      alt="أجام"
      className={cn('w-auto select-none', HEIGHTS[size], className)}
      draggable={false}
    />
  )
}
