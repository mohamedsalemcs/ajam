import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { LanguageSwitcher } from './LanguageSwitcher'
import { cn } from '../../lib/cn'
import { whatsappHref, telHref } from '../../lib/links'

// Nav — Company / Discovery / Conversion. No "downloads" page.
const NAV = [
  { to: '/', label: 'الرئيسية', end: true },
  { to: '/projects', label: 'المشاريع' },
  { to: '/investor', label: 'الاستثمار' },
  { to: '/about', label: 'من نحن' },
  { to: '/faq', label: 'الأسئلة' },
  { to: '/contact', label: 'تواصل' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Transparent over the dark hero at the top of every page; solid on scroll.
  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        solid
          ? 'border-b border-stone-200 bg-white/95 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      {/* Top scrim — guarantees nav legibility over any hero image when transparent */}
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-teal-900/75 via-teal-900/35 to-transparent transition-opacity duration-300',
          solid ? 'opacity-0' : 'opacity-100',
        )}
        aria-hidden
      />
      {/* Gold hairline accent at the base of the solid bar — luxury edge */}
      <div
        className={cn(
          'rule-gold pointer-events-none absolute inset-x-0 bottom-0 transition-opacity duration-300',
          solid ? 'opacity-100' : 'opacity-0',
        )}
        aria-hidden
      />
      <div className="ajam-container relative flex h-[68px] items-center justify-between gap-4">
        <Link to="/" aria-label="آجام — الصفحة الرئيسية" className="shrink-0">
          <Logo variant={solid ? 'default' : 'secondary'} size="md" className="transition" />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'rounded-brand px-3.5 py-2 text-label font-medium transition-colors',
                  solid
                    ? isActive
                      ? 'text-heritage-700 bg-heritage-100/60'
                      : 'text-ink-700 hover:text-heritage-700 hover:bg-stone-200/60'
                    : isActive
                      ? 'text-gold-700'
                      : 'text-white/90 hover:text-white',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher solid={solid} />
          <a
            href={telHref()}
            className={cn(
              'hidden items-center gap-2 text-label font-medium transition-colors sm:flex',
              solid ? 'text-teal-900 hover:text-heritage-700' : 'text-white hover:text-gold-700',
            )}
          >
            <Icon name="phone" size={17} />
            <span dir="ltr">053 500 4540</span>
          </a>
          <Button
            as="a"
            href={whatsappHref('مرحباً، أرغب بالاستفسار عن مشاريع آجام')}
            target="_blank"
            rel="noreferrer"
            variant={solid ? 'primary' : 'gold'}
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Icon name="whatsapp" size={16} />
            تواصل معنا
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'grid size-10 place-items-center rounded-brand lg:hidden',
              solid ? 'text-teal-900 hover:bg-stone-200' : 'text-white hover:bg-white/10',
            )}
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-stone-200 bg-white lg:hidden">
          <div className="ajam-container flex flex-col py-3">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    'rounded-brand px-3 py-3 text-body-2 font-medium',
                    isActive ? 'text-heritage-700 bg-heritage-100/60' : 'text-ink-700',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              as="a"
              href={whatsappHref('مرحباً، أرغب بالاستفسار عن مشاريع آجام')}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              size="md"
              className="mt-2"
            >
              <Icon name="whatsapp" size={16} />
              تواصل معنا
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
