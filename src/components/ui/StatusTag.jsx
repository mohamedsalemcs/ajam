import { cn } from '../../lib/cn'

// Real-estate status — Arabic labels canonical.
const STATUS = {
  available: { label: 'متاح للبيع', soft: 'bg-mint-100 text-mint-900 border-mint-200', solid: 'bg-mint-700 text-white', dot: 'bg-mint-500' },
  construction: { label: 'تحت الإنشاء', soft: 'bg-gold-100 text-gold-900 border-gold-200', solid: 'bg-gold-700 text-teal-900', dot: 'bg-gold-900' },
  completed: { label: 'مباع بالكامل', soft: 'bg-teal-100 text-teal-900 border-teal-200', solid: 'bg-teal-700 text-white', dot: 'bg-teal-200' },
  sold: { label: 'مباعة', soft: 'bg-stone-200 text-ink-700 border-stone-200', solid: 'bg-stone-600 text-white', dot: 'bg-stone-400' },
  booked: { label: 'محجوزة', soft: 'bg-gold-100 text-gold-900 border-gold-200', solid: 'bg-gold-700 text-teal-900', dot: 'bg-gold-900' },
}

// Soft chip (light surfaces, tables).
export function StatusTag({ status = 'available', className }) {
  const s = STATUS[status] ?? STATUS.available
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-caption font-medium font-body',
        s.soft,
        className,
      )}
    >
      <span className={cn('size-1.5 rounded-full', s.dot)} aria-hidden />
      {s.label}
    </span>
  )
}

// Solid badge (for image overlays / hero).
export function StatusBadge({ status = 'available', className }) {
  const s = STATUS[status] ?? STATUS.available
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-caption font-semibold font-body shadow-sm backdrop-blur',
        s.solid,
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current opacity-80" aria-hidden />
      {s.label}
    </span>
  )
}

export const STATUS_KEYS = Object.keys(STATUS)
