import { useEffect, useRef, useState } from 'react'

// Count-up number, triggered when scrolled into view. Latin (English) digits.
export function Counter({ value, suffix = '', duration = 1600, className }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          // easeOutExpo
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
          setN(Math.round(eased * value))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])

  const formatted = new Intl.NumberFormat('en-US').format(n)
  return (
    <span ref={ref} className={className}>
      {formatted}
      {suffix}
    </span>
  )
}
