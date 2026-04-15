# PLAN.md — Current Project Status

## What's Built
- [x] Home page (= Work page) with Hero, category filter tabs, project grid, Experience, Testimonials, Skills
- [x] About.Me page with editorial narrative + bento grid (6 cards)
- [x] Case study page template at `/work/[slug]` with typed content blocks
- [x] Header nav: Work (→ /), About.Me (→ /about), Contact (→ mailto)
- [x] 9 real projects with cover images and per-project image config
- [x] Category filtering with sliding underline animation + URL deep links
- [x] Loading intro animation
- [x] Real testimonials from Rhea Adhikary and Stefan Vermeul
- [x] Visual design audit saved as `visualaudit.md`
- [x] GORE-TEX renamed to GORE-TEX everywhere (data.ts, UI)
- [x] Data visualizations added (subscriber growth chart, conversion milestones, churn reasons)

## Case Study Status
1. **anti-bias-ai-training** — FULL CONTENT ✓
2. **bridgit** — FULL CONTENT ✓
3. **goretex-accesswear** — FULL CONTENT ✓ (refined with Portfolio Builder UX writing principles)
4. **hp-learning** — FULL CONTENT ✓ REFINED (case-study skill applied: added Habit Loop + Parent Aha Moments section, new "Finding the Parent's Aha Moment" section, strengthened cross-functional delivery, sharpened all narrative, images in `/public/casestudy/hp-learning/`)
5. **hp-scale-ui** — FULL CONTENT ✓ (written from PDF portfolio, card cover in `/public/casestudy/hp-scale-ui/`)
6. **project-sense** — FULL CONTENT ✓ (written from PDF portfolio, real images + video in `/public/casestudy/project-sense/`)
7. **flexible-insurance-gig-workers** — minimal placeholder
8. **loop-strategy** — minimal placeholder
9. **beyond-efficiency** — minimal placeholder

## Resolved Issues
- ~~Case study sections not rendering (HP Learning, Scale UI, SENSE)~~ — **Fixed** by ScrollReveal viewport margin fix (`fix(hp-learning-casestudy-01)`). All sections render correctly. Verified 2026-04-15.

## Architecture Decisions
- Home IS the Work page (flat hierarchy)
- CSS Modules over Tailwind for unique design
- All content centralized in `data.ts`
- Case studies use flexible typed section blocks: `text | image | two-images | quote | metrics | chart`
- No "View all work" button — projects are right there on the homepage

## Image Assets
- `public/casestudy/hp-learning/` — cover.png, home-first-time-user.png, entry-returning-user.png, post-printing-subtopic.png, interstitial.png, card-cover.png
- `public/casestudy/hp-scale-ui/` — card-cover.png
- `public/casestudy/project-sense/` — cover.png, dashboard.png, walkthrough.mp4, motion.mp4, card-cover.png
- `public/casestudy/bridgit/` — multiple UI screenshots (already in place)

## Source Content Used
- PDF portfolio (`/mnt/Portfolio/PDF Portfolio.pdf`) — HP Learning (pages 4–13), Scale UI (pages 14–21), Project SENSE (pages 22–30)
- Real screenshots from `/mnt/Portfolio/HP Learning/` and `/mnt/Portfolio/SENSE/`
- GORE-TEX: refined copy with Portfolio Builder UX writing principles from `C:\Users\zinda\Portfolio-Builder`

## Files to Touch for Remaining Case Studies
- `src/lib/data.ts` — update `caseStudy` object for flexible-insurance, loop-strategy, beyond-efficiency
- `src/app/work/[slug]/page.tsx` — **debug rendering issue first**
- `src/app/work/[slug]/casestudy.module.css` — styles already built
- `public/casestudy/` — add images per project as needed

## Git Workflow
- Work on `dev` branch only
- Merge to `main` only when explicitly told by user
- Last commit: unknown — user needs to commit HP Learning/Scale UI/SENSE additions
