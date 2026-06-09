import { Link } from 'react-router-dom'
import { Logo } from '../ui/Logo'
import { Icon } from '../ui/Icon'
import { Button } from '../ui/Button'
import { CONTACT, BRAND } from '../../data/projects'
import { telHref, whatsappHref, mailHref } from '../../lib/links'

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
    <footer className="bg-teal-900 text-stone-200">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="ajam-container flex flex-col items-center justify-between gap-5 py-10 text-center sm:flex-row sm:text-right">
          <div>
            <h3 className="font-display text-headline-1 text-white">ابدأ رحلتك العقارية مع آجام</h3>
            <p className="mt-1 text-body-2 text-stone-200/75">{BRAND.tagline}</p>
          </div>
          <div className="flex gap-3">
            <Button as="a" href={whatsappHref('مرحباً، أرغب بالتواصل مع آجام')} target="_blank" rel="noreferrer" variant="gold" size="lg">
              <Icon name="whatsapp" size={18} /> تواصل عبر واتساب
            </Button>
            <Button as={Link} to="/projects" variant="outlineLight" size="lg">
              تصفّح المشاريع
            </Button>
          </div>
        </div>
      </div>

      <div className="ajam-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="secondary" size="md" />
          <p className="mt-4 text-body-2 leading-relaxed text-stone-200/80">
            مطوّر عقاري سعودي متخصص في التطوير السكني، نخلق مساحات مميزة ذات قيمة مستدامة في الرياض.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { label: 'X', href: CONTACT.twitter },
              { label: 'IG', href: CONTACT.instagram },
              { label: 'WA', href: whatsappHref() },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="grid size-9 place-items-center rounded-brand border border-white/15 text-caption text-stone-200/80 transition-colors hover:border-gold-700 hover:text-gold-700"
              >
                {s.label}
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
              <a href={telHref()} className="flex items-center gap-2 hover:text-gold-700">
                <Icon name="phone" size={18} /> <span dir="ltr">{CONTACT.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={mailHref()} className="flex items-center gap-2 hover:text-gold-700">
                <Icon name="mail" size={18} /> {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="pin" size={18} className="mt-0.5" /> {CONTACT.address}
            </li>
            <li className="flex items-center gap-2">
              <Icon name="clock" size={18} /> {CONTACT.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="ajam-container flex flex-col items-center justify-between gap-3 py-5 text-caption text-stone-200/60 sm:flex-row">
          <span>© 2026 آجام. جميع الحقوق محفوظة.</span>
          <span>نسخة عربية RTL — أصول محلية تعمل دون اتصال.</span>
        </div>
      </div>
    </footer>
  )
}
