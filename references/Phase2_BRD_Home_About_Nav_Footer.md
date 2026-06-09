# Phase 2 — Business Requirements (BRD)
**Project:** Ajam / أجام Real Estate Website
**Scope of this document:** Home page, About Us page, site-wide Navigation, site-wide Footer.
**Document type:** Business requirements only — structure, purpose, content responsibility, conversion logic, CTA logic, trust placement.

> This document deliberately contains **no visual design, no color system, no typography, no motion, and no UI mockups**. Those belong to the separate Design System track. This is a business specification.

---

## 0) Constraints carried into Phase 2

- **Language:** Arabic only.
- **Direction:** RTL only.
- **Assets:** Offline-first. Local brand assets only (`Ajam/assets/Brand`). Local fonts only. Local real-estate images only.
- **No** online fonts, **no** CDN, **no** remote images, **no** external asset dependencies.
- **Business framing:** The site is a real-estate **sales platform**, not a brochure. Every page must move the visitor toward a qualified lead.

---

## 1) Primary user segments (recap, drives all decisions below)

| Segment | Core intent | Primary desired action |
|---|---|---|
| Families / end buyers | Find a suitable home, trust the developer | Book a visit / request price |
| Investors | Assess returns and credibility | Reach an advisor / open Investor page |
| Comparison shoppers | Compare projects and status | Browse Projects → shortlist → contact |
| Internal sales team | Receive structured, qualified leads | Receive complete inquiry data |

---

## 2) HOME PAGE — Business Requirements

### 2.1 Page purpose
- Present Ajam clearly as a **Saudi real-estate developer**.
- Act as the **main conversion gateway** of the whole site.
- Offer fast entry points to **Projects**, **Investor content**, and **Contact**.
- Establish **trust** through proof points before asking for action.
- Surface **active opportunities** and **featured projects**.

### 2.2 Home section inventory + purpose + conversion role

| # | Section | Why it exists (purpose) | User intent served | Expected action / CTA | Business outcome |
|---|---|---|---|---|---|
| H1 | Hero / Company intro | Instantly communicate "Saudi real-estate developer" and primary value | First-time orientation | استكشف المشاريع · تحدث إلى مستشار | Establish category + push to discovery |
| H2 | Key value proposition | State why Ajam, in one scannable strip | Reassurance | (implicit) scroll | Reduce bounce, frame credibility |
| H3 | Featured projects | Show the strongest current inventory | Discovery / desire | عرض المشروع · عرض كل المشاريع | Move to Project Detail |
| H4 | Live availability / active opportunities | Create urgency on bookable units | Action-ready buyers | احجز زيارة · اطلب السعر | Direct lead capture |
| H5 | Why Ajam (proof) | Convert interest into trust | Risk reduction | (implicit) | Lower hesitation before contact |
| H6 | Customer journey | Show how easy it is to proceed | Process clarity | (implicit) | Reduce friction perception |
| H7 | Investor entry point | Route investors to ROI content | Investment intent | بوابة المستثمر | Qualify a high-value segment |
| H8 | Trust metrics / proof points | Quantify credibility (projects, units, years, cities) | Validation | (implicit) | Strengthen authority |
| H9 | Contact CTA band | Final conversion push site-wide | Ready to act | واتساب · اتصال · تواصل مع المبيعات | Capture lead |
| H10 | Footer | Persistent navigation + contact + legal | Navigation / reassurance | All footer links | Retain & route |

### 2.3 Home conversion actions (must be reachable)
WhatsApp · Phone · Request price · Book a visit · Explore projects · Talk to sales.

### 2.4 Home conversion logic
- **Primary path:** Home → Projects → Project Detail → Contact.
- **Investor path:** Home → Investor/ROI → Contact (advisor).
- **Fast path:** Home → (sticky WhatsApp/phone) → Contact, available at all times.
- Each featured project links **directly** to its Project Detail; each carries a status-correct CTA.
- The page must offer **at least two** independent routes to contact above the fold equivalent (hero + sticky contact).

### 2.5 Home CTA logic
- **Primary CTA** (strongest): the discovery/action verb relevant to the section (استكشف المشاريع in hero; احجز زيارة / اطلب السعر on available inventory).
- **Secondary CTA:** softer routing (تحدث إلى مستشار, بوابة المستثمر).
- **Persistent CTA:** WhatsApp + Phone always reachable (sticky), independent of scroll position.
- Availability/active-opportunity items must show a **status-appropriate** CTA (see Phase 3 status rules).

### 2.6 Home trust content placement
- Trust is introduced **after** desire (featured projects) and **before** the final contact band:
  order = value prop (H2) → proof teaser within Why Ajam (H5) → quantified metrics (H8) → contact (H9).
- Trust signals: number of delivered projects, total units, years active, cities served, licensing/accreditation references, partner/▫achievement mentions (sourced from About).
- Rationale: visitors convert after seeing inventory + proof, not before.

### 2.7 Home business rules
- Home must **not** read as a static brochure; it must always expose live inventory and a clear next step.
- No section may exist without a defined intent and either a CTA or a trust function.
- Featured + active-opportunity content is **operationally sourced** (see §5 ownership) and must be updatable without redesign.

---

## 3) ABOUT US PAGE — Business Requirements

### 3.1 Page purpose
Build **trust and credibility**, not merely describe the company. About supports the buyer/investor decision by proving Ajam is stable, licensed, and proven.

### 3.2 About section inventory + purpose

| # | Section | Purpose | Intent served | Action / CTA | Outcome |
|---|---|---|---|---|---|
| A1 | Company overview | Explain who Ajam is and category focus | Orientation | (implicit) | Frame credibility |
| A2 | Vision | Show long-term direction | Confidence | (implicit) | Trust in stability |
| A3 | Mission | Explain operating purpose | Alignment | (implicit) | Trust in intent |
| A4 | Values | Communicate principles buyers care about | Reassurance | (implicit) | Emotional trust |
| A5 | Licenses / accreditations | Prove legitimacy (regulatory) | Risk reduction | (implicit) | Reduce perceived risk |
| A6 | Partners | Show ecosystem strength | Validation | (implicit) | Borrowed credibility |
| A7 | Achievements | Quantify success | Validation | (implicit) | Authority |
| A8 | Completed projects / track record | Prove delivery capability | Proof of execution | عرض المشاريع المكتملة | Move to Projects as case studies |
| A9 | Contact / advisor CTA | Convert trust into a lead | Ready to act | تواصل مع المبيعات · واتساب | Capture lead |

### 3.3 About conversion logic
- About is a **trust funnel**, not a dead end: it must route to **Projects** (track record → listing) and to **Contact** (advisor).
- Completed projects shown here behave as **case studies**, linking to their Project Detail in completed/sold state (no booking CTA).
- Investors arriving on About should be offered the **Investor/ROI** route.

### 3.4 About CTA logic
- Primary CTA at the end: تواصل مع المبيعات (or بوابة المستثمر for investor-leaning visitors).
- Track-record items link to their project pages (read-only, completed state).
- Persistent WhatsApp/phone remain available.

### 3.5 About trust content placement
- Sequence credibility from **identity → principles → proof**:
  overview/vision/mission/values (who & why) → licenses/partners (legitimacy) → achievements/track record (evidence) → contact.
- Quantified proof (achievements, completed count) sits **immediately before** the contact CTA to peak trust at the decision moment.

### 3.6 About business rules
- Every claim should be backed by a concrete proof element (number, license, partner, delivered project).
- About must not be purely narrative; it must convert trust into a routing/contact action.

---

## 4) NAVIGATION — Business Requirements

### 4.1 Navigation purpose
Give every segment the **shortest path** to projects, investor content, contact, and downloads, with clear separation of major page groups.

### 4.2 Primary navigation set (and intent)
| Nav item | Routes to | Primary intent served |
|---|---|---|
| الرئيسية (Home) | / | Re-orientation |
| المشاريع (Projects) | /projects | Discovery (commercial core) |
| المستثمرون (Investor/ROI) | /investor | High-value qualification |
| من نحن (About) | /about | Trust |
| مركز التحميل (Downloads) | /downloads | Self-serve material |
| المدوّنة (Blog) | /blog (future, Phase 5) | SEO/content |
| تواصل معنا (Contact) | /contact | Conversion |

### 4.3 Navigation conversion logic
- **Projects** and **Contact** must be reachable from the nav on **every page**, at all viewport sizes.
- A **persistent primary CTA** (تواصل مع المبيعات / واتساب) lives in the nav bar, visually separated from informational links.
- Investor and Downloads are exposed as distinct entry points (not buried) because they serve high-value and self-serve intents respectively.

### 4.4 Navigation CTA logic
- Exactly **one** primary CTA in the header (sales/WhatsApp). Informational links are not styled as CTAs.
- On mobile, the nav collapses but **Projects + Contact + WhatsApp** remain one tap away.

### 4.5 Navigation business rules
- Major page groups are clearly separated: **Company** (Home, About), **Discovery** (Projects), **Conversion** (Contact, Investor, Downloads).
- No LTR spacing assumptions; nav order follows Arabic reading direction (right → left).
- Structure must allow adding future groups (Blog, Legal) without breaking the model.

---

## 5) FOOTER — Business Requirements

### 5.1 Footer purpose
Provide persistent navigation, contact, social, downloads, blog entry, and legal access; act as a **secondary conversion and reassurance layer**.

### 5.2 Footer content groups (required)
| Group | Contents | Purpose |
|---|---|---|
| Quick links | Home, Projects, Investor, About, Contact | Persistent navigation |
| Contact information | Phone, WhatsApp, email, address, working hours | Conversion + reassurance |
| Social channels | Local-icon social links | Brand presence / trust |
| Download center | Company profile, brochures entry | Self-serve material |
| Legal pages | Privacy Policy, Terms & Conditions | Compliance + trust |
| Blog entry point | Articles link (future) | Content/SEO |

### 5.3 Footer conversion logic
- Footer repeats the **primary conversion actions** (WhatsApp, phone, contact) so users who scroll to the bottom can act without scrolling back.
- Download center link captures **self-serve** leads (brochure → contact).

### 5.4 Footer CTA logic
- Footer contains contact actions (WhatsApp/phone/email) presented as direct actions, plus a single "تواصل معنا" route.
- Legal links are low-emphasis but always present.

### 5.5 Footer business rules
- Contact information must be **globally available** via the footer on every page.
- Legal pages must always be reachable from the footer.
- Footer structure must accommodate new links (Blog, new legal docs) without restructuring.

---

## 6) Content ownership map (Home + About + Nav + Footer)

| Content | Operational owner | Update cadence |
|---|---|---|
| Featured / active-opportunity selection (Home) | Sales / Marketing | Frequent |
| Project data shown on Home/About | Projects/Operations | As projects change |
| Trust metrics (projects, units, years, cities) | Marketing (from Operations data) | Periodic |
| Company overview / vision / mission / values | Marketing / Management | Rare |
| Licenses / accreditations | Legal / Compliance | On change |
| Partners / achievements | Marketing | Periodic |
| Contact details (nav/footer) | Sales / Admin | On change |
| Social channels | Marketing | Rare |
| Legal pages (footer) | Legal | On change |

---

## 7) Phase 2 acceptance criteria
- Company story is clear (Home intro + About).
- Navigation is simple; Projects and Contact reachable from every page.
- Trust is established before the contact ask (metrics + proof placement).
- Users can reach projects and contact points quickly (≤ 2 actions from any page).
- Home does not read as a static brochure (live inventory + next step always present).
- All requirements respect Arabic RTL + offline-first asset policy.

### Review gate
Stop after this specification is approved before treating it as the content source for page build-out.
