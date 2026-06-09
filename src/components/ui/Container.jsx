import { cn } from '../../lib/cn'

// Centered max-width content wrapper.
export function Container({ as: Comp = 'div', className, children }) {
  return <Comp className={cn('ajam-container', className)}>{children}</Comp>
}

// Vertical section with surface variants (design system §13.1).
const SURFACES = {
  light: 'bg-stone-100 text-ink-900',
  white: 'bg-white text-ink-900',
  dark: 'bg-teal-900 text-white', // premium emphasis
  sand: 'bg-stone-200 text-ink-900',
}

export function Section({ surface = 'light', className, children, ...props }) {
  return (
    <section className={cn('py-16 sm:py-20', SURFACES[surface], className)} {...props}>
      {children}
    </section>
  )
}
