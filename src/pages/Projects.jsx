import { useMemo, useState } from 'react'
import { Icon } from '../components/ui'
import { Body, Caption, Label } from '../components/ui/Typography'
import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/common/Bits'
import { ProjectCard } from '../components/project/ProjectCard'
import { Reveal } from '../components/motion/Reveal'
import { PROJECTS, UNIT_TYPES } from '../data/projects'
import { cn } from '../lib/cn'

const DISTRICTS = [...new Set(PROJECTS.map((p) => p.district))]

const STATUS_FILTERS = [
  { key: 'all', label: 'الكل' },
  { key: 'available', label: 'متاح للبيع' },
  { key: 'construction', label: 'تحت الإنشاء' },
  { key: 'completed', label: 'مكتمل' },
]

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full border px-4 py-2 text-label font-medium transition-all',
        active
          ? 'border-heritage-700 bg-heritage-700 text-white shadow-sm'
          : 'border-stone-200 bg-white text-ink-700 hover:border-heritage-200 hover:text-heritage-700',
      )}
    >
      {children}
    </button>
  )
}

export function Projects() {
  const [status, setStatus] = useState('all')
  const [district, setDistrict] = useState('all')
  const [type, setType] = useState('all')

  const results = useMemo(
    () =>
      PROJECTS.filter(
        (p) =>
          (status === 'all' || p.status === status) &&
          (district === 'all' || p.district === district) &&
          (type === 'all' || p.unitTypes.includes(type)),
      ),
    [status, district, type],
  )

  const reset = () => {
    setStatus('all')
    setDistrict('all')
    setType('all')
  }
  const hasFilter = status !== 'all' || district !== 'all' || type !== 'all'

  return (
    <>
      <PageHeader
        eyebrow="مشاريعنا"
        title="اكتشف مشاريع آجام في الرياض"
        subtitle="تصفّح مجتمعاتنا السكنية وقارن حسب الحي والحالة ونوع الوحدة، واعثر على وحدتك المثالية."
        image="/assets/Images/skyline-dusk.jpg"
      />

      <Container className="py-12">
        {/* Filter bar */}
        <div className="rounded-brand-lg border border-stone-200 border-t-2 border-t-gold-700 bg-white p-5 shadow-card sm:p-6">
          <div className="flex items-center gap-2 text-teal-900">
            <Icon name="filter" size={20} className="text-heritage-700" />
            <Label className="text-teal-900">تصفية المشاريع</Label>
          </div>
          <div className="mt-4">
            <Caption className="mb-2 block text-stone-500">الحالة</Caption>
            <div className="flex flex-wrap gap-2">
              {STATUS_FILTERS.map((s) => (
                <Chip key={s.key} active={status === s.key} onClick={() => setStatus(s.key)}>{s.label}</Chip>
              ))}
            </div>
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div>
              <Caption className="mb-2 block text-stone-500">الحي</Caption>
              <div className="flex flex-wrap gap-2">
                <Chip active={district === 'all'} onClick={() => setDistrict('all')}>كل الأحياء</Chip>
                {DISTRICTS.map((d) => (
                  <Chip key={d} active={district === d} onClick={() => setDistrict(d)}>{d}</Chip>
                ))}
              </div>
            </div>
            <div>
              <Caption className="mb-2 block text-stone-500">نوع الوحدة</Caption>
              <div className="flex flex-wrap gap-2">
                <Chip active={type === 'all'} onClick={() => setType('all')}>كل الأنواع</Chip>
                {UNIT_TYPES.map((t) => (
                  <Chip key={t} active={type === t} onClick={() => setType(t)}>{t}</Chip>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Body size={2} className="text-stone-600">
            <span className="font-medium text-teal-900">{results.length}</span> مشروع
          </Body>
          {hasFilter && (
            <button type="button" onClick={reset} className="flex items-center gap-1 text-label text-heritage-700 hover:text-heritage-900">
              <Icon name="close" size={16} /> مسح التصفية
            </button>
          )}
        </div>

        {results.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-6 grid place-items-center rounded-brand-lg border border-dashed border-stone-200 bg-white py-20 text-center">
            <Icon name="building" size={40} className="text-stone-400" />
            <Body className="mt-3 text-stone-600">لا توجد مشاريع مطابقة لخيارات التصفية الحالية.</Body>
            <button type="button" onClick={reset} className="mt-3 text-label text-heritage-700">عرض كل المشاريع</button>
          </div>
        )}
      </Container>
    </>
  )
}
