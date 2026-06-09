# AJAM Design System Guide for Claude
**Project:** Ajam / أجام Real Estate Website  
**Current phase:** Arabic-only UI design system  
**Direction:** RTL only  
**Asset policy:** Offline-first, local assets only

---

## 1) Design System Objective

This document defines the design system rules for the Ajam website revamp in the current phase.

The system must help Claude generate a consistent interface that is:
- Arabic-first
- RTL-only for now
- premium and calm
- real-estate oriented
- highly readable
- conversion-friendly
- image-led
- performance-focused
- fully offline in fonts and images

This is not a generic UI kit. It is a brand-specific implementation guide built for Ajam’s real-estate identity.

---

## 2) Current Scope Rules

### 2.1 Language and Direction
- Build **Arabic only** in this phase.
- Use **RTL direction everywhere**.
- Do not design for English in this phase.
- Do not mix LTR and RTL layouts in the same system.
- Any English support should be treated as a later extension, not part of the current design system.

### 2.2 Offline-First Rule
- Do **not** use online fonts.
- Do **not** use CDN-hosted assets.
- Do **not** use remote image sources.
- Do **not** use remote SVG icon libraries if they require network loading.
- Every font, logo, icon, image, and illustration needed for implementation must be available locally inside the project assets.

### 2.3 Asset Folder Rule
Use the brand assets from:

`Ajam/assets/Brand`

The system must rely on the local brand files inside this folder.

### 2.4 Required Brand Assets
The starter kit provides three brand logo assets that must be treated as the official logo set:
- Default logo
- Secondary logo
- App icon

Claude should use these local assets only, and not recreate the logo unless explicitly asked.

---

## 3) Brand Essence

Ajam should feel:
- premium, but not loud
- modern, youthful, and calm
- elegant without being overly luxurious
- trustworthy and stable
- real-estate focused
- structured and architectural
- clean and spacious
- Saudi-rooted, but contemporary

The design language should express:
- strong geometry
- crisp visual hierarchy
- controlled contrast
- restrained accent use
- premium clarity
- image-driven storytelling
- clear conversion paths

---

## 4) Brand Source Rules

The official starter kit is the source of truth for:
- logo structure
- logo color set
- brand geometry
- visual tone
- typography choices
- brand shape language
- icon style direction
- image mood

This design system must stay aligned with the source kit and should not invent a conflicting style.

---

## 5) Logo Usage Rules

### 5.1 Logo Variants
Use only these three brand files:
- **Default logo** for standard primary usage
- **Secondary logo** for alternate contrast situations
- **App icon** for small-size and favicon-like use cases

### 5.2 Usage Guidance
- Use the default logo on the main website header and major brand areas.
- Use the secondary logo where contrast or surface color requires it.
- Use the app icon for compact placements, small UI surfaces, and browser/app representations.

### 5.3 Logo Constraints
- Do not stretch or distort the logo.
- Do not rebuild the logo using text or shapes.
- Do not apply effects that damage readability.
- Keep surrounding clear space intact.
- Use the logo as a fixed brand asset, not as a decorative pattern unless explicitly defined.

---

## 6) Color System

The starter kit defines the core palette as:
- Heritage Red
- Teal
- Gold
- Mint Green
- Neutral tones

### 6.1 Core Colors

| Token | Hex | Role |
|---|---:|---|
| `brand.red.heritage` | `#8B2F0E` | Primary brand color |
| `brand.teal` | `#062C33` | Secondary brand color |
| `brand.gold` | `#D4AE6A` | Accent color |
| `brand.mint` | `#0E6E63` | Supporting accent |
| `neutral.calligraphyGrey` | `#6A6964` | Neutral support |
| `neutral.sandStone` | `#6A6964`* | Brand neutral support |
| `neutral.white` | `#FFFFFF` | Light base surface |
| `neutral.nearBlack` | `#0B0B0B` | Dark base surface |

\* The source extraction shows the same hex for Calligraphy Grey and Sand Stone. Keep Sand Stone conceptually in the system, but verify the final production token if the implementation team needs a separate hex value.

### 6.2 Color Meaning
- **Heritage Red** = identity, heritage, strong brand presence
- **Teal** = trust, balance, depth, premium stability
- **Gold** = refined highlight, elegant emphasis, not a dominant color
- **Mint** = freshness, modernity, subtle growth / success tone
- **Neutrals** = readability, calm surfaces, premium spacing

### 6.3 Color Usage Ratio
- Use **neutral surfaces** for most of the UI.
- Use brand colors selectively.
- Keep the interface mostly calm and uncluttered.
- The brand kit indicates a controlled distribution style, not heavy color saturation.

### 6.4 Color Rules
- Use Heritage Red as the strongest identity color.
- Use Teal for dark premium sections and trust areas.
- Use Gold only for small accent moments.
- Use Mint sparingly for supportive interactive states.
- Do not let neutral colors overpower the brand identity.
- Do not use too many saturated tones in one screen.

---

## 7) Recommended Color Shades

Use these shades as implementation-ready tokens.

### Heritage Red
- `brand.red.heritage-900` — `#5F200B`
- `brand.red.heritage-700` — `#8B2F0E`
- `brand.red.heritage-500` — `#A94A26`
- `brand.red.heritage-200` — `#D7A08A`
- `brand.red.heritage-100` — `#F2DDD5`

### Teal
- `brand.teal-900` — `#041C20`
- `brand.teal-700` — `#062C33`
- `brand.teal-500` — `#0B4A54`
- `brand.teal-200` — `#86B1B7`
- `brand.teal-100` — `#DCEAED`

### Gold
- `brand.gold-900` — `#8D6E3A`
- `brand.gold-700` — `#D4AE6A`
- `brand.gold-500` — `#E2C58A`
- `brand.gold-200` — `#F3E4C4`
- `brand.gold-100` — `#FBF4E6`

### Mint
- `brand.mint-900` — `#08463F`
- `brand.mint-700` — `#0E6E63`
- `brand.mint-500` — `#1B8A7D`
- `brand.mint-200` — `#8FD3C8`
- `brand.mint-100` — `#E1F5F2`

### Neutrals
- `neutral.dark-900` — `#101010`
- `neutral.dark-700` — `#2A2A2A`
- `neutral.grey-600` — `#6A6964`
- `neutral.grey-400` — `#A6A39E`
- `neutral.grey-200` — `#DDD8D1`
- `neutral.sand-100` — `#F4EFE8`
- `neutral.white` — `#FFFFFF`

---

## 8) Typography System

The starter kit defines:
- **Arabic Display:** Tajawal
- **Arabic Body:** IBM Plex Arabic

### 8.1 Current Phase Typography Rule
Use only Arabic typography for this phase.

### 8.2 Fonts
| Usage | Font |
|---|---|
| Arabic Display | Tajawal |
| Arabic Body | IBM Plex Arabic |

### 8.3 Offline Font Rule
- Fonts must be stored locally in the project assets.
- Do not load fonts from Google Fonts.
- Do not use CDN font imports.
- Do not reference remote font URLs.
- All font files should be placed inside an offline asset directory such as:
  - `Ajam/assets/Fonts`
  - or the project’s designated local font folder

### 8.4 Typography Behavior
- Display font for headlines and premium hero messages.
- Body font for paragraphs, labels, forms, and project details.
- Keep Arabic text highly readable.
- Keep line heights generous.
- Avoid overly decorative Arabic treatments.
- Use strong typographic hierarchy, not excessive font variety.

### 8.5 Type Scale Suggestion
- `display-1` — hero headline
- `display-2` — major section title
- `headline-1` — page title
- `headline-2` — card title
- `body-1` — main paragraph
- `body-2` — supporting text
- `label` — inputs and tags
- `caption` — status and meta information

---

## 9) RTL Layout Rules

### 9.1 Layout Direction
- Entire interface should be RTL.
- Navigation, hero blocks, cards, forms, and content grids must be RTL-aware.
- Icons and arrows should follow RTL direction naturally.

### 9.2 Alignment Rules
- Primary content should align right by default.
- Headings, paragraphs, and UI labels should follow Arabic reading direction.
- Form fields should be structured for Arabic input behavior.
- Tables and project data should remain easy to scan in RTL.

### 9.3 Component Behavior
- Buttons, chips, breadcrumbs, and navigation should respect RTL spacing logic.
- Any directional iconography must be mirrored where required.
- Do not use LTR spacing assumptions in layouts.

---

## 10) Imagery Strategy

### 10.1 Image Priority
This brand should be image-led.

The user experience must rely on:
- real estate photography
- architectural visuals
- project renders
- location imagery
- lifestyle imagery tied to residential real estate
- trust-building property visuals

### 10.2 Image Rules
- Use related real-estate imagery only.
- Avoid generic corporate stock photography.
- Avoid unrelated lifestyle images.
- Prefer authentic project visuals when available.
- Keep image quality high and composition clean.
- Image choices should reinforce trust and property value.

### 10.3 Offline Image Rule
- Do not use online image URLs.
- Do not hotlink from external libraries.
- Do not use CDN images.
- All visual assets must be stored locally in the project’s asset folders.
- If a new image is needed, it should be downloaded once into the local `Assets` structure and used from there.

### 10.4 Image Organization
Suggested local asset structure:
- `Ajam/assets/Brand` — logos and brand files
- `Ajam/assets/Images/RealEstate` — project and property imagery
- `Ajam/assets/Images/Illustrations` — any custom offline illustrations
- `Ajam/assets/Fonts` — local font files

---

## 11) Brand Shapes & Motifs

The starter kit emphasizes:
- rectilinear geometry
- a logo-inspired arch shape
- solid shape cut logic
- line-art applications
- neat, precise forms
- controlled negative space

### 11.1 Shape Rules
- Use architectural, geometric forms.
- Keep compositions structured.
- Use shape cutouts carefully.
- Avoid random soft blobs.
- Avoid ornamental decoration that does not match the logo logic.

### 11.2 Brand Motif Usage
Use brand motifs for:
- hero backgrounds
- section dividers
- trust blocks
- empty states
- project promotion cards
- investor modules
- download cards

### 11.3 Motif Handling
- Keep motifs subtle.
- Do not overpower content.
- Use them as a supporting brand layer, not a visual distraction.

---

## 12) Line Art & Iconography

The starter kit recommends:
- 1px stroke logic
- neat shapes
- good negative space
- clean iconography

### 12.1 Icon Style
- Stroke icons preferred
- Consistent stroke weight
- Clean geometry
- Calm and premium visual tone

### 12.2 Icon Rules
- Use one icon family throughout the site.
- Keep icons readable at small sizes.
- Avoid playful or overly rounded illustration systems.
- Avoid mixed icon styles.
- Icons should support information, not compete with it.

---

## 13) Backgrounds and Surfaces

### 13.1 Surface Types
- Light surfaces for content-heavy sections
- Dark surfaces for premium emphasis
- Neutral stone-like surfaces for balance

### 13.2 Overlay Guidance
The starter kit explicitly mentions using Sand Stone neutral at **30% opacity** with overlay blend mood on chosen backgrounds.

Use this for:
- hero treatment
- premium feature panels
- branded section overlays
- decorative backgrounds

### 13.3 Surface Behavior
- Keep surfaces clean.
- Keep contrast readable.
- Avoid noisy textures.
- Use layered depth sparingly.

---

## 14) Component Style Rules

### 14.1 Cards
Cards should be:
- clear
- structured
- well spaced
- image-friendly
- data-friendly
- suitable for real estate project information

### 14.2 Buttons
- Primary CTA: strong brand color
- Secondary CTA: outline or neutral variant
- Tertiary CTA: text/link style

### 14.3 Forms
Forms must feel:
- simple
- premium
- trustworthy
- easy to complete on mobile

### 14.4 Status Tags
Use status chips for:
- available
- under construction
- completed
- sold
- booked
- request price

---

## 15) Performance and Asset Optimization Rules

### 15.1 Performance First
Because the site should be fast and easy to maintain:
- use local assets
- avoid remote dependencies
- optimize images before use
- compress assets where possible
- prefer modern image formats when supported locally
- keep asset loading predictable

### 15.2 Offline Loading Strategy
- All fonts should load from local files.
- All images should load from local files.
- Logos should load from local files in the brand folder.
- No UI should depend on internet access for basic rendering.

### 15.3 Implementation Rule for Claude
When Claude generates code:
- it must point to local asset paths only
- it must not import remote font URLs
- it must not reference CDN image libraries
- it must not assume cloud-hosted brand assets

---

## 16) Do / Do Not Summary

### Do
- Use Arabic RTL only in this phase.
- Use brand files from `Ajam/assets/Brand`.
- Use default / secondary / app icon correctly.
- Use real-estate-related images only.
- Store fonts and images locally.
- Keep the interface premium, calm, and structured.

### Do Not
- Do not use online fonts.
- Do not use CDN assets.
- Do not use external image URLs.
- Do not design for LTR in this phase.
- Do not invent a new logo treatment.
- Do not overload the interface with too many colors or effects.

---

## 17) Final Brand Instruction for Claude

Claude should treat this system as the current design source for the Arabic RTL version of Ajam.

The final UI should feel:
- Arabic-first
- real-estate premium
- visually disciplined
- image-led
- offline-ready
- fast
- clean
- modern
- trustworthy

The result should be a website that looks like a serious Saudi real-estate platform and performs well without relying on online assets.
