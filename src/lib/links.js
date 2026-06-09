import { CONTACT } from '../data/projects'

// Build offline-safe action links. tel/wa are protocol links (not network assets).
export function telHref() {
  return `tel:${CONTACT.phoneTel}`
}

export function whatsappHref(message) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function mailHref(subject) {
  return subject
    ? `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${CONTACT.email}`
}
