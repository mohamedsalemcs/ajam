import { Icon } from '../ui/Icon'
import { telHref, whatsappHref } from '../../lib/links'

// Persistent conversion actions (Phase 2 §2.5) — always reachable, RTL-left side.
export function FloatingContact() {
  return (
    <div className="fixed bottom-5 left-5 z-30 flex flex-col gap-3 print:hidden">
      <a
        href={whatsappHref('مرحباً، لدي استفسار عن مشاريع أجام')}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل عبر واتساب"
        className="grid size-[3.25rem] place-items-center rounded-full bg-mint-700 text-white shadow-card-hover transition-transform hover:scale-105"
      >
        <Icon name="whatsapp" size={26} />
      </a>
      <a
        href={telHref()}
        aria-label="اتصال هاتفي"
        className="grid size-[3.25rem] place-items-center rounded-full bg-heritage-700 text-white shadow-card-hover transition-transform hover:scale-105"
      >
        <Icon name="phone" size={24} />
      </a>
    </div>
  )
}
