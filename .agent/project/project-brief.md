# Project Brief: ID Multifunctional — Revenue OS™
**Version:** 2.0 (Revenue OS Strategy)
**Supersedes:** v1.0 (Aura Migration brief)

---

## 1. Executive Summary

We are not building a website. We are building a **digital revenue engine**.

The system must handle two distinct customer journeys in parallel, without friction or compromise between them. One buyer needs to feel like they are entering a boardroom. The other needs to feel like they are opening an app.

**Design Philosophy:**
- Authority: "High-End Corporate" (McKinsey, exclusive Architecture firms) — gravitas, precision, trust.
- Speed: "High-Speed SaaS" (Stripe, Linear) — clarity, zero friction, instant value.

Neither compromises the other. They are separated by a segmentation fork on the Home page.

---

## 2. Project Type

**Phase 1 — The Lite OS (Current Goal):**
Design system injection + copy update + on-screen audit results dashboard.
Budget-aligned execution (~€1.5k–€3k). No custom PDF engine, no complex CRM.

**Phase 2 — The Full OS (Future Upsell):**
Automated PDF generation, ActiveCampaign integration, custom Stripe cart, full routing logic.

Strategy: "Inject & Refine" — brand DNA applied to existing approved framework, low-code solutions for Phase 1 functionality.

---

## 3. Business Identity

| Field | Value |
|:------|:------|
| Company | ID Multifunctional |
| Industry | Business Strategy & Operations Consulting |
| Market | Swedish SME (primary), Scandinavian (secondary) |
| Positioning | "Revenue OS™ – operativsystemet för skalbar tillväxt." |
| USP | Dual-track system: automated self-serve tools for Builders + high-touch architecture for Whales |
| Key Language | Revenue OS, Roadmap, Blueprint, Playbook, Audit, Architect, Besiktning |

---

## 4. Target Audience — Two Tracks

### Track A: "The Whale" (Primary Revenue)
| Field | Detail |
|:------|:-------|
| Who | CEO / Owner of companies with 20–200 MSEK revenue |
| Pain | Operational chaos at scale, hidden revenue leakage, no clear exit strategy |
| Want | Transformation, security, "Exit-value", a trusted Architect on site |
| Goal | Book Expert Audit (45,000 SEK) or Transformation Retainer (85,000 SEK+) |
| UX Model | High Touch — slow, deep, qualified. Leads to personal Calendly booking. |
| Gatekeeper | Revenue input on form: if >20 MSEK → allow booking. If <20 MSEK → redirect to Studio. |

### Track B: "The Builder" (Secondary Revenue, High Volume)
| Field | Detail |
|:------|:-------|
| Who | Solo consultants, small companies (<10 MSEK revenue) |
| Pain | Needs tools, templates, structure — fast. No budget for consulting. |
| Want | A proven system they can execute themselves |
| Goal | Buy Playbooks (1,495 SEK) or Digital Audit (4,900 SEK) |
| UX Model | Low Touch — 100% automated e-commerce. Zero human interaction required. |
| Gatekeeper | None. Buy button → Stripe Checkout → instant PDF delivery. |

---

## 5. Offerings & Pricing

| Product | Track | Price | Delivery | Tech |
|:--------|:------|:------|:---------|:-----|
| Playbook 03: Process | Builder | 1,495 SEK | Instant PDF via email | Stripe |
| Onboarding Flight School | Builder | 1,495 SEK | Instant PDF via email | Stripe |
| The Full Suite (bundle) | Builder | TBD (bundle discount) | Instant PDF via email | Stripe |
| Digital Audit / Sales 360 | Builder | 4,900 SEK | On-screen dashboard (Phase 1) / PDF (Phase 2) | Next.js Wizard |
| The Strategy Sprint | Whale | Contact for pricing | 2-day workshop, Done-With-You | Calendly |
| Expert Audit (On-Site) | Whale | 45,000 SEK | Physical on-site review | Calendly (qualified) |
| Interim Chief Sales Architect | Whale | 85,000 SEK+ | 6–12 month retainer | Calendly (qualified) |

---

## 6. Dual-Track Conversion Strategy

**The Fork** — Home page segmentation section routes users explicitly:

```
Visitor → Hero (Audit CTA or Scroll)
          ↓
    Segmentation Section
    ┌──────────────────────────────┐
    │ Left: "The Builder"          │  → /studio (e-commerce)
    │ "Vill du bygga det själv?"   │
    └──────────────────────────────┘
    ┌──────────────────────────────┐
    │ Right: "The Whale"           │  → /services (high-touch)
    │ "Vill du ha en Arkitekt?"    │
    └──────────────────────────────┘
```

**Track A Funnel:**
Home → Services Page → Apply Form (revenue check) → Calendly (if >20M) or Studio redirect (if <20M)

**Track B Funnel:**
Home → Audit Page (free lead magnet) → On-screen results → Upsell to Studio
Home → Studio Page → Stripe Checkout → Instant delivery

**Primary CTA (all pages):** "GÖR EN HÄLSOKOLL (GRATIS)" → Audit page (Gold button)
**Secondary CTA:** "UTFORSKA METODIKEN" → Scroll / Services

---

## 7. Voice & Tone

| Field | Value |
|:------|:------|
| Personality | Strategic, Authoritative, Premium, Precise |
| Register | Professional & Direct. No fluff. |
| Primary Language | Swedish (copy), English (technical UI labels) |
| Key Swedish Phrases | "Sluta gissa. Börja arkitektera.", "Inte en enkät. En besiktning.", "Hälsokontrollen" |
| Avoid | Cliché marketing language, jargon without substance, anything that sounds like a brochure |
| Reference Tone | McKinsey insight reports, not SaaS landing pages |

---

## 8. Design System

> Styling is already approved by the client for the base framework. Apply the Revenue OS brand DNA on top. Do not redesign — inject and refine.

### Color Palette (Strict — Do Not Deviate)

| Name | Hex | Usage |
|:-----|:----|:------|
| Midnight Navy | `#0A192F` | Backgrounds, footer, heavy sections — "The Boardroom" |
| Architectural Gold | `#D4AF37` | Primary CTA buttons and key metrics ONLY — signifies Value |
| Blueprint Cyan | `#00E5FF` | Technical lines, graphs, "The Happy Path" (use low opacity) |
| Paper White | `#F8F9FA` | Background for readable/light sections |
| Pure White | `#FFFFFF` | Text on dark backgrounds |
| Dark Gray | `#333333` | Text on light backgrounds |

### Typography

| Role | Font | Rationale |
|:-----|:-----|:----------|
| H1, H2, H3 | Playfair Display (Classic Serif) | History, Trust, Authority |
| Body / UI | Inter or Roboto (Modern Sans-Serif) | Tech, Clarity, Speed |

### Imagery Rules

**YES:**
- Abstract architectural blueprints
- Pentagon / process models (3D visualizations)
- Ivan in action (B&W or high-contrast photography)
- Data visualizations, spider charts, structural diagrams

**NO:**
- Stock photos of handshakes or happy teams
- Flat illustrations
- Generic "business" imagery

---

## 9. Site Structure

### Page 1: Home — "The Hub"

| # | Section | Goal | Key Content |
|:--|:--------|:-----|:------------|
| 1 | Hero | Capture Attention | "SLUTA GISSA. BÖRJA ARKITEKTERA." / "Revenue OS™" / Gold CTA: "GÖR EN HÄLSOKOLL (GRATIS)" |
| 2 | The Problem | Problem Aware | "The Wisdom Gap" visualization. "Svarta Lådor" — 30% revenue loss from inefficiency. |
| 3 | Manifesto | Philosophy | "Precision before inspiration." — establishes framework thinking |
| 4 | Method Stack | Solution Aware | The 5 Pillars: Purpose, People, Process, Cash, Experience |
| 5 | Five Pillars | Solution Detail | Expanded detail on each pillar |
| 6 | Value Ladder | Offerings | 5 Levels: Blueprints → Audit → Deep Audit → Workshops → Fractional C-Suite |
| 7 | **Segmentation Fork** | Route Users | Left: "The Builder" → Studio / Right: "The Whale" → Services |
| 8 | The Architect | Credibility | Ivan's story, photo (B&W), credentials |
| 9 | Trust Signals | Social Proof | Client logos, testimonials (to be provided) |
| 10 | Contact | Conversion | Inquiry form |

### Page 2: The Audit — "Diagnostisera Din Affär"

| # | Section | Content |
|:--|:--------|:--------|
| 1 | Hero | "DIAGNOSTISERA DIN AFFÄR PÅ 20 MINUTER" / "AI-driven analysis. Hitta flaskhalsarna." / CTA: "STARTA ANALYSEN NU" |
| 2 | Value Prop | "Inte en enkät. En besiktning." — 3 outputs: Sales Maturity Score (0–100), Detailed analysis, Revenue Roadmap |
| 3 | The 5 Pillars | Purpose, People, Process, Cash, Experience — what we measure |
| 4 | Audit Wizard | Multi-step React questionnaire (existing component) |
| 5 | Results Dashboard | On-screen output (Phase 1) — Spider chart, traffic light per pillar, recommendations |
| 6 | CTA | "Boka Konsultation för att Gå Igenom Resultaten" OR upsell to Studio |

### Page 3: Services — "För Armaturen" (The Whale)

| # | Section | Content |
|:--|:--------|:--------|
| 1 | Hero | "SÅ JOBBAR VI TILLSAMMANS" |
| 2 | Product 1 | The Strategy Sprint — 2-day workshop, Done-With-You |
| 3 | Product 2 | Expert Audit — On-Site, physical review (45,000 SEK) |
| 4 | Product 3 | Interim Chief Sales Architect — Retainer 6–12 months (85,000 SEK+) |
| 5 | Gatekeeper | "Apply" button → qualification form → revenue check → Calendly or Studio redirect |

### Page 4: The Studio — "Verktygslådan" (The Builder)

| # | Section | Content |
|:--|:--------|:--------|
| 1 | Header | "VERKTYGSLÅDAN FÖR TILLVÄXT" |
| 2 | Product Grid | Playbook 03: Process (1,495 SEK) / Onboarding Flight School (1,495 SEK) / The Full Suite (bundle) |
| 3 | Checkout | Stripe Payment Link (Phase 1) / Custom Stripe Checkout (Phase 2) |
| 4 | Post-Purchase | Immediate PDF delivery via email |

---

## 10. The Automated Report Spec

### Phase 1: On-Screen Dashboard (MVP)
- Results page rendered in Next.js after wizard completion
- Spider/radar chart — 5 pillars, Blueprint style (dark blue lines, Gold fill)
- Traffic light logic per pillar:
  - Low Score → Red warning → Recommend specific Playbook (link to Studio)
  - High Score → Green status → Recommend consulting (link to Services)
- Overall Sales Maturity Score (0–100)
- "Print this Page" button (browser native PDF save) — acceptable for Builder track
- CTA: "Boka Konsultation för att Gå Igenom Resultaten" → Calendly

### Phase 2: Generated PDF (Full OS)
- Format: 15-page PDF, dynamically generated server-side
- Content:
  - Page 1: Dynamic cover (Client Name, Company, Date)
  - Page 3: Spider Chart (dynamic, Blueprint style)
  - Pages 4–13: Per-pillar analysis
  - Page 14–15: Revenue Roadmap + Next Steps
- Delivery: Email via ActiveCampaign automation

---

## 11. Tech Stack

### Phase 1 (Current)
| Layer | Tech | Notes |
|:------|:-----|:------|
| Frontend | Next.js | Existing stack |
| Audit Engine | Custom React Wizard (existing) | On-screen results output |
| Payments | Stripe Payment Links | Hosted by Stripe, no custom cart |
| Forms | Netlify Forms or Formspree | Standard handlers, no CRM integration |
| Booking | Calendly | Basic embed, no routing logic in Phase 1 |

### Phase 2 (Full OS)
| Layer | Tech | Notes |
|:------|:-----|:------|
| Diagnosis Engine | ScoreApp OR custom Next.js | Must connect to all "Start Audit" CTAs, generate PDF |
| PDF Generation | Server-side (Puppeteer / React-PDF) | Dynamic 15-page report |
| CRM | ActiveCampaign | Tag all leads: `SEGMENT - WHALE` or `SEGMENT - BUILDER` based on revenue input |
| Payments | Stripe (custom checkout) | Full cart + instant PDF delivery |
| Booking | Calendly with Routing Forms | Revenue <10M → redirect to Studio / Revenue >20M → allow booking |

---

## 12. MVP Lite Strategy ("Inject & Refine")

The goal of Phase 1 is to deliver the Revenue OS *experience* at a fraction of the cost.

### Visual Execution
- Apply Midnight Navy to Hero and Footer — establishes "Boardroom" gravitas immediately
- Maintain existing Process/Clean aesthetic (light sections) — client already approved this
- Tune typography: Playfair Display headings, Inter body

### "Smoke & Mirrors" Tech
| Feature | Phase 1 Solution | Cost Saving |
|:--------|:-----------------|:------------|
| Audit PDF | On-screen dashboard + "Print this Page" | Eliminates ~20–30h PDF engine dev |
| Studio checkout | Stripe Payment Links | Eliminates custom cart + checkout flow |
| CRM | Standard form handlers | Eliminates complex API + tagging logic |
| Calendly routing | Basic embed (manual qualification) | Eliminates routing form setup |

### Phased Rollout
- **Phase 1 (Now):** Design polish, copy, brand injection, on-screen audit results
- **Phase 2 (Upsell):** PDF generation, ActiveCampaign, custom cart, Calendly routing

---

## 13. LinkedIn Traffic Integration

| Post Type | Traffic Destination |
|:----------|:--------------------|
| Symptom posts ("Are you losing 30% revenue?") | → Audit page |
| Solution / Case study posts | → Services page or Home |
| Tips / Tools posts | → The Studio |

---

## 14. Existing Assets

| Asset | Status |
|:------|:-------|
| Meeting recording (Ivan) | Available |
| Playbooks (3x) | To be provided |
| Digital Audit questions | To be provided |
| About / Ivan's bio text | To be provided (Victor/Fabian) |
| Ivan's photo | To be provided (B&W preferred) |
| Client logos / testimonials | To be provided |

---

## 15. Open Questions / Action Items

| Item | Owner | Priority |
|:-----|:------|:---------|
| Audit questions + scoring logic (5 pillars) | Ivan | Critical |
| Playbook PDFs (3x) for Studio | Ivan | Critical |
| Client-specific copy (all sections) | Ivan / Victor | Critical |
| Ivan's photo | Ivan | High |
| Client logos / testimonials | Ivan | High |
| Calendly routing form setup (Phase 2) | Fabian | Medium |
| ActiveCampaign account + tagging logic (Phase 2) | Ivan / Fabian | Medium |
| Stripe account + product setup | Ivan | High |
| Revenue threshold for Whale/Builder split (confirm: 10M / 20M?) | Ivan | High |
| ScoreApp vs custom Next.js decision (Phase 2) | Team | Medium |

---

## 16. Assumptions

- The "Digital Sales 360" IS the Digital Audit (Track B product at 4,900 SEK).
- The "iDM Blueprints" ARE the 3 Playbooks (Track B products at 1,495 SEK each).
- Revenue thresholds: <10 MSEK = Builder, >20 MSEK = Whale, 10–20 MSEK = grey zone (route to Studio by default).
- Phase 1 does not require ActiveCampaign, PDF generation, or Calendly routing logic.
- Existing base framework and structural layout are approved — design injection only, no full rebuild.
- Copy is Swedish for primary user-facing text; English acceptable for technical/UI labels.
