import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from '../components/ui'
import { Headline, Body, Eyebrow, Caption, Label } from '../components/ui/Typography'
import { Section, Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { PageHeader, SectionHeading } from '../components/common/Bits'
import { Reveal } from '../components/motion/Reveal'
import { PROJECTS, formatSAR } from '../data/projects'
import { whatsappHref } from '../lib/links'
import { SOFT_TILES, rotate } from '../lib/accents'
import { cn } from '../lib/cn'

const INVESTABLE = PROJECTS.filter((p) => p.investor)

const WHY_INVEST = [
  { icon: 'shield', t: 'مطوّر سعودي موثوق', d: 'سجل تسليم مثبت يقلّل مخاطر الاستثمار.' },
  { icon: 'trending', t: 'عوائد تنافسية', d: 'مشاريع مختارة بعوائد إيجارية مدروسة.' },
  { icon: 'pin', t: 'مواقع نامية', d: 'أحياء حيوية ذات طلب إيجاري مرتفع.' },
  { icon: 'doc', t: 'شفافية كاملة', d: 'أرقام واضحة وعقود وخطط سداد معلنة.' },
]

function Field({ label, children, hint }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-label text-teal-900">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-caption text-stone-400">{hint}</span>}
    </label>
  )
}

const inputCls = 'w-full rounded-brand border border-stone-200 bg-white px-4 py-2.5 text-body-2 text-ink-900 outline-none focus:border-heritage-700'

export function Investor() {
  const [slug, setSlug] = useState(INVESTABLE[0].slug)
  const project = INVESTABLE.find((p) => p.slug === slug) || INVESTABLE[0]
  const [type, setType] = useState(project.unitTypes[0])
  const [price, setPrice] = useState(project.priceFrom)
  const [years, setYears] = useState(5)
  const [annualRent, setAnnualRent] = useState(project.investor.annualRentPerUnit)

  const onProject = (s) => {
    const p = INVESTABLE.find((x) => x.slug === s)
    setSlug(s)
    setType(p.unitTypes[0])
    setPrice(p.priceFrom)
    setAnnualRent(p.investor.annualRentPerUnit)
  }

  const result = useMemo(() => {
    const p = Number(price) || 0
    const rent = Number(annualRent) || 0
    return {
      yld: p > 0 ? (rent / p) * 100 : 0,
      payback: rent > 0 ? p / rent : 0,
      totalRent: rent * Number(years),
    }
  }, [price, annualRent, years])

  return (
    <>
      <PageHeader
        eyebrow="بوابة المستثمر"
        title="استثمر في العقار السعودي بثقة"
        subtitle="مؤشرات واضحة، حاسبة عائد تفاعلية، ومستشار استثمار يساعدك على اتخاذ القرار الصحيح."
        image="/assets/Images/aerial-city.jpg"
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Button as="a" href="#calculator" variant="gold" size="lg">احسب عائدك الآن <Icon name="calculator" size={18} /></Button>
          <Button as="a" href={whatsappHref('أرغب بالتحدث إلى مستشار استثمار')} target="_blank" rel="noreferrer" variant="outlineLight" size="lg">تحدث إلى مستشار</Button>
        </div>
      </PageHeader>

      <Section surface="white">
        <Container>
          <SectionHeading eyebrow="لماذا الاستثمار مع آجام" title="مزايا تدعم قرارك" align="center" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_INVEST.map((w, i) => (
              <Reveal key={w.t} delay={i * 80}>
                <Card accent interactive className="h-full p-6">
                  <span className={cn('grid size-11 place-items-center rounded-brand', rotate(SOFT_TILES, i))}><Icon name={w.icon} size={22} /></span>
                  <Headline level={2} as="h3" className="mt-4">{w.t}</Headline>
                  <Body size={2} className="mt-2">{w.d}</Body>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Calculator */}
      <Section surface="white" id="calculator">
        <Container>
          <SectionHeading eyebrow="حاسبة العائد" title="احسب عائدك الاستثماري المتوقع" subtitle="أدخل بيانات الوحدة لتقدير العائد السنوي وفترة الاسترداد. النتائج تقديرية لأغراض التوضيح." />
          <div className="grid gap-6 lg:grid-cols-12">
            <Card className="p-6 sm:p-8 lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="المشروع">
                  <select className={inputCls} value={slug} onChange={(e) => onProject(e.target.value)}>
                    {INVESTABLE.map((p) => <option key={p.slug} value={p.slug}>{p.name} — {p.district}</option>)}
                  </select>
                </Field>
                <Field label="نوع الوحدة">
                  <select className={inputCls} value={type} onChange={(e) => setType(e.target.value)}>
                    {project.unitTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="سعر الوحدة (ريال)">
                  <input type="number" className={inputCls} value={price} min={0} onChange={(e) => setPrice(e.target.value)} />
                </Field>
                <Field label="الإيجار السنوي المقدّر (ريال)">
                  <input type="number" className={inputCls} value={annualRent} min={0} onChange={(e) => setAnnualRent(e.target.value)} />
                </Field>
                <Field label={`مدة الاستثمار: ${years} سنوات`} hint="حرّك لتغيير المدة">
                  <input type="range" min={1} max={20} value={years} onChange={(e) => setYears(Number(e.target.value))} className="mt-2 w-full accent-heritage-700" />
                </Field>
              </div>
            </Card>

            <Card dark className="p-6 sm:p-8 lg:col-span-5">
              <Caption className="text-stone-200/70">النتائج التقديرية</Caption>
              <div className="mt-4 space-y-4">
                <div className="rounded-brand bg-white/5 p-4">
                  <div className="text-caption text-stone-200/70">العائد السنوي المتوقع</div>
                  <div className="font-display text-display-1 text-gold-700">{result.yld.toFixed(1)}٪</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-brand bg-white/5 p-4">
                    <div className="text-caption text-stone-200/70">فترة الاسترداد</div>
                    <div className="font-display text-headline-1 text-white">{result.payback ? `${result.payback.toFixed(1)} سنة` : '—'}</div>
                  </div>
                  <div className="rounded-brand bg-white/5 p-4">
                    <div className="text-caption text-stone-200/70">دخل {years} سنوات</div>
                    <div className="font-display text-headline-1 text-white">{formatSAR(result.totalRent)}</div>
                  </div>
                </div>
              </div>
              <Button as="a" href={whatsappHref(`أرغب باستشارة استثمارية حول ${project.name}`)} target="_blank" rel="noreferrer" variant="gold" size="md" className="mt-5 w-full"><Icon name="whatsapp" size={18} /> تحدث إلى مستشار استثمار</Button>
            </Card>
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-brand-lg border border-gold-200 bg-gold-100 p-4">
            <Icon name="shield" size={20} className="mt-0.5 text-gold-900" />
            <Body size={2} className="text-gold-900">تنويه: الأرقام تقديرية لأغراض التوضيح ولا تمثّل ضماناً للعائد. تعتمد العوائد الفعلية على ظروف السوق والإشغال والموقع.</Body>
          </div>
        </Container>
      </Section>

      {/* Investable projects */}
      <Section surface="white">
        <Container>
          <SectionHeading eyebrow="فرص استثمارية" title="مشاريع بعوائد جاذبة" />
          <div className="grid gap-4">
            {INVESTABLE.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <div className="flex flex-col gap-5 rounded-brand-lg border border-stone-200 bg-white p-4 shadow-card transition-all hover:border-gold-200 hover:shadow-card-hover sm:flex-row sm:items-center">
                  <img src={p.hero} alt={p.name} className="h-24 w-full rounded-brand object-cover sm:w-40" />
                  <div className="flex-1">
                    <Link to={`/projects/${p.slug}`} className="font-display text-headline-1 text-teal-900 hover:text-heritage-700">{p.name}</Link>
                    <Body size={2} className="text-stone-600">{p.district} · يبدأ من {formatSAR(p.priceFrom)} ريال</Body>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="font-display text-headline-1 text-mint-700">{p.investor.expectedYield}٪</div>
                      <Caption className="text-stone-500">عائد متوقع</Caption>
                    </div>
                    <Button as={Link} to={`/projects/${p.slug}`} variant="secondary" size="sm">التفاصيل</Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
