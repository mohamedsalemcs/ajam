# Ajam Website Revamp — 5-Phase Execution BRD for Claude
**Project:** Ajam / أجام Real Estate Website Revamp  
**Purpose:** Execute the website redesign in 5 controlled phases, with review gates after each phase before moving to the next phase.  
**Instruction to Claude:** Treat this document as a phased execution plan. Do not merge all phases into one output. Complete one phase, present the output for review, wait for feedback, then continue to the next phase. The project must remain strictly within real estate business scope.

---

## 0) How to Use This Document

This project is intentionally split into 5 phases to reduce risk, improve quality, and allow business review after each stage.

### Operating Rule for Claude
For every phase:
1. Build only the scope of that phase.
2. Show the output clearly.
3. Stop and wait for review.
4. Apply revisions if needed.
5. Only then move to the next phase.

### Important Scope Rule
Do not mix:
- Design system work
- Visual style rules
- Color palette decisions
- Typography rules
- Motion rules
- Branding rules

This document is only about business, structure, content, functionality, conversion, and execution order.

---

## 1) Project Summary

Ajam is a Saudi real estate developer website that must work as:
- A company introduction platform
- A project discovery platform
- A lead generation platform
- An investor decision-support platform
- A sales support platform
- A content/SEO foundation for future growth

The website must help visitors:
- Understand the company
- Browse and compare projects
- Check project status
- View project details
- Request price
- Book a visit
- Contact sales
- Download project materials
- Explore investor value and ROI-related information

---

## 2) Global Business Objectives

### Primary Objectives
- Generate qualified leads.
- Increase trust in the company and projects.
- Make project discovery simple.
- Help sales teams receive structured inquiries.
- Support buyers and investors with clear information.

### Secondary Objectives
- Build a foundation for SEO.
- Make future content expansion easy.
- Reduce repetitive sales questions.
- Allow the company to update projects and materials easily.

---

## 3) Phase 1 — Business Foundation & Information Architecture

### Phase Goal
Build the strategic foundation of the website before any page-level execution. This phase defines the business structure, page hierarchy, user intent mapping, and content responsibilities.

### What Claude Must Produce in This Phase
Claude should produce:
- A complete sitemap.
- A page inventory.
- A business logic map.
- A user intent map.
- A content ownership map.
- A conversion path map.
- A high-level page purpose definition for every page.

### Required Scope

#### 3.1 Sitemap Structure
Minimum pages:
- Home
- About Us
- Projects
- Project Detail Page
- Investor / ROI
- FAQ
- Contact Us
- Download Center
- Blog / Articles
- Privacy Policy
- Terms & Conditions

#### 3.2 Page Purpose Definition
For each page, define:
- Why the page exists
- What user intent it serves
- What action the user should take
- What business outcome it supports

#### 3.3 User Segments
Define the main visitor types:
- Families / end buyers
- Investors
- Comparison shoppers
- Non-Arabic speakers
- Internal sales team

#### 3.4 Conversion Map
Define how each visitor type moves through the site:
- Home → Projects → Project Detail → Contact
- Home → Investor Page → Contact
- Project Detail → Download → Contact
- FAQ → Project Detail → Contact

#### 3.5 Content Ownership Map
For each content type, define who owns it operationally:
- Project data
- Availability
- Brochures
- FAQs
- Contact data
- Investor indicators
- Blog content
- Legal pages

### Deliverable for Review
A business-ready IA and sitemap document that clearly shows the structure and the role of each page.

### Review Gate
Stop after producing the IA and sitemap. Do not start design or detailed page content until this phase is approved.

### Acceptance Criteria
- Every required page is listed.
- User journey is clear.
- Page purpose is defined.
- Business logic is understandable.
- Future pages can be added without breaking structure.

---

## 4) Phase 2 — Core Website Pages (Company + Discovery)

### Phase Goal
Build the essential public-facing pages that explain the company and help users discover projects.

### What Claude Must Produce in This Phase
Claude should produce detailed business requirements for:
- Home page
- About Us page
- Projects listing page
- General navigation and footer logic
- Core trust content placement

### Required Scope

#### 4.1 Home Page Business Requirements
The homepage must:
- Present Ajam clearly as a Saudi real estate developer
- Act as the main conversion gateway
- Offer clear entry points to projects, investor content, and contact
- Highlight trust and company proof points
- Show active opportunities and featured projects

##### Required Homepage Business Blocks
- Company introduction
- Key value proposition
- Featured projects
- Live availability or active opportunities
- Why Ajam
- Customer journey
- Investor entry point
- Trust metrics / proof points
- Contact call-to-action
- Footer navigation

##### Required Homepage Conversion Actions
- WhatsApp
- Phone
- Request price
- Book a visit
- Explore projects
- Talk to sales

#### 4.2 About Us Page Business Requirements
The About page must include:
- Company overview
- Vision
- Mission
- Values
- Licenses / accreditations if available
- Partners
- Achievements
- Completed projects / track record

#### 4.3 Navigation Logic
Navigation must support:
- Fast access to projects
- Fast access to investor content
- Fast access to contact
- Fast access to downloads
- Clear separation of major page groups

#### 4.4 Footer Logic
Footer must include:
- Quick links
- Contact information
- Social channels
- Download center
- Legal pages
- Blog entry point

### Business Rules
- Home page must not feel like a static brochure.
- About page must build trust, not just describe the company.
- All calls to action must support real sales outcomes.

### Deliverable for Review
A full business specification for the Home and About areas, plus site-wide navigation and footer rules.

### Review Gate
Stop after this phase and wait for review.

### Acceptance Criteria
- Company story is clear.
- Navigation is simple.
- Trust is established.
- Users can reach projects and contact points quickly.

---

## 5) Phase 3 — Projects Core & Project Detail System

### Phase Goal
Define the project discovery system and the logic for project pages, which is the most important commercial part of the website.

### What Claude Must Produce in This Phase
Claude should produce:
- Projects listing requirements
- Project card requirements
- Project filtering logic
- Project detail page structure
- Project status rules
- Download and CTA rules for each project state

### Required Scope

#### 5.1 Projects Listing Page
The listing page must:
- Show all projects
- Filter by status
- Filter by city or district
- Filter by unit type if available
- Allow quick comparison across projects

#### 5.2 Project Statuses
Required statuses:
- Available
- Under construction
- Completed / previous project / sold out

#### 5.3 Project Card Requirements
Each project card must include:
- Project image
- Project name
- Location / district
- Status
- Number of units if available
- Area range if available
- Correct CTA for the status

#### 5.4 Project CTA Rules
- Available project: book a visit, request price, contact sales
- Under construction: inquire, view details, consult sales
- Completed / sold out: view as a completed case study, not as a booking target

#### 5.5 Project Detail Page Requirements
Each project page must include:
- Overview
- Gallery
- Location / district
- Status
- Available units
- Unit details
- Area range
- Unit status
- Price or request price
- Floor plans
- PDF download
- Map
- Nearby services
- District information
- Brochure
- WhatsApp
- Call
- Book visit only when eligible

#### 5.6 Business Content Rules for Project Pages
Each project page should clearly communicate:
- What the project is
- Where it is
- Who it is for
- What is available
- How to proceed
- Whether it can be booked

### Deliverable for Review
A detailed project system BRD covering listing behavior, filtering, card logic, detail page structure, and business rules for CTA behavior.

### Review Gate
Stop after this phase and wait for approval before moving to lead generation and investor logic.

### Acceptance Criteria
- Projects are easy to browse.
- Project states are unambiguous.
- Booking logic matches status.
- Project pages support decision-making.

---

## 6) Phase 4 — Conversion Layer, Lead Generation & Investor / ROI

### Phase Goal
Build the full conversion system around contact, lead capture, visit booking, and investor support.

### What Claude Must Produce in This Phase
Claude should produce:
- Contact page requirements
- Form logic
- Lead qualification rules
- WhatsApp / phone CTA behavior
- Download center business rules
- Investor / ROI page logic
- FAQ business structure

### Required Scope

#### 6.1 Contact System
The contact system must support:
- WhatsApp direct contact
- Direct phone call
- Contact form
- Map / location
- Project-specific inquiry

#### 6.2 Contact Form Fields
The form must capture:
- Name
- Mobile number
- Email optional
- Interested project
- Request type
- Message

#### 6.3 Request Types
Required request types:
- Buy
- Invest
- Book a visit
- Request price
- General inquiry

#### 6.4 Lead Qualification Rules
The form should help sales teams understand:
- Which project the lead wants
- What type of request it is
- How urgent the user is
- What contact method is preferred

#### 6.5 Download Center
The download system must support:
- Company profile PDF
- Project brochures
- Floor plans
- Project catalogs
- Project-specific documents

#### 6.6 Investor / ROI Page
This page must support investment-oriented visitors by showing:
- Why invest with Ajam
- Investment indicators
- Expected rental estimate
- Annual return
- Payback period
- Risk summary
- Simple ROI calculator
- Contact an advisor CTA

#### 6.7 ROI Calculator Inputs
Required inputs:
- Project
- Unit type
- Unit price
- Payment period
- Estimated annual rent

#### 6.8 ROI Calculator Outputs
Required outputs:
- Expected annual return
- Payback period
- Simplified summary
- Advisor CTA

#### 6.9 FAQ Page
FAQ must cover:
- Booking
- Payment
- Units
- Guarantees
- Maintenance
- Delivery timing

### Business Rules
- Contact should be available globally.
- Leads should be structured, not generic.
- Investor content should support decision-making.
- FAQ should reduce friction and repetitive sales questions.

### Deliverable for Review
A complete conversion-layer BRD covering contact flows, form logic, download center, investor page, ROI logic, and FAQ structure.

### Review Gate
Stop after this phase and wait for review before moving to SEO and scale.

### Acceptance Criteria
- Contact is easy from anywhere.
- Lead data is structured.
- Investor users get useful decision support.
- Downloads are organized.
- FAQ reduces uncertainty.

---

## 7) Phase 5 — SEO Foundation, Content Expansion & Operational Readiness

### Phase Goal
Prepare the website for long-term growth, search visibility, content expansion, and efficient operations.

### What Claude Must Produce in This Phase
Claude should produce:
- SEO-ready page structure requirements
- Blog / content framework
- Metadata/business content readiness
- Analytics and tracking requirements
- CMS update requirements
- Maintenance logic
- Future scalability rules

### Required Scope

#### 7.1 SEO Foundation
The website must be prepared for:
- Clean page hierarchy
- Keyword-targetable project pages
- Structured internal linking
- Search-friendly content blocks
- Future blog indexing
- Clear page purposes

#### 7.2 Blog / Articles Framework
The blog should support future content such as:
- Best neighborhoods to live in
- Difference between buying and investing
- First-home buying guidance
- Real estate market education

#### 7.3 Analytics and Tracking Readiness
The site should support tracking for:
- Page views
- Project page views
- CTA clicks
- WhatsApp clicks
- Phone clicks
- Form submissions
- Brochure downloads
- Book visit submissions

#### 7.4 CMS / Operational Readiness
The site should support easy updates for:
- Projects
- Availability
- PDFs
- FAQs
- Blog posts
- Contact details
- Investor content where needed

#### 7.5 Maintenance Rules
The platform should allow:
- Easy project status changes
- Easy document replacement
- Content updates by non-developers when possible
- Future English content expansion

### Business Rules
- SEO should support the business, not drive content away from sales goals.
- Analytics must help the team understand performance.
- CMS updates must be simple enough for regular maintenance.

### Deliverable for Review
A final business readiness and scale plan covering SEO, blog structure, analytics, CMS, and operational maintenance.

### Review Gate
Stop after this phase and wait for final review.

### Acceptance Criteria
- Site structure is SEO-ready.
- Content growth is possible.
- Tracking is available.
- Operations are manageable.
- The site can scale without major restructuring.

---

## 8) Final Instruction to Claude

Claude should work in this exact order:
1. Phase 1 — Information Architecture and business foundation
2. Phase 2 — Core company pages
3. Phase 3 — Projects core and project detail system
4. Phase 4 — Conversion layer and investor/ROI
5. Phase 5 — SEO and operational readiness

After each phase:
- Present the output
- Wait for review
- Apply changes if requested
- Continue only after approval

Do not jump ahead.
Do not collapse phases into one response.
Do not mix design system work into this document.

---

## 9) Summary

This document is meant to guide the full business execution of the Ajam website revamp in controlled stages. The project is intentionally phased so the output can be reviewed step by step, reducing risk and improving alignment with business goals.

The website must function as a real estate sales platform, not just a presentation site.
