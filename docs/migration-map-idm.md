# Migration Map: iDM Multifunctional

**Source:** `IDMMuiltifunctional.html`
**Target:** `app/page.tsx`

## Design Tokens

### Colors
| Token | Source Value | Target |
|:---|:---|:---|
| `--c-bg` | `#F5F5F7` | Tailwind config: `colors.c-bg` / `bg-[var(--c-bg)]` |
| `--c-dark` | `#0A0A0A` | Tailwind config: `colors.c-dark` |
| `--c-card` | `#FFFFFF` | Tailwind config: `colors.c-card` |
| `--c-border` | `rgba(0, 0, 0, 0.08)` | CSS Variable: `--c-border` |

### Typography
| Token | Source Font | Target |
|:---|:---|:---|
| `--font-display` | `Space Grotesk` | `next/font/google` -> `var(--font-space-grotesk)` |
| `--font-body` | `Inter` | `next/font/google` -> `var(--font-inter)` |

### Easing
- `--ease-out`: `cubic-bezier(0.16, 1, 0.3, 1)` -> Add to `globals.css` or `tailwind.config.ts`

## Component Architecture

### Page Layout
- `app/page.tsx` (Main entry)
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `components/ui/Loader.tsx` (Migrate preloader)
- `components/ui/NoiseOverlay.tsx`

### Sections
1. **Hero** (`#hero`) -> `components/sections/Hero.tsx`
   - Parallax effects on title and image.
2. **Manifesto** (Intro) -> `components/sections/Manifesto.tsx`
   - Text scrub animation.
3. **The Gap** (`#gap`) -> `components/sections/TheGap.tsx`
   - Animated graph lines.
4. **Method Stack** (`#method`) -> `components/sections/MethodStack.tsx`
   - Sticky card stack with rotation/blur.
5. **Five Pillars** (`#pillars`) -> `components/sections/FivePillars.tsx`
   - Interactive pentagon SVG with hover states.
6. **Value Ladder** (`#ladder`) -> `components/sections/ValueLadder.tsx`
   - Horizontal scroll section.
7. **The Architect** (`#architect`) -> `components/sections/TheArchitect.tsx`
   - Static bio section.
8. **Trust Signals** (`#inverted-section`) -> `components/sections/TrustSignals.tsx`
   - Inverted color scheme, reveal animation.
9. **Contact** (`#contact`) -> `components/sections/Contact.tsx`
   - Form and contact details.

## Animation Inventory (GSAP)

| Section | Animation | Implementation |
|:---|:---|:---|
| **Loader** | Counter up, overlay clip-path, text reveal | `useGSAP` in `Loader.tsx` or `page.tsx` |
| **Hero** | Parallax (y-axis and scale) | `ScrollTrigger` with `scrub: true` |
| **Manifesto** | Scrub-word opacity | `SplitText` logic (manual span wrap) + `ScrollTrigger` |
| **The Gap** | Line width expansion | `ScrollTrigger` `onEnter` callback |
| **Method Stack** | Card rotation, scale, blur | `ScrollTrigger` scrubbing linked to next card's position |
| **Five Pillars** | SVG path draw, node hover states | `ScrollTrigger` for draw, standard event listeners + GSAP for hover |
| **Value Ladder** | Horizontal pin and scroll | `ScrollTrigger` with `pin: true` and `x` translation |
| **Trust Signals** | Staggered fade-up | `gsap.from()` with `ScrollTrigger` |

## Image Strategy
- Remote Images (Unsplash) -> Configure `remotePatterns` in `next.config.ts` to allow `images.unsplash.com`.
- Components -> Use `next/image` with `fill` and `sizes` to replace `<img>`.

## Fragile Patterns to Fix
- `position: sticky` mixed with GSAP might need care with Lenis.
- Inline SVGs -> Extract to minimal components or keep inline if simple.
- Inline styles in HTML -> Convert to Tailwind classes.
- Loader `z-index` -> Ensure it sits above everything.
