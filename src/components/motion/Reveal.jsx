import { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/cn'

// Scroll-reveal wrapper using IntersectionObserver (no animation library).
export function Reveal({ as: Comp = 'div', delay = 0, className, children, ...props }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Comp
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn('reveal', shown && 'is-visible', className)}
      {...props}
    >
      {children}
    </Comp>
  )
}
