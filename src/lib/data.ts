// v2 — updated 2026-03-25
export const siteConfig = {
  name: "Yash Sonwaney",
  initials: "YS",
  tagline: "Designing systems that make complex things feel simple.",
  bio: "Senior product designer with 7+ years of experience shaping enterprise tools, service ecosystems, and AI-native workflows. Currently finishing an MS in Strategic Design & Management at Parsons School of Design.",
  email: "yash.sonwaney@newschool.edu",
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
  | { type: "text"; heading: string; label?: string; body: string[] }
  | { type: "image"; src: string; alt: string; caption?: string; layout?: "default" | "mobile" }
  | { type: "two-images"; images: { src: string; alt: string; caption?: string }[]; layout?: "default" | "mobile" }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "pull-quote"; text: string; attribution?: string }
  | { type: "callout"; label: string; body: string[] }
  | { type: "steps"; title?: string; items: { num: string; label: string; body?: string; image?: string; imageAlt?: string; imageCaption?: string; video?: string; videoPoster?: string; videoCaption?: string }[] }
  | { type: "metrics"; items: { value: string; label: string }[] }
  | { type: "chart"; chartId: "subscriber-growth" | "conversion-milestones" | "churn-reasons"; caption?: string }
  | { type: "insight-card"; theme: string; insight: string; verbatim: string; attribution: string }
  | { type: "problem-gap"; label: string; heading: string; current: string; desired: string }
  | { type: "concepts-grid"; heading: string; items: { name: string; tag: string; description: string; selected?: boolean }[] }
  | { type: "video"; src: string; caption?: string; poster?: string }
  | { type: "loop"; label?: string; heading?: string; stages: { name: string; targetId?: string; active?: boolean }[]; caption?: string }
  | { type: "triage"; label?: string; heading: string; intro?: string; noise: string[]; cards: { client: string; signal: string; delta?: string; urgency?: "high" | "med" | "low" }[]; note?: string }
  | {
      type: "sandbox";
      label?: string;
      heading: string;
      intro?: string;
      externalities: { id: string; name: string; hint?: string }[];
      outputs: { id: string; label: string; base: number; unit?: string; format?: "percent" | "number"; sensitivities: Record<string, number>; goodDirection?: "up" | "down" }[];
      cohortSize?: number;
      note?: string;
    }
  | { type: "timeline"; label?: string; title?: string; items: { num: string; label: string; body?: string }[] }
  | { type: "divider" }
  | { type: "placeholder"; media: "image" | "video" | "gif"; label: string; ratio?: string; width?: "content" | "wide" }
  | { type: "features"; label?: string; heading?: string; items: { name: string; tag?: string; body: string; media?: "image" | "video" | "gif"; mediaLabel?: string; ratio?: string }[] }
  | { type: "embed"; label?: string; heading?: string; intro?: string; url: string; ratio?: string; note?: string };

export interface CaseStudy {
  role: string;
  timeline: string;
  tools: string[];
  team: string;
  sections: CaseStudySection[];
}


const draftSlugs = new Set([
  "goretex-accesswear",
  "hp-scale-ui",
  "hp-learning",
  "bridgit",
  "greenbox-tempo",
  "project-sense",
]);

const isPreview =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" ||
  process.env.NODE_ENV === "development";

const allProjects = [
  {
    slug: "beyond-efficiency",
    title: "Beyond Efficiency: Understanding the Paradox of AI in Hiring",
    cardTitle: "Technology-led Inequities in Hiring",
    subtitle: "Design research on how AI made hiring faster, but far less human.",
    category: "DESIGN RESEARCH",
    filterCategory: "Research" as ProjectCategory,
    year: "2025",
    cardBg: "#F5F0E8",
    cardTextColor: "dark" as const,
    coverImage: "/covers/beyond-efficiency.png",    imageConfig: { fit: "cover" as const, position: "center 75%" },
    caseStudy: {
      role: "Lead Researcher & Designer",
      timeline: "Fall 2025",
      tools: ["DARN Framework", "Semi-structured Interviews", "Focus Group Discussion", "Candidate Survey (n=52)", "Thematic Analysis", "Dovetail", "Figma"],
      team: "Yash Sonwaney & Ananya Harshini",
      sections: [
        {
          type: "text" as const,
          label: "Context",
          heading: "Overview",
          body: [
            "Between 2022 and 2025, more than 600,000 workers were laid off across major technology companies. At the same time, over 95–98% of Fortune 500 companies adopted applicant tracking systems that automatically filter out 70–75% of applications before any human reviews them. The result: a hiring ecosystem that moves faster than ever — and works worse than ever.",
            "Employers face floods of hundreds or thousands of applications per role, most low-signal or AI-generated. Qualified candidates submit into black boxes, wait in silence, and get ghosted at rates that would have been unacceptable a decade ago. Both sides are more frustrated than the tools promised. This research set out to understand why — and where design can intervene.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/hypothesis.png",
          alt: "Research hypothesis: the paradox of efficiency in AI-driven hiring",
          caption: "The central contradiction — automation creates volume without relevance for employers, while qualified candidates are filtered out before a human sees them.",
        },
        {
          type: "metrics" as const,
          items: [
            { value: "93%", label: "Of candidates distrust AI hiring tools to be fair" },
            { value: "60%", label: "Report severe mental health impact from job searching" },
            { value: "1000:1", label: "Application-to-interview ratios reported by recruiters" },
            { value: "70–75%", label: "Of applicants filtered before any human review" },
            { value: "$180K", label: "Average cost of a bad hire for a mid-level tech role" },
          ],
        },
        {
          type: "callout" as const,
          label: "The Core Finding",
          body: [
            "AI in hiring hasn't reduced inefficiency; it has displaced it. The burden has shifted from volume management to verification, from filtering to fraud detection. Both sides are working harder than before, inside a system where the tools meant to help are generating the problems they were sold to solve.",
          ],
        },
        {
          type: "text" as const,
          label: "Inquiry",
          heading: "Research Questions",
          body: [
            "Six questions shaped the inquiry: How has the hiring ecosystem in US tech evolved since commercial AI tools emerged alongside mass layoffs and policy changes? How do AI-driven hiring technologies shape recruiter workflows and perceived efficiency? What coping strategies do candidates adopt in response to opacity, ghosting, and inequities? How has technology integration impacted hiring manager and recruiter workflows day-to-day? Where do breakdowns and inequities occur most across the hiring funnel? And how can design interventions improve the process for both sides?",
            "These questions were held together deliberately. The hiring ecosystem is relational — what breaks down for candidates is inseparable from what breaks down for recruiters. You can't understand one without the other.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/research-questions.png",
          alt: "Six research questions guiding the inquiry",
          caption: "Six research questions treated as a relational system, not isolated tracks.",
        },
        {
          type: "text" as const,
          label: "Methodology",
          heading: "Mixed-Methods Approach",
          body: [
            "Primary research: 10 employer-side interviews across three tiers — 4 recruiters and HR specialists, 1 hiring manager, and 5 leadership participants including Chief People Officers and Directors of Talent Acquisition. A 52-response candidate survey targeting early-to-mid career designers and software engineers actively job seeking within 12 months. A 40-minute focus group discussion with 11 design and strategy professionals.",
            "Secondary research: a literature review drawing on Harvard Business Review, SHRM, Goldman Sachs, and the St. Louis Federal Reserve; a social media scan across LinkedIn, Reddit (r/UXDesign), and Blind; and a detailed ATS market analysis spanning Greenhouse, Workday, Lever, SAP SuccessFactors, Ashby, and eight other platforms.",
            "To map the system as a whole, we applied the D-A-R-N framework — Devices, Actors, Representations, Networks — a sociotechnical method that reveals how ATS platforms, AI scoring algorithms, LinkedIn Recruiter, resumes, job descriptions, and referral networks interact as infrastructure. This surfaced where power actually concentrates: not at the employer or candidate layer, but in the Representatives and Network layers controlled by ATS vendors and platforms.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/research-methods.png",
          alt: "Primary and secondary research methods overview",
          caption: "Mixed-method design: 10 employer interviews, 52-response survey, FGD, literature review, social scan, ATS market analysis.",
        },
        {
          type: "text" as const,
          label: "System Mapping",
          heading: "Applicant Tracking System Pipeline",
          body: [
            "Most candidates move through a 7-stage pipeline: job posting, resume submission, AI-powered skill extraction, ML ranking by fit score, recruiter review and shortlisting, interview coordination, and final decision. Stages 3 and 4 — skill extraction and ranking — have the densest AI involvement and the least human oversight.",
            "What looks like a clean automated funnel conceals a different reality. Recruiters consistently described their work as still largely manual, concentrated precisely at the stages AI is supposed to streamline. One recruiter spent an entire week on a single role that received over a thousand applications. The AI filtered — but the shortlist still required substantial human judgment, and the 800 candidates never reviewed were simply abandoned.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/ats-workflow.png",
          alt: "7-stage ATS workflow showing where AI is densely integrated vs. only assisting",
          caption: "The 7-stage ATS pipeline — stages 3 and 4 have the densest AI involvement, yet recruiters report those stages still require the heaviest manual effort.",
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/darn-map.png",
          alt: "D-A-R-N system map of the hiring ecosystem",
          caption: "The D-A-R-N map — where power concentrates in the Representatives and Network layers while both sides experience the system as opaque.",
        },
        {
          type: "text" as const,
          label: "Findings",
          heading: "What the Research Revealed",
          body: [
            "Across interviews, surveys, and focus groups, four dominant themes emerged — each revealing a different dimension of how AI-driven hiring is reshaping the relationship between employers and candidates.",
          ],
        },
        {
          type: "insight-card" as const,
          theme: "Theme 1 — Ethics, Bias & Tolerance for Error",
          insight: "When hiring at scale, exclusion caused by automated screening is frequently framed as an unavoidable operational trade-off — not a problem that can be designed around.",
          verbatim: "If the problem is large, some amount of error is allowed — it's part of the process. If I'm hiring a Chief AI Officer, I hardly use any tool. But for bulk hiring, I have to. Organizations must figure out what they're trying to do and how much tolerance to mistakes they can afford.",
          attribution: "Chief Talent Officer (P006), Global Tech Company",
        },
        {
          type: "insight-card" as const,
          theme: "Theme 2 — De-sensitization & De-humanization of Candidates",
          insight: "Metric pressures — time-to-hire, pipeline throughput — reduce each application to seconds of attention, making meaningful evaluation of portfolios and nuanced work nearly impossible.",
          verbatim: "If you get into that space, it's actually a very negative experience because you're not allowing that person a fair chance to be seen. If you're in Greenhouse all day trying to keep up with how many people are applying, you're basically only giving them eight seconds each. How much are you truly going to see?",
          attribution: "Head of Talent, Design Agency (P001)",
        },
        {
          type: "insight-card" as const,
          theme: "Theme 3 — Knowing When & How to Automate",
          insight: "Experienced practitioners don't reject automation — they apply it selectively. The real skill is distinguishing tasks suitable for automation from decisions requiring contextual human judgment.",
          verbatim: "With us hinting AI into our work, I think it's very normal — how do we use our judgment onto what work is operational versus something that needs human intervention? Using that judgment to see: this should be automated versus this needs us to step in.",
          attribution: "HR Professional (P004), Manufacturing Company",
        },
        {
          type: "insight-card" as const,
          theme: "Theme 4 — From Relationship-Based to System-Driven Recruitment",
          insight: "Technology has expanded recruiting reach while replacing relationship-building with filters and dashboards. The highest-quality hires still come from networks and direct outreach — a reality that structurally advantages insiders.",
          verbatim: "Earlier this week a client reached out. I texted somebody that I knew. They said yes. I sent them over and they interviewed right then. I didn't open a job, I didn't post anything. I've technically spent 20 years to be able to do that — but I might have spent all of 15 minutes, and I'll send an invoice for $40,000.",
          attribution: "Recruiting Leader (P007), Design Agency",
        },
        {
          type: "text" as const,
          label: "Candidate Side",
          heading: "What Candidates Are Experiencing",
          body: [
            "Survey data and focus group discussions paint a consistent picture: the hiring process has become psychologically punishing in ways that have nothing to do with merit. 60% of respondents reported severe mental health impacts — stress, burnout, discouragement. The dominant driver isn't rejection; it's opacity. Candidates describe applying to dozens of roles with no indication that a human ever reviewed their work.",
            "In response, gaming the system has become normalized. Candidates openly mirror job description keywords, reformat resumes per ATS, and use generative AI to optimize phrasing — not to misrepresent experience, but to survive automated filters that would otherwise screen them out. The system rewards pattern-matching over capability. Candidates know it.",
            "61% of respondents who reached the interview stage were ghosted there — after already investing significant time and emotional energy. Post-interview silence is the highest-trust-cost moment in the entire funnel.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/candidate-journey.png",
          alt: "Candidate journey map showing emotional states from awareness through offer",
          caption: "The candidate journey — overwhelmed at awareness, strained during preparation, guarded hope through screening. Ghosting post-interview is the highest emotional cost.",
        },
        {
          type: "pull-quote" as const,
          text: "It's not the rejection that hurts. It's sitting in that grey area, not knowing if any human ever even saw my application.",
          attribution: "Candidate, Focus Group Discussion",
        },
        {
          type: "text" as const,
          label: "Employer Side",
          heading: "What Employers Are Experiencing",
          body: [
            "Recruiters described being overwhelmed, not empowered. One agency lead received 1,000 applicants within days of posting a role, manually reviewed 160, surfaced 20 strong candidates, shared 10 with the client — and left 800 people who were never seen at all. Another recruiter estimated that 70% of inbound applications were fake.",
            "A new category of problem has emerged: fraud. Multiple participants reported interviewing deepfake candidates — AI-generated identities, not just keyword-stuffed resumes. The most valued AI use case among recruiters wasn't ranking or scoring. It was fraud detection — the only top-of-funnel AI capability they consistently trusted.",
            "Hiring managers named a subtler failure: a false sense of effectiveness. Just because you can process candidates quickly doesn't mean it's being done the right way. The system is built around speed, not human-centeredness. And the best candidates still come from direct LinkedIn outreach or existing relationships — a fully manual process no AI tool has replaced.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/employer-journey.png",
          alt: "Employer journey map showing emotional states from job posting through decision-making",
          caption: "The employer journey — alert at posting, hopeful at inflow, then overloaded and stressed as volume overwhelms quality.",
        },
        {
          type: "quote" as const,
          text: "Recruitment is still very manual. One role had over a thousand applications and I spent an entire week just going through them. That's my answer for all of it.",
          attribution: "Senior Recruiter, Tech Company (P002)",
        },
        {
          type: "text" as const,
          label: "Synthesis",
          heading: "Synthesis: Three Problem Areas",
          body: [
            "Following data collection, we used the Theme–Insight–Verbatim framework to cluster findings across all methods into three problem gap areas. Each gap is defined by a current state — what is actually happening — and a desired state — what should be happening instead. Together they form the design surface.",
          ],
        },
        {
          type: "problem-gap" as const,
          label: "Problem 01",
          heading: "Ghosting",
          current: "Candidates are removed from consideration at multiple stages — including post-interview — without notice, feedback, or closure. This erodes trust in the company brand and produces measurable psychological harm at every stage.",
          desired: "Every candidate receives stage-by-stage updates regardless of outcome. Rejection includes constructive feedback. Closure is standard, not exceptional — maintaining psychological safety and separating outcome from self-worth.",
        },
        {
          type: "problem-gap" as const,
          label: "Problem 02",
          heading: "Spray & Pray",
          current: "As a rational response to opacity, candidates apply to any available posting regardless of fit — prioritizing volume over quality. This floods recruiters with low-signal applications and reduces callback rates for everyone, including genuinely qualified candidates.",
          desired: "Candidates apply mindfully and with intent — to roles that align with their trajectory, with tailored materials highlighting transferable skills and fit. Fewer applications; higher signal. Both sides benefit.",
        },
        {
          type: "problem-gap" as const,
          label: "Problem 03",
          heading: "Outbound Sourcing at Scale",
          current: "Outbound platforms like LinkedIn Recruiter and Indeed increase talent pool access but deliver high volume at low signal quality — often with clear mismatch or fraudulent profiles. This lengthens time-to-hire and creates dehumanizing conditions on both sides.",
          desired: "Recruiters prioritize relationship-based and network-first sourcing before mass outbound channels. Internal employee networks and warm introductions are the first filter. Outbound is a fallback, not the default.",
        },
        {
          type: "text" as const,
          label: "Needs",
          heading: "Synthesized Needs: Both Sides",
          body: [
            "From surveys and focus groups, four core candidate needs: trust through fair and consistent evaluation criteria; closure — rejection is acceptable, disappearing is not; protection from process burnout; and restored agency in a system that currently feels rigged.",
            "From recruiter and hiring manager interviews, four parallel employer needs: identifying authentic candidates among AI-generated applications; managing volume without sacrificing evaluation quality; closing communication gaps that ghost candidates unintentionally; and using AI as a cognitive offloader for mechanical tasks so humans can focus judgment on evaluation and relationships.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            {
              src: "/case-studies/beyond-efficiency/candidate-needs.png",
              alt: "Four synthesized candidate needs: Trust, Closure, Protection from Burnout, Restored Agency",
              caption: "Four candidate needs — trust, closure, burnout protection, and restored agency.",
            },
            {
              src: "/case-studies/beyond-efficiency/employer-needs.png",
              alt: "Four synthesized employer needs: Authentic Candidates, Volume Management, Communication, Cognitive Offloading",
              caption: "Four employer needs — authenticity, volume management, communication, and cognitive offloading.",
            },
          ],
        },
        {
          type: "text" as const,
          label: "Ideation",
          heading: "From Insights to Ideation",
          body: [
            "Synthesis crystallized two design principles: automate the administrative, not the evaluative — let technology handle mechanical tasks so humans can bring judgment to decisions that matter; and close the feedback loop — every interaction in the hiring funnel should produce a legible signal for the person on the receiving end.",
            "These principles informed four concept directions, each targeting a distinct breakdown identified in the research.",
          ],
        },
        {
          type: "text" as const,
          label: "Opportunity",
          heading: "Reframed Opportunity Statement",
          body: [],
        },
        {
          type: "pull-quote" as const,
          text: "How might we rebalance AI in tech hiring, to reduce recruiter overload while making qualified candidates more visible?",
        },
        {
          type: "text" as const,
          label: "Theory of Change",
          heading: "Theory of Change",
          body: [
            "The theory of change maps how a single design intervention — cognitive offloading of recruiter communication — cascades into systemic improvement. When AI handles status updates, rejections, and follow-ups, recruiters reclaim time for deeper candidate evaluation. Candidates receive consistent, timely signals instead of silence. Trust rebuilds on both sides.",
            "Less unintentional silence leads to more trust, which attracts more engaged and higher-quality candidates, which produces better hiring outcomes at lower cost. AI as a cognitive offloader for communication — not a gatekeeper for exclusion.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/theory-of-change.png",
          alt: "Theory of change: cognitive offloading cascades into better hiring outcomes",
          caption: "Theory of change — cognitive offloading enables deeper evaluation, consistent communication, and higher-quality candidates.",
        },
        {
          type: "concepts-grid" as const,
          heading: "Four Concept Directions",
          items: [
            {
              name: "Loop",
              tag: "Communication",
              description: "A candidate communication agent that keeps every applicant informed throughout the process without adding manual burden to recruiters. AI as a transparency layer, not a gatekeeper.",
              selected: true,
            },
            {
              name: "Signal",
              tag: "Intent",
              description: "An AI job application strategy tool that helps candidates apply with higher intent — fewer, better-targeted applications with tailored materials that address actual fit.",
              selected: false,
            },
            {
              name: "Vouch",
              tag: "Sourcing",
              description: "A network-based candidate sourcing platform that activates employee referral networks before mass outbound channels — putting relationship-based hiring within reach of companies without established pipelines.",
              selected: false,
            },
            {
              name: "Prove",
              tag: "Assessment",
              description: "A task-based application system that replaces resume screening with short, role-specific assessments — surfacing actual capability over keyword-optimized representations of it.",
              selected: false,
            },
          ],
        },
        {
          type: "text" as const,
          label: "Solution",
          heading: "Final Proposition: Loop",
          body: [
            "After the final review, Loop was selected as the primary proposition for deeper development. The selection was driven by research signal strength: ghosting appeared as a breakdown across every data collection method — recruiter interviews, the candidate survey, the focus group, and the social media scan. It was the most consistent and emotionally costly failure in the funnel, and critically, both sides agreed it was structural rather than intentional.",
            "Recruiters described ghosting as an inevitable outcome of volume, manual process, and tool constraints — not indifference. Candidates described it as the primary driver of distrust in companies and the hiring process itself. Loop addresses this shared pain point by intervening precisely where transparency has eroded, without adding manual burden to already-overwhelmed recruiters.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/loop-concept.png",
          alt: "Loop: Candidate Communication Agent — keeping every candidate informed automatically",
          caption: "Loop — an AI communication agent that eliminates ghosting by keeping every candidate informed automatically, freeing recruiters to focus on evaluation.",
        },
      ],
    },
  },
  {
    slug: "loop-strategy",
    title: "Loop : Strategy",
    cardTitle: "Turning Rejection into Brand Equity",
    subtitle: "An AI intelligence layer that turns candidate rejection into recruiter brand equity.",
    category: "PRODUCT DESIGN · STRATEGY · AI PRODUCT",
    filterCategory: "Strategy" as ProjectCategory,
    year: "2025",
    cardBg: "#1C1C1A",
    cardTextColor: "light" as const,
    coverImage: "/covers/loop-strategy.png",    imageConfig: { fit: "contain" as const, position: "center center", bg: "#faf9f7" },
    caseStudy: {
      role: "Product Designer & Strategist",
      timeline: "Oct 2025 — Apr 2026",
      tools: ["Figma", "Claude API", "Business Model Canvas", "Vignette Study", "Concept Testing", "LinkedIn Ads", "Vercel", "Dovetail"],
      team: "Yash Sonwaney & Ananya Harshini",
      sections: [
        {
          type: "text" as const,
          label: "Context",
          heading: "Overview",
          body: [
            "Every open role receives an average of 400 applications. One person gets hired. The other 399 hear nothing — or receive a generic template that tells them less than silence would. Ghosting is not a recruiter character flaw; it is a structural failure. Recruiters are buried under volume and manual process, and existing tools simply stop at the hiring decision. The rejection moment — the single highest-volume brand interaction most companies have — goes entirely undesigned.",
            "Loop is an AI intelligence layer that autonomously manages rejection conversations on behalf of recruiters. I led product strategy and validation, building on six months of mixed-methods research into AI-driven hiring breakdowns. The core strategic reframe: rejection is not an HR operations problem. It is a brand equity problem.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "$47B", label: "Spent on brand marketing by top 5 US brands" },
            { value: "$0", label: "Allocated to the applicant rejection experience" },
            { value: "399:1", label: "Rejected-to-hired ratio per role (avg 400 applicants)" },
            { value: "$5.5M", label: "Revenue lost by Virgin Media from poor rejection experiences" },
          ],
        },
        {
          type: "callout" as const,
          label: "The Strategic Reframe",
          body: [
            "Virgin Media discovered this the hard way: 18% of their 123,000 rejected applicants were existing customers, and 6% cancelled their subscriptions after a poor rejection experience. Published behavioral research confirmed the pattern — positive rejection experiences fully mitigate negative effects, while silence or generic templates actively erode employer brand perception. The rejection moment is a measurable business liability, not an HR inconvenience.",
          ],
        },
        {
          type: "problem-gap" as const,
          label: "Market Gap",
          heading: "No One Owns the Rejection Journey",
          current: "ATS platforms manage candidate pipelines up to the hiring decision. After rejection, candidates enter a communication void — receiving either a generic template email or total silence. No market player handles what happens after 'no.' Recruiters lack the bandwidth, and existing tools lack the capability.",
          desired: "An intelligent layer that activates after the hiring decision, autonomously managing personalized rejection conversations — closing the loop with constructive feedback, handling follow-up questions, and converting a negative moment into brand equity.",
        },
        {
          type: "image" as const,
          src: "/case-studies/loop-strategy/market-gap.png",
          alt: "Market landscape showing no existing solution for the post-rejection candidate journey",
          caption: "ATS market analysis — every major platform drops the candidate at the rejection decision. The post-rejection journey is undesigned territory.",
        },
        {
          type: "text" as const,
          label: "Product",
          heading: "How Loop Works",
          body: [
            "Loop is not a chatbot bolted onto an ATS. It is an AI intelligence layer trained on organizational context — company structure, team skill graphs, hiring trends, and culture-versus-talent profiles. It activates at a specific moment: after the first human interview round, when the recruiter has decided to reject a candidate but lacks the bandwidth to communicate that decision meaningfully.",
          ],
        },
        {
          type: "steps" as const,
          title: "The Loop Workflow",
          items: [
            {
              num: "01",
              label: "Setup",
              body: "Loop ingests organizational context — structure, policies, team skill graphs, hiring trends, and culture-versus-talent profiles. We designed this as a prerequisite because generic rejection is what candidates already get. Without company-specific context, Loop would just be a faster template.",
              image: "/case-studies/loop-strategy/step-setup.png",
              imageAlt: "Loop setup: organizational context ingestion",
            },
            {
              num: "02",
              label: "Activation",
              body: "Loop activates after the first human interview round. We chose this trigger point deliberately — earlier and there's no meaningful feedback to give; later and the candidate has already been ghosted. The recruiter makes the rejection decision; Loop handles the communication.",
              image: "/case-studies/loop-strategy/step-activation.png",
              imageAlt: "Loop activation trigger after interview round",
            },
            {
              num: "03",
              label: "AI Outreach",
              body: "Loop transforms raw interview notes into a personalized rejection email with constructive, role-specific feedback. The tone was designed to be direct but warm — no corporate hedging, no false encouragement. Specific enough to be useful, honest enough to be respected.",
              image: "/case-studies/loop-strategy/step-outreach.png",
              imageAlt: "Personalized rejection email with constructive feedback",
            },
            {
              num: "04",
              label: "Conversation",
              body: "If the candidate replies, Loop manages follow-up questions. A key design constraint: responses are growth-focused and never numerical. When candidates asked 'rate me 1-10,' Loop redirects to actionable self-improvement without feeling evasive — because ranking candidates against each other undermines the dignity the rejection was designed to preserve.",
              image: "/case-studies/loop-strategy/step-conversation.png",
              imageAlt: "Loop managing a follow-up conversation with a candidate",
            },
            {
              num: "05",
              label: "Closure",
              body: "Loop closes conversations gracefully — ensuring every candidate reaches a dignified endpoint rather than fading into silence. The closing pattern was iterated through applicant workshops until participants consistently described it as complete rather than abrupt.",
              image: "/case-studies/loop-strategy/step-closure.png",
              imageAlt: "Loop closing a conversation with a candidate",
            },
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/loop-strategy/product-demo.png",
          alt: "Loop product interface showing rejection email generation from raw interview notes",
          caption: "From raw interview notes to personalized rejection with constructive feedback — the core transformation Loop performs.",
        },
        {
          type: "text" as const,
          label: "Design",
          heading: "Designing the Conversation",
          body: [
            "The hardest design challenge was tone. Automated rejection easily reads as cold or performative. We iterated through three tonal registers — clinical, empathetic-corporate, and direct-warm — and tested each with applicants. Direct-warm won consistently: specific about what happened, honest about the decision, and focused on what the candidate could do next. No softening language, no hollow encouragement.",
            "The conversation design followed a principle we called 'structured honesty.' Loop discloses what it can (process-specific feedback, skill gaps observed, team composition context) and draws clear boundaries around what it cannot (comparative rankings, internal deliberation, numerical scores). Candidates respected the boundaries more when they were explicitly stated than when information was deflected.",
          ],
        },
        {
          type: "text" as const,
          label: "Validation",
          heading: "Concept Testing with Stakeholders",
          body: [
            "We tested the Loop concept with recruiting professionals across organizations, with particular focus on high-volume hiring contexts where rejection communication breaks down most severely. The concept resonated strongest in environments with 12-month hiring cycles, where the scale of unmanaged rejections compounds into measurable reputation risk.",
            "Stakeholders immediately grasped the strategic value: this was not about making recruiters' lives easier — it was about protecting the organization from a brand liability that scales linearly with hiring volume.",
          ],
        },
        {
          type: "insight-card" as const,
          theme: "Stakeholder Validation",
          insight: "Recruiters validated both the problem severity and Loop's positioning — framing reputation risk as the primary concern, not workflow efficiency.",
          verbatim: "Especially for really high-volume roles, or recruiting departments that routinely have both high-volume roles and many recs at the same time. I think this concept could be a real gamechanger.",
          attribution: "Recruiting Professional, Concept Testing Session",
        },
        {
          type: "text" as const,
          label: "Applicant Testing",
          heading: "Vignette Study with Applicants",
          body: [
            "To validate the candidate-facing experience, we conducted a vignette study using a functional prototype built on the Claude API. Participants received a Loop-generated rejection email based on realistic interview scenarios, then interacted with the conversational agent in real time — asking follow-up questions, probing for detail, and testing boundaries.",
            "The most revealing moments came when candidates pushed back. One asked Loop to rate their application on a scale of 1 to 10. Another asked what the hired candidate had that they lacked. These were the interactions we designed for — and the ones that proved the conversation architecture worked. Loop redirected without deflecting, and candidates described the experience as respectful rather than evasive.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            {
              src: "/case-studies/loop-strategy/vignette-email.png",
              alt: "Loop-generated rejection email with personalized constructive feedback",
              caption: "The rejection email — specific, constructive, and grounded in the candidate's actual interview performance.",
            },
            {
              src: "/case-studies/loop-strategy/vignette-conversation.png",
              alt: "Candidate follow-up conversation with Loop agent",
              caption: "Follow-up conversation — growth-focused responses that answer hard questions without ranking or comparing candidates.",
            },
          ],
        },
        {
          type: "pull-quote" as const,
          text: "It's easily a 30-40% improvement over a standard rejection. The company feels more humanistic, like it actually cares.",
          attribution: "Applicant, Vignette Study Participant",
        },
        {
          type: "insight-card" as const,
          theme: "Boundary Testing",
          insight: "Candidates tested the AI's limits by asking for numerical ratings and comparative rankings — the exact scenarios that reveal whether conversation design holds under pressure.",
          verbatim: "If you had to rate my application between 1-10, what would the recruiter rate it? What qualities worked best for the hired candidate?",
          attribution: "Applicant Questions During Vignette Study",
        },
        {
          type: "text" as const,
          label: "Strategy",
          heading: "Four-Dimensional Value Proposition",
          body: [
            "Loop's value proposition operates across four distinct dimensions, each addressing a different stakeholder need. This was a deliberate strategic choice: a single-value-prop product in this space would be dismissed as a nice-to-have. Loop needed to be defensible across brand, operations, candidate experience, and internal retention to earn budget allocation.",
          ],
        },
        {
          type: "concepts-grid" as const,
          heading: "Value Proposition Framework",
          items: [
            {
              name: "Brand Equity",
              tag: "External",
              description: "Turns rejected applicants into brand ambassadors. Every rejection becomes a positive brand touchpoint instead of a reputation liability.",
            },
            {
              name: "Recruiting Operations",
              tag: "Efficiency",
              description: "Reduces manual effort on rejection communication autonomously. Recruiters reclaim bandwidth for evaluation and relationship-building.",
            },
            {
              name: "Applicant Experience",
              tag: "Human",
              description: "Rejection with dignity. Growth-focused feedback that preserves self-worth and separates the outcome from the person.",
            },
            {
              name: "Recruiter Retention",
              tag: "Internal",
              description: "Reduces emotional labor and burnout from delivering bad news at scale. Contributes to lower recruiter turnover year-over-year.",
            },
          ],
        },
        {
          type: "text" as const,
          label: "Go-to-Market",
          heading: "Market Validation",
          body: [
            "To validate real-world demand beyond research participants, we launched a go-to-market experiment: a waitlist website, a LinkedIn company page running three posts per week with boosted ads targeting founders and talent acquisition specialists, and a pricing model stress-tested against competitor pricing in the ATS ecosystem. The goal was not to build a business — it was to generate a demand signal strong enough to validate that the problem we identified in research was felt acutely enough for people to raise their hand.",
            "Early results confirmed the signal: 12 waitlist signups from targeted outreach, over 3,000 impressions across LinkedIn campaigns, and 2,100 community members reached. Small numbers for a launch — meaningful numbers for a concept validation from a two-person team with no marketing budget beyond a boosted post.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/loop-strategy/gtm-artifacts.png",
          alt: "Loop go-to-market artifacts: waitlist site, LinkedIn page, and ad campaigns",
          caption: "Go-to-market experiment — waitlist site, LinkedIn company page, and targeted ad campaigns validating demand signal.",
        },
        {
          type: "text" as const,
          label: "Impact",
          heading: "Outcome",
          body: [
            "Loop demonstrated that the rejection moment — the single most neglected touchpoint in the hiring funnel — is designable, automatable, and strategically valuable. The concept was validated across three dimensions: stakeholders confirmed the business case, applicants confirmed the experience quality, and market signals confirmed real-world demand.",
            "The deeper finding was about AI's role in sensitive communication. Loop works not because it pretends to be human, but because it provides what humans intend but consistently fail to deliver at scale: timely, specific, growth-oriented feedback after a difficult decision. The constraint was empathy — and the AI honored it.",
          ],
        },
      ],
    },
  },
  {
    slug: "goretex-accesswear",
    title: "GORE-TEX Accesswear",
    cardTitle: "Designing a Circular Outerwear Subscription",
    subtitle: "End-to-end service design for a circular outerwear rental subscription.",
    category: "GROWTH DESIGN · SERVICE DESIGN",
    filterCategory: "Strategy" as ProjectCategory,
    year: "2025",
    cardBg: "#2B3B2F",
    cardTextColor: "light" as const,
    coverImage: "/covers/goretex-accesswear.png",    imageConfig: { fit: "cover" as const, position: "center 35%" },
    caseStudy: {
      role: "Design & Growth Strategist",
      timeline: "May — Dec 2025 (9 months)",
      tools: ["Shopify", "Figma", "Stripe", "Supercycle", "Meta Ads", "Mailchimp", "Discord", "Instagram"],
      team: "Lean startup team at Disruptive Edge × GORE-TEX Innovation",
      sections: [
        {
          type: "text" as const,
          label: "Context",
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
          label: "Problem",
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
          label: "Research",
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
          label: "Constraints",
          heading: "Constraints",
          body: [
            "There was no dedicated engineering — I owned the full platform stack. Every Shopify change, checkout fix, and product upload was mine to execute alongside the design work. Every order involved manual procurement, inspection, packaging, and shipping. I built the inventory tracking system from scratch mid-project.",
            "The catalog spanned 10+ outdoor brands — Mountain Hardwear, Patagonia, Burton, Rab, 686, GOREWEAR, 7mesh, Mammut, Rapha, Sitka — each with their own product cycles, asset specs, and approval workflows. Operating without a fulfillment system was a deliberate cost-minimization trade-off for the validation stage, not an oversight.",
          ],
        },
        {
          type: "text" as const,
          label: "Strategy",
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
          label: "Phase 1",
          heading: "Phase 1 \u2014 UX Stabilization",
          body: [
            "My first sprint targeted the homepage and checkout flow. I redesigned the above-the-fold section to address the 65% drop-off, restructured the browse experience with activity-based filters, and repaired the Shopify\u2013Stripe integration to close the broken checkout handoffs. I launched a lead capture modal that generated 15 sign-ups in its first weekend.",
            "To address the trust deficit, I sourced product reviews from brand partners and added a founder narrative section. Sign-ups climbed from 9 to 17 within the first sprint cycle. A second round of 16 usability sessions surfaced the next barrier: pricing comprehension. Users needed MSRP comparisons alongside the subscription price to internalize the value proposition.",
          ],
        },
        {
          type: "text" as const,
          label: "Phase 2",
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
          label: "Phase 3",
          heading: "Phase 3 \u2014 Conversion & Community",
          body: [
            "October marked the shift from awareness to conversion. I activated brand co-marketing with 7mesh, GOREWEAR, and Mountain Hardwear — each campaign drove 90+ new followers. Outreach across 500+ accounts per week generated 1,500+ conversations at a 10% response rate.",
            "I designed and launched the AccessWear Insider Program on Discord — a structured community with a contribution-based rewards system where high-engagement members could earn access to $700\u2013800 jackets. The community became the project\u2019s most valuable feedback loop: accelerating product learning and reducing churn through peer accountability.",
            "Growth compounded through the quarter: 79 sign-ups and 3,000+ Instagram followers by mid-October, 120+ active subscribers by December. The platform reached operational capacity at 85\u2013100 concurrent users — a ceiling set by the manual fulfillment model, not by product demand.",
          ],
        },
        {
          type: "text" as const,
          label: "Impact",
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
          label: "Reflection",
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
    slug: "hp-scale-ui",
    title: "HP: Scale UI",
    cardTitle: "Scaling One Control-Panel UI Across Every HP Printer",
    subtitle: "One control-panel UI system scaled across every HP printer.",
    category: "PRODUCT DESIGN · DESIGN SYSTEMS",
    filterCategory: "Product Design" as ProjectCategory,
    year: "2024",
    cardBg: "#EDECE8",
    cardTextColor: "dark" as const,
    coverImage: "/covers/hp-scale-ui.png",    imageConfig: { fit: "contain" as const, position: "center center", bg: "#e8e8e8" },
    caseStudy: {
      role: "Interaction Designer → Design Lead",
      timeline: "2020 — 2024",
      tools: ["Figma", "Axure", "FigJam", "Scale UI Toolkit", "Jira"],
      team: "Distributed design teams — Singapore, US (Boise / Portland / San Diego), Barcelona, Bangalore",
      sections: [
        {
          type: "text" as const,
          label: "Context",
          heading: "Four Years. Four Sizes. Four Continents.",
          body: [
            "Scale UI is HP’s proprietary design system and shared firmware codebase for printer control panels — a single foundation that keeps the experience consistent while letting the code ship across every market segment. I joined the team as an interaction designer in 2020, owning Print from Source (USB and Network), the Contacts app, and Active Jobs (Print, Copy, Scan, Fax). I left in 2024 as design lead, managing a team of four.",
            "The four years in between shifted the job entirely. Early on, it was about drawing the right screen. By the end, it was about running a process across Singapore, Boise, Portland, San Diego, Barcelona, and Bangalore — keeping eight time zones pointed at the same product decisions.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-scale-ui/scale-ui-hero.png",
          alt: "HP Color LaserJet Pro printer with Scale UI touchscreen control panel displaying the home screen",
          caption: "The HP Color LaserJet Pro 4310dw — the first product launched on Scale UI, shipped globally to 56 million customers.",
        },
        {
          type: "metrics" as const,
          items: [
            { value: "56M", label: "HP customers reached worldwide" },
            { value: "4", label: "Market segments — Home, SoHo, SMB, Enterprise" },
            { value: "4", label: "Display sizes from 21″ to 2.7″" },
            { value: "4★", label: "Rated on PC Mag, Amazon, Digital Trends" },
          ],
        },
        {
          type: "text" as const,
          label: "The Challenge",
          heading: "One File. Every Printer. No Color.",
          body: [
            "A single design file had to serve every printer HP made: a home device shared by 1–5 people, an SMB office of 10–125, an enterprise floor of 125–250, a large-format print shop with 5–25 operators. Each segment had its own team — Singapore owned home and SMB, Boise and Portland owned enterprise and mid-market, Barcelona owned large-format — and my team in Bangalore coordinated across all of them. The file had to hold every segment’s requirements simultaneously while fitting a unified system, and it had to be responsive across a 21″ enterprise touchscreen down to a 2.7″ panel the size of a credit card.",
            "The constraint that made it genuinely hard was color. Designers were not allowed to add it. Visual design — type scale, REM values, palette — lived in the codebase and belonged to the visual design team. We shipped bare-bones wireframes: literally the outline of a button, a skeleton of a screen. Developers preferred it that way, and the system required it. Which meant the structure, hierarchy, and information density had to be exactly right before anything was ever filled in. There was no color to guide the eye, no style to carry weight that the layout hadn’t already earned.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            {
              src: "/casestudy/hp-scale-ui/challenges-archetypes-responsive.png",
              alt: "Scale UI design challenges — myriad of user archetypes and wide range responsive design across display sizes from 22 inches to 2.7 inches",
              caption: "Challenge 1 & 2: Multiple user archetypes across contexts, and responsive design spanning 21″ to 2.7″ displays.",
            },
            {
              src: "/casestudy/hp-scale-ui/challenges-system-segments.png",
              alt: "Scale UI design challenges — unified design system with dropdown variations and segment adherence across Home, SMB, Enterprise, and Large-format",
              caption: "Challenge 3 & 4: Unified design system with component variations, and a single design file serving all market segments.",
            },
          ],
        },
        {
          type: "text" as const,
          label: "Information Architecture",
          heading: "Mapping Every Path Before Writing a Line of Firmware",
          body: [
            "Every use case started with task analysis. Task flows and Data Flow Diagrams mapped the happy path first, then every branch: error states, edge cases, unsupported inputs, detection failures. I validated each with Subject Matter Experts from design and firmware before any wireframe was drawn. This wasn’t process for its own sake — it was how firmware teams built. If a branch wasn’t documented, it didn’t get built.",
            "Print from USB alone splits constantly: USB detection, format-support checks, folder navigation, multi-file selection, unsupported-format errors, interrupted connections. Every one of those branches was resolved at the task-flow stage, so developers never had to make a design decision mid-sprint.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-scale-ui/information-architecture.png",
          alt: "Print from USB Data Flow Diagram showing happy path, edge cases, and error handling scenarios mapped in detail",
          caption: "Print from USB: Data Flow Diagram mapping every decision point, error state, and UI screen in the flow.",
        },
        {
          type: "text" as const,
          label: "Responsive Design",
          heading: "One Screen, Designed Four Times Over",
          body: [
            "Each screen was designed in four sizes: XL (21″), M (8″), S (4.3″), and XS (2.7″). Not scaled — rethought. Layout, density, and navigation were re-evaluated at every breakpoint because a grid that works on a 21″ enterprise panel is useless on something the size of a credit card. Delivery followed five principles: wide-range responsive, detailed, modular, cohesive, and compatible with predecessor products.",
            "The XS breakpoint forced the sharpest decisions. Printers at that price point often had no budget for a touchscreen, so the smallest panels shipped with a physical hard button instead. The home screen and navigation patterns had to be redrawn entirely — there was no pinch-to-zoom, no swipe, no tap target to design around. And through all four sizes, the wireframes stayed exactly that: skeletons. Outlines of buttons. Structure without style. The visual layer would come from the firmware; my job was to make the bones load-bearing.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-scale-ui/design-delivery-responsive.png",
          alt: "Scale UI responsive design delivery showing Print from USB wireframes across XL-M, S, and XS display sizes",
          caption: "Responsive design delivery: the same Print from USB flow adapted across XL–M (21″ to 8″), S (4.3″), and XS (2.7″) displays.",
        },
        {
          type: "text" as const,
          label: "Design-Dev Handoff",
          heading: "Killing Ambiguity Before It Reached Firmware",
          body: [
            "Pattern Tables documented every interactive element on every screen — each mapped to its layout description, availability state, and properties, with terminology matched to internal code repositories. A developer could read the table and trace any element directly to its codebase equivalent, no designer in the room required.",
            "Behavior Tables went further: constraint states, filter logic, sort persistence, modal triggers, scroll behavior. Any interaction detail that would otherwise surface as a developer question at 2 a.m. across a time-zone gap got written down in the table before the build started. That was the point — not to produce documentation, but to stop a category of meeting from ever happening.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            {
              src: "/casestudy/hp-scale-ui/pattern-tables.png",
              alt: "Pattern Buildup Table documenting every interactive element, layout description, and properties per screen area in Scale UI",
              caption: "Pattern Tables: every interactive element mapped by screen area, with layout descriptions matched to internal code repositories.",
            },
            {
              src: "/casestudy/hp-scale-ui/behavior-tables.png",
              alt: "Behavior Table specifying interactive component behavior, constraint states, and filter/sort rules for Scale UI",
              caption: "Behavior Tables: component-level interaction specs — constraint states, filter behavior, sort persistence, and modal triggers.",
            },
          ],
        },
        {
          type: "text" as const,
          label: "Validation",
          heading: "Load the Build. Walk the Flow. Log the Tickets.",
          body: [
            "When development hit milestones, I loaded the build onto a physical printer and ran implementation reviews on the actual device — not an emulator, not a Figma prototype. Each flow got walked end to end: Print from USB meant plug in, navigate Menu › Print › Print from USB, browse and select, set copies and options, print. Contacts ran a parallel cycle: Menu › Contacts, view and search the list, add or edit a contact or group. Issues went straight into Jira.",
            "Hardware makes everything permanent. Once a printer is manufactured, the design is in the plastic — there’s no shipping a hotfix to a control panel. That reality shaped the whole process: get the decisions right upstream, because there’s no patching them downstream.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            {
              src: "/casestudy/hp-scale-ui/validation-print-usb.png",
              alt: "Design validation of Print from USB flow on a physical HP printer, showing the touchscreen UI with Print menu and simplified user journey",
              caption: "Print from USB: validated on physical hardware. Plug in USB → Browse → Select options → Print.",
            },
            {
              src: "/casestudy/hp-scale-ui/validation-contacts.png",
              alt: "Design validation of Contacts app on a physical HP printer, showing the touchscreen UI with app menu and user journey flow",
              caption: "Contacts app: dedicated app for managing device contacts, private groups, and PDLs — validated on hardware.",
            },
          ],
        },
        {
          type: "text" as const,
          label: "Impact",
          heading: "Shipped. Reviewed. Adopted.",
          body: [
            "The HP Color LaserJet Pro MFP 4301fdw — the first product to ship on Scale UI — earned a 4-star review from PC Mag, strong Amazon ratings, and a best laser multifunction printer call from Digital Trends. For a system built to serve four different market segments off one codebase, that reception was the proof point.",
            "Pattern and Behavior Tables became the standard handoff format across every HP printer program that followed. They didn’t replace designer-developer communication — they changed what that communication was about, moving it from what does this do to how do we make this better.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-scale-ui/impact-feedback.png",
          alt: "Impact and feedback — 4-star reviews from PC Mag, Amazon, and Digital Trends for the HP Color LaserJet Pro MFP 4301fdw",
          caption: "Press reception: 4-star reviews across PC Mag, Amazon, and Digital Trends.",
        },
        {
          type: "text" as const,
          label: "Reflection",
          heading: "The Documentation Was the Design",
          body: [
            "Hardware teaches you something software doesn’t: the spec is the product. Every state I documented became firmware in physical units that couldn’t be updated after they left the factory. That pressure made documentation feel less like a task at the end of the process and more like the process itself.",
            "Over four years, the work shifted from pixel craft to cross-team orchestration, and I think that shift is underrated as a design skill. Getting eight time zones to agree on one interaction pattern before any firmware is written is a different problem than drawing the interaction — and in some ways harder. If I were starting again, I’d push earlier for a shared token layer between the Figma toolkit and the firmware codebase. The tables got us close; a proper token bridge would have cut the remaining friction.",
          ],
        },
      ],
    },
  },
  {
    slug: "hp-learning",
    title: "HP Learning",
    cardTitle: "Connecting Classrooms to Living Rooms",
    subtitle: "A B2C EdTech platform bringing printable, hands-on learning home.",
    category: "PRODUCT DESIGN · EDTECH",
    filterCategory: "Product Design" as ProjectCategory,
    year: "2022",
    cardBg: "#C25B3A",
    cardTextColor: "light" as const,
    coverImage: "/covers/hp-learning.png",    imageConfig: { fit: "contain" as const, position: "center center", bg: "#f0ede8" },
    caseStudy: {
      role: "Interaction Designer",
      timeline: "2021 — 2022 (1 year)",
      tools: ["Figma", "FigJam", "Miro", "UserTesting", "Analytics"],
      team: "Interaction Designer, Visual Designer, Design Team Lead, Content Strategy",
      sections: [
        {
          type: "text" as const,
          label: "Context",
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
          label: "Challenge",
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
          label: "Research",
          heading: "Research",
          body: [
            "The global EdTech market was worth US$185.20Bn. Major players — Khan Academy, Toppr, IXL, Byju's, Education.com, Outschool — had launched digital solutions with real, measurable impact. Before designing a single screen, I conducted an in-depth analysis of 16 platforms, mapping existing user flows, interaction patterns, and content systems.",
            "Collaborating with the Research and Marketing teams, I studied consumer psychology theories around value propositions, persuasion, and activation. The central question wasn't just 'what do children need?' — it was 'what creates a habit?' I mapped HP Learning's full activation journey using habit loop theory: Sign Up → Setup Moment → Aha Moment → Habit Moment → Engaged.",
          ],
        },
        {
          type: "text" as const,
          label: "Framework",
          heading: "Habit Loop",
          body: [
            "Activation mapping meant identifying the exact moments that would turn a curious new user into a committed one. I mapped 10 distinct Aha Moments for parents — from finding the right content by their child's age, grade, and activity type, to watching their child score well on a printed exercise, to having the platform surface teacher recommendations before the parent even thought to ask. The product needed to feel less like a utility and more like an educational partner.",
            "Each Aha Moment anchored to a specific trigger. I mapped three layers: habits (regular content consumption, social sharing, progress tracking), triggers (notifications, rewards one step away, school schedule alignment, new content drops), and low-effort actions (open printables, resume learning, mark activity complete). Every design decision downstream traced back to this framework — making sure the product didn't just attract users, but held them.",
          ],
        },
        {
          type: "text" as const,
          label: "Journey",
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
          label: "Execution",
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
          label: "Detail",
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
          label: "Impact",
          heading: "Impact",
          body: [
            "The pilot launched in Russia and Turkey in 2021. My contributions directly drove 2M printed pages across 60K users. Every printed exercise wasn't just educational engagement — it was a tangible signal of print revenue for HP's core business. The redesigned onboarding and activation flow, built on the habit loop framework, measurably improved engagement metrics across the pilot markets.",
            "The experience was architected to integrate with HP Smart app, HP Store rewards, and HP ecosystem products — positioning HP Learning not just as an EdTech play, but as a long-term flywheel for HP's broader consumer business. The pilot proved the concept both educationally and commercially; the architecture was ready to scale.",
          ],
        },
        {
          type: "text" as const,
          label: "Reflection",
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
    slug: "bridgit",
    title: "Bridgit",
    cardTitle: "Reimagining AI for Specialized Educators",
    subtitle: "An AI-powered assistant built for special-education teachers.",
    category: "INCLUSIVE DESIGN RESEARCH",
    filterCategory: "Research" as ProjectCategory,
    year: "2025",
    cardBg: "#1E2E40",
    cardTextColor: "light" as const,
    coverImage: "/covers/bridgit.png",    imageConfig: { fit: "cover" as const, position: "center center" },
    caseStudy: {
      role: "UX Researcher & Interaction Designer",
      timeline: "16 weeks — Microsoft EES × Parsons",
      tools: ["Figma", "Miro", "Semi-structured Interviews", "Affinity Mapping", "Participatory Design"],
      team: "4 designers (Microsoft External Engagement Studio × Parsons School of Design)",
      sections: [
        {
          type: "text" as const,
          label: "Context",
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
          label: "Brief",
          heading: "Open Brief, Documented Assumptions",
          body: [
            "Microsoft gave us no target user, no domain, no constraints. Our team gravitated toward education — specifically, AI's role in elementary learning. Before any fieldwork, we logged six assumptions: 'AI will replace teachers,' 'Parents are nervous about AI,' 'Learning with AI is better than without.' Most turned out to be incomplete.",
            "We scoped a mixed-methods study: literature review across seven papers, semi-structured interviews with seven participants spanning teachers, specialists, administrators, and parents, and three rounds of co-design workshops. The semi-structured format was deliberate — we didn't yet know which threads would matter most.",
          ],
        },
        {
          type: "text" as const,
          label: "Research",
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
          label: "Pivots",
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
          label: "Product",
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
          label: "Reflection",
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
    slug: "flexible-insurance-gig-workers",
    title: "Flexible Insurance for Gig Workers",
    cardTitle: "Rethinking Insurance for Gig Workers",
    subtitle: "AI-driven insurance reimagined for gig workers. 1st place, Rotman Design Challenge.",
    category: "STRATEGY · AI CUSTOMER EXPERIENCE",
    filterCategory: "Strategy" as ProjectCategory,
    year: "2024",
    cardBg: "#FAFAF7",
    cardTextColor: "dark" as const,
    coverImage: "/covers/flexible-insurance.jpg",    imageConfig: { fit: "cover" as const, position: "center center" },
    caseStudy: {
      role: "Service Designer & Strategist",
      timeline: "Jan — Mar 2025 (3 months)",
      tools: ["Figma", "Miro", "User Interviews", "Netnography", "Rotman Design Challenge"],
      team: "Team Northstar × Intact Financial (Rotman Design Challenge, 2025)",
      sections: [
        {
          type: "text" as const,
          label: "Context",
          heading: "Overview",
          body: [
            "1.57 million Canadians earn their primary income through gig work and can't get insurance that fits how they actually work. That gap — between the flexibility gig work demands and the rigidity insurance requires — was the brief Intact Financial handed to the Rotman Design Challenge in March 2025.",
            "As service designer and strategist on Team Northstar, I worked across research synthesis, persona development, and solution framing on a five-person cross-disciplinary team. We won first place. This is the work behind that outcome.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/flexible-insurance-gig-workers/gig-workers-photo.png",
          alt: "A delivery rider on a bicycle and a handyman with tools — two faces of the gig economy",
        },
        {
          type: "metrics" as const,
          items: [
            { value: "$37Bn CAD", label: "Canadian gig insurance market, 2024" },
            { value: "7.3M", label: "Canadians in the gig economy" },
            { value: "1 in 2", label: "Full-time gig workers without coverage" },
            { value: "10", label: "User interviews conducted" },
          ],
        },
        {
          type: "text" as const,
          label: "Problem",
          heading: "The Coverage Gap",
          body: [
            "Canadian auto insurance operates on a binary: personal or commercial. Personal policies void the moment you accept a fare or delivery. Commercial policies start at six-month minimums and are priced for fleet operators, not individuals driving two nights a week.",
            "Gig workers fall into the gap between these two worlds — often working without valid coverage, frequently without knowing it. Our netnography surfaced Reddit threads full of drivers asking 'am I actually covered right now?' and getting no clear answer. The system wasn't designed for them. It shows.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/flexible-insurance-gig-workers/insurance-binary.png",
          alt: "Auto insurance sits between personal and commercial — gig workers fall into the gap between both",
          caption: "The binary that breaks down for gig workers — personal voids during commercial use, commercial starts at 6-month minimums.",
        },
        {
          type: "callout" as const,
          label: "The structural mismatch",
          body: [
            "Traditional auto insurance was built for predictable, full-time use. Gig work is neither. Workers rotate on and off platforms daily, log variable hours, and take unplanned breaks when life demands it. The system has no model for any of this — so workers either over-pay for coverage they don't use, or go uninsured and hope for the best.",
          ],
        },
        {
          type: "text" as const,
          label: "Research",
          heading: "Research Approach",
          body: [
            "We ran 10 interviews across three profiles: North American auto insurance holders, a Canadian personal policyholder, and a Canadian who held both personal and commercial coverage simultaneously. That last profile was the most revealing — she'd spent months navigating the gap herself.",
            "We supplemented with a literature review across Visa, Deloitte, the Geneva Association, Statistics Canada, and the ILO, plus netnography mapping online community conversations about gig coverage confusion across Reddit and Canadian finance forums.",
            "Key findings from personal insurance holders: price drives selection, experience drives retention. Terminology causes confusion at signup. Bundling is preferred for simplicity. Accident reporting creates premium anxiety — a fear that pushes some drivers to stay silent after incidents.",
            "Key findings from gig workers specifically: traditional insurance doesn't bend to flexible schedules. Language barriers contribute significantly to underinsurance in immigrant-heavy gig worker populations. Metric-based performance pressure — optimizing for ratings and delivery times — correlates with higher accident risk.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            {
              src: "/casestudy/flexible-insurance-gig-workers/personal-findings.png",
              alt: "Key findings from personal auto insurance holders — price drives selection, terminology confuses, bundling preferred",
            },
            {
              src: "/casestudy/flexible-insurance-gig-workers/gig-findings.png",
              alt: "Key findings from gig workers — traditional insurance too rigid, language barriers, metric pressure increases accident risk",
            },
          ],
        },
        {
          type: "text" as const,
          label: "Persona",
          heading: "Meet Greg",
          body: [
            "Greg is an urban planner. He has a steady government job and a family to support, and he decides to supplement his income by taking on handyman gigs on evenings and weekends. He has the skills. He has the vehicle. What he doesn't have is a clear path to coverage.",
            "When he searches for commercial insurance, the terminology walls him off immediately — 'third-party liability,' 'endorsement,' 'commercial use classification.' He makes his best guess and signs up for the shortest available plan: six months, whether he needs it or not.",
            "A few months in, his daughter gets sick. He takes a break from gig work. Now he faces an impossible choice: cancel the policy and lose access, or keep paying for coverage on a vehicle he's not using commercially. He keeps paying. When he starts driving again — stressed, financially stretched — he gets into an accident. The money he earned goes toward repairs.",
            "This wasn't a personal failing. The system gave Greg no good options.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            {
              src: "/casestudy/flexible-insurance-gig-workers/greg-step-06.png",
              alt: "Greg storyboard — worried about whether to cancel or keep insurance while daughter is sick",
              caption: "The impossible choice: cancel and lose access, or keep paying for unused coverage.",
            },
            {
              src: "/casestudy/flexible-insurance-gig-workers/greg-step-07.png",
              alt: "Greg storyboard — overwhelmed while driving, gets into an accident",
              caption: "Driving stressed and financially stretched — the system's failure becomes Greg's accident.",
            },
          ],
        },
        {
          type: "pull-quote" as const,
          text: "How might we reimagine the auto insurance experience for gig workers, tailored to their flexible work conditions?",
        },
        {
          type: "text" as const,
          label: "Solution",
          heading: "The Solution: Flexible Commercial Insurance",
          body: [
            "We designed a two-phase model with flexibility as the structural core — not a feature, but the organizing principle.",
            "Phase 1 targets the access and cost problem: rigid minimums and no ability to pause. Phase 2 targets the comprehension and language problem: policy terminology that locks people out before they've even started. Together, they address the three research findings that kept surfacing — rigidity, language barriers, and accident risk driven by financial stress.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/flexible-insurance-gig-workers/solution-overview.png",
          alt: "Flexible Commercial Insurance — onboarding screen showing customizable duration, pause feature, and AI capabilities",
          caption: "The Flexible Commercial Insurance onboarding — three core value props for gig workers.",
        },
        {
          type: "steps" as const,
          title: "Phase 1 — Getting covered on your terms",
          items: [
            {
              num: "01",
              label: "Customizable coverage duration",
              body: "Choose insurance for one week, one month, or longer — not the industry-standard six-month minimum. Coverage starts when you need it and ends when you don't.",
              image: "/casestudy/flexible-insurance-gig-workers/app-buy.png",
              imageAlt: "Flexible Commercial Insurance — buy flow showing customizable coverage duration with 1-week option",
              imageCaption: "Coverage duration selector — buy for a week, not six months.",
            },
            {
              num: "02",
              label: "Pause anytime, no penalty",
              body: "Pause commercial coverage when you're not working. No premiums charged while paused. The policy stays active so you can restart without reapplying.",
              image: "/casestudy/flexible-insurance-gig-workers/app-pause.png",
              imageAlt: "Flexible Commercial Insurance — pause insurance modal with duration selector",
              imageCaption: "Pause flow — no premiums while paused, coverage resumes instantly.",
            },
            {
              num: "03",
              label: "Resume with one tap",
              body: "When life stabilizes and you're ready to work again, there's no waiting period, no re-underwriting, no gap in your record. The system holds your place.",
            },
          ],
        },
        {
          type: "steps" as const,
          title: "Phase 2 — Understanding your policy, in any language",
          items: [
            {
              num: "01",
              label: "Polaris — the policy explainer",
              body: "An AI agent trained on hours of recorded Intact Customer Care conversations. Upload any policy document; Polaris returns a plain-language summary of what's covered, what isn't, and what to watch for at renewal.",
              video: "/casestudy/flexible-insurance-gig-workers/polaris-demo.mp4",
              videoCaption: "Polaris in action — plain-language policy summary with real-time multilingual translation.",
            },
            {
              num: "02",
              label: "Multilingual by design",
              body: "Language barriers were a documented driver of underinsurance in our research. Polaris translates summaries on request — same conversation, any language, no quality drop.",
              image: "/casestudy/flexible-insurance-gig-workers/app-polaris.png",
              imageAlt: "Polaris AI agent — plain-language policy summary with multilingual translation",
              imageCaption: "Polaris summarizes any policy in plain language, translates on request.",
            },
            {
              num: "03",
              label: "AI-assisted claims filing",
              body: "A guided claims flow that reduces documentation burden after an incident — especially important for workers managing stress and financial pressure while still needing to earn.",
              image: "/casestudy/flexible-insurance-gig-workers/app-claims.png",
              imageAlt: "Phase 2 claims — AI-assisted claims filing",
              imageCaption: "AI-assisted claims filing reduces documentation burden after an incident.",
            },
          ],
        },
        {
          type: "text" as const,
          label: "Journey",
          heading: "Greg's Journey, After",
          body: [
            "Greg signs up for Intact's Flexible Commercial Insurance. He uploads his policy to Polaris, gets a plain-language summary in minutes, and picks the right coverage tier without confusion. He earns for two months.",
            "His daughter gets sick. He opens the app and pauses his coverage. No cancellation, no penalty, no financial spiral. When she recovers, he resumes. He drives with a clear head. No accident. The system bent to fit his life instead of the other way around.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            {
              src: "/casestudy/flexible-insurance-gig-workers/greg-after-06.png",
              alt: "Greg storyboard after — pausing insurance with peace of mind while daughter recovers",
              caption: "Pause. No penalty. Resume when ready.",
            },
            {
              src: "/casestudy/flexible-insurance-gig-workers/greg-happy.png",
              alt: "Greg and his daughter happy — the system bent to fit his life",
              caption: "The system bent to fit his life instead of the other way around.",
            },
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/flexible-insurance-gig-workers/1743129747494.jpeg",
          alt: "Team Northstar receiving first place cheque at the Rotman Design Challenge x Intact 2025",
          caption: "Team Northstar — First Place, Rotman Design Challenge x Intact 2025. $5,000 prize.",
        },
        {
          type: "text" as const,
          label: "Impact",
          heading: "Outcome & Reflection",
          body: [
            "Team Northstar placed first at the Rotman Design Challenge. Judges highlighted the before/after service narrative and the two-phase solution structure as strong differentiators — particularly the way Phase 2 addressed language barriers as a systemic design problem rather than an edge case.",
            "My specific contribution spanned the research synthesis, the Greg persona and journey mapping, the before/after service arc, and the Polaris concept framing. This was a pitch and concept project — validated through research and judges, not shipped to users. That distinction matters, and it's worth naming.",
            "What the work demonstrated: when you design for the person with the fewest options, you build something that works better for everyone.",
          ],
        },
      ],
    },
  },
  {
    slug: "greenbox-tempo",
    title: "Tempo: An Intelligence Layer for Wealth Advisors",
    subtitle:
      "An AI system that unifies the wealth advisor's fragmented, eight-tool day.",
    category: "AI STRATEGY · PRODUCT DESIGN · CONSULTING",
    filterCategory: "Strategy" as ProjectCategory,
    year: "2026",
    cardBg: "#0E3B2E",
    cardTextColor: "light" as const,
    coverImage: "/covers/greenbox-tempo.png",    imageConfig: { fit: "cover" as const, position: "center center", bg: "#0E3B2E" },
    caseStudy: {
      role: "Product Designer & Strategist",
      timeline: "2026 · Graduate Strategic Design studio (consulting engagement with GreenBox)",
      tools: ["Jobs-to-be-Done", "Service Blueprinting", "Scenario Planning", "Figma (prototype)", "Concept Design"],
      team: "Yash Sonwaney with Anisha Rajan, Joannah Varghese & Jun Shin (MS Strategic Design & Management)",
      sections: [
        {
          type: "text" as const,
          label: "Context",
          heading: "Overview",
          body: [
            "GreenBox is an early-stage fintech. It builds enterprise software for independent Registered Investment Advisors (RIAs), the people who manage portfolios for the $84 trillion in generational wealth now changing hands. Our studio worked as a strategic consultancy. The class split into four teams, and each team took one of GreenBox's challenge areas. Ours was portfolio management. The brief was open on purpose: find the adjacent possible, the point where AI removes the heaviest friction from an advisor's day without taking over their judgment. We called our answer Tempo, an intelligence layer that connects the advisor's whole day instead of adding one more screen to manage.",
            "The four of us did the work together. The research, the sense-making, the feature decisions, all shared. My part came at the front of the room. I presented. I owned the workflow-and-solutions narrative, walked GreenBox through the Morning Brief, and wrote the how-might-we framing and the roadmap the pitch was built on. The hard part was turning a dense system into a story a client could follow and question in real time.",
            "It landed well. The GreenBox team responded strongly to two things: seeing market movements in the context of specific clients, and the externality-injection idea in the sandbox. They left us with a validated 3.5-year, four-phase roadmap. Over the engagement we defined four AI features across the advisor's full workflow (Detect, Decide, Execute, Verify, Report), and we showed them as a working interactive prototype instead of slides.",
          ],
        },
        {
          type: "placeholder" as const,
          media: "image" as const,
          label: "Tempo — hero shot of the working prototype",
          ratio: "21 / 9",
          width: "wide" as const,
        },
        {
          type: "metrics" as const,
          items: [
            { value: "8", label: "Software tools an advisor juggles daily" },
            { value: "60%", label: "Of the day spent on reconciliation and data-hunting, not advising" },
            { value: "2.5 days/wk", label: "Spent on rebalancing and context-switching" },
            { value: "~140", label: "Client portfolios managed per advisor" },
            { value: "~$500M", label: "Assets under management per advisor" },
          ],
        },
        {
          type: "callout" as const,
          label: "The Strategic Reframe",
          body: [
            "The bottleneck was never the quality of advice. We started describing the RIA as an air traffic controller for money: tracking dozens of portfolios, watching the market, judging risk, all at once, across systems that don't talk to each other. The cost is the time spent keeping eight tools in sync. Every hour an advisor spends reconciling data is an hour they don't spend with clients. Tempo handles the watching and the checking so that time comes back.",
          ],
        },
        {
          type: "text" as const,
          label: "Problem",
          heading: "The Tool Pile",
          body: [
            "An advisor's stack is a pile of point solutions. CRM lives in Salesforce, HubSpot, Wealthbox, or Redtail. Portfolio reporting sits in Orion, Black Diamond, or Advyzon. Planning happens in eMoney or RightCapital. Risk runs through Nitrogen or AndesRisk. Each one does its slice well.",
            "None of them owns the workflow. Context doesn't move between them, so what a client says on Tuesday never reaches the portfolio decision on Wednesday. Advisors also end up bending sales CRMs to a job that is really about client psychology and long-term goals. The advisor becomes the integration layer, carrying information by hand from one system to the next. That manual work is most of the 60%.",
          ],
        },
        {
          type: "text" as const,
          label: "Framework",
          heading: "The Job To Be Done",
          body: [
            "Underneath the tools, the advisor's real job is one loop, repeated for every client: Detect, Decide, Execute, Verify, Report. It runs messy and out of order, with a lot of back-and-forth. We mapped a working day against it and found the time piling up at three stages. That is where we put Tempo.",
          ],
        },
        {
          type: "loop" as const,
          stages: [
            { name: "Detect", targetId: "detect" },
            { name: "Decide", targetId: "decide" },
            { name: "Execute" },
            { name: "Verify", targetId: "verify" },
            { name: "Report" },
          ],
          caption: "The advisor's loop. We focused Tempo on the three stages where the time leaks.",
        },
        {
          type: "problem-gap" as const,
          label: "Detect",
          heading: "Spotting the move before it's old news",
          current:
            "The advisor opens tab after tab to see how the market moved against each client. By the time a signal shows up, the move already happened.",
          desired:
            "Priority signals (drift, breaches, live events, overnight shifts) ranked and waiting before the first call.",
        },
        {
          type: "problem-gap" as const,
          label: "Decide",
          heading: "Testing a move before money moves",
          current:
            "Trades happen across several platforms, with compliance checked after the fact. There is no safe place to try a move first.",
          desired:
            "Model and stress-test a rebalance against real holdings, with compliance built in, before any money moves.",
        },
        {
          type: "problem-gap" as const,
          label: "Verify",
          heading: "Confirming the trade matched the plan",
          current:
            "Reconciliation sits apart from execution, so confirming that trades matched the plan is slow and manual.",
          desired: "Execution and confirmation in one record. No surprises on Monday.",
        },
        {
          type: "pull-quote" as const,
          text: "How might we help an advisor spot market anomalies, understand each client's full financial picture, and check a rebalance, all without leaving the work of advising?",
        },
        {
          type: "concepts-grid" as const,
          heading: "Tempo: One Layer, Four Moves",
          items: [
            {
              name: "Meeting Intelligence",
              tag: "Detect",
              description:
                "Video transcription, relationship memory, and sentiment profiling. Client context captured once and available everywhere.",
            },
            {
              name: "Morning Brief",
              tag: "Detect",
              description:
                "Market Pulse, overnight updates, and today's priorities, ranked by urgency and business impact.",
            },
            {
              name: "Rebalance Sandbox",
              tag: "Decide",
              description:
                "Model, stress-test, and compare strategies against real holdings, then commit to execution.",
            },
            {
              name: "AI Copilot",
              tag: "Always-on",
              description:
                "Always-on monitoring and next-best-action suggestions. The advisor signs off on every move.",
            },
          ],
        },
        {
          type: "divider" as const,
        },
        {
          type: "features" as const,
          label: "Solution",
          heading: "How Tempo works, feature by feature",
          items: [
            { name: "Meeting Intelligence", tag: "Detect", body: "Every client meeting gets transcribed and remembered. What a client said about their kid's tuition in March surfaces when you open their portfolio in June. Mood and trust get read alongside the numbers, so context lives in one place instead of scattered across notes apps.", media: "gif" as const, mediaLabel: "Meeting Intelligence — transcription + relationship memory", ratio: "4 / 3" },
            { name: "Morning Brief", tag: "Detect", body: "The advisor's first five minutes. Market Pulse ties overnight moves to named portfolios, so Sarah sees \"the Hayes family is down $28k\" instead of \"the S&P moved 0.4%.\" Today's Priorities ranks who needs attention by urgency and business impact. The first hour goes to advising, not aggregating.", media: "image" as const, mediaLabel: "Morning Brief — ranked client queue", ratio: "4 / 3" },
            { name: "Rebalance Sandbox", tag: "Decide", body: "A place to test a move before money moves. Inject an externality like a recession or a tech selloff and watch return, volatility, and drawdown respond, then run it across the whole book to see who is exposed. The client called it a graphic equalizer for strategy.", media: "video" as const, mediaLabel: "Rebalance Sandbox — externality stress test", ratio: "4 / 3" },
            { name: "AI Copilot", tag: "Always-on", body: "Always watching the book for drift and risk breaches, surfacing the next best action with reasoning the advisor can override. It proposes, the advisor decides. Judgment stays human, and every action is signed off and logged.", media: "image" as const, mediaLabel: "AI Copilot — next-best-action panel", ratio: "4 / 3" },
          ],
        },
        {
          type: "divider" as const,
        },
        {
          type: "timeline" as const,
          label: "Roadmap",
          title: "A 3.5-year path to the operating system",
          items: [
            { num: "01", label: "Phase 1 · M1–6", body: "Morning Brief dashboard plus an AI Copilot alpha that handles chat and contextual questions. Proves out the data layer." },
            { num: "02", label: "Phase 2 · M7–18", body: "Smart note-taking and relationship memory. Adds the client-intelligence layer." },
            { num: "03", label: "Phase 3 · M19–30", body: "The full Rebalance Sandbox, with sentiment and world data feeding the stress tests." },
            { num: "04", label: "Phase 4 · M31–42", body: "An AI Copilot beta that monitors portfolios on its own, keeps the advisor in the loop, and runs across the dashboard." },
          ],
        },
        {
          type: "callout" as const,
          label: "The Adjacent Possible",
          body: [
            "Tempo's advantage builds over time. Every feature adds a little to the switching cost through stored memory: the longer an advisor uses it, the more it knows about their clients, and the harder it becomes to walk away. An open API lets it sit at the center of an advisor's stack instead of competing as one more app.",
          ],
        },
        {
          type: "concepts-grid" as const,
          heading: "What If: Stress-Testing the Strategy",
          items: [
            {
              name: "A competitor ships a better product",
              tag: "Risk",
              description:
                "The moat is the depth of stored client memory and sentiment, and those switching costs grow every day. A rival feature doesn't reset them.",
            },
            {
              name: "The great wealth transfer accelerates",
              tag: "Risk",
              description:
                "Heirs stay with advisors they trust. Tempo holds the relationship history that carries an advisor through a death, a divorce, or a handoff to the next generation.",
            },
            {
              name: "AI regulation tightens (SEC)",
              tag: "Risk",
              description:
                "Human sign-off is already part of the advisor-in-the-loop design. The audit logs are timestamped, queryable, and exportable, so there is no retrofit when the rules change.",
            },
            {
              name: "The RIA market consolidates",
              tag: "Risk",
              description:
                "A single-advisor setup scales to a multi-advisory firm without a rebuild: roles, audit, compliance, and shared dashboards. The constraint turns into an advantage.",
            },
          ],
        },
        {
          type: "text" as const,
          label: "Outcome",
          heading: "My Role & Reflection",
          body: [
            "This was a strategy and concept engagement. We validated it through a working prototype and a strong response from the client, not a live product. I want to be straight about that.",
            "The thinking was shared. All four of us shaped the problem framing, the research, and the feature set. My own contribution was getting it across the line: presenting the workflow-and-solutions narrative and the Morning Brief to GreenBox, and writing the how-might-we framing and the roadmap that held the pitch together. The job I did was standing between a complicated system and the people who had to decide whether to back it.",
          ],
        },
        {
          type: "embed" as const,
          label: "Live Prototype",
          heading: "Try it yourself",
          intro: "Tempo was a concept, but we shipped a working build. Open it and poke around the dashboard, the Morning Brief, and the Sandbox.",
          url: "https://greenbox-app-rho.vercel.app/",
          ratio: "16 / 10",
          note: "Best viewed on desktop.",
        },
      ],
    },
  },
  {
    slug: "project-sense",
    title: "SENSE: Clinical Trial Intelligence Platform",
    cardTitle: "Turning Trial Data Into Decisions",
    subtitle: "An analytics platform predicting risk and delay across clinical trials.",
    category: "PRODUCT DESIGN · DATA VISUALIZATION",
    filterCategory: "Product Design" as ProjectCategory,
    year: "2019",
    cardBg: "#EDECE8",
    cardTextColor: "dark" as const,
    coverImage: "/casestudy/project-sense/card-cover.png",    imageConfig: { fit: "contain" as const, position: "center center", bg: "#EDECE8" },
    caseStudy: {
      role: "End-to-end UX Designer — Interaction Design & Visual Design",
      timeline: "2018–2019 · 1.5 years",
      tools: ["Figma", "FigJam", "Miro", "Principle", "Adobe Illustrator"],
      team: "Product Owner, Development Lead & Design Manager (client team)",
      sections: [
        {
          type: "text" as const,
          label: "Overview",
          heading: "What SENSE Is",
          body: [
            "SENSE is a data visualization and analytics platform built for pharmaceutical clinical trial operations. It surfaces risk predictions, process interdependencies, and delay signals across active studies — giving trial directors, portfolio leaders, and forecasting managers the visibility they need to make proactive decisions instead of reactive ones.",
            "Clinical trials run between 5 and 8 years on average. They are highly sensitive to external disruption: regulatory delays in one country, site recruitment gaps, supply chain bottlenecks, or a single missed checkpoint can cascade into months of trial extension. Every study contains multiple interdependent processes, and when one slips, the ripple effect across related studies is rarely visible until it is already too late.",
            "I worked as a solo designer from my studio, owning both Interaction Design and Visual Design end-to-end. Our team was a Product Owner, a Development Lead, and a Design Manager from the client side at Accenture.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "5–8 yrs", label: "Average clinical trial lifecycle" },
            { value: "200+", label: "Studies in a single disease-area portfolio" },
            { value: "1.5 yrs", label: "End-to-end design engagement" },
            { value: "2×", label: "Engagement extended on performance" },
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/project-sense/dashboard.png",
          alt: "SENSE platform dashboard showing portfolio-level widgets for clinical trial monitoring",
          caption: "The SENSE home screen: macro-level widgets across an active portfolio, each surfacing a different dimension of trial risk and progress.",
        },
        {
          type: "text" as const,
          label: "Kickoff",
          heading: "A Participatory Design Workshop",
          body: [
            "The project opened with a participatory design-thinking workshop I helped facilitate at the client's headquarters. We invited stakeholder groups spanning operators, management, and leadership — three groups that rarely sat together — and spent two days mapping the problem space from each vantage point.",
            "After synthesizing the output, four latent needs cut across every role. Users needed to predict risk and delays from data before they materialized. They needed to trace individual threads and analyze how processes depended on each other. They needed notifications across levels of operations so the right person was always in the loop. And they needed to communicate proactively with cross-functional partners to actually pivot — not just know something was wrong.",
          ],
        },
        {
          type: "callout" as const,
          label: "Synthesized User Needs",
          body: [
            "Predict risk and delay from data. Analyze process interdependencies. Be notified across operational levels. Communicate and collaborate to make proactive pivoting happen.",
          ],
        },
        {
          type: "text" as const,
          label: "Personas",
          heading: "Three Types of Users",
          body: [
            "SENSE serves three distinct user groups, each with a different scope of responsibility and a different relationship to the data.",
            "Global Trial Directors own a single clinical trial end-to-end. They track one study across its entire lifecycle — often five or more years — and are accountable for on-time execution at every stage. They need depth: process detail, checkpoint status, site-level visibility.",
            "Global Portfolio Directors are senior leaders who own a portfolio of 10 to 50 trials. They need a reliable birds-eye view first, with the ability to zoom into individual studies or processes when they spot a signal worth investigating. Breadth and selectivity are the design centers for this group.",
            "Trial Forecasting Managers work horizontally across trials and portfolios. They oversee resource allocation, expenditure, and financial planning — and need to understand trial progress not as operational detail, but as input to strategic decisions about where to deploy resources next.",
          ],
        },
        {
          type: "concepts-grid" as const,
          heading: "The Archetypes",
          items: [
            {
              name: "Global Trial Director",
              tag: "Single Trial",
              description: "Owns one clinical trial end-to-end across a 5+ year lifecycle. Needs depth — process detail, checkpoint timelines, site-level visibility — to keep a single complex study on track.",
              selected: true,
            },
            {
              name: "Global Portfolio Director",
              tag: "Portfolio of 10–50 Trials",
              description: "Senior leader accountable for a portfolio of active trials. Needs a reliable birds-eye view and the ability to zoom into blockers and dependencies without losing the broader picture.",
              selected: false,
            },
            {
              name: "Trial Forecasting Manager",
              tag: "Cross-Portfolio",
              description: "Works horizontally across trials and portfolios overseeing resource allocation, expenditure, and financial operations. Trial progress is an input to strategic decisions about where to deploy resources.",
              selected: false,
            },
          ],
        },
        {
          type: "text" as const,
          label: "Information Architecture",
          heading: "Two Hierarchies of Data",
          body: [
            "SENSE organizes data across two independent hierarchies. The content hierarchy runs from a single clinical study, to a project (a collection of 8–10 studies), to a portfolio (200+ studies in the same disease area). The geographical hierarchy runs from global, to regional, to country, to individual site — the hospital or location conducting the study.",
            "At any point in the platform, the user chooses their position in both hierarchies simultaneously. The primary workflow flows from the widest view inward: start at portfolio level to get a macro read on risk across studies, deep-dive into a specific process that shows strain, then zoom geographically from global down to a single site. The entire platform was designed to make that traversal feel continuous rather than fragmented.",
          ],
        },
        {
          type: "divider" as const,
        },
        {
          type: "features" as const,
          label: "Features",
          heading: "A Walkthrough of SENSE",
          items: [
            {
              name: "Home: Portfolio Macro View",
              tag: "Home Screen",
              body: "The home screen gives any user a portfolio-level read on the most important data points across all active studies. Multiple widgets display distinct data dimensions simultaneously, letting Global Portfolio Directors spot signals quickly without drilling into individual studies first.",
            },
            {
              name: "Study Overview Widget",
              tag: "Primary Widget",
              body: "The primary home widget uses concentric circles to represent clinical trial milestones. Each circle is a major milestone in the trial process. Within each circle, groups of five blocks represent individual trials. Users hover over a group to preview and select a study — which then filters the entire home dashboard to show data for that study only.",
            },
            {
              name: "Study Summary View",
              tag: "Study Level",
              body: "After selecting a study, the user lands on the Study Summary View: the same widget layout as home, scoped to one trial. It surfaces the study's indication, the next upcoming milestone, and a risk summary pulled from internal tools. At the top, the Clinical Study Process widget shows a compact read on current processes and their risk status at a glance.",
            },
            {
              name: "Process Activity Page",
              tag: "Process Level",
              body: "Going deeper opens the expanded Process Activity page. This shows the full study timeline from kickoff to trial end, all active processes, and every checkpoint mapped against the timeline. Checkpoints determine the status of the process. Throughout SENSE, a consistent visual language separates actuals from predictions: solid fills are based on real data; dashed patterns are predicted. A drug supply setup running dashed red tells a user the process is predicted to miss its date — before it does.",
            },
            {
              name: "Process Details: Country Startup",
              tag: "Country Level",
              body: "Selecting a process opens the Process Details page. A table on the left shows overall process completion and a list of every country where the study is active, with their respective statuses. The timeline on the right maps each checkpoint with planned and actual dates side by side. Users can filter the view to a single country from the list, or switch to a full interactive map and zoom to select a country directly.",
            },
            {
              name: "Country and Site Drill-Down",
              tag: "Site Level",
              body: "The country page lists all hospitals and sites conducting the study in that country, with a map alongside. Selecting a site opens a page with personal contact cards for site staff, the scheduled dates for five major milestones, a quick overview of patients recruited, and any issues recorded in other internal tools. This is the floor of the geographical hierarchy — full transparency on one location.",
            },
            {
              name: "Trace, Notify, Share",
              tag: "Collaboration",
              body: "From the Process Activity page, users can click any checkpoint to see the logic behind its prediction and view upstream and downstream interdependencies. Understanding what a predicted delay implies for adjacent processes turns a warning into an actionable signal. A commenting feature on the Study Summary lets users annotate risks and delays and notify collaborators — closing the loop between insight and action.",
            },
          ],
        },
        {
          type: "video" as const,
          src: "/casestudy/project-sense/walkthrough.mp4",
          caption: "SENSE platform walkthrough: portfolio view → study summary → process activity → country startup → site detail. The full primary flow, end to end.",
        },
        {
          type: "video" as const,
          src: "/casestudy/project-sense/motion.mp4",
          caption: "Interaction detail: the concentric-circle Study Overview widget — hover, select, and filter in action.",
        },
        {
          type: "text" as const,
          label: "Bridge",
          heading: "Bridge: SENSE on a Big Screen",
          body: [
            "As the engagement matured, SENSE was deployed as a six-screen control center at the client's headquarters. The deployment is called Bridge.",
            "Bridge places each major data point on its own screen. Users can pin widgets from any screen and compare data points across portfolios, studies, or any level of the geographical hierarchy simultaneously. Where the web platform was built for individual analyst work, Bridge was designed for the briefing room — a shared workspace where portfolio directors could orient teams, align on risk, and make decisions in front of live data.",
            "The same design system, visual language, and interaction patterns carry over from the individual platform to the six-screen layout without adaptation friction. Bridge is SENSE at a different scale, not a different product.",
          ],
        },
        {
          type: "divider" as const,
        },
        {
          type: "metrics" as const,
          items: [
            { value: "2×", label: "Engagement extended on platform performance" },
            { value: "Bloomberg", label: "Media coverage on launch" },
            { value: "Accenture.com", label: "Featured as client-delivery success story" },
            { value: "1 email", label: "A user wrote to the client CEO to thank them for building SENSE" },
          ],
        },
        {
          type: "pull-quote" as const,
          text: "A user emailed the CEO of the client company to thank them personally for pushing the organization to build something like this. That is the kind of feedback that doesn't fit on a slide.",
          attribution: "Yash Sonwaney, reflecting on the engagement",
        },
        {
          type: "text" as const,
          label: "Impact",
          heading: "Impact",
          body: [
            "SENSE launched to strong reception. The engagement was extended twice based on platform performance — an outcome that reflected the depth of adoption, not just delivery. Upon launch, the platform received media coverage from Bloomberg and was featured on Accenture's website as an example of excellence in client delivery.",
            "The feedback that landed hardest as a designer: a user emailed the CEO of the pharmaceutical client, unprompted, to thank them for pushing the organization to build an app like SENSE. That kind of signal — a user taking time to write to leadership — does not come from a tool that merely works. It comes from something that changed how people work.",
          ],
        },
      ],
    },
  },
];

export const projects = isPreview
  ? allProjects
  : allProjects.filter((p) => !draftSlugs.has(p.slug));

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

export const skillCategories: Record<string, string[]> = {
  Research: [
    "User Research",
    "Information Architecture",
    "Workshop Facilitation",
    "AI Prototyping",
  ],
  Design: [
    "UX Design",
    "Design Systems",
    "Service Design",
    "Figma",
    "Cursor",
    "Claude Code",
  ],
  Strategy: [
    "Product Strategy",
    "Stakeholder Management",
    "Enterprise B2B",
  ],
};

export const skills = Object.values(skillCategories).flat();

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
