import { Icon } from '../ui/Icon'

// Amenity cards — one consistent photographic school. Every amenity maps to a
// real, relevant photo stored locally (offline-first). No vectors, no mixing.
const PHOTO = {
  pool: '/assets/Images/amenity-pool.jpg',
  gym: '/assets/Images/amenity-gym.jpg',
  lobby: '/assets/Images/amenity-lobby.jpg',
  star: '/assets/Images/interior-living.jpg', // تشطيب فاخر
  tree: '/assets/Images/amenity-garden.jpg', // حدائق ومسطحات
  mosque: '/assets/Images/amenity-mosque.jpg',
  car: '/assets/Images/amenity-parking.jpg', // مواقف
  shield: '/assets/Images/amenity-security.jpg', // أمن
  kids: '/assets/Images/amenity-kids.jpg', // مناطق لعب
}

const FALLBACK = '/assets/Images/interior-living.jpg'

export function AmenityCard({ icon, label }) {
  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-brand-lg border border-stone-200 shadow-card">
      <img
        src={PHOTO[icon] || FALLBACK}
        alt={label}
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* bottom scrim for label legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent" />

      {/* content */}
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 p-3.5">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm ring-1 ring-white/25 transition-colors group-hover:bg-gold-700 group-hover:text-teal-900">
          <Icon name={icon} size={18} />
        </span>
        <span className="font-body text-label font-medium leading-tight text-white drop-shadow">
          {label}
        </span>
      </div>
    </div>
  )
}
