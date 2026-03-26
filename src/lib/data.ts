// v2 — updated 2026-03-25
export const siteConfig = {
  name: "Yash Sonwaney",
  initials: "YS",
  tagline: "Designing systems that make complex things feel simple.",
  bio: "Senior product designer with 7+ years of experience shaping enterprise tools, service ecosystems, and AI-native workflows. Currently finishing an MS in Strategic Design & Management at Parsons School of Design.",
  email: "yash@email.com",
  linkedin: "https://linkedin.com/in/yashsonwaney",
};

export const experience = [
  { year: "2025", company: "Disruptive Edge", role: "Innovation & Strategy Intern", logo: "/logos/disruptive-edge.jpg" },
  { year: "2026", company: "Parsons ELab", role: "Research Assistant", logo: "/logos/parsons-elab.png" },
  { year: "2020", company: "HP Inc.", role: "Product Designer", logo: "/logos/hp-inc.png" },
  { year: "2017", company: "Accenture", role: "UX Designer", logo: "/logos/accenture.png" },
];

export const projectCategories = ["All", "Product Design", "Strategy", "Research"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export type CaseStudySection =
  | { type: "text"; heading: string; body: string[] }
  | { type: "image"; src: string; alt: string; caption?: string; layout?: "default" | "mobile" }
  | { type: "two-images"; images: { src: string; alt: string; caption?: string }[]; layout?: "default" | "mobile" }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "metrics"; items: { value: string; label: string }[] }
  | { type: "chart"; chartId: "subscriber-growth" | "conversion-milestones" | "churn-reasons"; caption?: string };

export interface CaseStudy {
  role: string;
  timeline: string;
  tools: string[];
  team: string;
  sections: CaseStudySection[];
}


export const projects = [
  {
    slug: "anti-bias-ai-training",
    title: "Anti-bias AI Training Tool for Capital Allocators",
    subtitle: "An experimental training platform for early-stage VC investors that improves venture evaluation and reduces bias in pitch decision-making.",
    category: "AI-ENABLED RESEARCH",
    filterCategory: "Research" as ProjectCategory,
    coverImage: "/covers/anti-bias-ai-training.png",
    imageConfig: { fit: "cover" as const, position: "center 40%" },
    caseStudy: {
      role: "Lead Designer & Researcher",
      timeline: "Sep 2024 — Jan 2025",
      tools: ["Figma", "Next.js", "Claude API", "Supabase"],
      team: "Solo (advised by Parsons faculty)",
      sections: [
        {
          type: "text" as const,
          heading: "72% Changed How They Asked Questions",
          body: [
            "Venture capital has a well-documented bias problem. Research consistently shows that founders from underrepresented backgrounds receive disproportionately less funding — not because their ideas are weaker, but because investors unconsciously evaluate them differently. Existing bias training relies on lectures and self-reflection, which rarely change behavior. I wanted to build something that made bias visible in the investor's own words, in real time.",
            "So I designed and built an AI-powered training tool that catches investors in the act of biased questioning — and helps them understand why, without shame.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "72%", label: "Of investors showed measurable bias shift" },
            { value: "10", label: "Questions analyzed per pitch session" },
            { value: "2", label: "Pitch versions — anonymized vs. non-anonymized" },
            { value: "< 15min", label: "Average session completion time" },
          ],
        },
        {
          type: "text" as const,
          heading: "Research & Discovery",
          body: [
            "I started by studying how bias manifests in investor-founder interactions. Through literature reviews and interviews with angel investors, I identified four key bias patterns: focus shift bias (asking about credentials instead of the product), comparative bias (holding different founders to different standards), microaggressions, and implicit doubt.",
            "The key insight was that bias isn't in what investors think — it's in what they ask. The questions an investor poses reveal their assumptions about a founder's competence, credibility, and potential. If you can make those questions visible and nameable, you have a teachable moment.",
          ],
        },
        {
          type: "image" as const,
          src: "/covers/anti-bias-ai-training.png",
          alt: "Bias analysis dashboard showing per-question scoring",
          caption: "The bias report breaks down each question with a score, reframed alternative, and psychological insight.",
        },
        {
          type: "text" as const,
          heading: "Constraints",
          body: [
            "This was a solo research build under thesis constraints — no dedicated engineering support, no budget for participant incentives, and a hard deadline tied to the academic calendar. Recruiting busy angel investors for a study that explicitly examines their biases required careful framing: this had to feel like a performance tool, not a test.",
            "The hardest design constraint was tonal. The tool needed to surface uncomfortable truths without triggering defensiveness — and do it through AI-generated feedback, where it's easy to feel judged by a machine. Every word in the feedback UI was calibrated for that balance.",
          ],
        },
        {
          type: "text" as const,
          heading: "Design Approach",
          body: [
            "The experiment presents investors with two versions of the same startup pitch — one anonymized (avatar-based, identifying features obscured) and one non-anonymized (real founder visible). After each pitch, investors allocate investment amounts and ask up to 10 questions.",
            "Each question is analyzed in real-time by the Claude API against the four bias patterns. The system generates a bias score, a witty but educational explanation, and a reframed version of the question that achieves the same information-gathering goal without the embedded bias.",
            "The tone was critical to get right. Nobody learns from being shamed. The tool opens with light humor to disarm defensiveness, then shifts to genuine, supportive guidance. Think: a bias coach who roasts you just enough to get your attention, then helps you understand why it matters.",
          ],
        },
        {
          type: "quote" as const,
          text: "The best bias training doesn't tell people they're biased — it shows them, in their own words, in real time.",
        },
        {
          type: "two-images" as const,
          images: [
            { src: "/covers/anti-bias-ai-training.png", alt: "Anonymized pitch view", caption: "Anonymized pitch: avatar-based, identifying features obscured" },
            { src: "/covers/anti-bias-ai-training.png", alt: "Non-anonymized pitch view", caption: "Non-anonymized: same pitch, real founder visible" },
          ],
        },
        {
          type: "text" as const,
          heading: "Technical Implementation",
          body: [
            "Built as a Next.js application with Supabase for session persistence and the Claude API for real-time bias analysis. The prompt engineering was the hardest technical problem — calibrating the model to flag subtle bias patterns without over-flagging legitimate due diligence questions required multiple rounds of testing against transcripts from real investor Q&As.",
            "The system tracks everything: watch duration, investment amounts, question timestamps, and bias scores. This data feeds into a researcher dashboard that exports to CSV for academic analysis, making the tool useful both as a training intervention and a research instrument.",
          ],
        },
        {
          type: "text" as const,
          heading: "Outcome & Reflection",
          body: [
            "Early testing with 15 investors showed that 72% demonstrated measurable changes in questioning patterns between the first and second pitch. The anonymized condition consistently received more product-focused questions; the non-anonymized version triggered more credential-focused and skeptical lines of inquiry — exactly the bias pattern the tool was designed to surface.",
            "This project is being presented as part of my MS thesis at Parsons and is under consideration for use in investor education programs. If I were to extend it, I'd build a longitudinal version that tracks questioning behavior across multiple sessions — the interesting question isn't whether bias shifts during the experiment, but whether it holds afterward.",
          ],
        },
      ],
    },
  },
  {
    slug: "bridgit",
    title: "Bridgit",
    subtitle: "AI-powered assistant designed for specialized education teachers.",
    category: "INCLUSIVE DESIGN RESEARCH",
    filterCategory: "Research" as ProjectCategory,
    coverImage: "/covers/bridgit.png",
    imageConfig: { fit: "cover" as const, position: "center center" },
    caseStudy: {
      role: "UX Researcher & Interaction Designer",
      timeline: "16 weeks — Microsoft EES × Parsons",
      tools: ["Figma", "Miro", "Semi-structured Interviews", "Affinity Mapping", "Participatory Design"],
      team: "4 designers (Microsoft External Engagement Studio × Parsons School of Design)",
      sections: [
        {
          type: "text" as const,
          heading: "No One Was Building for the Specialists",
          body: [
            "Specialized education teachers — ESL instructors, speech pathologists, reading intervention specialists — manage their own schedules across multiple classrooms, write individualized plans for every student, and coordinate through hallway conversations and after-hours texts. No AI tool on the market was built for how they actually work. Bridgit changed that.",
            "Over 16 weeks with Microsoft's External Engagement Studio at Parsons, I worked with a team of four to go from a deliberately open brief — 'How might we empower under-represented communities through AI?' — to a validated product direction grounded in seven interviews, seven literature reviews, and six participatory design sessions across three co-design rounds.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "7", label: "Semi-structured interviews across 5 stakeholder groups" },
            { value: "7", label: "Literature papers reviewed" },
            { value: "6", label: "Co-design sessions across 3 rounds" },
            { value: "3", label: "Major research pivots" },
          ],
        },
        {
          type: "text" as const,
          heading: "Open Brief, Documented Assumptions",
          body: [
            "Microsoft gave us no target user, no domain, no constraints. Our team gravitated toward education — specifically, AI's role in elementary learning. Before any fieldwork, we logged six assumptions: 'AI will replace teachers,' 'Parents are nervous about AI,' 'Learning with AI is better than without.' Most turned out to be incomplete.",
            "We scoped a mixed-methods study: literature review across seven papers, semi-structured interviews with seven participants spanning teachers, specialists, administrators, and parents, and three rounds of co-design workshops. The semi-structured format was deliberate — we didn't yet know which threads would matter most.",
          ],
        },
        {
          type: "text" as const,
          heading: "The Same Bottleneck, Every Interview",
          body: [
            "Seven interviews. Four recurring patterns. Administrative overload: Meher, a speech pathologist, spends more time making her schedule than working with students. Broken parent communication: Olivia described texting, emailing, calling, and sending backpack notes to a parent and still getting no response. Technology adopted without support: Stephanie, 42 years in the classroom, recounted getting Apple computers with no training — 'nobody knew how to turn them on.' And foundational skills being sacrificed to screen time.",
            "Three of seven literature papers had already flagged the same signal: implementation challenges in AI education sit overwhelmingly with teachers — not students, not parents. The interviews confirmed it from every direction.",
          ],
        },
        {
          type: "quote" as const,
          text: "I might need to text, email, put a note in the backpack, and call home and I still won't hear anything.",
          attribution: "Olivia, classroom teacher — on parent communication",
        },
        {
          type: "text" as const,
          heading: "Three Pivots",
          body: [
            "The research took three significant turns. The first came after interviews: we'd started centered on children. Every participant — regardless of role — pointed to teacher burden as the systemic bottleneck. We reframed the entire project around educators. The second pivot happened in co-design Round 2, when Meher and Stephanie revealed that specialist teachers experience every pain point at higher intensity than general classroom teachers — fragmented schedules across multiple classrooms, per-student documentation, and the lowest priority in school-wide scheduling. Competitive analysis confirmed no product addressed their workflow: Magic School, Brisk, and ClassDojo all target general classrooms.",
            "The third pivot shaped the interaction model. Concept validation showed that specialists don't work in isolated tasks — they move through continuous rhythms of sessions, transitions, disruptions, and documentation. A tool offering discrete features would add fragmentation. Bridgit's AI became proactive rather than reactive: surfacing schedule disruptions, drafting session summaries, proposing make-up slots, and generating parent communications without being prompted.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            { src: "/casestudy/bridgit/dashboard.png", alt: "Bridgit dashboard with proactive AI assistant and daily overview", caption: "The dashboard surfaces the day's schedule, student alerts, and AI-generated tasks at a glance." },
            { src: "/casestudy/bridgit/dashboard-absence.png", alt: "Bridgit handling an absent student with AI-suggested rescheduling", caption: "When a student is absent, Bridgit proactively suggests make-up slots — no manual scheduling required." },
          ],
        },
        {
          type: "two-images" as const,
          images: [
            { src: "/casestudy/bridgit/schedule.png", alt: "Bridgit weekly calendar view with color-coded sessions", caption: "Color-coded by student and session type — designed for specialists who need to scan their day in seconds." },
            { src: "/casestudy/bridgit/schedule-ai.png", alt: "AI-suggested session slots for rescheduling", caption: "AI-generated make-up slot recommendations, validated in concept testing as a top-priority feature." },
          ],
        },
        {
          type: "text" as const,
          heading: "From Research to Product",
          body: [
            "The traceability between research and product was explicit. Color-coded scheduling came from concept validation: 'simple UI, color-coding needed — I'm moving between classrooms all day.' Proactive absence handling came from workshop data showing specialist schedules are highly prone to disruption. Structured note import came from Meher's finding that documentation consumes more time than instruction. Specialist-to-teacher messaging was validated as the single highest-value feature across all three co-design rounds.",
            "Nothing in Bridgit exists because it seemed like a good idea. It exists because someone told us they needed it.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            { src: "/casestudy/bridgit/import-notes.png", alt: "Structured note import interface for session documentation", caption: "Structured note import — Meher's documentation burden translated directly into a core feature." },
            { src: "/casestudy/bridgit/personalize.png", alt: "AI-generated personalization strategies per student", caption: "One-click personalization: AI surfaces activity guides and strategies tailored to each student's profile." },
          ],
        },
        {
          type: "two-images" as const,
          images: [
            { src: "/casestudy/bridgit/session-page.png", alt: "Session page with AI-drafted session summary", caption: "AI drafts the session summary — the specialist reviews and approves, rather than writing from scratch." },
            { src: "/casestudy/bridgit/bulk-sending.png", alt: "AI-drafted parent communication templates for bulk sending", caption: "Parent communication templates drafted by AI — addressing Olivia's multi-channel outreach problem directly." },
          ],
        },
        {
          type: "text" as const,
          heading: "Reflection",
          body: [
            "Documenting assumptions before fieldwork created accountability — we couldn't rationalize around findings that contradicted our starting point. Shifting from generative to participatory methods at the right moment maintained momentum and gave participants ownership of the solution direction.",
            "What I'd strengthen: observational shadowing to watch specialists through their actual day, longer usability testing cycles in-context, and time-motion baselines to quantify administrative burden in hours rather than themes. The qualitative evidence was strong. The quantitative case had room to grow.",
          ],
        },
      ],
    },
  },
  {
    slug: "goretex-accesswear",
    title: "GORE-TEX Accesswear",
    subtitle: "End-to-end service design and growth strategy for a circular outerwear subscription — from 1 subscriber to 120 and a 10/10 NPS in 9 months.",
    category: "GROWTH DESIGN · SERVICE DESIGN",
    filterCategory: "Strategy" as ProjectCategory,
    coverImage: "/covers/goretex-accesswear.png",
    imageConfig: { fit: "cover" as const, position: "center 35%" },
    caseStudy: {
      role: "Design & Growth Strategist",
      timeline: "May — Dec 2025 (9 months)",
      tools: ["Shopify", "Figma", "Stripe", "Supercycle", "Meta Ads", "Mailchimp", "Discord", "Instagram"],
      team: "Lean startup team at Disruptive Edge × GORE-TEX Innovation",
      sections: [
        {
          type: "text" as const,
          heading: "Overview",
          body: [
            "GORE-TEX AccessWear is a circular outerwear subscription — $50/month for seasonal access to premium jackets across 10+ brands. I joined as the sole designer and growth strategist two weeks after launch, when the platform had 200 waitlisted users but fewer than 5 paying subscribers. Over nine months, I redesigned the end-to-end service experience and built the growth infrastructure that scaled the business to 120+ active subscribers, a 10/10 NPS, and validated product-market fit.",
            "GORE-TEX partnered with Disruptive Edge to test a fundamentally different business model — shifting from one-time, $600\u2013800 jacket purchases to recurring access. The platform ran as a Wizard of Oz pilot: manually operated throughout, designed to validate demand patterns and user behavior before committing to scaled infrastructure.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "1\u2192120+", label: "Active subscribers in 9 months" },
            { value: "5,500+", label: "Instagram followers from ~200" },
            { value: "10/10", label: "Net Promoter Score" },
            { value: "106+", label: "User interviews conducted" },
          ],
        },
        {
          type: "text" as const,
          heading: "Problem Framing",
          body: [
            "Two weeks after launch, the conversion funnel told a clear story: a 4.7% waitlist-to-subscriber rate against a 10% target, and 65% of homepage visitors dropping off above the fold. The platform ran on a fragmented Shopify\u2013Stripe\u2013customer portal stack with multiple broken handoffs in the checkout flow.",
            "Initial usability testing identified two primary failure modes: absent trust signals (no social proof, no founder narrative, no product reviews) and a disorienting browse-to-subscribe journey. Users weren\u2019t rejecting the subscription model \u2014 they were losing confidence mid-flow and dropping off.",
          ],
        },
        {
          type: "chart" as const,
          chartId: "conversion-milestones" as const,
          caption: "Conversion rate as % of the original 200-person waitlist — before and after each phase of work.",
        },
                {
          type: "text" as const,
          heading: "Research & Synthesis",
          body: [
            "Sixteen moderated usability sessions in month one surfaced three failure patterns that cut across participant types.",
            "Trust signals were absent. The site lacked social proof, product reviews, and a recognizable brand voice. Users described it as anonymous — they wanted to know who was behind the service before committing a recurring payment.",
            "The browse-to-subscribe journey was fragmented. No activity-based filtering, and checkout required navigating three disconnected systems. Users lost orientation mid-flow and defaulted to exit rather than working through the confusion.",
            "Seasonality was a structural constraint to design around, not just a timing problem. A late-spring launch meant summer was the wrong context to convert for winter jackets. The research reframed this as an opportunity: use low-demand months to stabilize the UX and build the audience — so the system was primed when seasonal intent arrived.",
          ],
        },
        {
          type: "text" as const,
          heading: "Constraints",
          body: [
            "There was no dedicated engineering — I owned the full platform stack. Every Shopify change, checkout fix, and product upload was mine to execute alongside the design work. Every order involved manual procurement, inspection, packaging, and shipping. I built the inventory tracking system from scratch mid-project.",
            "The catalog spanned 10+ outdoor brands — Mountain Hardwear, Patagonia, Burton, Rab, 686, GOREWEAR, 7mesh, Mammut, Rapha, Sitka — each with their own product cycles, asset specs, and approval workflows. Operating without a fulfillment system was a deliberate cost-minimization trade-off for the validation stage, not an oversight.",
          ],
        },
        {
          type: "text" as const,
          heading: "Design Strategy",
          body: [
            "I structured the work as a three-phase strategy, sequenced around the product\u2019s seasonal demand curve rather than arbitrary sprint cycles.",
            "Phase 1 \u2014 Stabilize (May\u2013July): Fix the broken conversion funnel, establish trust signals, and run low-investment acquisition experiments to identify which channels and messages deserved deeper investment.",
            "Phase 2 \u2014 Build (August\u2013September): With a stable core flow, shift to systematic value proposition testing across paid and organic channels — and build the lifecycle email infrastructure needed for retention before peak season.",
            "Phase 3 \u2014 Convert (October\u2013December): Activate the full conversion system as seasonal demand rose — brand co-marketing, community launch, and structured outbound across warm channels.",
          ],
        },
        {
          type: "chart" as const,
          chartId: "subscriber-growth" as const,
          caption: "Active subscriber growth across three design phases, May — December 2025.",
        },
                {
          type: "image" as const,
          src: "/covers/goretex-accesswear.png",
          alt: "GORE-TEX AccessWear platform showing the rental subscription experience",
          caption: "The AccessWear platform — manually operated throughout the pilot to validate demand patterns and user behavior before committing to scaled infrastructure.",
        },
        {
          type: "text" as const,
          heading: "Phase 1 \u2014 UX Stabilization",
          body: [
            "My first sprint targeted the homepage and checkout flow. I redesigned the above-the-fold section to address the 65% drop-off, restructured the browse experience with activity-based filters, and repaired the Shopify\u2013Stripe integration to close the broken checkout handoffs. I launched a lead capture modal that generated 15 sign-ups in its first weekend.",
            "To address the trust deficit, I sourced product reviews from brand partners and added a founder narrative section. Sign-ups climbed from 9 to 17 within the first sprint cycle. A second round of 16 usability sessions surfaced the next barrier: pricing comprehension. Users needed MSRP comparisons alongside the subscription price to internalize the value proposition.",
          ],
        },
        {
          type: "text" as const,
          heading: "Phase 2 \u2014 Messaging & Lifecycle Infrastructure",
          body: [
            "With a stable conversion funnel, I turned to the top of the funnel — specifically, which value propositions moved people. I designed and launched 18 awareness ads testing distinct framings: try-before-you-buy, activity-specific gear, multi-brand access, sustainability, and travel use cases. Try-before-you-buy consistently outperformed, with CTRs reaching 6.56% and CPCs as low as $0.24.",
            "In parallel, I built a 14-touchpoint email lifecycle covering non-user nurture, subscriber onboarding, engagement, and churn recovery. The mailing list reached 740 subscribers. By the end of Phase 2, I had a clear segmentation of high-intent users, a validated messaging hierarchy, and a defined channel strategy — everything needed to run a full conversion push in peak season.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "18", label: "Awareness ads across distinct value props" },
            { value: "6.56%", label: "Best ad click-through rate" },
            { value: "$0.24", label: "Best cost per click" },
            { value: "14", label: "Email lifecycle touchpoints built" },
          ],
        },
        {
          type: "text" as const,
          heading: "Phase 3 \u2014 Conversion & Community",
          body: [
            "October marked the shift from awareness to conversion. I activated brand co-marketing with 7mesh, GOREWEAR, and Mountain Hardwear — each campaign drove 90+ new followers. Outreach across 500+ accounts per week generated 1,500+ conversations at a 10% response rate.",
            "I designed and launched the AccessWear Insider Program on Discord — a structured community with a contribution-based rewards system where high-engagement members could earn access to $700\u2013800 jackets. The community became the project\u2019s most valuable feedback loop: accelerating product learning and reducing churn through peer accountability.",
            "Growth compounded through the quarter: 79 sign-ups and 3,000+ Instagram followers by mid-October, 120+ active subscribers by December. The platform reached operational capacity at 85\u2013100 concurrent users — a ceiling set by the manual fulfillment model, not by product demand.",
          ],
        },
        {
          type: "text" as const,
          heading: "Outcomes",
          body: [
            "The pilot validated the core hypothesis: premium outdoor consumers will engage with a subscription access model when the service experience is frictionless and the product variety is compelling. Active subscribers gave a 10/10 NPS, and organic community behavior — members sharing trip photos, recruiting peers, requesting new gear categories — provided qualitative signal that went well beyond the headline metrics.",
            "Churn data deepened the picture. The primary drivers for leaving were limited jacket variety (80%) and seasonal timing (20%) — inventory and catalog constraints, not dissatisfaction with the model. When asked what would bring them back, 80% cited broader selection and 60% cited access to additional gear categories. Both are solvable with scale.",
            "Brand partner engagement strengthened independently of subscriber growth: Mountain Hardwear moved to a collaborative marketing arrangement, GOREWEAR co-created a giveaway campaign, and leadership from Mammut, Burton, and Mountain Hardwear requested follow-up sessions. Rent the Runway co-founder Jenny Fleiss was brought in as a consultant on financial modeling.",
          ],
        },
        {
          type: "chart" as const,
          chartId: "churn-reasons" as const,
          caption: "Exit reasons cluster around inventory constraints and seasonal timing — not dissatisfaction with the subscription model itself.",
        },
                {
          type: "metrics" as const,
          items: [
            { value: "12,000%", label: "Subscriber growth over 9 months" },
            { value: "920+", label: "Mailing list subscribers" },
            { value: "35+", label: "Active Discord community members" },
            { value: "7", label: "Brand partner collab campaigns" },
          ],
        },
        {
          type: "text" as const,
          heading: "Retrospective",
          body: [
            "The email lifecycle I built in September should have been live from July — the delay cost conversions during the months when trust-building mattered most. The Supercycle integration, which would have resolved the fragmented checkout experience, was deprioritized for too long. The Discord community, which became the most valuable feedback mechanism in the project, should have been part of the initial service design — not a month-four addition.",
            "The underlying pattern: in zero-to-one product work, retention and feedback infrastructure almost always need to come before acquisition. Building the loop before scaling the funnel consistently delivers stronger outcomes than the reverse.",
          ],
        },
      ],
    },
  },
  {
    slug: "hp-learning",
    title: "HP Learning",
    subtitle: "B2C EdTech platform backed by strategic educational partnerships — connecting classrooms to living rooms through printable, hands-on learning.",
    category: "PRODUCT DESIGN · EDTECH",
    filterCategory: "Product Design" as ProjectCategory,
    coverImage: "/covers/hp-learning.png",
    imageConfig: { fit: "contain" as const, position: "center center", bg: "#f0ede8" },
    caseStudy: {
      role: "Interaction Designer",
      timeline: "2021 — 2022 (1 year)",
      tools: ["Figma", "FigJam", "Miro", "UserTesting", "Analytics"],
      team: "Interaction Designer, Visual Designer, Design Team Lead, Content Strategy",
      sections: [
        {
          type: "text" as const,
          heading: "Overview",
          body: [
            "HP Learning is a premium supplemental learning platform for pre-primary and primary school students, backed by strategic educational partnerships. HP already had a presence in millions of homes through its printers. The bet: use that footprint to drive educational engagement — and in turn, drive print revenue.",
            "I envisioned the initial concept for an internal leadership showcase, leveraging the power of video to make learning more accessible for kids. That concept earned executive buy-in and kicked off the project. As the sole Interaction Designer, I owned the full design process end-to-end — from discovery and research through design delivery, dev review cycles, and implementation validation.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "2M", label: "Printed pages generated" },
            { value: "60K", label: "Active users on the platform" },
            { value: "16", label: "EdTech platforms benchmarked" },
            { value: "2021", label: "Pilot — Russia & Turkey" },
          ],
        },
        {
          type: "text" as const,
          heading: "The Challenge",
          body: [
            "HP Learning had a structural challenge most EdTech products don't face: the person paying (parent), the person assigning (teacher), and the person learning (child) are three distinct actors with entirely different needs and motivations. The Parent and The Teacher are the design center archetypes — The Child is inexplicit in decision-making, but absolutely central to the experience.",
            "The platform also needed to serve two business goals simultaneously: drive educational engagement meaningful enough to earn parent trust, and generate enough print activity to justify HP's investment in the product. Every design decision had to move both needles at once.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-learning/home-first-time-user.png",
          alt: "HP Learning home screen — first-time user with grade filter and personalised top picks",
          caption: "Home screen: grade-filtered content, personalised top picks, and structured discovery across mobile and desktop.",
          layout: "mobile" as const,
        },
        {
          type: "text" as const,
          heading: "Research",
          body: [
            "The global EdTech market was worth US$185.20Bn. Major players — Khan Academy, Toppr, IXL, Byju's, Education.com, Outschool — had launched digital solutions with real, measurable impact. Before designing a single screen, I conducted an in-depth analysis of 16 platforms, mapping existing user flows, interaction patterns, and content systems.",
            "Collaborating with the Research and Marketing teams, I studied consumer psychology theories around value propositions, persuasion, and activation. The central question wasn't just 'what do children need?' — it was 'what creates a habit?' I mapped HP Learning's full activation journey using habit loop theory: Sign Up → Setup Moment → Aha Moment → Habit Moment → Engaged.",
          ],
        },
        {
          type: "text" as const,
          heading: "Habit Loop",
          body: [
            "Activation mapping meant identifying the exact moments that would turn a curious new user into a committed one. I mapped 10 distinct Aha Moments for parents — from finding the right content by their child's age, grade, and activity type, to watching their child score well on a printed exercise, to having the platform surface teacher recommendations before the parent even thought to ask. The product needed to feel less like a utility and more like an educational partner.",
            "Each Aha Moment anchored to a specific trigger. I mapped three layers: habits (regular content consumption, social sharing, progress tracking), triggers (notifications, rewards one step away, school schedule alignment, new content drops), and low-effort actions (open printables, resume learning, mark activity complete). Every design decision downstream traced back to this framework — making sure the product didn't just attract users, but held them.",
          ],
        },
        {
          type: "text" as const,
          heading: "User Journey",
          body: [
            "The hero scenario tied all three actors together. A child goes to school and learns theoretical principles from a teacher. After class, the teacher selects exercises aligned with the day's curriculum and assigns them through HP Learning. The parent finds the homework, prints the activity, and monitors progress. The child revises school-learnt knowledge in a fun, physical, interactive way.",
            "This loop — school theory to home practice through print — was the flywheel the entire product was built around. It gave teachers a lightweight assignment tool, parents a purposeful reason to print, and children a tactile learning experience that extended the classroom.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-learning/entry-returning-user.png",
          alt: "HP Learning entry point and returning user flow — Engagement Point to Print Exercise",
          caption: "Core user flow: Engagement Point → Choose Topic → Video Lesson → Print Exercise. Designed for the first-time visitor and the habitual learner equally.",
          layout: "mobile" as const,
        },
        {
          type: "text" as const,
          heading: "Design & Delivery",
          body: [
            "I led strategic workshops in FigJam and Miro to build alignment across adjacent partners — Development Lead, Product Owner (Marketing), Legal & Security Council, and the Analytics Dev Team. We iterated hero user flows end-to-end, annotating directly in Figma with development notes, copy review flags, and analytics instrumentation points.",
            "Every screen had to serve both the child (playful, low-friction) and the parent (efficient, informative) simultaneously. The experience was also architected for outward compatibility — built to integrate with HP Smart app, HP Store rewards, and social sharing from the ground up, not retrofitted later.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-learning/post-printing-subtopic.png",
          alt: "Post-printing sub-topic screen — learning outcome, Print Activity CTA, Mark as Complete, Up Next",
          caption: "Post-printing screen: learning outcome, Print Activity, Mark as Complete, Up Next — each state closing one loop and surfacing the next action.",
          layout: "mobile" as const,
        },
        {
          type: "text" as const,
          heading: "The Interstitial",
          body: [
            "Most EdTech products leave the space between lessons undesigned. I treated it as a product moment. The interstitial reinforced progress, surfaced the next learning step, and gave parents a passive visibility window into their child's activity — all without interrupting the flow.",
            "The 'Mark as Complete' mechanic was deliberately low-effort so children could self-report progress without parental intervention. This gave parents a quiet signal of completion and immediately served the next action — closing the habit loop at the exact point where learner drop-off typically spikes.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-learning/interstitial.png",
          alt: "HP Learning interstitial screen — progress reinforcement and next lesson prompt",
          caption: "Interstitial screen: progress signal, Up Next prompt, and Mark as Complete — designed to close one habit loop and open the next.",
          layout: "mobile" as const,
        },
        {
          type: "quote" as const,
          text: "The most successful EdTech product isn't the one with the most content — it's the one that builds the right habit.",
        },
        {
          type: "text" as const,
          heading: "Impact",
          body: [
            "The pilot launched in Russia and Turkey in 2021. My contributions directly drove 2M printed pages across 60K users. Every printed exercise wasn't just educational engagement — it was a tangible signal of print revenue for HP's core business. The redesigned onboarding and activation flow, built on the habit loop framework, measurably improved engagement metrics across the pilot markets.",
            "The experience was architected to integrate with HP Smart app, HP Store rewards, and HP ecosystem products — positioning HP Learning not just as an EdTech play, but as a long-term flywheel for HP's broader consumer business. The pilot proved the concept both educationally and commercially; the architecture was ready to scale.",
          ],
        },
        {
          type: "text" as const,
          heading: "Reflection",
          body: [
            "The sharpest shift in my thinking on this project was moving from 'what features does an EdTech platform need?' to 'what moment makes a parent come back tomorrow?' Framing the design problem around habit formation — not content completeness — changed every decision we made downstream, from the activation flow to the interstitial mechanic to how we sequenced the teacher-parent-child journey.",
            "If I were to revisit it, I'd invest more research time with children directly. The child is the inexplicit user — central to the experience but invisible in our design process. I'd also A/B test the interstitial variations rather than shipping one direction, and build teacher-side tools with the same depth as the parent experience. The teacher journey was the least designed leg of the three-actor loop, and that's where I see the most untapped retention leverage.",
          ],
        },
      ],
    },
  },
  {
    slug: "hp-scale-ui",
    title: "HP: Scale UI",
    subtitle: "Designing & shipping printer control panel UX for all HP Printers across market segments & user archetypes.",
    category: "PRODUCT DESIGN · DESIGN SYSTEMS",
    filterCategory: "Product Design" as ProjectCategory,
    coverImage: "/covers/hp-scale-ui.png",
    imageConfig: { fit: "contain" as const, position: "center center", bg: "#e8e8e8" },
    caseStudy: {
      role: "Interaction Designer",
      timeline: "2020 — 2024",
      tools: ["Figma", "Axure", "FigJam", "Scale UI Toolkit", "Jira"],
      team: "Visual Design, Product CX Architects, UX Writing, Cross-segment design teams",
      sections: [
        {
          type: "text" as const,
          heading: "Shipped to 56 Million Customers. On a 2.7″ Screen.",
          body: [
            "Scale UI is HP's proprietary design system and shared codebase for printer control panels — ensuring design consistency and reducing time to market by reusing code across platforms. The first product built on Scale UI shipped globally as the HP Color LaserJet Pro 4310dw. I shipped multiple printer programs for HP's 56 million customers worldwide.",
            "As Interaction Designer, I owned design delivery for three key use cases: Print from USB/Network/Source experience, Contacts Management app, and Active Jobs app (Print/Copy/Scan/Fax). My collaborators spanned Visual Design, Product CX Architects, UX Writing teams, and cross-segment design teams. Partners included Scale UI FW Developers, Product Development Firmware, Product Managers, and Design Leadership.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "56M", label: "HP customers reached worldwide" },
            { value: "4", label: "Market segments — Home, SoHo, SMB, Enterprise" },
            { value: "4", label: "Display sizes from 21\" to 2.7\"" },
            { value: "4★", label: "Rated on PC Mag, Amazon, Digital Trends" },
          ],
        },
        {
          type: "text" as const,
          heading: "The Constraints Were the Design",
          body: [
            "Scale UI presented four compounding challenges that don't exist in typical software design. First, a myriad of archetypes: printers are used by multiple personas in many contexts — from Ella (Home Consumer) to Joe (SMB IT Admin) to Wen (Small Business Owner). My design files had to deliver a smooth experience for all of them. Second, wide range responsive: printer program teams can use any display size, so every design had to work responsively across XL-L (21\" to 8\"), S (4.3\"), and XS (2.7\") displays.",
            "Third, a unified design system: all design output had to fit existing patterns, managing one-off changes and code customization within product timelines. Fourth, segment adherence: a single design file had to incorporate requirements from Home, SoHo, SMB, and Large Format Printing — simultaneously.",
          ],
        },
        {
          type: "quote" as const,
          text: "Designing for hardware means your mistakes ship in plastic. There's no hotfix for a bad touchscreen interaction.",
        },
        {
          type: "text" as const,
          heading: "Task Analysis and Rigorous Delivery",
          body: [
            "For each use case, I created task flows and Data Flow Diagrams (DFDs) mapping the happy path and all edge case scenarios. I documented every error case and error handling scenario, then validated the workflow with Subject Matter Experts from both design and development. This wasn't just thoroughness — it was how firmware teams built the product.",
            "Design delivery followed a set of clear principles: Wide Range Responsive, Detailed, Modular, Cohesive, and Predecessor product compatibility. Each atomic element of the design system trickled responsively from 21\" down to 2.7\" display. I defined Pattern Buildup Tables — documenting every interactive element in every workflow, with verbiage matched to internal code repositories for easier change management. Behavior Tables specified interactive component behavior to reduce manual communication overhead between teams.",
          ],
        },
        {
          type: "text" as const,
          heading: "Design Validation in the Lab",
          body: [
            "Once development milestones were achieved, I conducted implementation reviews on physical devices and documented issues in Jira to ensure the build matched design to pixel perfection. The Print from USB user journey: Plug in USB → Menu > Print > Print from USB → Browse and choose file → Select copies and print options → Print successful. The Contacts app: Menu > Contacts → View list → Add/edit contacts and groups — all on a resistive touchscreen in a physical office environment.",
            "The HP Color LaserJet Pro MFP 4301fdw — the first product launched on Scale UI — received 4-star reviews from PC Mag, Amazon, and was named a top pick by Digital Trends. The design system continues to ship across HP's global printer portfolio.",
          ],
        },
      ],
    },
  },
  {
    slug: "flexible-insurance-gig-workers",
    title: "Flexible Insurance for Gig Workers",
    subtitle: "1st Place — Rotman Design Challenge. Reimagining traditional insurance structures to enable security and trust for gig workers using AI-enabled CX experiences.",
    category: "STRATEGY · AI CUSTOMER EXPERIENCE",
    filterCategory: "Strategy" as ProjectCategory,
    coverImage: "/covers/flexible-insurance.jpg",
    imageConfig: { fit: "cover" as const, position: "center center" },
    caseStudy: {
      role: "Strategy Lead & Designer",
      timeline: "48-hour design challenge",
      tools: ["Figma", "Miro", "Business Model Canvas"],
      team: "4 designers (cross-disciplinary)",
      sections: [
        {
          type: "text" as const,
          heading: "Overview",
          body: [
            "The Rotman Design Challenge asked teams to reimagine insurance for the future of work. Our team focused on gig workers — a growing workforce segment that traditional insurance products fundamentally fail to serve.",
            "We designed a flexible, AI-enabled insurance platform that adapts coverage to work patterns in real-time. Instead of fixed monthly premiums, coverage activates and scales based on actual gig activity, creating a trust bridge between insurers and a historically underserved market.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "1st", label: "Place — Rotman Design Challenge" },
            { value: "48hrs", label: "From brief to final presentation" },
            { value: "78M", label: "Gig workers in the US alone" },
          ],
        },
        {
          type: "text" as const,
          heading: "Outcome",
          body: [
            "Won first place against 20+ competing teams. The judges highlighted our approach to behavioral trust-building and the AI-driven personalization model as key differentiators. The concept was later developed into a more detailed strategy proposal.",
          ],
        },
      ],
    },
  },
  {
    slug: "project-sense",
    title: "Project SENSE",
    subtitle: "Pharmaceutical data visualization and analytics platform for predicting delays in clinical trial timelines — enabling decision makers to pivot before problems escalate.",
    category: "PRODUCT DESIGN · DATA VISUALIZATION",
    filterCategory: "Product Design" as ProjectCategory,
    coverImage: "/covers/project-sense.png",
    imageConfig: { fit: "cover" as const, position: "center 30%" },
    caseStudy: {
      role: "Interaction & Visual Designer",
      timeline: "2018 — 2019 (10 months)",
      tools: ["Sketch", "InVision", "Axure", "Participatory Design", "Experience Mapping"],
      team: "Solo designer embedded with client-side design manager, data science, and engineering",
      sections: [
        {
          type: "text" as const,
          heading: "Predicting Failure Before It Happens",
          body: [
            "Clinical trials last 5 to 8 years on average. They're highly volatile, massively complex, and when they fall behind schedule — even by weeks — the cost can run into hundreds of millions of dollars. The client conducts clinical trials to test newly developed drug compounds. SENSE is the deep analytics tool that gives their Clinical Trial Leadership the ability to predict delays and risks in the trial process before they become crises.",
            "As the only designer from Accenture's studio on this project, I led end-to-end UX design strategy and execution over 10 months. I was the Interaction and Visual Designer, working directly with the client-side design manager. The design process followed a structured five-phase approach: Discover (Requirement Gathering) → Describe (Initial Concept, Iteration Cycle) → Design (Visual Design) → Develop (Feasibility Check, Final User Review) → Release (Launch).",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/project-sense/dashboard.png",
          alt: "SENSE Portfolio Summary dashboard showing clinical trial analytics",
          caption: "The SENSE Portfolio Summary: Patient & Site Status, Study Overview radial, Milestone Spotlight, Enrollment, Costs, Objectives — all on one canvas.",
        },
        {
          type: "text" as const,
          heading: "Discovery: A Two-Day Co-Creation Workshop",
          body: [
            "The project kicked off with a two-day co-creation workshop with stakeholders and potential users of the SENSE platform. I employed Participatory Design methods and Experience Mapping exercises to understand the existing customer experience from the inside out.",
            "After the workshop, we extracted latent primary needs across all user roles. Most shared four needs: Predict (accurately predict risks and delays in time to proactively pivot the schedule), Analyze (trace source data and interdependencies between processes), Notify (receive important alerts in an actionable format), and Share (invite collaboration and use external tools when required). These four verbs became the product's design north star.",
          ],
        },
        {
          type: "text" as const,
          heading: "Three Archetypes. One Tool.",
          body: [
            "SENSE served three distinct user archetypes with fundamentally different needs. Global Trial Directors manage a single clinical trial through to completion — involved for more than five years on average, focused at the granular study level. Trial Forecasting Managers oversee cost expenditure and resource allocation across multiple trials simultaneously, accountable for distribution across portfolios, projects, and studies. Global Portfolio Directors are senior leadership managing 10 to 50 studies — they need portfolio-level macro status at a glance, not drill-down detail.",
            "The information architecture solved this by structuring SENSE around two parallel hierarchies: Study View (Portfolio → Project → Study) and Geographical View (Global → Regional → Country → Site). A Global Portfolio Director could see worldwide data while a Regional Trial Lead drilled into a specific EMEA study — same tool, same interface, different altitude.",
          ],
        },
        {
          type: "quote" as const,
          text: "A prediction is only valuable if the person reading it knows what to do next.",
        },
        {
          type: "text" as const,
          heading: "Designing the Dashboard",
          body: [
            "The primary user flow was: select a study from a portfolio → deep dive into a process → zoom from global to site-level data. The Portfolio Summary dashboard surfaces Patient & Site Status (global map view), Study Overview (radial risk visualization), Milestone Spotlight, Enrollment trends, External Cost Forecast, Objectives, and Summary Statistics — 80 total studies, 1,563 target patients, $325M total lifetime external cost — all in a single canvas.",
            "Every visualization was designed for the dark-theme interface that clinical leadership teams use in low-light environments. The radial Study Overview visualization was the centrepiece: it made risk visible at a glance — High Risk in red, Medium Risk in amber, On Track in green — so a director could understand the health of their entire portfolio before their morning coffee.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/project-sense/cover.png",
          alt: "SENSE platform overview",
          caption: "SENSE: analytics and data visualization for clinical trial leadership at Accenture.",
        },
        {
          type: "text" as const,
          heading: "From Reactive to Proactive",
          body: [
            "Before SENSE, clinical trial leadership operated reactively — firefighting delays as they emerged. SENSE shifted the posture to proactive pivoting: the tool surfaces at-risk studies weeks before scheduled milestones, giving leadership time to reallocate resources, adjust timelines, or escalate decisions before costs compound.",
            "The tool was deployed for Accenture's clinical trial consulting engagements. The walkthrough video demonstrates the full user journey — from portfolio overview through study drill-down to site-level data — a roughly four-minute flow that captures the depth of the analytical capability the interface unlocked.",
          ],
        },
      ],
    },
  },
  {
    slug: "loop-strategy",
    title: "Loop : Strategy",
    subtitle: "Solving the problem of ghosting, Loop is an AI intelligence layer that autonomously manages rejection conversations for recruiters.",
    category: "PRODUCT DESIGN · STRATEGY · AI PRODUCT",
    filterCategory: "Product Design" as ProjectCategory,
    coverImage: "/covers/loop-strategy.png",
    imageConfig: { fit: "contain" as const, position: "center center", bg: "#faf9f7" },
    caseStudy: {
      role: "Product Designer & Strategist",
      timeline: "Oct — Dec 2024",
      tools: ["Figma", "Claude API", "Business Model Canvas", "User Interviews"],
      team: "2 designers + 1 engineer",
      sections: [
        {
          type: "text" as const,
          heading: "Overview",
          body: [
            "Ghosting is recruiting's dirty secret. Recruiters handle hundreds of candidates simultaneously, and the ones who don't get the job simply... never hear back. Loop is an AI intelligence layer that autonomously manages rejection conversations — turning the worst part of recruiting into a relationship-building opportunity.",
            "I led the product strategy and interaction design, defining the AI's conversational tone, the recruiter's control surface, and the candidate experience. The core design challenge was making automated rejection feel genuinely human and constructive.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "85%", label: "Of candidates preferred Loop rejection over silence" },
            { value: "3x", label: "Faster closure on open candidate loops" },
            { value: "60%", label: "Reduction in recruiter time on rejection tasks" },
          ],
        },
        {
          type: "text" as const,
          heading: "Outcome",
          body: [
            "Loop demonstrated that AI can handle sensitive human conversations when designed with empathy as a constraint, not an afterthought. The prototype was validated with 3 recruiting teams and is being developed further as a standalone product.",
          ],
        },
      ],
    },
  },
  {
    slug: "beyond-efficiency",
    title: "Beyond Efficiency",
    subtitle: "Research aimed to understand the shifting dynamics of tech hiring shaped by automation, AI, and technology.",
    category: "STRATEGY · USER RESEARCH",
    filterCategory: "Research" as ProjectCategory,
    coverImage: "/covers/beyond-efficiency.png",
    imageConfig: { fit: "cover" as const, position: "center 75%" },
    caseStudy: {
      role: "Lead Researcher",
      timeline: "Sep — Dec 2024",
      tools: ["Interview Protocols", "Thematic Analysis", "Miro", "Figma"],
      team: "3 researchers",
      sections: [
        {
          type: "text" as const,
          heading: "Overview",
          body: [
            "Beyond Efficiency is a qualitative research project exploring how automation, AI, and platform economics are reshaping the hiring landscape in tech. We interviewed hiring managers, recruiters, and candidates to understand the shifting power dynamics and emerging friction points.",
            "The research surfaced a central tension: companies are using AI to optimize hiring speed while candidates increasingly feel dehumanized by the process. The gap between efficiency and experience is widening, and neither side is satisfied.",
          ],
        },
        {
          type: "quote" as const,
          text: "Efficiency without empathy creates systems that work perfectly for no one.",
        },
        {
          type: "text" as const,
          heading: "Outcome",
          body: [
            "The research findings were synthesized into a framework for human-centered hiring design and presented at a Parsons research showcase. Key insights informed the design direction for the Loop project.",
          ],
        },
      ],
    },
  },
];

export const testimonials = [
  {
    quote: "Yash is a talented UX/IX/VX design partner and I have thoroughly enjoyed working with him on several projects. He brings a positive attitude to tough challenges, turns around high quality work very quickly, and is very reliable for unplanned requests or issues. He is very focused on delightful end user outcomes and collaborates efficiently with product management and R&D teammates. I'd highly recommend Yash for all your SW product design needs!",
    name: "Rhea Adhikary",
    title: "Group Product Manager | Sr. Manager of AI Experiences",
  },
  {
    quote: "Yash is a great guy. A real self starter, laser focused at creating the best customer experience. He is very approachable and always open for a good conversation how to improve.",
    name: "Stefan Vermeul",
    title: "Senior Director, NA Consumer & Retail Marketing",
  },
];

export const skills = [
  "UX Design",
  "Product Strategy",
  "User Research",
  "Design Systems",
  "Service Design",
  "AI Prototyping",
  "Enterprise B2B",
  "Figma",
  "Cursor",
  "Claude Code",
  "Stakeholder Management",
  "Workshop Facilitation",
  "Information Architecture",
];

export const aboutData = {
  subtitle: "Product Designer & Strategist based in New York",
  narrative: [
    "I\u2019ve spent the last seven years figuring out how to make complicated things feel obvious. At HP, that meant redesigning printer software used by tens of thousands of people who never wanted to think about printers. At Accenture, it was enterprise onboarding flows where a single confusing field could lose a patient. At Parsons, it became something bigger \u2014 understanding how design decisions carry bias, and how AI can either amplify or correct it.",
    "What I keep coming back to is the seam between strategy and craft. I like being in the room where the business model gets debated, and I like being the one who turns that conversation into an interface someone actually wants to use. I think the best designers do both \u2014 they don\u2019t just make things pretty, they make things right.",
    "Right now I\u2019m finishing my MS at Parsons, building AI-native tools, and trying to figure out what design practice looks like when your most powerful collaborator is a language model.",
  ],
  education: {
    school: "Parsons School of Design",
    degree: "MS Strategic Design & Management",
    year: "2026",
  },
  now: [
    "Exploring AI-native design patterns",
    "Finishing MS at Parsons School of Design",
    "Building tools with Claude Code & Cursor",
    "Researching bias in venture capital decisions",
  ],
  philosophy: [
    "Complexity is a design failure.",
    "Strategy without craft is a deck. Craft without strategy is decoration.",
    "The best interface is the one that teaches you something.",
  ],
  personal: "Based in New York. Perpetual optimizer. Finds calm in long walks and loud music.",
};
