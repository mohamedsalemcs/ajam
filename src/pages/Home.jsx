import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from '../components/ui'
import { Headline, Body, Eyebrow, Caption, Label, Display } from '../components/ui/Typography'
import { Section, Container } from '../components/ui/Container'
import { SectionHeading, Stat } from '../components/common/Bits'
import { ProjectCard } from '../components/project/ProjectCard'
import { Reveal } from '../components/motion/Reveal'
import { Counter } from '../components/motion/Counter'
import { PROJECTS, COMPANY_STATS, BRAND, formatSAR } from '../data/projects'
import { WHY_AJAM, JOURNEY, TESTIMONIALS, AWARDS } from '../data/content'
import { whatsappHref, telHref } from '../lib/links'
import { cn } from '../lib/cn'

const HERO_SLIDES = [
  { img: '/assets/Images/villa-night.jpg', name: 'آجام ١٣', district: 'حي المروج' },
  { img: '/assets/Images/tower-up.jpg', name: 'آجام ١٤', district: 'حي الملقا' },
  { img: '/assets/Images/villa-modern.jpg', name: 'آجام ١٢', district: 'حي اليرموك' },
]

export function Home() {
  const featured = PROJECTS.filter((p) => p.featured)
  const available = PROJECTS.filter((p) => p.status === 'available')
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      {/* ===== HERO — cinematic, full-bleed ===== */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-teal-900 text-white">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            className={cn(
              'absolute inset-0 transition-opacity duration-[1400ms]',
              i === slide ? 'opacity-100' : 'opacity-0',
            )}
          >
            <img src={s.img} alt="" className={cn('size-full object-cover', i === slide && 'animate-kenburns')} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-900/55 to-teal-900/40" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-teal-900/40" />

        <Container className="relative flex h-full flex-col justify-center">
          <div className="max-w-3xl pt-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-label backdrop-blur">
                <span className="size-2 animate-pulse rounded-full bg-gold-700" />
                مطوّر عقاري سعودي · الرياض
              </span>
            </Reveal>
            <Reveal delay={100}>
              <Display className="mt-6 text-white">
                نخلق <span className="shimmer-gold">مساحات مميزة</span> ذات قيمة مستدامة
              </Display>
            </Reveal>
            <Reveal delay={200}>
              <Body className="mt-5 max-w-xl text-stone-100/90">
                نعمل بشغف على تطوير مجتمعات سكنية عصرية في أرقى أحياء الرياض — بجودة تنفيذ عالية،
                وتصاميم مبتكرة، وخطط سداد مرنة.
              </Body>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button as={Link} to="/projects" variant="gold" size="lg">
                  استكشف المشاريع
                  <Icon name="arrowLeft" size={18} />
                </Button>
                <Button as={Link} to="/investor" variant="outlineLight" size="lg">
                  <Icon name="trending" size={18} />
                  فرص الاستثمار
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Hero footer: active slide label + indicators */}
          <div className="absolute inset-x-0 bottom-0">
            <Container className="flex items-end justify-between gap-4 pb-8">
              <div className="hidden items-center gap-3 sm:flex">
                <span className="grid size-11 place-items-center rounded-full border border-white/25">
                  <Icon name="pin" size={18} className="text-gold-700" />
                </span>
                <div>
                  <Caption className="text-white/60">المشروع المعروض</Caption>
                  <div className="font-display text-headline-2 text-white">
                    {HERO_SLIDES[slide].name} · {HERO_SLIDES[slide].district}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={`الشريحة ${i + 1}`}
                    className={cn('h-1.5 rounded-full transition-all', i === slide ? 'w-8 bg-gold-700' : 'w-3 bg-white/40')}
                  />
                ))}
              </div>
            </Container>
            <div className="h-px w-full bg-white/10" />
          </div>
        </Container>
      </section>

      {/* ===== STATS bar ===== */}
      <section className="bg-teal-900 text-white">
        <Container>
          <div className="grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
            {COMPANY_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center">
                <div className="font-display text-display-2 text-gold-700">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-label text-stone-200/80">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Pillars (الجودة/الابتكار/الاستدامة) ===== */}
      <Section surface="white">
        <Container>
          <SectionHeading eyebrow="ما يميّزنا" title="ثلاث ركائز نبني عليها" align="center" />
          <div className="grid gap-6 md:grid-cols-3">
            {BRAND.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="group h-full rounded-brand-lg border border-stone-200 bg-stone-100/40 p-8 transition-all hover:border-gold-200 hover:bg-white hover:shadow-card">
                  <span className="grid size-14 place-items-center rounded-brand bg-heritage-700 text-white transition-transform group-hover:scale-110">
                    <Icon name={p.icon} size={26} />
                  </span>
                  <Headline level={1} as="h3" className="mt-5">
                    {p.title}
                  </Headline>
                  <Body className="mt-3">{p.desc}</Body>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== Featured projects ===== */}
      <Section surface="sand">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading className="mb-0" eyebrow="مشاريعنا" title="مشاريع مختارة في الرياض" subtitle="نخبة من مشاريعنا المتاحة وتحت الإنشاء." />
            <Button as={Link} to="/projects" variant="secondary">
              كل المشاريع
              <Icon name="arrowLeft" size={16} />
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== Image-split: why a developer like Ajam ===== */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[380px] overflow-hidden">
            <img src="/assets/Images/interior-living.jpg" alt="تصاميم آجام الداخلية" className="size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-white/0 to-teal-900/10" />
            <div className="absolute bottom-6 right-6 rounded-brand-lg bg-white/95 p-5 shadow-card-hover backdrop-blur">
              <div className="font-display text-display-2 text-heritage-700">
                <Counter value={100} suffix="٪" />
              </div>
              <Caption className="text-stone-600">التزام بمواعيد التسليم</Caption>
            </div>
          </div>
          <div className="flex items-center">
            <Container className="py-16">
              <Reveal>
                <Eyebrow>لماذا آجام</Eyebrow>
                <Headline className="mt-3">لا نبني وحدات فقط، بل نخلق بيئة حياة متكاملة</Headline>
                <Body className="mt-4">
                  من اختيار الموقع حتى آخر تفصيلة في التشطيب، نضع العميل في قلب كل قرار. نجمع بين
                  جودة التنفيذ، والتصميم المبتكر، والاستدامة، لنقدّم عقاراً يحافظ على قيمته ويرتقي
                  بأسلوب حياتك.
                </Body>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {WHY_AJAM.slice(0, 4).map((w) => (
                    <div key={w.title} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-brand bg-teal-100 text-teal-700">
                        <Icon name={w.icon} size={18} />
                      </span>
                      <div>
                        <Label className="block text-teal-900">{w.title}</Label>
                        <Caption className="text-stone-600">{w.desc}</Caption>
                      </div>
                    </div>
                  ))}
                </div>
                <Button as={Link} to="/about" variant="tertiary" className="mt-6">
                  تعرّف على آجام أكثر
                  <Icon name="arrowLeft" size={16} />
                </Button>
              </Reveal>
            </Container>
          </div>
        </div>
      </section>

      {/* ===== Live opportunities (urgency) ===== */}
      <section className="relative overflow-hidden bg-teal-900 py-20 text-white">
        <img src="/assets/Images/skyline-night.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-20" />
        <Container className="relative">
          <SectionHeading tone="light" eyebrow="فرص متاحة الآن" title="وحدات جاهزة لاقتناص الفرصة" subtitle="مشاريع متاحة للبيع والتسليم الفوري — سجّل اهتمامك قبل نفاد الوحدات." />
          <div className="grid gap-4">
            {available.map((p, i) => {
              const soldPct = Math.round((p.unitsSold / p.unitsCount) * 100)
              return (
                <Reveal key={p.slug} delay={i * 70}>
                  <div className="flex flex-col gap-5 rounded-brand-lg border border-white/10 bg-white/5 p-5 backdrop-blur sm:flex-row sm:items-center">
                    <img src={p.hero} alt={p.name} className="h-28 w-full rounded-brand object-cover sm:w-44" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Link to={`/projects/${p.slug}`} className="font-display text-headline-1 text-white hover:text-gold-700">
                          {p.name}
                        </Link>
                        {p.offer && <span className="rounded-full bg-gold-700 px-2.5 py-0.5 text-caption font-medium text-teal-900">{p.offer.badge}</span>}
                      </div>
                      <div className="mt-1 text-body-2 text-stone-200/75">
                        {p.district} · يبدأ من {formatSAR(p.priceFrom)} ريال · {p.unitsAvailable} وحدة متاحة
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="h-1.5 w-40 overflow-hidden rounded-full bg-white/15">
                          <div className="h-full rounded-full bg-gold-700" style={{ width: `${soldPct}%` }} />
                        </div>
                        <Caption className="text-white/70">تم بيع {soldPct}٪</Caption>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button as={Link} to={`/projects/${p.slug}`} variant="gold" size="sm">
                        التفاصيل
                      </Button>
                      <Button as={Link} to={`/contact?project=${p.slug}&type=visit`} variant="outlineLight" size="sm">
                        احجز زيارة
                      </Button>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ===== Journey ===== */}
      <Section surface="white">
        <Container>
          <SectionHeading eyebrow="رحلة التملّك" title="أربع خطوات حتى تستلم مفاتيحك" align="center" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {JOURNEY.map((j, i) => (
              <Reveal key={j.step} delay={i * 90}>
                <div className="relative h-full rounded-brand-lg border border-stone-200 bg-stone-100/40 p-6">
                  <span className="absolute left-5 top-5 font-display text-display-2 text-stone-200">{j.step}</span>
                  <span className="grid size-12 place-items-center rounded-brand bg-heritage-700 text-white">
                    <Icon name={j.icon} size={22} />
                  </span>
                  <Headline level={2} as="h3" className="mt-4">{j.title}</Headline>
                  <Body size={2} className="mt-2">{j.desc}</Body>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== Investor band ===== */}
      <section className="bg-white pb-20">
        <Container>
          <div className="relative overflow-hidden rounded-brand-lg bg-teal-900 text-white">
            <img src="/assets/Images/aerial-city.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-25" />
            <div className="relative grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
              <div>
                <Eyebrow className="text-gold-700">بوابة المستثمر</Eyebrow>
                <Headline className="mt-3 text-white">استثمر بثقة واحصل على عائد مدروس</Headline>
                <Body className="mt-4 text-stone-200/90">
                  مشاريع بعوائد إيجارية تنافسية، مع حاسبة عائد تفاعلية ومستشار استثمار يرافقك خطوة بخطوة.
                </Body>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button as={Link} to="/investor" variant="gold" size="lg">
                    احسب عائدك المتوقع
                    <Icon name="calculator" size={18} />
                  </Button>
                  <Button as="a" href={whatsappHref('أرغب بالتحدث إلى مستشار استثمار')} target="_blank" rel="noreferrer" variant="outlineLight" size="lg">
                    تحدث إلى مستشار
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[{ v: '٧.٤٪', l: 'عائد متوقع' }, { v: '١٠٪', l: 'دفعة أولى' }, { v: 'مرن', l: 'سداد' }].map((x) => (
                  <div key={x.l} className="rounded-brand border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                    <div className="font-display text-headline-1 text-gold-700">{x.v}</div>
                    <div className="mt-1 text-caption text-stone-200/80">{x.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Testimonials ===== */}
      <Section surface="sand">
        <Container>
          <SectionHeading eyebrow="آراء عملائنا" title="ثقة تبنى بالتجربة" align="center" />
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-brand-lg bg-white p-7 shadow-card">
                  <Icon name="quote" size={32} className="text-gold-700" />
                  <blockquote className="mt-4 flex-1 text-body-1 leading-loose text-ink-700">{t.text}</blockquote>
                  <figcaption className="mt-5 border-t border-stone-200 pt-4">
                    <div className="font-display text-headline-2 text-teal-900">{t.name}</div>
                    <Caption className="text-stone-500">{t.role}</Caption>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== Accreditations marquee ===== */}
      <section className="border-y border-stone-200 bg-white py-8">
        <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <Caption className="text-stone-400">معتمدون وموثوقون لدى:</Caption>
          {AWARDS.map((a) => (
            <span key={a} className="flex items-center gap-2 text-label font-medium text-stone-600">
              <Icon name="shield" size={18} className="text-mint-700" />
              {a}
            </span>
          ))}
        </Container>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="relative overflow-hidden bg-heritage-700 py-16 text-white">
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <Headline className="text-white">جاهز لخطوتك العقارية القادمة؟</Headline>
          <Body className="max-w-xl text-white/85">
            تواصل مع فريق المبيعات الآن، أو تصفّح المشاريع واختر وحدتك المثالية.
          </Body>
          <div className="flex flex-wrap justify-center gap-3">
            <Button as="a" href={whatsappHref('مرحباً، أرغب بالتواصل مع المبيعات')} target="_blank" rel="noreferrer" variant="white" size="lg">
              <Icon name="whatsapp" size={18} /> واتساب
            </Button>
            <Button as="a" href={telHref()} variant="outlineLight" size="lg">
              <Icon name="phone" size={18} /> اتصل بنا
            </Button>
            <Button as={Link} to="/projects" variant="outlineLight" size="lg">
              تصفّح المشاريع
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
