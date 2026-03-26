# CLAUDE.md — Portfolio Site

## Session Start Protocol
1. Read `PLAN.md` for current project status and architecture decisions
2. Read `TODO.md` for pending tasks and progress
3. Check git status to understand where you left off

## Project Overview
Personal portfolio website for Yash Sonwaney — senior product designer & strategist. Editorial, typography-first aesthetic with warm neutrals, two fonts (Scotch Text serif, General Sans sans-serif), one accent color (#C25B3A), generous whitespace.

## Tech Stack
- **Framework:** Next.js 15+ (App Router) with TypeScript
- **Styling:** CSS Modules (NO Tailwind — unique, non-homogenized design)
- **Animations:** Framer Motion (AnimatePresence, useScroll, useTransform, motion.div)
- **Fonts:** Custom local fonts (Scotch Text serif, General Sans)
- **Deployment:** Vercel (main = production, dev = preview)

## Architecture
```
src/
  app/
    page.tsx              — Home (= Work page, shows all projects)
    about/page.tsx        — About.Me page (editorial narrative + bento grid)
    work/[slug]/page.tsx  — Case study pages (dynamic route)
    layout.tsx            — Root layout with fonts, theme
    globals.css           — CSS variables, resets
  components/
    home/                 — FeaturedWork, ProjectCard, Hero, Experience, Testimonials, Skills
    layout/               — Header, Footer, MobileMenu
    ui/                   — Container, ScrollReveal, TextReveal, SmoothScroll, ThemeToggle
  lib/
    data.ts               — ALL site content (projects, case studies, testimonials, about, etc.)
```

## Key Patterns
- **Content lives in `data.ts`** — not hardcoded in components
- **Per-project image config** — each project has `imageConfig: { fit, position, bg? }`
- **Category filtering** — tabs with sliding accent underline, URL deep links (`?category=research`)
- **Case study sections** — typed union: `text | image | two-images | quote | metrics`
- **CSS variables** — `--font-serif`, `--font-sans`, `--accent`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`

## Git Workflow
- **Work on `dev` branch** — never push directly to main
- **Commit after major changes** — user will cue when
- **Only merge to `main` when explicitly told** — main = production

## Context Window Rules
- **Use subagents** for research, file exploration, and isolated implementation tasks
- **Work in small chunks** — finish one feature, commit, start fresh if needed
- **Before context fills up** — create a handoff summary in `HANDOFF.md`
- **Keep PLAN.md and TODO.md updated** as work progresses
- **Don't read the entire codebase** — use targeted reads via PLAN.md file map

## Design Principles
- Editorial, magazine-like layouts
- Typography-driven hierarchy (serif for headings/editorial, sans for body/UI)
- Warm neutral palette with single accent (#C25B3A)
- Generous whitespace, asymmetric grids
- Subtle scroll-based animations (parallax, reveal)
- No emojis unless user requests them
