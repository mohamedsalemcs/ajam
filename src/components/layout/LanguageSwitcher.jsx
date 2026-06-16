import { useState, useEffect } from 'react'
import { Icon } from '../ui/Icon'
import { cn } from '../../lib/cn'

// Compact header language toggle (globe icon). The current phase is Arabic-only
// (design system §2.1), so this persists the visitor's preference and reflects
// the active language; full English content is a planned later phase.
// `solid` matches the header's transparent (over hero) vs scrolled states.
const STORAGE_KEY = 'ajam:lang'

export function LanguageSwitcher({ solid = true }) {
  const [lang, setLang] = useState('ar')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) setLang(saved)
  }, [])

  const toggle = () => {
    const next = lang === 'ar' ? 'en' : 'ar'
    setLang(next)
    localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === 'ar' ? 'Switch language to English' : 'تغيير اللغة إلى العربية'}
      title={lang === 'ar' ? 'English' : 'العربية'}
      className={cn(
        'flex h-10 items-center gap-1.5 rounded-brand px-2.5 text-label font-medium transition-colors',
        solid
          ? 'text-teal-900 hover:bg-stone-200/60 hover:text-heritage-700'
          : 'text-white/90 hover:text-gold-700',
      )}
    >
      <Icon name="globe" size={18} />
      <span className="text-caption font-semibold">{lang === 'ar' ? 'EN' : 'AR'}</span>
    </button>
  )
}
