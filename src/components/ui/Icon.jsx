// Single offline stroke-icon family (design system §12). 1.5px stroke, geometric.
// No remote icon library. Add paths here as needed.
import { cn } from '../../lib/cn'

const PATHS = {
  phone:
    'M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z',
  whatsapp:
    'M3.5 20.5l1.3-4a8 8 0 1 1 3 2.8l-4.3 1.2ZM9 8.5c-.3 0-.6.1-.8.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.9 4.4 3.9 2.2.8 2.6.7 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4-.3-.2-1.5-.8-1.8-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8.9-.1.2-.3.2-.5.1-.3-.2-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.2-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5 0-.2-.6-1.5-.8-2C9.4 8.6 9.2 8.5 9 8.5Z',
  pin: 'M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  arrowLeft: 'M14 5l-7 7 7 7 M5 12h14',
  arrowRight: 'M10 5l7 7-7 7 M19 12H5',
  chevronDown: 'M6 9l6 6 6-6',
  chevronLeft: 'M14 6l-6 6 6 6',
  building:
    'M5 21V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v16 M14 21V9h4a1 1 0 0 1 1 1v11 M3 21h18 M8 8h2 M8 12h2 M8 16h2',
  download: 'M12 4v10 M8 11l4 4 4-4 M5 19h14',
  check: 'M5 13l4 4 10-10',
  checkCircle: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M8.5 12l2.5 2.5 4.5-5',
  menu: 'M4 7h16 M4 12h16 M4 17h16',
  close: 'M6 6l12 12 M18 6L6 18',
  bed: 'M3 18v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5 M3 14h18 M7 11V8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3 M3 18v2 M21 18v2',
  area: 'M4 4h16v16H4Z M4 9h4V4 M16 20v-5h4',
  calendar: 'M7 3v3 M17 3v3 M4 8h16 M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z',
  filter: 'M4 6h16 M7 12h10 M10 18h4',
  mail: 'M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z M4 7l8 6 8-6',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3 2',
  layers: 'M12 3l9 5-9 5-9-5 9-5Z M3 13l9 5 9-5 M3 17l9 5 9-5',
  ruler: 'M3 8h18v8H3Z M7 8v3 M11 8v4 M15 8v3 M19 8v4',
  doc: 'M7 3h7l5 5v13a0 0 0 0 1 0 0H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z M14 3v5h5 M9 13h6 M9 17h6',
  shield: 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z M9 12l2 2 4-4',
  trending: 'M3 17l6-6 4 4 7-7 M14 8h6v6',
  calculator: 'M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z M8 7h8 M8 11h.01 M12 11h.01 M16 11h.01 M8 15h.01 M12 15h.01 M16 15h.01',
  star: 'M12 3l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.4l6-.9L12 3Z',
  users: 'M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1 M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7 M21 19v-1a4 4 0 0 0-3-3.8 M16 3.2a3.5 3.5 0 0 1 0 6.6',
  share: 'M12 4v12 M8 8l4-4 4 4 M5 14v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4',
  whatsappFill: 'M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Z',
  pool: 'M3 18c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 M7 16V6a2 2 0 0 1 4 0 M7 10h4 M13 16V6a2 2 0 0 1 4 0 M13 10h4',
  gym: 'M6.5 6.5l11 11 M3 9l3-3 3 3-3 3-3-3Z M15 21l3-3 3-3-3-3-3 3 M5 11l6 6 M13 5l6 6',
  car: 'M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11 M4 11h16v6H4Z M7 17v2 M17 17v2 M7 14h.01 M17 14h.01',
  tree: 'M12 22v-6 M12 16a5 5 0 0 0 5-5 4 4 0 0 0-1-2.6A4.5 4.5 0 0 0 12 3a4.5 4.5 0 0 0-4 3.4A4 4 0 0 0 7 11a5 5 0 0 0 5 5Z',
  mosque: 'M12 3c0 2-3 3-3 6 M12 3c0 2 3 3 3 6 M5 21V12a7 7 0 0 1 14 0v9 M5 16h14 M9 21v-3a3 3 0 0 1 6 0v3 M5 12V9 M19 12V9',
  kids: 'M9 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z M9 7v6 M6 10h6 M9 13l-2 8 M9 13l2 8 M17 21V8a2 2 0 0 0-4 0',
  lobby: 'M4 21V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16 M4 21h16 M9 21v-6h6v6 M8 8h2 M14 8h2 M8 11h2 M14 11h2',
  leaf: 'M5 19c0-8 6-14 14-14 0 8-6 14-14 14Z M5 19c3-3 6-5 9-6',
  bulb: 'M9 18h6 M10 21h4 M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.2 1 2.5h6c0-1.3.3-1.8 1-2.5A6 6 0 0 0 12 3Z',
  key: 'M14 7a4 4 0 1 1-3.5 5.9L4 19l-1 3 3-1 1.5-1.5L9 21l1.5-1.5L9 18l2.1-2.1A4 4 0 0 1 14 7Z M15.5 8.5h.01',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z M21 21l-4.3-4.3',
  quote: 'M9 7H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3H6 M18 7h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3h-2',
  bath: 'M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z M6 12V6a2 2 0 0 1 3.4-1.4L10 5 M9 5l1.5 1.5 M6 19l-1 2 M18 19l1 2',
  grid: 'M4 4h7v7H4Z M13 4h7v7h-7Z M4 13h7v7H4Z M13 13h7v7h-7Z',
  play: 'M8 5v14l11-7-11-7Z',
}

export function Icon({ name, size = 20, className, strokeWidth = 1.5, fill = false }) {
  const d = PATHS[name]
  if (!d) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ? 'currentColor' : 'none'}
      stroke={fill ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('shrink-0', className)}
      aria-hidden
    >
      <path d={d} />
    </svg>
  )
}
