import { cn } from '../../lib/cn'

// Centered max-width content wrapper.
export function Container({ as: Comp = 'div', className, children }) {
  return <Comp className={cn('ajam-container', className)}>{children}</Comp>
}

// Vertical section with surface variants (design system §13.1).
// Surfaces now carry subtle depth (gradients/glow) instead of flat single-colour
// fills, so the page never reads as one dominant tone.
const SURFACES = {
  light: 'bg-stone-100 text-ink-900',
  white: 'bg-white text-ink-900',
  dark: 'surface-luxe-dark text-white', // premium teal emphasis with depth
  heritage: 'surface-luxe-heritage text-white', // brand-identity emphasis
  sand: 'surface-luxe-sand text-ink-900', // warm, unflat light backdrop
}

export function Section({ surface = 'light', className, children, ...props }) {
  return (
    <section className={cn('py-16 sm:py-20', SURFACES[surface], className)} {...props}>
      {children}
    </section>
  )
}
