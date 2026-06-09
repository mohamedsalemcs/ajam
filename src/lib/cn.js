// Tiny className combiner — no external deps (offline-first, minimal footprint).
export function cn(...parts) {
  return parts.filter(Boolean).join(' ')
}
