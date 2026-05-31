# PAPER-MIGRATION.md — Code → Paper

## Goal
Recreate the Next.js portfolio site as a **Paper design file** (direction: code → Paper).
Paper = paper.design desktop app, driven via Paper MCP.

## STATUS (resume here)
- **Home page**: DONE. Artboard `8M-0`. 1:1 dev styling (exact oklch tokens, Scotch Text serif + General Sans + JetBrains Mono). Real covers via `https://yashsonwaney.com/covers/*`. Project titles rewritten to outcome-focused. Capabilities = 3-col serif. Filter = pills.
- **Case Study — Beyond Efficiency**: PARTIAL. Artboard `M3-0`. Built: hero (`M4-0`) + cover image (`M9-0`). NEXT: meta strip (4 cols role/timeline/methods/team), then ~31 sections, then CTA. Full section list + content = data.ts lines 73-368 (slug `beyond-efficiency`). CS images public at `https://yashsonwaney.com/case-studies/beyond-efficiency/*.png` (verified 200).
- **BLOCKER**: Paper free-tier weekly MCP limit hit (resets next day, or upgrade Paper Pro). No more Paper tool calls until reset.

### Key Paper learnings
- Images: Paper fetches server-side from its cloud → only PUBLIC https URLs work (not paper-asset:// local, not 127.0.0.1). Use `yashsonwaney.com`.
- Scotch Text installed on machine (weights 500/700 only; use 500 for serif). Scotch Display NOT available.
- margin-top DOES render in Paper. Container lane = 1200 wide, 120 inner pad → 960 content (matches dev).
- duplicate_nodes sometimes doesn't persist on first try — verify with get_children, re-run if needed.
- Section order (dev page.tsx): Hero → FeaturedWork → Testimonials → Experience → Skills.

### Remaining pages
- About.Me page (aboutData in data.ts ~line 1472)
- Other 6 case studies
- Experience logos (optional — pull from yashsonwaney.com/logos/ if public)

## Paper MCP — connection
- Registered to user config (`~/.claude.json`), transport HTTP, URL `http://127.0.0.1:29979/mcp`.
- Server runs only while **Paper Desktop app is open with a file**. Port `29979`.
- Tools load at **session start only** — if `mcp__paper__*` tools missing, restart session / reconnect via `/mcp`.

## Target Paper file
- URL: https://app.paper.design/file/01KSRX29CE3MSFJM98JWJCV69S/01K4GP58P8JRM8PGBP0586VKYV
- fileId: `01KSRX29CE3MSFJM98JWJCV69S`
- pageId: `01K4GP58P8JRM8PGBP0586VKYV`

## First moves after restart
1. `mcp__paper__open_file` with fileId above
2. `mcp__paper__get_guide` topic `paper-mcp-instructions` (read before building)
3. `mcp__paper__get_basic_info` — existing artboards / fonts
4. Read site source for content + styles (do NOT rebuild from memory):
   - `src/lib/data.ts` — all content
   - `src/app/globals.css` — CSS variables (colors, fonts)
   - `src/components/home/*` — Hero, FeaturedWork, ProjectCard, Experience, Testimonials, Skills
5. Build with `create_artboard` (desktop 1440x900, height fit-content) + incremental `write_html`

## Order (iterative, review checkpoint each)
1. **Home page** (Hero → filter tabs → project grid → Experience → Testimonials → Skills) ← START HERE
2. About.Me page
3. One case study page

## Design tokens (from CLAUDE.md — verify against globals.css)
- Fonts: Scotch Text (serif, headings), General Sans (sans, body/UI)
- Accent: `#C25B3A`
- Warm neutrals, generous whitespace, editorial/asymmetric
