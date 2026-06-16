import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { Icon } from '../ui/Icon'
import { AjamMark } from '../ui/Motif'
import { Eyebrow, Headline, Body } from '../ui/Typography'
import { Counter } from '../motion/Counter'

// Inner-page hero with optional background photo. Clears the fixed header (pt).
// `tone` selects the brand surface: teal (secondary, default) or heritage
// (primary identity) — used to keep dark headers from being all-teal site-wide.
export function PageHeader({ eyebrow, title, subtitle, image, children, tall = false, tone = 'teal' }) {
  const heritage = tone === 'heritage'
  return (
    <section className={cn('relative overflow-hidden text-white', heritage ? 'surface-luxe-heritage' : 'surface-luxe-dark')}>
      {image ? (
        <>
          <img src={image} alt="" className="absolute inset-0 size-full object-cover animate-kenburns" />
          <div className={cn('absolute inset-0 bg-gradient-to-t', heritage ? 'from-heritage-900 via-heritage-900/80 to-heritage-900/55' : 'from-teal-900 via-teal-900/80 to-teal-900/55')} />
          <div className={cn('absolute inset-0 bg-gradient-to-l from-transparent', heritage ? 'to-heritage-900/40' : 'to-teal-900/40')} />
        </>
      ) : (
        <>
          <div className="motif-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
          {/* Ajam arch motif — faint brand watermark on the side */}
          <AjamMark className="pointer-events-none absolute -left-10 bottom-0 h-[120%] w-auto text-white/[0.04]" />
        </>
      )}
      <div className={cn('ajam-container relative', tall ? 'pb-16 pt-36 sm:pb-24 sm:pt-44' : 'pb-14 pt-32 sm:pb-20 sm:pt-40')}>
        {eyebrow && <Eyebrow className="text-gold-700">{eyebrow}</Eyebrow>}
        <Headline className="mt-4 max-w-3xl text-white">{title}</Headline>
        {subtitle && <Body className="mt-4 max-w-2xl text-stone-200/90">{subtitle}</Body>}
        {children}
      </div>
      {/* luxury gold hairline marking the base of every page header */}
      <div className="rule-gold absolute inset-x-0 bottom-0" aria-hidden />
    </section>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'start', tone = 'dark', className }) {
  return (
    <div className={cn('mb-12 max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <Eyebrow className={cn(align === 'center' && 'justify-center', tone === 'light' && 'text-gold-700')}>{eyebrow}</Eyebrow>}
      <Headline className={cn('mt-3', tone === 'light' && 'text-white')}>{title}</Headline>
      {subtitle && <Body className={cn('mt-3', tone === 'light' && 'text-stone-200/85')}>{subtitle}</Body>}
    </div>
  )
}

export function Breadcrumbs({ items, light = false }) {
  return (
    <nav aria-label="مسار التنقّل" className="mb-6">
      <ol className={cn('flex flex-wrap items-center gap-1 text-caption', light ? 'text-white/70' : 'text-stone-600')}>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            {it.to ? (
              <Link to={it.to} className={light ? 'hover:text-gold-700' : 'hover:text-heritage-700'}>
                {it.label}
              </Link>
            ) : (
              <span className={light ? 'text-white' : 'text-ink-700'}>{it.label}</span>
            )}
            {i < items.length - 1 && <Icon name="chevronLeft" size={14} className="opacity-50" />}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-stone-200 overflow-hidden rounded-brand-lg border border-stone-200 border-t-2 border-t-gold-700 bg-white shadow-card">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={i} className={cn('transition-colors', isOpen && 'bg-stone-100/40')}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right transition-colors hover:bg-stone-100/60"
              aria-expanded={isOpen}
            >
              <span className={cn('font-body text-body-1 font-medium transition-colors', isOpen ? 'text-heritage-700' : 'text-teal-900')}>{it.q}</span>
              <span className={cn('grid size-7 shrink-0 place-items-center rounded-full transition-all', isOpen ? 'bg-heritage-700 text-white rotate-180' : 'bg-stone-100 text-heritage-700')}>
                <Icon name="chevronDown" size={18} />
              </span>
            </button>
            <div className={cn('grid transition-all duration-300', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
              <div className="overflow-hidden">
                <Body size={2} className="px-5 pb-5 leading-loose">
                  {it.a}
                </Body>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Animated trust metric.
export function Stat({ value, suffix = '', label, tone = 'dark', className }) {
  const isNum = typeof value === 'number'
  return (
    <div className={cn('text-center', className)}>
      <div className={cn('font-display text-display-2', tone === 'light' ? 'text-gold-700' : 'text-heritage-700')}>
        {isNum ? <Counter value={value} suffix={suffix} /> : value}
      </div>
      <div className={cn('mt-1 text-label', tone === 'light' ? 'text-stone-200/80' : 'text-stone-600')}>{label}</div>
    </div>
  )
}
