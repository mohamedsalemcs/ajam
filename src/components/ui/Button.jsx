import { cn } from '../../lib/cn'

// Premium button system. Variants tuned for both light and dark surfaces.
// Each lifts subtly on hover; gold carries the luxury accent thread.
const VARIANTS = {
  primary:
    'bg-heritage-700 text-white shadow-card hover:bg-heritage-900 hover:shadow-card-hover hover:-translate-y-0.5',
  teal: 'bg-teal-700 text-white shadow-card hover:bg-teal-900 hover:shadow-card-hover hover:-translate-y-0.5',
  gold: 'bg-gold-700 text-teal-900 shadow-card hover:bg-gold-500 hover:shadow-gold-glow hover:-translate-y-0.5',
  white: 'bg-white text-teal-900 shadow-card hover:bg-stone-100 hover:shadow-card-hover',
  secondary:
    'bg-transparent text-teal-700 border border-teal-700/30 hover:border-teal-700 hover:bg-teal-100/50',
  // Light-on-dark outline that warms to gold on hover (luxury accent on dark surfaces).
  outlineLight:
    'bg-transparent text-white border border-white/40 hover:border-gold-700 hover:text-gold-700 hover:bg-white/5',
  // Refined gold-outline secondary — elegant on both light and dark.
  goldOutline:
    'bg-transparent text-gold-700 border border-gold-700/55 hover:border-gold-700 hover:bg-gold-700/10',
  tertiary:
    'bg-transparent text-heritage-700 hover:text-heritage-900 hover:bg-heritage-100/60 px-2',
  ghost: 'bg-transparent text-ink-700 hover:bg-stone-200/70',
}

const SIZES = {
  sm: 'h-9 px-4 text-label gap-1.5',
  md: 'h-11 px-6 text-label gap-2',
  lg: 'h-[3.25rem] px-8 text-body-2 gap-2.5',
}

export function Button({
  as: Comp = 'button',
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  return (
    <Comp
      className={cn(
        'group inline-flex items-center justify-center rounded-full font-body font-medium',
        'transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none',
        'whitespace-nowrap active:scale-[0.98]',
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
