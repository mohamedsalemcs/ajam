import { cn } from '../../lib/cn'

// Type-scale components mapped to design system §8.5.
// Display font (Tajawal) for headings; body font (IBM Plex Arabic) for text.
export function Display({ level = 1, as, className, children, ...props }) {
  const Comp = as ?? 'h1'
  const size = level === 2 ? 'text-display-2' : 'text-display-1'
  return (
    <Comp className={cn('font-display text-teal-900', size, className)} {...props}>
      {children}
    </Comp>
  )
}

export function Headline({ level = 1, as, className, children, ...props }) {
  const Comp = as ?? (level === 2 ? 'h3' : 'h2')
  const size = level === 2 ? 'text-headline-2' : 'text-headline-1'
  return (
    <Comp className={cn('font-display text-teal-900', size, className)} {...props}>
      {children}
    </Comp>
  )
}

export function Body({ size = 1, as = 'p', className, children, ...props }) {
  const Comp = as
  const cls = size === 2 ? 'text-body-2 text-stone-600' : 'text-body-1 text-ink-700'
  return (
    <Comp className={cn('font-body', cls, className)} {...props}>
      {children}
    </Comp>
  )
}

export function Label({ as: Comp = 'span', className, children, ...props }) {
  return (
    <Comp className={cn('font-body text-label text-ink-700', className)} {...props}>
      {children}
    </Comp>
  )
}

export function Caption({ as: Comp = 'span', className, children, ...props }) {
  return (
    <Comp className={cn('font-body text-caption text-stone-600', className)} {...props}>
      {children}
    </Comp>
  )
}

// Small eyebrow / section kicker — gold hairline + diamond marker (luxury signature).
export function Eyebrow({ className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 text-label font-semibold text-heritage-700',
        className,
      )}
    >
      <span className="h-px w-7 bg-gold-700" aria-hidden />
      <span className="size-1.5 rotate-45 bg-gold-700" aria-hidden />
      {children}
    </span>
  )
}
