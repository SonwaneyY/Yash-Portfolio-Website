# Portfolio Content Refinement Tool

An AI-powered content editor specialized in crafting, refining, and polishing copy for UX/Product Design portfolios.

## Overview

This tool acts as an expert UX writer who specializes in portfolio design, helping you create compelling, SEO-optimized content while maintaining clarity, tone, and voice consistency.

## Project Structure

```
Portfolio-Builder/
├── .claude/
│   └── commands/          # Custom slash commands for content refinement
├── context/
│   ├── my-work/          # Your case studies and project work (PDFs, docs)
│   ├── role-models/      # Reference portfolios and examples
│   └── style-guide/      # Brand voice, tone, and style documentation
├── drafts/               # Working area for content being refined
└── outputs/              # Finalized, polished content
```

## Quick Start

### 1. Set Up Your Context

**Add your work:**
- Place your case study PDFs in `context/my-work/`
- Include project descriptions, process documentation, etc.

**Add role model references:**
- Save portfolio examples in `context/role-models/`
- Include URLs in markdown files or screenshots/PDFs

**Define your style:**
- Complete the style guide in `context/style-guide/brand-voice.md`
- Document keywords, tone, target audience

### 2. Use Slash Commands

Available commands for content refinement:

- `/refine-title` - Polish project titles for impact and clarity
- `/write-caption` - Generate descriptive captions for images
- `/polish-about` - Refine About page content
- `/optimize-nav` - Improve navigation labels
- `/seo-optimize` - Add SEO optimization to content

### 3. Workflow

1. Create a draft in the `drafts/` folder
2. Run appropriate slash command with your draft content
3. Review and iterate
4. Save final version to `outputs/`

## Content Types Supported

- Project titles and taglines
- Navigation labels
- Section headers and subheaders
- Image descriptions and captions
- About page content (one-liners to full paragraphs)
- Project case study introductions
- Role and responsibility descriptions
- Process and methodology explanations

## Features

- **SEO-Optimized**: Incorporates relevant keywords naturally
- **Voice Consistency**: Maintains your unique brand voice
- **Industry-Aligned**: References best practices from role model portfolios
- **Context-Aware**: Understands UX/Product/Strategic Design terminology
- **Clarity-Focused**: Prioritizes clear, accessible language

## Next Steps

1. ✅ Set up project structure
2. ⏳ Add your case studies to `context/my-work/`
3. ⏳ Add role model examples to `context/role-models/`
4. ⏳ Complete the style guide template
5. ⏳ Start refining content with slash commands

## Tips

- Keep drafts organized by content type in the `drafts/` folder
- Document what works well in your style guide for future reference
- Iterate on the slash commands to match your workflow
- Version control your style guide as it evolves

---

*Built with Claude Code*
