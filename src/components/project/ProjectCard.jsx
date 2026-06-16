import { Link } from 'react-router-dom'
import { Icon } from '../ui/Icon'
import { StatusBadge } from '../ui/StatusTag'
import { formatSAR } from '../../data/projects'

// Image-led project card — full-bleed photo, gradient, hover zoom, key facts.
export function ProjectCard({ project }) {
  const soldPct =
    project.unitsCount > 0 ? Math.round((project.unitsSold / project.unitsCount) * 100) : 0

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-brand-lg bg-teal-900 shadow-card ring-1 ring-transparent transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-card-hover hover:ring-gold-700/40"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={project.hero}
          alt={project.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-900/35 to-transparent" />

        {/* Top row: status + offer */}
        <div className="absolute inset-x-4 top-4 flex items-start justify-between">
          <StatusBadge status={project.status} />
          {project.offer && (
            <span className="rounded-full bg-gold-700 px-3 py-1 text-caption font-medium text-teal-900 shadow">
              {project.offer.badge}
            </span>
          )}
        </div>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <div className="flex items-center gap-1.5 text-body-2 text-white/80">
            <Icon name="pin" size={15} className="text-gold-700" />
            {project.district} · {project.city}
          </div>
          <h3 className="mt-1 font-display text-headline-1 text-white">{project.name}</h3>
          <p className="mt-1 line-clamp-1 text-body-2 text-white/75">{project.tagline}</p>

          {/* Facts */}
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/15 pt-3 text-center">
            <Fact label="تبدأ من" value={`${formatSAR(project.priceFrom)}`} sub="ريال" />
            <Fact label="المساحات" value={`${project.areaMin}–${project.areaMax}`} sub="م²" />
            <Fact
              label="الوحدات"
              value={project.status === 'completed' ? 'مباع' : project.unitsAvailable}
              sub={project.status === 'completed' ? 'بالكامل' : 'متاحة'}
            />
          </div>

          {/* Availability bar (hidden for completed) */}
          {project.status !== 'completed' && (
            <div className="mt-3">
              <div className="h-1.5 overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-gold-700 transition-all duration-700 group-hover:bg-gold-500"
                  style={{ width: `${soldPct}%` }}
                />
              </div>
              <div className="mt-1.5 flex items-center justify-between text-caption text-white/70">
                <span>تم بيع {soldPct}٪</span>
                <span className="flex items-center gap-1 font-medium text-gold-700 transition-transform group-hover:-translate-x-1">
                  التفاصيل
                  <Icon name="arrowLeft" size={14} />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

function Fact({ label, value, sub }) {
  return (
    <div>
      <div className="text-caption text-white/60">{label}</div>
      <div className="font-display text-label font-bold text-white">
        {value} <span className="text-caption font-normal text-white/70">{sub}</span>
      </div>
    </div>
  )
}
