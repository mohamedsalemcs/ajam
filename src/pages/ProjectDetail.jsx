import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button, Icon } from '../components/ui'
import { Headline, Body, Eyebrow, Caption, Label, Display } from '../components/ui/Typography'
import { Section, Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { StatusBadge, StatusTag } from '../components/ui/StatusTag'
import { Breadcrumbs, SectionHeading } from '../components/common/Bits'
import { Gallery } from '../components/project/Gallery'
import { RegisterInterest } from '../components/project/RegisterInterest'
import { ProjectCard } from '../components/project/ProjectCard'
import { AmenityCard } from '../components/project/AmenityCard'
import { Reveal } from '../components/motion/Reveal'
import { getProject, similarProjects, formatSAR, STATUS_META } from '../data/projects'
import { whatsappHref, telHref } from '../lib/links'
import { cn } from '../lib/cn'

const UNIT_STATUS = {
  available: { label: 'متاحة', cls: 'text-mint-700 bg-mint-100' },
  booked: { label: 'محجوزة', cls: 'text-gold-900 bg-gold-100' },
  sold: { label: 'مباعة', cls: 'text-stone-500 bg-stone-200' },
}

function NotFound() {
  return (
    <div className="bg-teal-900 pt-[68px]">
      <Container className="grid place-items-center py-32 text-center text-white">
        <Icon name="building" size={48} className="text-gold-700" />
        <Headline className="mt-4 text-white">المشروع غير موجود</Headline>
        <Button as={Link} to="/projects" variant="gold" className="mt-6">عرض كل المشاريع</Button>
      </Container>
    </div>
  )
}

function Fact({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-brand border border-stone-200 bg-white p-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-brand bg-teal-100 text-teal-700">
        <Icon name={icon} size={20} />
      </span>
      <div className="min-w-0">
        <Caption className="block text-stone-400">{label}</Caption>
        <Label className="truncate text-teal-900">{value}</Label>
      </div>
    </div>
  )
}

export function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  const [showBar, setShowBar] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 520)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!project) return <NotFound />

  const meta = STATUS_META[project.status]
  const soldPct = project.unitsCount ? Math.round((project.unitsSold / project.unitsCount) * 100) : 0
  const similar = similarProjects(project.slug)
  const brochureMsg = `أرغب بالحصول على كتيب مشروع ${project.name}`

  return (
    <>
      {/* ===== Cinematic hero ===== */}
      <section className="relative min-h-[80svh] overflow-hidden bg-teal-900 text-white">
        <img src={project.hero} alt={project.name} className="absolute inset-0 size-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-900/55 to-teal-900/40" />
        <Container className="relative flex min-h-[80svh] flex-col justify-end pb-12 pt-28">
          <Breadcrumbs light items={[{ label: 'الرئيسية', to: '/' }, { label: 'المشاريع', to: '/projects' }, { label: project.name }]} />
          <div className="flex items-center gap-3">
            <StatusBadge status={project.status} />
            {project.offer && <span className="rounded-full bg-gold-700 px-3 py-1.5 text-caption font-semibold text-teal-900">{project.offer.badge}</span>}
          </div>
          <Display level={2} as="h1" className="mt-4 text-white">{project.name}</Display>
          <p className="mt-2 flex items-center gap-2 text-body-1 text-stone-100/90">
            <Icon name="pin" size={20} className="text-gold-700" /> {project.district} · {project.city}
          </p>
          <p className="mt-2 max-w-2xl text-body-2 text-stone-200/80">{project.tagline}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {meta.bookable ? (
              <Button as="a" href="#register" variant="gold" size="lg"><Icon name="star" size={18} /> سجّل اهتمامك</Button>
            ) : meta.key === 'construction' ? (
              <Button as="a" href="#register" variant="gold" size="lg"><Icon name="star" size={18} /> احجز مبكراً</Button>
            ) : (
              <Button as={Link} to="/projects" variant="gold" size="lg"><Icon name="grid" size={18} /> مشاريع متاحة</Button>
            )}
            <Button as="a" href="#brochure" variant="outlineLight" size="lg"><Icon name="download" size={18} /> كتيب المشروع</Button>
            <Button as="a" href={whatsappHref(`استفسار عن ${project.name}`)} target="_blank" rel="noreferrer" variant="outlineLight" size="lg"><Icon name="whatsapp" size={18} /> واتساب</Button>
          </div>
        </Container>
      </section>

      {/* ===== Sticky action bar — anchored at top-0; slides to just under the
           header (68px) when shown, fully off-screen when hidden (no sliver) ===== */}
      <div className={cn('fixed inset-x-0 top-0 z-30 border-b border-stone-200 bg-stone-100/95 backdrop-blur-md transition-transform duration-300', showBar ? 'translate-y-[68px]' : '-translate-y-full pointer-events-none')}>
        <Container className="flex items-center justify-between gap-4 py-3">
          <div className="min-w-0">
            <div className="truncate font-display text-headline-2 text-teal-900">{project.name}</div>
            <div className="text-caption text-stone-500">يبدأ من {formatSAR(project.priceFrom)} ريال · {project.district}</div>
          </div>
          <div className="flex shrink-0 gap-2">
            <Button as="a" href={telHref()} variant="secondary" size="sm" className="hidden sm:inline-flex"><Icon name="phone" size={15} /> اتصال</Button>
            <Button as="a" href={whatsappHref(`استفسار عن ${project.name}`)} target="_blank" rel="noreferrer" variant="teal" size="sm"><Icon name="whatsapp" size={15} /> واتساب</Button>
            {meta.bookable || meta.key === 'construction' ? (
              <Button as="a" href="#register" variant="primary" size="sm">سجّل اهتمامك</Button>
            ) : (
              <Button as={Link} to="/projects" variant="primary" size="sm">مشاريع متاحة</Button>
            )}
          </div>
        </Container>
      </div>

      {/* ===== Quick facts ===== */}
      <section className="border-b border-stone-200 bg-white py-8">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            <Fact icon="doc" label="تبدأ الأسعار من" value={`${formatSAR(project.priceFrom)} ريال`} />
            <Fact icon="ruler" label="المساحات" value={`${project.areaMin}–${project.areaMax} م²`} />
            <Fact icon="bed" label="غرف النوم" value={project.bedroomsRange} />
            <Fact icon="building" label="إجمالي الوحدات" value={`${project.unitsCount} وحدة`} />
            <Fact icon="checkCircle" label="متاح الآن" value={project.status === 'completed' ? 'مباع بالكامل' : `${project.unitsAvailable} وحدة`} />
            <Fact icon="calendar" label="التسليم" value={project.deliveryDate} />
          </div>
        </Container>
      </section>

      {/* ===== Offer banner ===== */}
      {project.offer && (
        <section className="bg-gold-700">
          <Container className="flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-right">
            <div className="flex items-center gap-3 text-teal-900">
              <Icon name="star" size={26} />
              <div>
                <div className="font-display text-headline-2">{project.offer.title}</div>
                <div className="text-body-2 text-teal-900/80">{project.offer.desc}</div>
              </div>
            </div>
            <Button as="a" href="#register" variant="teal" size="md">اغتنم العرض</Button>
          </Container>
        </section>
      )}

      {/* ===== Overview + gallery ===== */}
      <Section surface="white">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>نظرة عامة</Eyebrow>
              <Headline className="mt-3">عن مشروع {project.name}</Headline>
              <Body className="mt-4 leading-loose">{project.description}</Body>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5 rounded-brand bg-stone-100/60 px-4 py-3">
                    <Icon name="checkCircle" size={20} className="shrink-0 text-mint-700" />
                    <Body size={2} as="span" className="text-ink-700">{h}</Body>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Sidebar price + actions */}
          <aside className="lg:col-span-5">
            <Card className="sticky top-24 p-6">
              <Caption className="text-stone-500">{project.status === 'completed' ? 'سعر سابق' : 'تبدأ الأسعار من'}</Caption>
              <div className="font-display text-display-2 text-teal-900">
                {formatSAR(project.priceFrom)} <span className="text-headline-2 font-normal text-stone-600">ريال</span>
              </div>
              {project.status !== 'completed' && (
                <div className="mt-4">
                  <div className="h-2 overflow-hidden rounded-full bg-stone-200">
                    <div className="h-full rounded-full bg-heritage-700" style={{ width: `${soldPct}%` }} />
                  </div>
                  <div className="mt-1.5 flex justify-between text-caption text-stone-500">
                    <span>تم بيع {soldPct}٪</span>
                    <span>{project.unitsAvailable} وحدة متاحة</span>
                  </div>
                </div>
              )}
              <div className="mt-5 space-y-2">
                {meta.bookable || meta.key === 'construction' ? (
                  <Button as="a" href="#register" variant="primary" size="md" className="w-full"><Icon name="star" size={18} /> سجّل اهتمامك الآن</Button>
                ) : (
                  <Button as={Link} to="/projects" variant="primary" size="md" className="w-full"><Icon name="grid" size={18} /> استعرض المشاريع المتاحة</Button>
                )}
                <div className="grid grid-cols-2 gap-2">
                  <Button as="a" href={whatsappHref(`استفسار عن ${project.name}`)} target="_blank" rel="noreferrer" variant="teal" size="md"><Icon name="whatsapp" size={17} /> واتساب</Button>
                  <Button as="a" href={telHref()} variant="secondary" size="md"><Icon name="phone" size={17} /> اتصال</Button>
                </div>
                <Button as={Link} to={`/contact?project=${project.slug}&type=visit`} variant="ghost" size="md" className="w-full"><Icon name="calendar" size={17} /> احجز زيارة للموقع</Button>
              </div>
            </Card>
          </aside>
        </Container>

        {/* Gallery */}
        <Container className="mt-12">
          <SectionHeading className="mb-6" eyebrow="معرض الصور" title="تصاميم تنبض بالحياة" />
          <Gallery images={project.gallery} name={project.name} />
        </Container>
      </Section>

      {/* ===== Units availability ===== */}
      <Section surface="sand">
        <Container>
          <SectionHeading eyebrow="الوحدات" title="المساحات والأسعار والتوفّر" subtitle="جدول شفّاف بحالة كل وحدة — متاحة، محجوزة، أو مباعة." />
          <div className="overflow-hidden rounded-brand-lg border border-stone-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-right">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-100 text-caption text-stone-500">
                    <th className="px-5 py-3 font-medium">نوع الوحدة</th>
                    <th className="px-5 py-3 font-medium">المساحة</th>
                    <th className="px-5 py-3 font-medium">الغرف</th>
                    <th className="px-5 py-3 font-medium">دورات المياه</th>
                    <th className="px-5 py-3 font-medium">السعر يبدأ من</th>
                    <th className="px-5 py-3 font-medium">الحالة</th>
                    <th className="px-5 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {project.units.map((u, i) => {
                    const us = UNIT_STATUS[u.status]
                    return (
                      <tr key={i} className="text-body-2 transition-colors hover:bg-stone-100/50">
                        <td className="px-5 py-4 font-medium text-teal-900">{u.type}</td>
                        <td className="px-5 py-4 text-ink-700">{u.area} م²</td>
                        <td className="px-5 py-4 text-ink-700">{u.bedrooms}</td>
                        <td className="px-5 py-4 text-ink-700">{u.bathrooms}</td>
                        <td className="px-5 py-4 font-medium text-teal-900">{formatSAR(u.priceFrom)} ريال</td>
                        <td className="px-5 py-4"><span className={cn('rounded-full px-2.5 py-1 text-caption font-medium', us.cls)}>{us.label}</span></td>
                        <td className="px-5 py-4 text-left">
                          {u.status === 'available' ? (
                            <a href="#register" className="text-label font-medium text-heritage-700 hover:text-heritage-900">احجز ←</a>
                          ) : (
                            <span className="text-caption text-stone-400">—</span>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===== Amenities ===== */}
      <Section surface="white" id="amenities" className="scroll-mt-24">
        <Container>
          <SectionHeading eyebrow="المرافق والخدمات" title="حياة متكاملة داخل المشروع" subtitle="مرافق مصممة لتمنحك تجربة سكن راقية ومتكاملة على مدار اليوم." />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {project.amenities.map((a, i) => (
              <Reveal key={a.label} delay={(i % 6) * 60}>
                <AmenityCard icon={a.icon} label={a.label} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== Payment plans ===== */}
      {project.paymentPlans.length > 0 && (
        <Section surface="sand">
          <Container>
            <SectionHeading eyebrow="خطط السداد" title="خيارات تناسب الجميع" subtitle="اختر الطريقة الأنسب لك، وسيساعدك مستشارنا في إتمام الإجراءات." />
            <div className="grid gap-5 md:grid-cols-3">
              {project.paymentPlans.map((p, i) => (
                <Reveal key={p.name} delay={i * 90}>
                  <Card className={cn('h-full p-7', i === 0 && 'ring-2 ring-heritage-700')}>
                    {i === 0 && <span className="mb-3 inline-block rounded-full bg-heritage-100 px-3 py-1 text-caption font-medium text-heritage-700">الأكثر اختياراً</span>}
                    <Headline level={1} as="h3">{p.name}</Headline>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="font-display text-display-2 text-heritage-700">{p.down}</span>
                      <span className="text-label text-stone-500">دفعة أولى</span>
                    </div>
                    <Body size={2} className="mt-3">{p.note}</Body>
                    <Button as="a" href="#register" variant={i === 0 ? 'primary' : 'secondary'} size="md" className="mt-5 w-full">اطلب هذه الخطة</Button>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ===== Masterplan + location ===== */}
      <Section surface="white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>المخطط العام</Eyebrow>
            <Headline className="mt-3">رؤية شاملة للمشروع</Headline>
            <Body className="mt-3">مخطط مدروس يوازن بين الوحدات السكنية والمساحات الخضراء والمرافق لتجربة سكن متكاملة.</Body>
            <div className="mt-5 overflow-hidden rounded-brand-lg border border-stone-200">
              <img src={project.masterplan} alt="المخطط العام" className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>الموقع</Eyebrow>
            <Headline className="mt-3">{project.district} · {project.city}</Headline>
            <Body className="mt-3">موقع حيوي قريب من أهم الخدمات والطرق الرئيسية في الرياض.</Body>
            <ul className="mt-5 space-y-2">
              {project.nearby.map((n) => (
                <li key={n.name} className="flex items-center justify-between rounded-brand border border-stone-200 bg-white px-4 py-3">
                  <span className="flex items-center gap-2 text-body-2 text-ink-700"><Icon name="pin" size={18} className="text-heritage-700" /> {n.name}</span>
                  <span className="text-label text-stone-500">{n.distance}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* ===== Brochure (in-project only) ===== */}
      <section id="brochure" className="scroll-mt-24 bg-teal-900 py-16 text-white">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-brand-lg border border-white/10 bg-white/5 p-8 backdrop-blur sm:flex-row sm:text-right">
            <div className="flex items-center gap-5">
              <span className="grid size-16 shrink-0 place-items-center rounded-brand bg-gold-700 text-teal-900"><Icon name="doc" size={32} /></span>
              <div>
                <Headline level={1} as="h2" className="text-white">كتيب مشروع {project.name}</Headline>
                <Body size={2} className="mt-1 text-stone-200/75">كل التفاصيل والمخططات والمواصفات في ملف واحد · {project.brochureSize}</Body>
              </div>
            </div>
            <Button as="a" href={whatsappHref(brochureMsg)} target="_blank" rel="noreferrer" variant="gold" size="lg"><Icon name="download" size={18} /> احصل على الكتيب</Button>
          </div>
        </Container>
      </section>

      {/* ===== Register interest ===== */}
      {(meta.bookable || meta.key === 'construction') && (
        <Section surface="white">
          <Container>
            <RegisterInterest project={project} />
          </Container>
        </Section>
      )}

      {/* ===== Similar projects ===== */}
      {similar.length > 0 && (
        <Section surface="sand">
          <Container>
            <SectionHeading eyebrow="مشاريع أخرى" title="قد تهمّك أيضاً" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          </Container>
        </Section>
      )}
    </>
  )
}
