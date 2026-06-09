import { cn } from '../../lib/cn'

// Premium button system. Variants tuned for both light and dark surfaces.
const VARIANTS = {
  primary:
    'bg-heritage-700 text-white hover:bg-heritage-900 shadow-sm hover:shadow-md',
  teal: 'bg-teal-700 text-white hover:bg-teal-900 shadow-sm hover:shadow-md',
  gold: 'bg-gold-700 text-teal-900 hover:bg-gold-500 shadow-sm hover:shadow-md',
  white: 'bg-white text-teal-900 hover:bg-stone-100 shadow-sm',
  secondary:
    'bg-transparent text-teal-700 border border-teal-700/30 hover:border-teal-700 hover:bg-teal-100/50',
  outlineLight:
    'bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white',
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
        'group inline-flex items-center justify-center rounded-brand font-body font-medium',
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
