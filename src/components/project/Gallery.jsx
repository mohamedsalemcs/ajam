import { useState, useEffect, useCallback } from 'react'
import { Icon } from '../ui/Icon'
import { cn } from '../../lib/cn'

// Image gallery with full-screen lightbox + keyboard nav (RTL-aware arrows).
export function Gallery({ images, name }) {
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  const go = useCallback(
    (d) => setIdx((i) => (i + d + images.length) % images.length),
    [images.length],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowLeft') go(1)
      if (e.key === 'ArrowRight') go(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, go])

  const show = (i) => {
    setIdx(i)
    setOpen(true)
  }

  return (
    <>
      {/* Masonry-ish grid: first image large */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <button onClick={() => show(0)} className="group relative col-span-2 row-span-2 overflow-hidden rounded-brand-lg sm:aspect-auto">
          <img src={images[0]} alt={`${name} 1`} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-caption text-white backdrop-blur">
            <Icon name="grid" size={15} /> {images.length} صور
          </span>
        </button>
        {images.slice(1, 5).map((src, i) => (
          <button key={i} onClick={() => show(i + 1)} className="group relative aspect-square overflow-hidden rounded-brand">
            <img src={src} alt={`${name} ${i + 2}`} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            {i === 3 && images.length > 5 && (
              <span className="absolute inset-0 grid place-items-center bg-teal-900/60 font-display text-headline-1 text-white">
                +{images.length - 5}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-teal-900/95 backdrop-blur" role="dialog" aria-modal="true">
          <div className="flex items-center justify-between p-4 text-white">
            <span className="text-label">{idx + 1} / {images.length}</span>
            <button onClick={() => setOpen(false)} aria-label="إغلاق" className="grid size-10 place-items-center rounded-full hover:bg-white/10">
              <Icon name="close" size={24} />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center p-4">
            <button onClick={() => go(-1)} aria-label="السابق" className="absolute right-4 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <Icon name="chevronLeft" size={26} className="rotate-180" />
            </button>
            <img src={images[idx]} alt={`${name} ${idx + 1}`} className="max-h-[78vh] max-w-full rounded-brand-lg object-contain" />
            <button onClick={() => go(1)} aria-label="التالي" className="absolute left-4 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <Icon name="chevronLeft" size={26} />
            </button>
          </div>
          <div className="no-scrollbar flex gap-2 overflow-x-auto p-4">
            {images.map((src, i) => (
              <button key={i} onClick={() => setIdx(i)} className={cn('h-16 w-24 shrink-0 overflow-hidden rounded-brand border-2', i === idx ? 'border-gold-700' : 'border-transparent opacity-60')}>
                <img src={src} alt="" className="size-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
