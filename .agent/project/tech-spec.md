# Technical Spec: ID Multifunctional

## 1. Digital Audit Tool

### Functionality
- **Data Collection:** Multi-step wizard collecting ~20-50 data points about the business.
- **Scoring Logic:** Answers are weighted to calculate a "Maturity Score" across 5 pillars.
- **PDF Generation:**
    - Generates a custom 15-page PDF report.
    - Includes charts (Radar chart of 5 pillars), specific recommendations based on low scores, and a roadmap.
    - **Tech Stack:** `react-pdf` (client-side or API route) or `jspdf`. API route preferred for security and performance.
- **Lead Capture:** User must provide email to receive the full report.
- **Integration:** Send lead data to CRM/Email list (e.g., Mailchimp, HubSpot, or simple Google Sheets for MVP).

### User Flow
1. Landing Page -> "Start Audit"
2. Question 1...N (Progress bar visible)
3. Email Capture (Gate)
4. "Analyzing..." Animation
5. Results Page (Teaser score) + Email sent with PDF attachment.

## 2. Playbook Store

### Functionality
- **Product Listing:** Grid of available playbooks.
- **Purchase Flow:**
    - Click "Buy" -> Stripe Checkout (hosted).
    - Success -> Redirect to "Download" page with unique link or emailed link.
- **Gating:**
    - Secure the download links so they aren't public.
    - Simple MVP: Obfuscated URLs sent via email by Stripe webhook or Zapier.
    - Robust: NextAuth login for customers. **Recommendation: Start with Stripe + Email delivery (MVP).**

## 3. General Requirements
- **Performance:** Maintain the high performance of the current site (no heavy hydration blocking).
- **Animation:** Ensure the Audit tool feels "premium" and "app-like" with smooth transitions between questions.
