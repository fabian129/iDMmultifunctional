# Active DNA — ID Multifunctional

> Single source of truth for all visual decisions. Every skill reads from this file.
> Location: `.agent/design/active-dna.md`

---

## 🎨 Color Palette

### Primary Colors
```
Brand Primary:    #0A0A0A
Brand Secondary:  #FFFFFF
Accent:           #0EA5E9 (Sky Blue - inferred from procurement brief, verify)
```

### Neutral Colors
```
Background:  #F5F5F7 (--c-bg)
Foreground:  #0A0A0A (--c-dark)
Muted:       #737373
Border:      rgba(0, 0, 0, 0.08) (--c-border)
Card:        #FFFFFF (--c-card)
```

### Semantic Colors
```
Success:  #22C55E
Warning:  #F59E0B
Error:    #EF4444
Info:     #3B82F6
```

---

## 📝 Typography

### Font Families
```
Heading:  Space Grotesk, sans-serif (--font-display)
Body:     Inter, sans-serif (--font-body)
Mono:     monospace
```

### Type Scale
```
Display:     var(--text-balance) leading-[1.05] tracking-tight
H1:          text-6xl md:text-7xl
H2:          text-5xl md:text-6xl
H3:          text-4xl
H4:          text-2xl
Body Large:  text-lg leading-relaxed
Body:        text-base
Caption:     text-xs uppercase tracking-widest
```

### Font Weights
```
Light:     300
Regular:   400
Medium:    500
```

---

## 📐 Spacing System
*Standard Tailwind scale using rems.*
```
py-32 / py-48 (Section padding)
gap-12 / gap-16 (Grid gap)
```

---

## ✨ Visual Effects

### Shadows
```css
shadow-sm:   0 1px 2px rgba(0, 0, 0, 0.05)
```

### Glassmorphism
```css
backdrop-blur-md
bg-white/5
border-white/20
```

---

## 🎬 Motion DNA

### Intensity Level: Expressive / Luxury

```
Scroll:     Lenis Smooth (inferred from codebase)
Hover:      Scale 1.02, Opacity change, Text stagger
Entrance:   Scrub-linked reveals (Manifesto), Parallax (Hero)
Easing:     cubic-bezier(0.16, 1, 0.3, 1) (--ease-out)
```

---

## 📱 Breakpoints

```
mobile:      640px
tablet:      768px
desktop:     1024px
wide:        1280px
ultra-wide:  1536px
```

---

## 🔑 Signatures

> These define what makes THIS project visually unique.

```
Cards:        Sharp or minimal radius. Clean borders (--c-border).
Buttons:      Pill shape. Uppercase text, tracking-widest, tiny text size (text-xs).
Backgrounds:  Noise Overlay (0.05 opacity).
Layout:       Asymmetric grids, large whitespace, border-t separators between sections.
Icons:        Lucide, fine stoke.
Interaction:  Scrub-linking text reveal (Manifesto).
Type:         Massive display headings vs tiny uppercase captions. High contrast size.
```

---

## 🎯 Design Principles

1.  **Architecture over Decoration:** Structure, lines, and grids define the look, not fancy graphics.
2.  **Precision:** Typography is tight, uppercase tracking is wide, alignment is perfect.
3.  **Contrast:** Massive scale differences between headings and captions.

---

## 📋 Generation Notes

```
Created by:     Agent (extracted from codebase)
Created on:     2026-02-12
Last updated:   2026-02-12
Locked:         Yes
```