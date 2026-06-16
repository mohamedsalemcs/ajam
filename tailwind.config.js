/** @type {import('tailwindcss').Config} */
// Ajam Design System tokens — source of truth: references/AJAM_Design_System_Claude_Guide_AR_RTL_Offline.md
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Heritage Red — primary brand identity
        heritage: {
          100: '#F2DDD5',
          200: '#D7A08A',
          500: '#A94A26',
          700: '#8B2F0E', // brand.red.heritage (primary)
          900: '#5F200B',
          DEFAULT: '#8B2F0E',
        },
        // Teal — secondary, trust, premium dark
        teal: {
          100: '#DCEAED',
          200: '#86B1B7',
          500: '#0B4A54',
          700: '#062C33', // brand.teal (secondary)
          900: '#041C20',
          DEFAULT: '#062C33',
        },
        // Gold — refined accent only
        gold: {
          100: '#FBF4E6',
          200: '#F3E4C4',
          500: '#E2C58A',
          700: '#D4AE6A', // brand.gold (accent)
          900: '#8D6E3A',
          DEFAULT: '#D4AE6A',
        },
        // Mint — supportive / success
        mint: {
          100: '#E1F5F2',
          200: '#8FD3C8',
          500: '#1B8A7D',
          700: '#0E6E63', // brand.mint
          900: '#08463F',
          DEFAULT: '#0E6E63',
        },
        // Neutrals
        ink: {
          900: '#101010',
          700: '#2A2A2A',
        },
        stone: {
          100: '#F4EFE8', // neutral.sand-100
          200: '#DDD8D1',
          400: '#A6A39E',
          600: '#6A6964', // calligraphy grey / sand stone
        },
        nearblack: '#0B0B0B',
      },
      fontFamily: {
        // Display headlines / hero — Tajawal (local)
        display: ['Tajawal', 'system-ui', 'sans-serif'],
        // Body / paragraphs / forms — IBM Plex Arabic (local)
        body: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Type scale (design system §8.5) — [size, lineHeight]
        'display-1': ['clamp(2.75rem, 5vw, 4.5rem)', { lineHeight: '1.1', fontWeight: '800' }],
        'display-2': ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.15', fontWeight: '700' }],
        'headline-1': ['clamp(1.625rem, 2.5vw, 2.25rem)', { lineHeight: '1.25', fontWeight: '700' }],
        'headline-2': ['1.375rem', { lineHeight: '1.35', fontWeight: '600' }],
        'body-1': ['1.0625rem', { lineHeight: '1.85' }],
        'body-2': ['0.9375rem', { lineHeight: '1.8' }],
        'label': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      borderRadius: {
        // Architectural / rectilinear — restrained rounding
        brand: '0.5rem',
        'brand-lg': '0.875rem',
      },
      boxShadow: {
        // Brand-tinted (teal-ink) shadows — softer, more premium than neutral black.
        card: '0 1px 2px rgba(6, 44, 51, 0.05), 0 10px 30px -14px rgba(6, 44, 51, 0.22)',
        'card-hover': '0 2px 6px rgba(6, 44, 51, 0.08), 0 22px 48px -18px rgba(6, 44, 51, 0.32)',
        // Warm gold halo — for accent CTAs and luxury hover lifts.
        'gold-glow': '0 8px 30px -10px rgba(212, 174, 106, 0.5)',
        'gold-ring': '0 0 0 1px rgba(212, 174, 106, 0.6), 0 14px 36px -16px rgba(6, 44, 51, 0.3)',
      },
      backgroundImage: {
        // Centered gold hairline — the brand's luxury divider thread.
        'gold-line': 'linear-gradient(90deg, transparent, #D4AE6A, transparent)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
