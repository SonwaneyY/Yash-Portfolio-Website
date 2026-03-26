# Visual Design Audit — Yash Sonwaney Portfolio
**Date:** March 25, 2026
**Pages audited:** Home, Work grid, GORE-TEX case study, About
**Frameworks applied:** Design token audit · Typography scale · Pattern library · Micro-interaction spec · Layout grid · Icon system · Heuristic evaluation (Nielsen)

---

## 1. Design Token Audit

### Colors — PASS with gaps
- 3-level warm neutral backgrounds (#FAFAF7 / #F2F0EB / #E8E5DE) — cohesive, editorial
- 3-level text hierarchy (primary / secondary / tertiary) — well-executed
- Single accent #C25B3A (rust) — strong, memorable
- Dark mode counterparts are well-defined and properly scoped via `[data-theme]`
- **Gap:** No semantic tokens (no `--color-error`, `--color-success`, `--color-warning`)
- **Gap:** No interactive-state tokens (`--color-hover`, `--color-focus`) — hover states use hardcoded `var(--accent)` directly in every component

### Spacing — PASS with leaks
- 8px base scale, named tokens space-1 through space-15
- **Gap:** Non-sequential naming — space-7 (56px), space-9 (72px), space-11 (88px), space-13, space-14 are all missing. Gaps in scale create confusion when choosing between adjacent steps.
- **Leak:** Raw values escape the token system throughout — `13px` (Ticker padding), `10px` (Now list gap), `12px` (experience item gap), `2px`, `4px`, `6px`, `8px` used inline across modules without token equivalents
- **Gap:** No dedicated `--gutter` token for horizontal page padding — components reference `var(--space-3)` directly

### Typography Scale — FAIL
No modular scale defined. 15+ unique font sizes with no mathematical relationship:

| Context | Mobile | Desktop |
|---|---|---|
| Name display | clamp(48px, 10vw, 140px) | 140px max |
| Hero headline | clamp(28px, 4vw, 48px) | 48px |
| About heading | 40px | 56px |
| Case study title | 36px | 52px |
| Metric value / CTA heading | 32px | 40px |
| Section heading | 28px | 32px |
| Testimonial quote | 20px | 22px |
| Project card title | 20px | 20px |
| Body (case study) | 16px | 16px |
| Captions / labels | 11–13px | 11–13px |

- Mix of `px` and `rem` — Ticker uses `0.8rem` while everything else uses `px`
- Three nearly-identical small sizes (11px / 12px / 13px) create visual noise at fine grain
- No line-height tokens — values scattered inline (1.2, 1.25, 1.4, 1.5, 1.6, 1.7, 1.75)
- `17px` experience company size in hero strip is uniquely specific with no clear scale relationship

---

## 2. Pattern Library Consistency

### Cards — INCONSISTENT RADIUS
Four card-like surfaces use four different border-radius values:

| Surface | Radius |
|---|---|
| Project card (work grid) | 8px |
| Metric card | 12px |
| Bento card (About) | 12px |
| Chart section | 16px |

No `--radius-card` token. Each component hardcodes its own value.

### Buttons — UNDERBUILT
Only two button variants exist (primary pill, secondary outlined pill). ThemeToggle uses **inline styles** instead of CSS modules/tokens — the only component in the system that does this.

### Pills / Tags — NEAR-DUPLICATE
- Skills pill: `padding: 6px 16px`, `border-radius: 9999px`
- About toolkit pill: `padding: 6px 14px`, `border-radius: 100px`
Same visual intent, 2px horizontal padding discrepancy, different radius syntax. Should be a shared component.

### Meta Labels — UTILITY UNDERUSED
A global `.meta-label` utility class exists in `globals.css` (11px, 500 weight, 0.08em tracking, uppercase). Despite this, **6+ components** each redeclare the same 4–5 rules locally (`.heroCategory`, `.metaLabel`, `.cardLabel`, `.category`, `.heroCategory`, `.prevNextLabel`). The utility is effectively unused.

### Quote Components — TWO DISTINCT PATTERNS
- Case study quote: left border accent bar, left-aligned, serif italic 22px
- Testimonials: centered, no border, serif italic 20px
Intentional divergence is acceptable but undocumented.

### List Markers — NO SYSTEM
`nowItem::before` uses a custom accent circle (6px, absolute positioned). Standard `<ul>` has `list-style: none` from reset. Every list component invents its own marker — no shared bullet primitive.

---

## 3. Micro-Interaction Spec

### Motion library: Framer Motion + CSS transitions
Central animation config: `src/lib/animations.ts` — good separation of concerns.

### Defined Framer Motion variants
| Variant | Properties | Duration | Easing |
|---|---|---|---|
| `fadeInUp` | opacity + y(20→0) | 600ms | cubic-bezier(0.25, 0.1, 0.25, 1) |
| `fadeIn` | opacity only | 800ms | same |
| `textRevealWord` | y(100%→0%) | 500ms | same |
| `staggerContainer` | — | 80ms stagger | — |
| `staggerContainerWide` | — | 120ms stagger | — |
| `heroSequence` | opacity + y(12) | 600ms | delays: 300/500/700ms |

### CSS transition values in use
- `200ms ease` — nav links, card hover, CTA arrow, back link
- `300ms ease` — bg-color, border-color, theme switch
- `500ms ease` — header intro opacity
- `800ms ease` — name block fade
- `60s linear` — ticker scroll

### Custom cursor (Framer Motion springs)
- Dot: damping 25, stiffness 300, mass 0.5 — scales 3× on interactive elements
- Ring: damping 20, stiffness 150, mass 0.8 — follows with lag
- Touch devices: hidden (correct)

### Strengths
- Single easing curve used across all Framer Motion variants — consistent feel
- Spring physics on cursor — premium detail
- Ticker pauses on hover — thoughtful affordance
- Hero sequence uses progressive delays — natural reading flow

### Issues
- **Critical: No `prefers-reduced-motion` handling anywhere.** All scroll animations, ticker, and cursor fire regardless of accessibility settings. WCAG 2.1 AA failure.
- CSS transitions use `ease` keyword; Framer Motion uses `cubic-bezier(0.25, 0.1, 0.25, 1)` — technically the same curve but no shared token
- Hero sequence delays (300/500/700ms) are hardcoded rather than derived from a stagger system
- No duration tokens defined — 5 different values scattered across CSS files

---

## 4. Layout Grid

### Structure
- Max width: 1200px (Container)
- Content width: 680px (long-form text) — ~65–75 chars/line at 16px, optimal for reading
- Breakpoints: 768px (tablet), 1024px (desktop — FeaturedWork and About bento only)

### Grid patterns
| Section | Mobile | Desktop |
|---|---|---|
| Work grid | 1 col | 12-col asymmetric (7+5 / 5+7 alternating) |
| About bento | 1 col | 12-col asymmetric (same pattern) |
| Meta strip / Metrics / Experience | 2 col | 4 col |
| Two-images | 1 col | 2 col |

### Strengths
- 12-column asymmetric grid creates strong visual rhythm and prevents the "equal thumbnails" trap
- Content width at 680px is well-calibrated
- Both Work grid and About bento share the same 12-col pattern — consistent

### Issues
- **Missing breakpoints:** No 480px (small mobile) or 900px intermediate. Layouts jump directly from single-column to wide desktop with one stop at 768px.
- **Gap reversal:** FeaturedWork uses `gap: space-5` (40px) at mobile but `gap: space-3` (24px) at desktop — usually the inverse of expected behavior (tighter on mobile, more breathing room on desktop)
- **Section rhythm:** Section padding values vary (space-8 / space-10 / space-12 / space-15) with no consistent vertical cadence
- **Hardcoded column spans:** Grid spans are re-declared per component (`grid-column: 1 / 8`, etc.) with no shared mixin or utility

---

## 5. Icon System

### Current state: No system
Icons are scattered inline SVGs, CSS constructs, and unicode characters with no central component or spec.

| Icon | Implementation | Size | Stroke |
|---|---|---|---|
| CTA arrow | Inline SVG | 16×16 | 1.5px round |
| Theme toggle (sun/moon) | Inline SVG in component | 16×16 | 1.5px round |
| Hamburger | 3 CSS `<div>` elements | 24×~14px | — |
| Back navigation | Unicode `←` | — | — |
| Ticker separator dot | CSS pseudo-element | 4×4px | — |
| List marker | CSS pseudo-element | 6×6px | — |

### Issues
- No `<Icon>` component or icon registry
- Hamburger (CSS divs) vs CTA (SVG) — two different construction approaches
- Unicode `←` renders differently across fonts/platforms — should be SVG
- ThemeToggle SVGs live inside the component rather than extracted
- No icon size scale (16 / 20 / 24)
- No stroke-width token or defined construction grid

---

## 6. Heuristic Evaluation (Nielsen's 10)

| # | Heuristic | Score | Notes |
|---|---|---|---|
| 1 | Visibility of system status | 4/5 | Loading progress bar is elegant. No scroll-progress on case studies. |
| 2 | Match between system and real world | 3/5 | "About.Me" breaks convention — standard label is "About". Otherwise clear. |
| 3 | User control | 3/5 | Theme toggle is persistent. "← Back to work" is plain text, not a button affordance. No breadcrumb. |
| 4 | Consistency and standards | 3/5 | Internal patterns mostly consistent. External convention broken by "About.Me". Tab indicator animation slightly slow. |
| 5 | Error prevention | N/A | Portfolio — no user inputs. |
| 6 | Recognition over recall | 4/5 | Navigation always visible. Case study meta strip (Role / Timeline / Tools / Team) is predictable and scannable. |
| 7 | Flexibility and efficiency | 2/5 | No skip-to-content link. No keyboard focus styles defined globally (`:focus-visible` absent from globals.css). Work filter is category-only — no search or tag filter. |
| 8 | Aesthetic and minimalist design | 4/5 | Strong editorial restraint. Warm neutral palette avoids harshness. Photo placeholder on About is a visible gap. Missing cover images on ~5 project cards (GORE-TEX, HP Learning, Project SENSE, Loop). |
| 9 | Error recovery | N/A | — |
| 10 | Help and documentation | N/A | — |

---

## 7. Priority Issues

### Critical
1. **No `prefers-reduced-motion`** — all animations play regardless of OS accessibility settings (WCAG 2.1 AA)
2. **Missing cover images** on ~5 project cards — visible empty states in the work grid
3. **No `:focus-visible` styles** — keyboard navigation has no visible indicator anywhere

### High
4. **No modular type scale** — 15+ ad-hoc sizes, no mathematical relationship, mixed units (px + rem)
5. **`meta-label` utility unused** — 6+ components redeclare the same rules instead of using the global class
6. **No icon system** — mixed construction methods, no registry, unicode arrow in back link
7. **Raw pixel values leak** through spacing system (13px, 10px, 12px, 2px, 4px inline)
8. **ThemeToggle uses inline styles** — only component that bypasses the token/CSS module system

### Medium
9. **Inconsistent card radius** — 4 values (8, 12, 12, 16px) across card-like surfaces with no token
10. **Pill duplication** — Skills vs About toolkit differ by 2px padding, should be one shared component
11. **Spacing scale gaps** — space-7/9/11/13/14 undefined; no `--gutter` token
12. **Missing breakpoints** — 480px small mobile and ~900px intermediate absent
13. **No semantic color tokens** — no error/success/warning/info values

### Low
14. **Gap reversal in Work grid** — mobile gap (40px) larger than desktop (24px)
15. **Hero delays hardcoded** — 300/500/700ms not derived from stagger system
16. **No line-height tokens** — 7 different values defined inline
17. **CSS `ease` vs Framer `cubic-bezier`** — same curve, different syntax, no shared token
18. **"About.Me" nav label** — non-standard casing breaks external conventions

---

## 8. Quick Wins (Low effort, high impact)

1. Add `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }` to globals.css
2. Add `:focus-visible` outline style to globals.css using `var(--accent)`
3. Replace unicode `←` back arrow with the existing SVG arrow pattern (16×16, stroke 1.5)
4. Add a `--radius-card` token set to `12px` and use it across metric cards, bento cards, chart sections
5. Refactor `.heroCategory`, `.metaLabel`, `.cardLabel` etc. to use the existing `.meta-label` global utility
6. Unify pill padding: `6px 16px` everywhere, extract to a shared `.tag` component
7. Add `--duration-fast: 200ms`, `--duration-base: 300ms`, `--duration-slow: 600ms` tokens and replace raw values
8. Fix "About.Me" → "About" in nav
