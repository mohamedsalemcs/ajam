import { cn } from '../../lib/cn'

// Structured, image- and data-friendly card (design system §14.1).
// `dark` swaps to a premium teal surface (white text) so callers don't fight
// the default bg-white via className ordering.
// `accent` adds a thin gold top-edge — the brand's luxury card signature.
export function Card({ className, children, interactive = false, dark = false, accent = false, ...props }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-brand-lg border shadow-card',
        dark ? 'surface-luxe-dark border-white/10 text-white' : 'bg-white border-stone-200',
        accent && 'border-t-2 border-t-gold-700',
        interactive &&
          'transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-card-hover cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardMedia({ src, alt = '', className, children }) {
  return (
    <div className={cn('relative aspect-[4/3] overflow-hidden bg-stone-200', className)}>
      {src && (
        <img src={src} alt={alt} className="size-full object-cover" loading="lazy" />
      )}
      {children}
    </div>
  )
}

export function CardBody({ className, children }) {
  return <div className={cn('p-5', className)}>{children}</div>
}
