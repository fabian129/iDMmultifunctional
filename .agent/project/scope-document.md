# Project Scope Document
**Client:** Ivan — ID Multifunctional
**Agency:** Antigravity
**Contract Value:** €1,500 (3 × €500 installments)
**Date:** 2026-02-19

---

## Section 1 — What Has Been Built

The following has already been designed, developed, and is functional in the codebase.
This work was completed as part of the project and exceeds the original scope.

| Deliverable | Detail | Est. Market Value |
|:------------|:-------|:-----------------|
| Full Home Page | 9 sections — Hero (GSAP parallax), Manifesto, The Gap, Method Stack, Five Pillars, Value Ladder (horizontal scroll), The Architect, Trust Signals, Contact. Full scroll animations. | €750 |
| Audit Wizard | Multi-step React component. Progress bar, animated transitions, 1–5 scoring per question, email gate, results screen. | €450 |
| 80 Audit Questions | Written in Swedish across 5 pillars (Strategic, Culture, Process, Financial, Experience). Each with context explanation and playbook reference. | €300 |
| Scoring Engine | Full logic: pillar averages, red flag detection, maturity levels (Chaotic → World Class), 0–100 overall score. | €225 |
| Report Generator | HTML email template with score breakdown, pillar analysis, red flags, action items, CTA to playbooks. | €225 |
| API Route | Audit submission handler. Receives answers, calculates score, generates report. Ready for email service connection. | €75 |
| Playbooks Page | Full grid layout with 5 playbooks, pricing, features, categories. | €300 |
| Design System | CSS tokens, component library (Button, Input, Navbar, Footer, Loader, NoiseOverlay), typography, spacing. | €300 |
| **TOTAL BUILT** | | **€2,625** |

> **Note:** The contracted amount is €1,500. The value of work completed to date is approximately €2,625 at standard market rates (€75/h). This is presented transparently, not as an additional invoice — the contract price will be honoured.

---

## Section 2 — What Is Included in the €1,500 Contract

The following remaining items will be completed to close the contract and deliver a **live, fully functional website.**

| Task | Detail | Est. Hours |
|:-----|:-------|:-----------|
| Brand injection | Midnight Navy applied to Hero + Footer. Gold (#D4AF37) CTA buttons. Playfair Display headings. | 2–3h |
| Email delivery | Connect Resend (free tier) to the existing API route so audit reports are actually emailed to users. | 2h |
| Stripe integration | Wire Stripe Payment Links to playbook buy buttons. *(Ivan provides Stripe links.)* | 1h |
| Deployment | Deploy to Vercel. Custom domain setup. | 1h |
| **TOTAL REMAINING** | | **~6–7h** |

**Deliverable at contract close:**
- Live, deployed website at custom domain
- Home page with full animations and premium brand look
- Working Audit — users complete assessment, receive email with results
- Playbooks store with functional buy buttons (Stripe)

---

## Section 3 — What Is NOT Included in the €1,500 Contract

The following features are **not part of the current agreement** and require a new contract to proceed.

### Phase 2A — Enhanced Product (~€950)

| Feature | Detail | Est. Hours | Est. Cost |
|:--------|:-------|:-----------|:---------|
| Spider/Radar Chart | Branded 5-pillar visualization on audit results page. Dark blue lines, gold fill. | 4h | €300 |
| Segmentation Fork | Home page section that routes Builders → /studio and Whales → /services. | 2h | €150 |
| Services Page | `/services` — 3 Whale-tier products (Strategy Sprint, Expert Audit, CSA Retainer) + application form. | 4h | €300 |
| Copy Editing | Review and finalize all Swedish copy across all pages. | 2–3h | €200 |
| **Subtotal** | | **~12–13h** | **~€950** |

### Phase 2B — Full Revenue OS (~€4,500)

| Feature | Detail | Est. Hours | Est. Cost |
|:--------|:-------|:-----------|:---------|
| PDF Generation | Dynamic 15-page PDF report (Puppeteer/React-PDF). Cover page, spider chart, per-pillar analysis, roadmap. | 20–25h | €1,875 |
| ActiveCampaign Integration | CRM setup, lead capture on all forms, auto-tagging (SEGMENT - WHALE / SEGMENT - BUILDER) based on revenue input. | 8h | €600 |
| Calendly Routing | Revenue threshold logic — <10M SEK redirects to Studio, >20M SEK allows booking. | 4h | €300 |
| Marketing Strategy | LinkedIn content strategy, post-type routing, content calendar. | 8h | €600 |
| Custom Stripe Cart | Full checkout flow, bundle pricing, post-purchase delivery automation. | 8h | €600 |
| **Subtotal** | | **~48–53h** | **~€3,975–4,500** |

---

## Section 4 — Options Going Forward

### Option A — Close the Contract (No additional cost)
Complete the items in Section 2. Deliver live site. Contract fulfilled. Professional close.

**Ivan receives:** A live, premium, functional website with working audit and playbook store.

---

### Option B — Close + Phase 2A (Additional €950)
Complete Section 2 items + the enhanced features in Phase 2A.

**Ivan receives:** Everything in Option A + spider chart results, segmentation fork, services page, polished copy.
**Total project value:** €1,500 + €950 = **€2,450**

---

### Option C — Full Revenue OS (New contract, €4,500–5,500)
All Phase 2A and Phase 2B features. Full automation, PDF engine, CRM, marketing strategy.

**Ivan receives:** A complete digital revenue engine — both customer tracks fully automated.
**Requires:** Signed contract, 50% upfront deposit, 8–12 week timeline.

---

## Section 5 — What Is Required from the Client

Regardless of option chosen, the following must be provided by Ivan before launch:

| Item | Required for | Status |
|:-----|:-------------|:-------|
| Stripe account + payment links for each playbook | Option A, B, C | Not provided |
| Final Swedish copy for all placeholder sections | Option A, B, C | Not provided |
| Ivan's photo (B&W preferred) for The Architect section | Option A, B, C | Not provided |
| Client logos / testimonials for Trust Signals | Option A, B, C | Not provided |
| Custom domain access (DNS) | Option A, B, C | Not confirmed |
| ActiveCampaign account credentials | Option C only | Not provided |
| Calendly account + routing form setup | Option C only | Not provided |

---

*Document prepared by Antigravity — 2026-02-19*
