# Quick Start Guide

Get up and running with your Portfolio Content Refinement Tool in 3 steps.

## Step 1: Add Your Context (10-15 minutes)

### Complete Your Style Guide
Open `context/style-guide/brand-voice.md` and fill it out:
- ✏️ Who you are and your unique perspective
- ✏️ Your target audience
- ✏️ Voice and tone preferences
- ✏️ Keywords you want to rank for
- ✏️ Words you love and words to avoid

**Tip**: Don't overthink it. You can refine this as you go!

### Add Your Work
Place 2-3 of your best case studies in `context/my-work/`:
- PDFs of case studies
- Project descriptions
- Anything that shows your voice and expertise

### Add Role Model Examples
In `context/role-models/`, create markdown files documenting portfolios you admire:
```markdown
# Designer Name
Portfolio URL: https://example.com

## What I Like
- Clear, benefit-driven project titles
- Conversational but professional tone
- Great balance of process and outcomes
```

## Step 2: Try Your First Command (5 minutes)

Let's refine a project title:

1. **In Claude Code, type:**
   ```
   /refine-title
   ```

2. **When prompted, share:**
   - Your current project title
   - Brief context about the project
   - Any requirements (keywords, length, etc.)

3. **Review the options** and pick your favorite!

4. **Optional**: Save the result to `outputs/project-titles/`

## Step 3: Explore Other Commands (ongoing)

### Try These Next:

**Need an image caption?**
```
/write-caption
```
Describe the image and get descriptive caption options.

**Working on your About page?**
```
/polish-about
```
Share your draft bio and get refined versions.

**Optimizing navigation?**
```
/optimize-nav
```
List your current navigation labels and get recommendations.

**Want to improve SEO?**
```
/seo-optimize
```
Share any content and get it optimized for search engines.

## Tips for Success

### 1. Start Small
Don't try to refine everything at once. Start with:
- 1-2 project titles
- Your hero statement (one-liner)
- A few image captions

### 2. Iterate
You can run the same command multiple times:
- Try different angles
- Refine based on feedback
- Adjust your style guide as you learn

### 3. Keep Your Context Updated
As you discover what works:
- Update your style guide with preferences
- Add successful examples to your style guide
- Document patterns that resonate

### 4. Use the Workflow
```
Draft → Refine → Review → Iterate → Finalize
  ↓        ↓        ↓         ↓         ↓
drafts/ → command → edit → command → outputs/
```

## Example Workflow: Refining a Project Title

1. **Create** `drafts/project-titles/healthcare-app.md`:
   ```markdown
   # Project Title Draft

   ## Context
   Mobile app for booking doctor appointments
   Role: Lead product designer
   Outcome: 40% increase in completed bookings

   ## Current Title
   "HealthConnect: Doctor Appointment Booking App"

   ## Requirements
   - Include "healthcare" for SEO
   - Show the impact/outcome
   - Keep under 15 words
   ```

2. **Run** `/refine-title` and share the content

3. **Review** the 3-5 options provided

4. **Pick** your favorite: "Reducing appointment friction: A mobile-first booking experience for healthcare"

5. **Save** to `outputs/project-titles/healthcare-app-final.md`

6. **Update** your portfolio with the new title!

## Common Questions

### "Do I need to complete the style guide perfectly first?"
No! Fill out the basics and refine as you go. The tool gets better as your style guide gets more specific.

### "Can I use commands without adding context files?"
Yes, but results will be more generic. Context makes the outputs uniquely yours.

### "How often should I update my style guide?"
Whenever you discover new preferences. After using commands a few times, you'll notice patterns you like—document them!

### "What if I don't like any of the options?"
That's valuable feedback! Note what doesn't work in the style guide and run the command again with more specific requirements.

## Next Steps

1. ✅ Complete style guide (even just the basics)
2. ⏳ Add 1-2 case studies to context
3. ⏳ Add 1-2 role model examples
4. ⏳ Try `/refine-title` with a real project
5. ⏳ Try `/polish-about` with your bio
6. ⏳ Explore other commands as needed

---

**Ready to start?** Open `context/style-guide/brand-voice.md` and let's define your voice!

**Questions?** Refer to the main README.md for detailed documentation.
