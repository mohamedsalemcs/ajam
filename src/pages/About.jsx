import { Link } from 'react-router-dom'
import { Button, Icon } from '../components/ui'
import { Headline, Body, Eyebrow, Caption, Label } from '../components/ui/Typography'
import { Section, Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { PageHeader, SectionHeading } from '../components/common/Bits'
import { ProjectCard } from '../components/project/ProjectCard'
import { Reveal } from '../components/motion/Reveal'
import { Counter } from '../components/motion/Counter'
import { COMPANY_STATS, PROJECTS, BRAND } from '../data/projects'
import { TIMELINE, AWARDS, PARTNERS } from '../data/content'
import { whatsappHref } from '../lib/links'
import { SOFT_TILES, ACCENT_TEXT, rotate } from '../lib/accents'
import { cn } from '../lib/cn'

export function About() {
  const completed = PROJECTS.filter((p) => p.status === 'completed')
  const track = completed.length ? completed : PROJECTS.slice(0, 3)

  return (
    <>
      <PageHeader
        eyebrow="من نحن"
        title="نبني الثقة قبل أن نبني المساحات"
        subtitle={BRAND.tagline}
        image="/assets/Images/tower-facade.jpg"
        tone="heritage"
        tall
      />

      {/* Story split */}
      <Section surface="white">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>قصتنا</Eyebrow>
            <Headline className="mt-3">مطوّر سعودي بخبرة عقارية واسعة</Headline>
            <Body className="mt-4 leading-loose">
              تأسست آجام لتتخصص في التطوير السكني عبر تقديم الحلول الملهمة والمتكاملة والمستدامة.
              نختار مواقعنا بعناية في أرقى أحياء الرياض، ونلتزم بأعلى معايير الجودة في التصميم
              والتنفيذ، ونقدّم تجربة شراء شفافة وسهلة لعملائنا ومستثمرينا.
            </Body>
            <Body className="mt-3 leading-loose">
              نؤمن أن المنزل بيئة حياة متكاملة، لذلك نبني مجتمعات مدروسة تراعي الخصوصية والخدمات
              وجودة الحياة والقيمة الاستثمارية على المدى الطويل.
            </Body>
            <div className="mt-7 grid grid-cols-3 gap-4">
              {COMPANY_STATS.slice(0, 3).map((s, i) => (
                <div key={s.label} className="border-t-2 border-stone-200 pt-3">
                  <div className={cn('font-display text-headline-1', rotate(ACCENT_TEXT, i))}>
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <Caption className="text-stone-600">{s.label}</Caption>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-brand-lg">
              <img src="/assets/Images/handshake.jpg" alt="فريق آجام" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="surface-luxe-dark absolute -bottom-6 right-6 hidden rounded-brand-lg border-t-2 border-t-gold-700 p-5 text-white shadow-card-hover sm:block">
              <div className="font-display text-display-2 text-gold-700"><Counter value={161} suffix="+" /></div>
              <Caption className="text-stone-200/80">وحدة سكنية مسلّمة</Caption>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Pillars */}
      <Section surface="white">
        <Container>
          <SectionHeading eyebrow="ما يميّزنا" title="ثلاث ركائز نبني عليها" align="center" />
          <div className="grid gap-6 md:grid-cols-3">
            {BRAND.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <Card accent interactive className="h-full p-8 text-center">
                  {/* offset by 1 → teal · gold · mint, so the tertiary (mint) gets stage time */}
                  <span className={cn('mx-auto grid size-14 place-items-center rounded-full', rotate(SOFT_TILES, i + 1))}>
                    <Icon name={p.icon} size={26} />
                  </span>
                  <Headline level={1} as="h3" className="mt-5">{p.title}</Headline>
                  <Body className="mt-3">{p.desc}</Body>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section surface="white">
        <Container>
          <SectionHeading eyebrow="مسيرتنا" title="محطات في رحلة آجام" align="center" />
          <div className="relative">
            <div className="absolute right-[7px] top-2 h-[calc(100%-1rem)] w-px bg-stone-200 lg:right-1/2" />
            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 80}>
                  <div className={`relative flex gap-6 lg:w-1/2 ${i % 2 ? 'lg:mr-auto lg:flex-row-reverse lg:pr-10 lg:text-left' : 'lg:ml-auto lg:pl-10'}`}>
                    <span className={cn('absolute right-0 top-1.5 z-10 size-4 rounded-full border-2 border-white shadow-sm lg:right-auto', ['bg-heritage-700', 'bg-teal-700', 'bg-gold-700', 'bg-mint-700'][i % 4])} />
                    <div className="pr-8 lg:pr-0">
                      <div className="font-display text-headline-1 text-gold-700">{t.year}</div>
                      <Label className="mt-1 block text-teal-900">{t.title}</Label>
                      <Body size={2} className="mt-1">{t.desc}</Body>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Accreditations + partners */}
      <Section surface="sand">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>الاعتمادات</Eyebrow>
            <Headline className="mt-3">موثوقون ومعتمدون</Headline>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {AWARDS.map((a, i) => (
                <li key={a} className="flex items-center gap-3 rounded-brand border border-stone-200 bg-white p-4 shadow-card transition-colors hover:border-gold-200">
                  <Icon name="shield" size={22} className={rotate(ACCENT_TEXT, i)} />
                  <Label className="text-teal-900">{a}</Label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>شركاؤنا</Eyebrow>
            <Headline className="mt-3">نعمل مع الأفضل</Headline>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {PARTNERS.map((p) => (
                <div key={p} className="grid h-20 place-items-center rounded-brand border border-stone-200 bg-white text-center transition-all hover:border-gold-200 hover:shadow-card">
                  <span className="text-label text-stone-600">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Track record */}
      <Section surface="white">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading className="mb-0" eyebrow="سجل الإنجاز" title="مشاريع أنجزناها وسلّمناها" subtitle="نماذج تعكس التزامنا بالجودة والتسليم في الوقت المحدد." />
            <Button as={Link} to="/projects" variant="secondary">كل المشاريع <Icon name="arrowLeft" size={16} /></Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {track.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="surface-luxe-dark relative overflow-hidden py-16 text-white">
        <div className="rule-gold absolute inset-x-0 top-0" aria-hidden />
        <img src="/assets/Images/skyline-dusk.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-20" />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <Headline className="text-white">لنبنِ مستقبلك العقاري معاً</Headline>
          <Body className="max-w-xl text-stone-200/85">فريقنا جاهز لمساعدتك في اختيار الوحدة المناسبة أو استكشاف فرص الاستثمار.</Body>
          <div className="flex flex-wrap justify-center gap-3">
            <Button as="a" href={whatsappHref('مرحباً، لدي استفسار عن آجام')} target="_blank" rel="noreferrer" variant="gold" size="lg"><Icon name="whatsapp" size={18} /> تواصل معنا</Button>
            <Button as={Link} to="/investor" variant="outlineLight" size="lg">بوابة المستثمر</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
