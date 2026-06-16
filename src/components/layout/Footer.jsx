import { Link } from 'react-router-dom'
import { Logo } from '../ui/Logo'
import { Icon } from '../ui/Icon'
import { AjamMark } from '../ui/Motif'
import { CONTACT } from '../../data/projects'
import { telHref, mailHref } from '../../lib/links'

const QUICK = [
  { to: '/', label: 'الرئيسية' },
  { to: '/projects', label: 'المشاريع' },
  { to: '/investor', label: 'الاستثمار' },
  { to: '/about', label: 'من نحن' },
]
const SUPPORT = [
  { to: '/faq', label: 'الأسئلة الشائعة' },
  { to: '/contact', label: 'تواصل معنا' },
  { to: '/privacy', label: 'سياسة الخصوصية' },
  { to: '/terms', label: 'الشروط والأحكام' },
]

export function Footer() {
  return (
    <footer className="surface-luxe-dark relative overflow-hidden text-stone-200">
      {/* Gold hairline crowning the footer — luxury transition from page */}
      <div className="rule-gold" aria-hidden />
      {/* Ajam arch motif — faint brand watermark */}
      <AjamMark className="pointer-events-none absolute -bottom-16 left-[6%] h-72 w-auto text-white/[0.035]" />

      <div className="relative ajam-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="secondary" size="md" tint="#F4EFE8" />
          <p className="mt-4 text-body-2 leading-relaxed text-stone-200/80">
            مطوّر عقاري سعودي متخصص في التطوير السكني، نخلق مساحات مميزة ذات قيمة مستدامة في الرياض.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { name: 'x', label: 'X', href: CONTACT.twitter },
              { name: 'linkedin', label: 'LinkedIn', href: CONTACT.linkedin },
              { name: 'tiktok', label: 'TikTok', href: CONTACT.tiktok },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid size-9 place-items-center rounded-brand border border-white/15 text-stone-200/80 transition-colors hover:border-gold-700 hover:text-gold-700"
              >
                <Icon name={s.name} size={17} fill />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-headline-2 text-white">روابط سريعة</h4>
          <ul className="mt-4 space-y-2.5">
            {QUICK.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-body-2 text-stone-200/80 transition-colors hover:text-gold-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-headline-2 text-white">الدعم</h4>
          <ul className="mt-4 space-y-2.5">
            {SUPPORT.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-body-2 text-stone-200/80 transition-colors hover:text-gold-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-headline-2 text-white">تواصل معنا</h4>
          <ul className="mt-4 space-y-3 text-body-2 text-stone-200/80">
            <li>
              <a href={telHref()} className="flex items-center gap-2 transition-colors hover:text-gold-700">
                <Icon name="phone" size={18} className="text-gold-700" /> <span dir="ltr">{CONTACT.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={mailHref()} className="flex items-center gap-2 transition-colors hover:text-gold-700">
                <Icon name="mail" size={18} className="text-gold-700" /> {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="pin" size={18} className="mt-0.5 text-gold-700" /> {CONTACT.address}
            </li>
            <li className="flex items-center gap-2">
              <Icon name="clock" size={18} className="text-gold-700" /> {CONTACT.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="ajam-container flex flex-col items-center justify-between gap-3 py-5 text-caption text-stone-200/60 sm:flex-row">
          <span>© 2026 آجام. جميع الحقوق محفوظة.</span>
        </div>
      </div>
    </footer>
  )
}
