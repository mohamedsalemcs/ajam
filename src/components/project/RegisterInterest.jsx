import { useState } from 'react'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Headline, Body, Caption } from '../ui/Typography'

const inputCls =
  'w-full rounded-brand border border-stone-200 bg-white px-4 py-2.5 text-body-2 text-ink-900 outline-none focus:border-heritage-700'

// Inline lead-capture on the project page (id=register). Does NOT route away.
export function RegisterInterest({ project }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', mobile: '', unit: project.unitTypes[0], pay: 'cash' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <div id="register" className="surface-luxe-dark scroll-mt-24 overflow-hidden rounded-brand-lg border-t-2 border-t-gold-700 text-white">
      <div className="grid lg:grid-cols-5">
        {/* Image side */}
        <div className="relative hidden lg:col-span-2 lg:block">
          <img src={project.gallery[1] || project.hero} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-teal-900 to-teal-900/40" />
          <div className="absolute bottom-6 right-6">
            <Caption className="text-white/60">المشروع</Caption>
            <div className="font-display text-headline-1 text-white">{project.name}</div>
            <div className="text-body-2 text-white/75">{project.district}</div>
          </div>
        </div>

        {/* Form side */}
        <div className="p-7 sm:p-9 lg:col-span-3">
          {sent ? (
            <div className="grid place-items-center py-10 text-center">
              <span className="grid size-16 place-items-center rounded-full bg-mint-700/20 text-mint-200">
                <Icon name="checkCircle" size={36} />
              </span>
              <Headline className="mt-4 text-white">تم تسجيل اهتمامك</Headline>
              <Body className="mt-2 text-stone-200/80">سيتواصل معك مستشار آجام قريباً بخصوص {project.name}.</Body>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-700 px-3 py-1 text-caption font-medium text-teal-900">
                <Icon name="star" size={14} /> سجّل اهتمامك
              </span>
              <Headline className="mt-3 text-white">اهتم بهذا المشروع؟ اترك بياناتك</Headline>
              <Body size={2} className="mt-2 text-stone-200/75">
                سنتواصل معك خلال ساعات العمل لتزويدك بالأسعار والتفاصيل وترتيب زيارة.
              </Body>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <input required className={inputCls} placeholder="الاسم الكامل" value={form.name} onChange={set('name')} />
                <input required type="tel" dir="ltr" className={`${inputCls} text-right`} placeholder="05xxxxxxxx" value={form.mobile} onChange={set('mobile')} />
                <select className={inputCls} value={form.unit} onChange={set('unit')}>
                  {project.unitTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <select className={inputCls} value={form.pay} onChange={set('pay')}>
                  <option value="cash">سداد نقدي</option>
                  <option value="finance">تمويل عقاري</option>
                  <option value="install">دفعات ميسّرة</option>
                </select>
              </div>
              <Button type="submit" variant="gold" size="lg" className="mt-4 w-full sm:w-auto">
                أرسل وسنتواصل معك
                <Icon name="arrowLeft" size={18} />
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
