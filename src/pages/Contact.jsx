import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button, Icon } from '../components/ui'
import { Headline, Body, Eyebrow, Caption, Label } from '../components/ui/Typography'
import { Section, Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { PageHeader } from '../components/common/Bits'
import { PROJECTS, CONTACT } from '../data/projects'
import { telHref, whatsappHref, mailHref } from '../lib/links'
import { cn } from '../lib/cn'

// Request types (Phase 4 §6.3) — also used to qualify the lead.
const REQUEST_TYPES = [
  { key: 'buy', label: 'شراء' },
  { key: 'invest', label: 'استثمار' },
  { key: 'visit', label: 'حجز زيارة' },
  { key: 'price', label: 'طلب سعر' },
  { key: 'general', label: 'استفسار عام' },
]

const inputCls =
  'w-full rounded-brand border border-stone-200 bg-white px-4 py-2.5 text-body-2 text-ink-900 outline-none focus:border-heritage-700'

export function Contact() {
  const [params] = useSearchParams()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    project: params.get('project') || '',
    type: params.get('type') || 'general',
    message: '',
  })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const prefProject = PROJECTS.find((p) => p.slug === form.project)

  return (
    <>
      <PageHeader
        eyebrow="تواصل معنا"
        title="نحن هنا لمساعدتك"
        subtitle="اختر الطريقة الأنسب للتواصل، أو أرسل استفسارك وسنعاود الاتصال بك في أقرب وقت."
        image="/assets/Images/lifestyle-living.jpg"
      />

      <Section surface="light">
        <Container className="grid gap-8 lg:grid-cols-12">
          {/* Direct channels */}
          <div className="lg:col-span-4">
            <div className="space-y-3">
              <a href={whatsappHref('مرحباً، أرغب بالتواصل')} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-brand-lg border border-stone-200 bg-white p-4 transition-colors hover:border-mint-200">
                <span className="grid size-11 place-items-center rounded-brand bg-mint-100 text-mint-700">
                  <Icon name="whatsapp" size={22} />
                </span>
                <div>
                  <Label className="block text-teal-900">واتساب</Label>
                  <Caption className="text-stone-500" dir="ltr">{CONTACT.whatsappDisplay}</Caption>
                </div>
              </a>
              <a href={telHref()} className="flex items-center gap-3 rounded-brand-lg border border-stone-200 bg-white p-4 transition-colors hover:border-heritage-200">
                <span className="grid size-11 place-items-center rounded-brand bg-heritage-100 text-heritage-700">
                  <Icon name="phone" size={22} />
                </span>
                <div>
                  <Label className="block text-teal-900">الهاتف الموحّد</Label>
                  <Caption className="text-stone-500" dir="ltr">{CONTACT.phoneDisplay}</Caption>
                </div>
              </a>
              <a href={mailHref('استفسار')} className="flex items-center gap-3 rounded-brand-lg border border-stone-200 bg-white p-4 transition-colors hover:border-teal-200">
                <span className="grid size-11 place-items-center rounded-brand bg-teal-100 text-teal-700">
                  <Icon name="mail" size={22} />
                </span>
                <div>
                  <Label className="block text-teal-900">البريد الإلكتروني</Label>
                  <Caption className="text-stone-500">{CONTACT.email}</Caption>
                </div>
              </a>
              <div className="rounded-brand-lg border border-stone-200 bg-white p-4">
                <div className="flex items-center gap-2 text-teal-900">
                  <Icon name="pin" size={20} className="text-heritage-700" />
                  <Label className="text-teal-900">المقر الرئيسي</Label>
                </div>
                <Caption className="mt-2 block text-stone-600">{CONTACT.address}</Caption>
                <Caption className="mt-2 flex items-center gap-1 text-stone-500">
                  <Icon name="clock" size={15} /> {CONTACT.hours}
                </Caption>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <Card className="p-6 sm:p-8">
              {sent ? (
                <div className="grid place-items-center py-12 text-center">
                  <span className="grid size-16 place-items-center rounded-full bg-mint-100 text-mint-700">
                    <Icon name="checkCircle" size={36} />
                  </span>
                  <Headline className="mt-4">تم استلام طلبك</Headline>
                  <Body className="mt-2 max-w-md">
                    شكراً {form.name || ''}. سيتواصل معك فريق المبيعات قريباً
                    {prefProject ? ` بخصوص ${prefProject.name}` : ''}.
                  </Body>
                  <Button variant="secondary" className="mt-6" onClick={() => setSent(false)}>
                    إرسال طلب آخر
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit}>
                  <Eyebrow>نموذج التواصل</Eyebrow>
                  <Headline className="mt-2">أرسل استفسارك</Headline>

                  {/* Request type — lead qualification */}
                  <div className="mt-5">
                    <Label className="mb-2 block text-teal-900">نوع الطلب</Label>
                    <div className="flex flex-wrap gap-2">
                      {REQUEST_TYPES.map((r) => (
                        <button
                          key={r.key}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, type: r.key }))}
                          className={cn(
                            'rounded-full border px-4 py-2 text-label font-medium transition-colors',
                            form.type === r.key
                              ? 'border-heritage-700 bg-heritage-700 text-white'
                              : 'border-stone-200 bg-white text-ink-700 hover:border-heritage-200',
                          )}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-label text-teal-900">الاسم *</span>
                      <input required className={inputCls} value={form.name} onChange={set('name')} placeholder="الاسم الكامل" />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-label text-teal-900">رقم الجوال *</span>
                      <input required type="tel" dir="ltr" className={cn(inputCls, 'text-right')} value={form.mobile} onChange={set('mobile')} placeholder="05xxxxxxxx" />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-label text-teal-900">البريد الإلكتروني (اختياري)</span>
                      <input type="email" dir="ltr" className={cn(inputCls, 'text-right')} value={form.email} onChange={set('email')} placeholder="name@email.com" />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-label text-teal-900">المشروع المهتم به</span>
                      <select className={inputCls} value={form.project} onChange={set('project')}>
                        <option value="">— اختر مشروعاً (اختياري) —</option>
                        {PROJECTS.map((p) => (
                          <option key={p.slug} value={p.slug}>
                            {p.name} — {p.city}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="mt-4 block">
                    <span className="mb-1.5 block text-label text-teal-900">رسالتك</span>
                    <textarea rows={4} className={inputCls} value={form.message} onChange={set('message')} placeholder="اكتب تفاصيل استفسارك..." />
                  </label>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Button type="submit" variant="primary" size="lg">
                      إرسال الطلب
                      <Icon name="arrowLeft" size={18} />
                    </Button>
                    <Body size={2} className="text-stone-500">
                      بإرسالك الطلب فإنك توافق على سياسة الخصوصية.
                    </Body>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </Container>
      </Section>
    </>
  )
}
