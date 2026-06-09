// v2 — updated 2026-03-25
export const siteConfig = {
  name: "Yash Sonwaney",
  initials: "YS",
  tagline: "Designing systems that make complex things feel simple.",
  bio: "Senior product designer with 7+ years of experience shaping enterprise tools, service ecosystems, and AI-native workflows. Currently finishing an MS in Strategic Design & Management at Parsons School of Design.",
  email: "designwyash@gmail.com",
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
  | { type: "image"; src: string; alt: string; caption?: string; layout?: "default" | "mobile"; aspectRatio?: string }
  | { type: "logos"; items: { src: string; alt: string; url?: string }[]; caption?: string }
  | { type: "two-images"; images: { src: string; alt: string; caption?: string }[]; layout?: "default" | "mobile"; columns?: boolean; fit?: "cover" | "contain" }
  | { type: "gallery"; images: { src: string; alt: string; caption?: string }[]; caption?: string }
  | { type: "image-grid"; label?: string; heading?: string; images: { src: string; alt: string; caption?: string }[]; navLabel?: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "pull-quote"; text: string; attribution?: string; label?: string; subtitle?: string; navLabel?: string }
  | { type: "callout"; label: string; body: string[] }
  | { type: "steps"; title?: string; items: { num: string; label: string; body?: string; image?: string; imageAlt?: string; imageCaption?: string; video?: string; videoPoster?: string; videoCaption?: string }[] }
  | { type: "metrics"; items: { value: string; label: string }[]; columns?: number }
  | { type: "chart"; chartId: "subscriber-growth" | "conversion-milestones" | "churn-reasons"; caption?: string }
  | { type: "insight-card"; theme: string; insight: string; verbatim: string; attribution: string }
  | { type: "problem-gap"; label: string; heading: string; current: string; desired: string; navLabel?: string }
  | { type: "concepts-grid"; label?: string; heading: string; items: { name: string; tag: string; description: string; selected?: boolean }[]; navLabel?: string; columns?: number }
  | { type: "video"; src: string; caption?: string; poster?: string; loop?: boolean; maxWidth?: number }
  | { type: "loop"; label?: string; heading?: string; stages: { name: string; targetId?: string; active?: boolean }[]; caption?: string; markers?: { id: string; stage: string }[] }
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
  | { type: "timeline"; label?: string; title?: string; items: { num: string; label: string; body?: string }[]; navLabel?: string }
  | { type: "divider" }
  | { type: "placeholder"; media: "image" | "video" | "gif"; label: string; ratio?: string; width?: "content" | "wide" }
  | { type: "features"; label?: string; heading?: string; items: { name: string; tag?: string; body: string; media?: "image" | "video" | "gif"; mediaLabel?: string; ratio?: string; src?: string }[]; navLabel?: string }
  | { type: "embed"; label?: string; heading?: string; intro?: string; url: string; ratio?: string; note?: string; navLabel?: string }
  | { type: "button"; label: string; url: string }
  | { type: "buttons"; items: { label: string; url: string }[] }
  | { type: "product-cards"; items: { src: string; alt: string; label: string; url: string }[]; note?: string };

export interface CaseStudy {
  role: string;
  timeline: string;
  tools: string[];
  team: string;
  sections: CaseStudySection[];
}


const allProjects = [
  {
    slug: "beyond-efficiency",
    title: "Beyond Efficiency: Understanding the Paradox of AI in Hiring",
    cardTitle: "Loop AI: Technology-led Inequities in Hiring",
    cardMetric: "In-depth qualitative and quantitative research for 4+ roles",
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
            "Between 2022 and 2025, more than 600,000 workers were laid off across major technology companies. At the same time, over 95–98% of Fortune 500 companies adopted applicant tracking systems that automatically filter out 70–75% of applications before any human reviews them. The result: a hiring ecosystem that moves faster than ever, and works worse than ever.",
            "Employers face floods of hundreds or thousands of applications per role, most low-signal or AI-generated. Qualified candidates submit into black boxes, wait in silence, and get ghosted at rates that would have been unacceptable a decade ago. Both sides are more frustrated than the tools promised. This research set out to understand why, and where design can intervene.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/hypothesis.png",
          alt: "Research hypothesis: the paradox of efficiency in AI-driven hiring",
          caption: "The central contradiction: automation creates volume without relevance for employers, while qualified candidates are filtered out before a human sees them.",
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
            "These questions were held together deliberately. The hiring ecosystem is relational: what breaks down for candidates is inseparable from what breaks down for recruiters. You can't understand one without the other.",
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
            "Primary research: 10 employer-side interviews across three tiers: 4 recruiters and HR specialists, 1 hiring manager, and 5 leadership participants including Chief People Officers and Directors of Talent Acquisition. A 52-response candidate survey targeting early-to-mid career designers and software engineers actively job seeking within 12 months. A 40-minute focus group discussion with 11 design and strategy professionals.",
            "Secondary research: a literature review drawing on Harvard Business Review, SHRM, Goldman Sachs, and the St. Louis Federal Reserve; a social media scan across LinkedIn, Reddit (r/UXDesign), and Blind; and a detailed ATS market analysis spanning Greenhouse, Workday, Lever, SAP SuccessFactors, Ashby, and eight other platforms.",
            "To map the system as a whole, we applied the D-A-R-N framework (Devices, Actors, Representations, Networks), a sociotechnical method that reveals how ATS platforms, AI scoring algorithms, LinkedIn Recruiter, resumes, job descriptions, and referral networks interact as infrastructure. This surfaced where power actually concentrates: not at the employer or candidate layer, but in the Representatives and Network layers controlled by ATS vendors and platforms.",
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
            "Most candidates move through a 7-stage pipeline: job posting, resume submission, AI-powered skill extraction, ML ranking by fit score, recruiter review and shortlisting, interview coordination, and final decision. Stages 3 and 4 (skill extraction and ranking) have the densest AI involvement and the least human oversight.",
            "What looks like a clean automated funnel conceals a different reality. Recruiters consistently described their work as still largely manual, concentrated precisely at the stages AI is supposed to streamline. One recruiter spent an entire week on a single role that received over a thousand applications. The AI filtered, but the shortlist still required substantial human judgment, and the 800 candidates never reviewed were simply abandoned.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/ats-workflow.png",
          alt: "7-stage ATS workflow showing where AI is densely integrated vs. only assisting",
          caption: "The 7-stage ATS pipeline: stages 3 and 4 have the densest AI involvement, yet recruiters report those stages still require the heaviest manual effort.",
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/darn-map.png",
          alt: "D-A-R-N system map of the hiring ecosystem",
          caption: "The D-A-R-N map: where power concentrates in the Representatives and Network layers while both sides experience the system as opaque.",
        },
        {
          type: "text" as const,
          label: "Findings",
          heading: "What the Research Revealed",
          body: [
            "Across interviews, surveys, and focus groups, four dominant themes emerged, each revealing a different dimension of how AI-driven hiring is reshaping the relationship between employers and candidates.",
          ],
        },
        {
          type: "insight-card" as const,
          theme: "Theme 1: Ethics, Bias & Tolerance for Error",
          insight: "When hiring at scale, exclusion caused by automated screening is frequently framed as an unavoidable operational trade-off, not a problem that can be designed around.",
          verbatim: "If the problem is large, some amount of error is allowed, it's part of the process. If I'm hiring a Chief AI Officer, I hardly use any tool. But for bulk hiring, I have to. Organizations must figure out what they're trying to do and how much tolerance to mistakes they can afford.",
          attribution: "Chief Talent Officer (P006), Global Tech Company",
        },
        {
          type: "insight-card" as const,
          theme: "Theme 2: De-sensitization & De-humanization of Candidates",
          insight: "Metric pressures (time-to-hire, pipeline throughput) reduce each application to seconds of attention, making meaningful evaluation of portfolios and nuanced work nearly impossible.",
          verbatim: "If you get into that space, it's actually a very negative experience because you're not allowing that person a fair chance to be seen. If you're in Greenhouse all day trying to keep up with how many people are applying, you're basically only giving them eight seconds each. How much are you truly going to see?",
          attribution: "Head of Talent, Design Agency (P001)",
        },
        {
          type: "insight-card" as const,
          theme: "Theme 3: Knowing When & How to Automate",
          insight: "Experienced practitioners don't reject automation, they apply it selectively. The real skill is distinguishing tasks suitable for automation from decisions requiring contextual human judgment.",
          verbatim: "With us hinting AI into our work, I think it's very normal, how do we use our judgment onto what work is operational versus something that needs human intervention? Using that judgment to see: this should be automated versus this needs us to step in.",
          attribution: "HR Professional (P004), Manufacturing Company",
        },
        {
          type: "insight-card" as const,
          theme: "Theme 4: From Relationship-Based to System-Driven Recruitment",
          insight: "Technology has expanded recruiting reach while replacing relationship-building with filters and dashboards. The highest-quality hires still come from networks and direct outreach, a reality that structurally advantages insiders.",
          verbatim: "Earlier this week a client reached out. I texted somebody that I knew. They said yes. I sent them over and they interviewed right then. I didn't open a job, I didn't post anything. I've technically spent 20 years to be able to do that, but I might have spent all of 15 minutes, and I'll send an invoice for $40,000.",
          attribution: "Recruiting Leader (P007), Design Agency",
        },
        {
          type: "text" as const,
          label: "Candidate Side",
          heading: "What Candidates Are Experiencing",
          body: [
            "Survey data and focus group discussions paint a consistent picture: the hiring process has become psychologically punishing in ways that have nothing to do with merit. 60% of respondents reported severe mental health impacts: stress, burnout, discouragement. The dominant driver isn't rejection; it's opacity. Candidates describe applying to dozens of roles with no indication that a human ever reviewed their work.",
            "In response, gaming the system has become normalized. Candidates openly mirror job description keywords, reformat resumes per ATS, and use generative AI to optimize phrasing, not to misrepresent experience, but to survive automated filters that would otherwise screen them out. The system rewards pattern-matching over capability. Candidates know it.",
            "61% of respondents who reached the interview stage were ghosted there — after already investing significant time and emotional energy. Post-interview silence is the highest-trust-cost moment in the entire funnel.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/candidate-journey.png",
          alt: "Candidate journey map showing emotional states from awareness through offer",
          caption: "The candidate journey: overwhelmed at awareness, strained during preparation, guarded hope through screening. Ghosting post-interview is the highest emotional cost.",
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
            "Recruiters described being overwhelmed, not empowered. One agency lead received 1,000 applicants within days of posting a role, manually reviewed 160, surfaced 20 strong candidates, shared 10 with the client, and left 800 people who were never seen at all. Another recruiter estimated that 70% of inbound applications were fake.",
            "A new category of problem has emerged: fraud. Multiple participants reported interviewing deepfake candidates (AI-generated identities, not just keyword-stuffed resumes). The most valued AI use case among recruiters wasn't ranking or scoring. It was fraud detection, the only top-of-funnel AI capability they consistently trusted.",
            "Hiring managers named a subtler failure: a false sense of effectiveness. Just because you can process candidates quickly doesn't mean it's being done the right way. The system is built around speed, not human-centeredness. And the best candidates still come from direct LinkedIn outreach or existing relationships, a fully manual process no AI tool has replaced.",
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
            "Following data collection, we used the Theme–Insight–Verbatim framework to cluster findings across all methods into three problem gap areas. Each gap is defined by a current state (what is actually happening) and a desired state (what should be happening instead). Together they form the design surface.",
          ],
        },
        {
          type: "problem-gap" as const,
          label: "Problem 01",
          heading: "Ghosting",
          current: "Candidates are removed from consideration at multiple stages (including post-interview) without notice, feedback, or closure. This erodes trust in the company brand and produces measurable psychological harm at every stage.",
          desired: "Every candidate receives stage-by-stage updates regardless of outcome. Rejection includes constructive feedback. Closure is standard, not exceptional, maintaining psychological safety and separating outcome from self-worth.",
        },
        {
          type: "problem-gap" as const,
          label: "Problem 02",
          heading: "Spray & Pray",
          current: "As a rational response to opacity, candidates apply to any available posting regardless of fit, prioritizing volume over quality. This floods recruiters with low-signal applications and reduces callback rates for everyone, including genuinely qualified candidates.",
          desired: "Candidates apply mindfully and with intent, to roles that align with their trajectory, with tailored materials highlighting transferable skills and fit. Fewer applications; higher signal. Both sides benefit.",
        },
        {
          type: "problem-gap" as const,
          label: "Problem 03",
          heading: "Outbound Sourcing at Scale",
          current: "Outbound platforms like LinkedIn Recruiter and Indeed increase talent pool access but deliver high volume at low signal quality, often with clear mismatch or fraudulent profiles. This lengthens time-to-hire and creates dehumanizing conditions on both sides.",
          desired: "Recruiters prioritize relationship-based and network-first sourcing before mass outbound channels. Internal employee networks and warm introductions are the first filter. Outbound is a fallback, not the default.",
        },
        {
          type: "text" as const,
          label: "Needs",
          heading: "Synthesized Needs: Both Sides",
          body: [
            "From surveys and focus groups, four core candidate needs: trust through fair and consistent evaluation criteria; closure (rejection is acceptable, disappearing is not); protection from process burnout; and restored agency in a system that currently feels rigged.",
            "From recruiter and hiring manager interviews, four parallel employer needs: identifying authentic candidates among AI-generated applications; managing volume without sacrificing evaluation quality; closing communication gaps that ghost candidates unintentionally; and using AI as a cognitive offloader for mechanical tasks so humans can focus judgment on evaluation and relationships.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            {
              src: "/case-studies/beyond-efficiency/candidate-needs.png",
              alt: "Four synthesized candidate needs: Trust, Closure, Protection from Burnout, Restored Agency",
              caption: "Four candidate needs: trust, closure, burnout protection, and restored agency.",
            },
            {
              src: "/case-studies/beyond-efficiency/employer-needs.png",
              alt: "Four synthesized employer needs: Authentic Candidates, Volume Management, Communication, Cognitive Offloading",
              caption: "Four employer needs: authenticity, volume management, communication, and cognitive offloading.",
            },
          ],
        },
        {
          type: "text" as const,
          label: "Ideation",
          heading: "From Insights to Ideation",
          body: [
            "Synthesis crystallized two design principles: automate the administrative, not the evaluative (let technology handle mechanical tasks so humans can bring judgment to decisions that matter); and close the feedback loop (every interaction in the hiring funnel should produce a legible signal for the person on the receiving end).",
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
            "The theory of change maps how a single design intervention (cognitive offloading of recruiter communication) cascades into systemic improvement. When AI handles status updates, rejections, and follow-ups, recruiters reclaim time for deeper candidate evaluation. Candidates receive consistent, timely signals instead of silence. Trust rebuilds on both sides.",
            "Less unintentional silence leads to more trust, which attracts more engaged and higher-quality candidates, which produces better hiring outcomes at lower cost. AI as a cognitive offloader for communication, not a gatekeeper for exclusion.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/theory-of-change.png",
          alt: "Theory of change: cognitive offloading cascades into better hiring outcomes",
          caption: "Theory of change: cognitive offloading enables deeper evaluation, consistent communication, and higher-quality candidates.",
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
              description: "An AI job application strategy tool that helps candidates apply with higher intent: fewer, better-targeted applications with tailored materials that address actual fit.",
              selected: false,
            },
            {
              name: "Vouch",
              tag: "Sourcing",
              description: "A network-based candidate sourcing platform that activates employee referral networks before mass outbound channels, putting relationship-based hiring within reach of companies without established pipelines.",
              selected: false,
            },
            {
              name: "Prove",
              tag: "Assessment",
              description: "A task-based application system that replaces resume screening with short, role-specific assessments, surfacing actual capability over keyword-optimized representations of it.",
              selected: false,
            },
          ],
        },
        {
          type: "text" as const,
          label: "Solution",
          heading: "Final Proposition: Loop",
          body: [
            "After the final review, Loop was selected as the primary proposition for deeper development. The selection was driven by research signal strength: ghosting appeared as a breakdown across every data collection method: recruiter interviews, the candidate survey, the focus group, and the social media scan. It was the most consistent and emotionally costly failure in the funnel, and critically, both sides agreed it was structural rather than intentional.",
            "Recruiters described ghosting as an inevitable outcome of volume, manual process, and tool constraints, not indifference. Candidates described it as the primary driver of distrust in companies and the hiring process itself. Loop addresses this shared pain point by intervening precisely where transparency has eroded, without adding manual burden to already-overwhelmed recruiters.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/loop-concept.png",
          alt: "Loop: Candidate Communication Agent, keeping every candidate informed automatically",
          caption: "Loop, an AI communication agent that eliminates ghosting by keeping every candidate informed automatically, freeing recruiters to focus on evaluation.",
        },
      ],
    },
  },
  {
    slug: "loop-strategy",
    title: "Loop : Strategy",
    cardTitle: "Loop AI: Turning Rejection into Brand Equity",
    cardMetric: "Business, growth, marketing and product strategy",
    subtitle: "An AI intelligence layer that turns candidate rejection into recruiter brand equity.",
    category: "PRODUCT DESIGN · STRATEGY · AI PRODUCT",
    filterCategory: "Strategy" as ProjectCategory,
    year: "2025",
    cardBg: "#1C1C1A",
    cardTextColor: "light" as const,
    coverImage: "/covers/loop-strategy.png",    imageConfig: { fit: "contain" as const, position: "center center", bg: "#faf9f7" },
    caseStudy: {
      role: "Product Designer & Strategist",
      timeline: "Oct 2025 to Apr 2026",
      tools: ["Figma", "Claude API", "Business Model Canvas", "Vignette Study", "Concept Testing", "LinkedIn Ads", "Vercel", "Dovetail"],
      team: "Yash Sonwaney & Ananya Harshini",
      sections: [
        {
          type: "text" as const,
          label: "Context",
          heading: "Overview",
          body: [
            "Every open role receives an average of 400 applications. One person gets hired. The other 399 hear nothing, or receive a generic template that tells them less than silence would. Ghosting is not a recruiter character flaw; it is a structural failure. Recruiters are buried under volume and manual process, and existing tools simply stop at the hiring decision. The rejection moment (the single highest-volume brand interaction most companies have) goes entirely undesigned.",
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
            "Virgin Media discovered this the hard way: 18% of their 123,000 rejected applicants were existing customers, and 6% cancelled their subscriptions after a poor rejection experience. Published behavioral research confirmed the pattern: positive rejection experiences fully mitigate negative effects, while silence or generic templates actively erode employer brand perception. The rejection moment is a measurable business liability, not an HR inconvenience.",
          ],
        },
        {
          type: "problem-gap" as const,
          label: "Market Gap",
          heading: "No One Owns the Rejection Journey",
          current: "ATS platforms manage candidate pipelines up to the hiring decision. After rejection, candidates enter a communication void, receiving either a generic template email or total silence. No market player handles what happens after 'no.' Recruiters lack the bandwidth, and existing tools lack the capability.",
          desired: "An intelligent layer that activates after the hiring decision, autonomously managing personalized rejection conversations, closing the loop with constructive feedback, handling follow-up questions, and converting a negative moment into brand equity.",
        },
        {
          type: "image" as const,
          src: "/case-studies/loop-strategy/market-gap.png",
          alt: "Market landscape showing no existing solution for the post-rejection candidate journey",
          caption: "ATS market analysis: every major platform drops the candidate at the rejection decision. The post-rejection journey is undesigned territory.",
        },
        {
          type: "text" as const,
          label: "Product",
          heading: "How Loop Works",
          body: [
            "Loop is not a chatbot bolted onto an ATS. It is an AI intelligence layer trained on organizational context: company structure, team skill graphs, hiring trends, and culture-versus-talent profiles. It activates at a specific moment: after the first human interview round, when the recruiter has decided to reject a candidate but lacks the bandwidth to communicate that decision meaningfully.",
          ],
        },
        {
          type: "steps" as const,
          title: "The Loop Workflow",
          items: [
            {
              num: "01",
              label: "Setup",
              body: "Loop ingests organizational context: structure, policies, team skill graphs, hiring trends, and culture-versus-talent profiles. We designed this as a prerequisite because generic rejection is what candidates already get. Without company-specific context, Loop would just be a faster template.",
              image: "/case-studies/loop-strategy/step-setup.png",
              imageAlt: "Loop setup: organizational context ingestion",
            },
            {
              num: "02",
              label: "Activation",
              body: "Loop activates after the first human interview round. We chose this trigger point deliberately: earlier and there's no meaningful feedback to give; later and the candidate has already been ghosted. The recruiter makes the rejection decision; Loop handles the communication.",
              image: "/case-studies/loop-strategy/step-activation.png",
              imageAlt: "Loop activation trigger after interview round",
            },
            {
              num: "03",
              label: "AI Outreach",
              body: "Loop transforms raw interview notes into a personalized rejection email with constructive, role-specific feedback. The tone was designed to be direct but warm: no corporate hedging, no false encouragement. Specific enough to be useful, honest enough to be respected.",
              image: "/case-studies/loop-strategy/step-outreach.png",
              imageAlt: "Personalized rejection email with constructive feedback",
            },
            {
              num: "04",
              label: "Conversation",
              body: "If the candidate replies, Loop manages follow-up questions. A key design constraint: responses are growth-focused and never numerical. When candidates asked 'rate me 1-10,' Loop redirects to actionable self-improvement without feeling evasive, because ranking candidates against each other undermines the dignity the rejection was designed to preserve.",
              image: "/case-studies/loop-strategy/step-conversation.png",
              imageAlt: "Loop managing a follow-up conversation with a candidate",
            },
            {
              num: "05",
              label: "Closure",
              body: "Loop closes conversations gracefully, ensuring every candidate reaches a dignified endpoint rather than fading into silence. The closing pattern was iterated through applicant workshops until participants consistently described it as complete rather than abrupt.",
              image: "/case-studies/loop-strategy/step-closure.png",
              imageAlt: "Loop closing a conversation with a candidate",
            },
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/loop-strategy/product-demo.png",
          alt: "Loop product interface showing rejection email generation from raw interview notes",
          caption: "From raw interview notes to personalized rejection with constructive feedback: the core transformation Loop performs.",
        },
        {
          type: "text" as const,
          label: "Design",
          heading: "Designing the Conversation",
          body: [
            "The hardest design challenge was tone. Automated rejection easily reads as cold or performative. We iterated through three tonal registers: clinical, empathetic-corporate, and direct-warm. We tested each with applicants. Direct-warm won consistently: specific about what happened, honest about the decision, and focused on what the candidate could do next. No softening language, no hollow encouragement.",
            "The conversation design followed a principle we called 'structured honesty.' Loop discloses what it can (process-specific feedback, skill gaps observed, team composition context) and draws clear boundaries around what it cannot (comparative rankings, internal deliberation, numerical scores). Candidates respected the boundaries more when they were explicitly stated than when information was deflected.",
          ],
        },
        {
          type: "text" as const,
          label: "Validation",
          heading: "Concept Testing with Stakeholders",
          body: [
            "We tested the Loop concept with recruiting professionals across organizations, with particular focus on high-volume hiring contexts where rejection communication breaks down most severely. The concept resonated strongest in environments with 12-month hiring cycles, where the scale of unmanaged rejections compounds into measurable reputation risk.",
            "Stakeholders immediately grasped the strategic value: this was not about making recruiters' lives easier, it was about protecting the organization from a brand liability that scales linearly with hiring volume.",
          ],
        },
        {
          type: "insight-card" as const,
          theme: "Stakeholder Validation",
          insight: "Recruiters validated both the problem severity and Loop's positioning, framing reputation risk as the primary concern, not workflow efficiency.",
          verbatim: "Especially for really high-volume roles, or recruiting departments that routinely have both high-volume roles and many recs at the same time. I think this concept could be a real gamechanger.",
          attribution: "Recruiting Professional, Concept Testing Session",
        },
        {
          type: "text" as const,
          label: "Applicant Testing",
          heading: "Vignette Study with Applicants",
          body: [
            "To validate the candidate-facing experience, we conducted a vignette study using a functional prototype built on the Claude API. Participants received a Loop-generated rejection email based on realistic interview scenarios, then interacted with the conversational agent in real time, asking follow-up questions, probing for detail, and testing boundaries.",
            "The most revealing moments came when candidates pushed back. One asked Loop to rate their application on a scale of 1 to 10. Another asked what the hired candidate had that they lacked. These were the interactions we designed for — and the ones that proved the conversation architecture worked. Loop redirected without deflecting, and candidates described the experience as respectful rather than evasive.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            {
              src: "/case-studies/loop-strategy/vignette-email.png",
              alt: "Loop-generated rejection email with personalized constructive feedback",
              caption: "The rejection email: specific, constructive, and grounded in the candidate's actual interview performance.",
            },
            {
              src: "/case-studies/loop-strategy/vignette-conversation.png",
              alt: "Candidate follow-up conversation with Loop agent",
              caption: "Follow-up conversation: growth-focused responses that answer hard questions without ranking or comparing candidates.",
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
            "Early results confirmed the signal: 12 waitlist signups from targeted outreach, over 3,000 impressions across LinkedIn campaigns, and 2,100 community members reached. Small numbers for a launch, meaningful numbers for a concept validation from a two-person team with no marketing budget beyond a boosted post.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/loop-strategy/gtm-artifacts.png",
          alt: "Loop go-to-market artifacts: waitlist site, LinkedIn page, and ad campaigns",
          caption: "Go-to-market experiment: waitlist site, LinkedIn company page, and targeted ad campaigns validating demand signal.",
        },
        {
          type: "text" as const,
          label: "Impact",
          heading: "Outcome",
          body: [
            "Loop demonstrated that the rejection moment (the single most neglected touchpoint in the hiring funnel) is designable, automatable, and strategically valuable. The concept was validated across three dimensions: stakeholders confirmed the business case, applicants confirmed the experience quality, and market signals confirmed real-world demand.",
            "The deeper finding was about AI's role in sensitive communication. Loop works not because it pretends to be human, but because it provides what humans intend but consistently fail to deliver at scale: timely, specific, growth-oriented feedback after a difficult decision. The constraint was empathy, and the AI honored it.",
          ],
        },
      ],
    },
  },
  {
    slug: "goretex-accesswear",
    draft: true, // hidden from the grid in production; visible on dev/preview + localhost
    title: "GORE-TEX AccessWear: Designing a Circular Outerwear Subscription",
    cardTitle: "GORE-TEX AccessWear: Designing a Circular Outerwear Subscription",
    cardMetric: "120+ active subscribers · 10/10 NPS",
    subtitle: "End-to-end service design for a circular outerwear rental subscription.",
    category: "GROWTH DESIGN · SERVICE DESIGN",
    filterCategory: "Strategy" as ProjectCategory,
    year: "2025",
    cardBg: "#2B3B2F",
    cardTextColor: "light" as const,
    coverImage: "/covers/goretex-accesswear.png",    imageConfig: { fit: "cover" as const, position: "center 35%" },
    caseStudy: {
      role: "Design & Growth Strategist",
      timeline: "May to Dec 2025 (9 months)",
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
          caption: "Conversion rate as % of the original 200-person waitlist: before and after each phase of work.",
        },
        {
          type: "text" as const,
          label: "Research",
          heading: "Research & Synthesis",
          body: [
            "Sixteen moderated usability sessions in month one surfaced three failure patterns that cut across participant types.",
            "Trust signals were absent. The site lacked social proof, product reviews, and a recognizable brand voice. Users described it as anonymous, they wanted to know who was behind the service before committing a recurring payment.",
            "The browse-to-subscribe journey was fragmented. No activity-based filtering, and checkout required navigating three disconnected systems. Users lost orientation mid-flow and defaulted to exit rather than working through the confusion.",
            "Seasonality was a structural constraint to design around, not just a timing problem. A late-spring launch meant summer was the wrong context to convert for winter jackets. The research reframed this as an opportunity: use low-demand months to stabilize the UX and build the audience, so the system was primed when seasonal intent arrived.",
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
            "Phase 1 (Stabilize, May\u2013July): Fix the broken conversion funnel, establish trust signals, and run low-investment acquisition experiments to identify which channels and messages deserved deeper investment.",
            "Phase 2 (Build, August\u2013September): With a stable core flow, shift to systematic value proposition testing across paid and organic channels, and build the lifecycle email infrastructure needed for retention before peak season.",
            "Phase 3 (Convert, October\u2013December): Activate the full conversion system as seasonal demand rose, brand co-marketing, community launch, and structured outbound across warm channels.",
          ],
        },
        {
          type: "chart" as const,
          chartId: "subscriber-growth" as const,
          caption: "Active subscriber growth across three design phases, May to December 2025.",
        },
        {
          type: "image" as const,
          src: "/covers/goretex-accesswear.png",
          alt: "GORE-TEX AccessWear platform showing the rental subscription experience",
          caption: "The AccessWear platform, manually operated throughout the pilot to validate demand patterns and user behavior before committing to scaled infrastructure.",
        },
        {
          type: "text" as const,
          label: "Phase 1",
          heading: "Phase 1: UX Stabilization",
          body: [
            "My first sprint targeted the homepage and checkout flow. I redesigned the above-the-fold section to address the 65% drop-off, restructured the browse experience with activity-based filters, and repaired the Shopify\u2013Stripe integration to close the broken checkout handoffs. I launched a lead capture modal that generated 15 sign-ups in its first weekend.",
            "To address the trust deficit, I sourced product reviews from brand partners and added a founder narrative section. Sign-ups climbed from 9 to 17 within the first sprint cycle. A second round of 16 usability sessions surfaced the next barrier: pricing comprehension. Users needed MSRP comparisons alongside the subscription price to internalize the value proposition.",
          ],
        },
        {
          type: "text" as const,
          label: "Phase 2",
          heading: "Phase 2: Messaging & Lifecycle Infrastructure",
          body: [
            "With a stable conversion funnel, I turned to the top of the funnel, specifically which value propositions moved people. I designed and launched 18 awareness ads testing distinct framings: try-before-you-buy, activity-specific gear, multi-brand access, sustainability, and travel use cases. Try-before-you-buy consistently outperformed, with CTRs reaching 6.56% and CPCs as low as $0.24.",
            "In parallel, I built a 14-touchpoint email lifecycle covering non-user nurture, subscriber onboarding, engagement, and churn recovery. The mailing list reached 740 subscribers. By the end of Phase 2, I had a clear segmentation of high-intent users, a validated messaging hierarchy, and a defined channel strategy, everything needed to run a full conversion push in peak season.",
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
          heading: "Phase 3: Conversion & Community",
          body: [
            "October marked the shift from awareness to conversion. I activated brand co-marketing with 7mesh, GOREWEAR, and Mountain Hardwear, each campaign drove 90+ new followers. Outreach across 500+ accounts per week generated 1,500+ conversations at a 10% response rate.",
            "I designed and launched the AccessWear Insider Program on Discord, a structured community with a contribution-based rewards system where high-engagement members could earn access to $700\u2013800 jackets. The community became the project\u2019s most valuable feedback loop: accelerating product learning and reducing churn through peer accountability.",
            "Growth compounded through the quarter: 79 sign-ups and 3,000+ Instagram followers by mid-October, 120+ active subscribers by December. The platform reached operational capacity at 85\u2013100 concurrent users, a ceiling set by the manual fulfillment model, not by product demand.",
          ],
        },
        {
          type: "text" as const,
          label: "Impact",
          heading: "Outcomes",
          body: [
            "The pilot validated the core hypothesis: premium outdoor consumers will engage with a subscription access model when the service experience is frictionless and the product variety is compelling. Active subscribers gave a 10/10 NPS, and organic community behavior (members sharing trip photos, recruiting peers, requesting new gear categories) provided qualitative signal that went well beyond the headline metrics.",
            "Churn data deepened the picture. The primary drivers for leaving were limited jacket variety (80%) and seasonal timing (20%), inventory and catalog constraints, not dissatisfaction with the model. When asked what would bring them back, 80% cited broader selection and 60% cited access to additional gear categories. Both are solvable with scale.",
            "Brand partner engagement strengthened independently of subscriber growth: Mountain Hardwear moved to a collaborative marketing arrangement, GOREWEAR co-created a giveaway campaign, and leadership from Mammut, Burton, and Mountain Hardwear requested follow-up sessions. Rent the Runway co-founder Jenny Fleiss was brought in as a consultant on financial modeling.",
          ],
        },
        {
          type: "chart" as const,
          chartId: "churn-reasons" as const,
          caption: "Exit reasons cluster around inventory constraints and seasonal timing, not dissatisfaction with the subscription model itself.",
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
    title: "HP Scale UI: One Control Panel for 100+ Million Customers",
    cardTitle: "HP Scale UI: One Control Panel for 100M+ Customers",
    cardMetric: "25+ printer programs shipped on Scale UI",
    subtitle: "Shipping 25+ printer programs globally through a shared design system and firmware codebase.",
    category: "PRODUCT DESIGN · DESIGN SYSTEMS",
    filterCategory: "Product Design" as ProjectCategory,
    year: "2024",
    cardBg: "#EDECE8",
    cardTextColor: "dark" as const,
    coverImage: "/covers/hp-scale-ui.png",
    imageConfig: { fit: "cover" as const, position: "center center", bg: "#e8e8e8" },
    caseStudy: {
      role: "Interaction Designer, Control Panel UX",
      timeline: "2020 to 2024 (4 years)",
      tools: ["Figma", "Axure", "FigJam", "Scale UI Toolkit", "Jira"],
      team: "Control Panel UX team (Bangalore); Visual Design, CX Architects, UX Writing (HP GED); Product, Program, and Firmware partners across Singapore, Boise, Portland, San Diego, Barcelona",
      sections: [
        {
          type: "text" as const,
          label: "Overview",
          heading: "Overview",
          body: [
            "Over four years on HP’s Control Panel UX team, I designed and shipped the control-panel experience for 25+ printers built on Scale UI, HP’s shared design system and firmware codebase. As the interaction designer for Print from USB, Contacts, and Active Jobs, I worked across five market segments and screen sizes from 2.7 to 22 inches, for a product line that reaches 100+ million customers worldwide.",
          ],
        },
        {
          type: "product-cards" as const,
          items: [
            { src: "/casestudy/hp-scale-ui/problem-4301fdw.jpg", alt: "HP Color LaserJet Pro MFP 4301fdw", label: "HP Color LaserJet Pro MFP 4301fdw", url: "https://www.hp.com/us-en/shop/pdp/hp-color-laserjet-pro-mfp-4301fdw-printer" },
            { src: "/casestudy/hp-scale-ui/overview-3201dw.png", alt: "HP Color LaserJet Pro 3201dw", label: "HP Color LaserJet Pro 3201dw", url: "https://www.hp.com/us-en/shop/pdp/hp-color-laserjet-pro-3201dw-printer" },
          ],
          note: "and many more, across 25+ printer programs shipped on Scale UI.",
        },
        {
          type: "text" as const,
          label: "Problem",
          heading: "One control-panel system across HP’s printer lineup",
          body: [
            "HP’s printer lineup spans five market segments, seven display sizes, and dozens of programs shipping simultaneously across the globe. Before Scale UI, each program designed and built its control-panel experience largely in isolation, producing inconsistencies across products and duplicating firmware development work on every release cycle.",
            "Scale UI was HP’s answer: a proprietary design system paired with a shared firmware codebase, so that a single design decision could propagate across every program rather than being rebuilt from scratch each time. I joined the Control Panel UX team in 2020 as an interaction designer owning three surfaces: Print from USB/Network/Source, the Contacts management app, and Active Jobs (Print, Copy, Scan, Fax). Those three surfaces touched the most frequent daily workflows for the broadest range of users.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "100M+", label: "HP customers worldwide reached by Scale UI programs" },
            { value: "25+", label: "Printer programs shipped across four market segments" },
            { value: "2.7\"–22\"", label: "Control-panel display range, designed responsively" },
            { value: "4.5/5", label: "Amazon rating for the HP Color LaserJet Pro MFP 4301fdw" },
          ],
        },
        {
          type: "text" as const,
          label: "Users",
          heading: "Who uses an HP printer",
          body: [
            "The same physical device can land in a home office of one or a corporate floor of 250, depending on which segment it belongs to. My design file had to satisfy all of them at once. Each segment has different task priorities, hardware budgets, and IT infrastructure expectations.",
          ],
        },
        {
          type: "two-images" as const,
          columns: true,
          fit: "contain" as const,
          images: [
            {
              src: "/casestudy/hp-scale-ui/market-segments.png",
              alt: "Four market segments in a single design file: Home (1-5 users), SMB (10-125 users), Enterprise (125-250 users), Large-format (5-25 operators)",
              caption: "One design file. Four segments. Home printers sit in apartments; enterprise units handle bank floors and government offices.",
            },
            {
              src: "/casestudy/hp-scale-ui/personas.png",
              alt: "Five user personas for the Home/SoHo/SMB/Enterprise segment: Ella (target home consumer), Zoe (Gen-Z non-printer owner), Eric (limited user), Joe (SMB IT admin), Wen (small business owner)",
              caption: "Five personas across the Home/SoHo/SMB/Enterprise segment. The target is Ella, a dual-role home consumer and office citizen. Joe (IT admin) sets up and governs the device; Wen owns the business that depends on it.",
            },
          ],
        },
        {
          type: "callout" as const,
          label: "The core constraint",
          body: [
            "An SMB printer shared by 15-40 people creates problems that a home device never sees: multiple jobs running simultaneously, authentication tied into existing IT infrastructure, and security settings configured by an admin who may never touch the printer again after setup. A home consumer wants to print a boarding pass in three taps. The design file had to hold both realities without collapsing into a compromise that served neither.",
          ],
        },
        {
          type: "text" as const,
          label: "Constraints",
          heading: "Designing within hardware and system constraints",
          body: [
            "Web products allow iteration after launch. Hardware does not. Once a printer ships, the firmware in that physical unit is fixed. Every interaction pattern I specified became permanent in millions of devices. This shaped the entire process.",
          ],
        },
        {
          type: "two-images" as const,
          columns: true,
          fit: "contain" as const,
          images: [
            {
              src: "/casestudy/hp-scale-ui/responsive-sizes.png",
              alt: "Control panel display sizes from 1920x1090px down to 320x240px, shown as stacked colored rectangles",
              caption: "Wide-range responsive: seven distinct display resolutions, from a 22-inch enterprise touchscreen to a 2.7-inch home panel the size of a credit card.",
            },
            {
              src: "/casestudy/hp-scale-ui/unified-design-system.png",
              alt: "Scale UI dropdown component variants: default, locked state, with right icon, with left icon, custom locked and constrained",
              caption: "Unified design system: the dropdown component ships in five variants, each defined in the shared codebase. Custom additions required a formal change-management process.",
            },
          ],
        },
        {
          type: "text" as const,
          label: "Operating model",
          heading: "Collaborating with 7+ teams towards success",
          body: [
            "Design was not owned end-to-end by one interaction designer. The process was operationalized: multiple teams each touched a part of the experience and handed it forward to the next. An IxD’s responsibilities were specific: ensure the workflow was compatible with predecessor products (users are habituated to existing patterns); incorporate any product or program improvements in a usable way; and guarantee design intent was correctly captured and built as specified.",
            "In practice, each use case moved through a defined sequence. I received requirements from a product owner or PM, then understood the requirement’s segment, use cases, edge cases, happy paths, predecessor workflow, and launch timing before beginning any design work. Once designs were complete, I aligned cross-functional partners to ensure product and design intent was captured without breaking interdependencies in adjacent apps or features. I tracked design-team timelines, development timelines, and product-launch timelines as separate but dependent variables.",
          ],
        },
        {
          type: "text" as const,
          label: "Task Analysis",
          heading: "Mapping flows and edge cases before development",
          body: [
            "Every use case started with a Data Flow Diagram. I mapped the happy path first, then every branch: error states, edge cases, unsupported inputs, detection failures, format-not-supported screens, interrupted connections. Each DFD was validated with subject-matter experts from design and firmware before any wireframe was drawn.",
            "Print from USB branches at nearly every decision point: is a USB inserted? Are multiple USBs present? Is the printer busy? Does the USB require a loading dialog? Were files found? Are any of those files in a supported format? Resolving all of these at the task-flow stage meant developers could build through a full sprint without stopping to ask design questions. The DFD was the contract.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-scale-ui/dfd-print-usb-full.png",
          alt: "Full Print from USB Data Flow Diagram showing the complete flow including folder navigation, file browsing, format error states, and search functionality",
          caption: "Full DFD overview: folder navigation, file browsing, format-not-supported errors, search. Each blue node is a UI screen; each diamond is a decision point firmware must handle.",
        },
        {
          type: "text" as const,
          label: "Design Delivery",
          heading: "Responsive wireframes across display sizes",
          body: [
            "Each screen was designed at three size groups: XL to M (21-inch to 8-inch), S (4.3-inch), and XS (2.7-inch). These were not scaled down from a larger frame but reconsidered at each breakpoint. Layout, content density, and navigation changed significantly across sizes because a grid that works on a 21-inch enterprise panel does not transfer to a panel the size of a credit card.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-scale-ui/design-delivery-all-sizes.png",
          aspectRatio: "1513 / 457",
          alt: "Print from USB wireframe across three size groups side by side: XL (21-inch grid), S (4.3-inch list), and XS (2.7-inch dark panel), with annotated component numbers",
          caption: "One Print from USB workflow, reconsidered across three size groups. XL (21-inch) uses a thumbnail grid; S (4.3-inch) collapses to a list; XS (2.7-inch) ships on a dark panel often driven by analog buttons. Annotated numbers map each element to its Pattern Table entry.",
        },
        {
          type: "callout" as const,
          label: "Visual design",
          body: [
            "Visual design lived in the firmware codebase and was applied programmatically, so my deliverable was a wireframe where structure and hierarchy had to be resolved through layout and density before any color.",
          ],
        },
        {
          type: "text" as const,
          label: "Handoff",
          heading: "Pattern and behavior tables",
          body: [
            "Pattern Buildup Tables listed every interactive element on every screen: area, layout description, availability state, and properties. Critically, the terminology was matched to internal code repositories exactly. A developer could read a table row, look up the component name in the firmware codebase, and know which variant to use without asking. This was not documentation for its own sake. It was designed to eliminate a specific category of mid-sprint conversation that cost time across an eight-timezone distributed team.",
            "Behavior Tables covered the layer beneath: constraint states (the Print button stays inactive until at least one file is selected), filter and sort logic (sort order persists across folder navigation but resets on app exit), modal triggers, and scroll behavior. Any interaction detail that would otherwise surface as a developer question in a Slack thread at 2am got resolved in the table before the build began.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-scale-ui/wireframe-pattern-composite.png",
          alt: "Composite showing Print from USB XL wireframe alongside its Pattern Buildup Table, with a red circle highlighting the table-to-screen connection",
          caption: "Wireframe and Pattern Table side by side. The red circle highlights how each numbered annotation on the wireframe maps to a specific row in the table, which maps to a specific component in the firmware codebase.",
        },
        {
          type: "two-images" as const,
          fit: "contain" as const,
          images: [
            {
              src: "/casestudy/hp-scale-ui/pattern-buildup-table.png",
              alt: "Pattern Buildup Table with columns for Area, Layout description, Available, and Properties, referencing Search.json, Filter.json, Sort.json component files",
              caption: "Pattern Table: component names reference firmware JSON files directly (Search.json, Filter.json, Sort.json). Developers trace any element to its codebase equivalent without asking design.",
            },
            {
              src: "/casestudy/hp-scale-ui/behavior-table.png",
              alt: "Behavior Table specifying constraint behavior for the Print button, filter/sort active state logic, modal trigger conditions, and sort persistence rules",
              caption: "Behavior Table: four rules covering the Print button constraint, filter active state, filter modal, and sort persistence. Each rule preempts a developer question.",
            },
          ],
        },
        {
          type: "text" as const,
          label: "Validation",
          heading: "Validating the build on hardware",
          body: [
            "When development hit milestones, I loaded the build onto a physical printer and walked every flow on the actual device, not an emulator or a prototype. Print from USB: plug in USB, navigate Menu > Print > Print from USB, browse, select, configure copies and options, print. Contacts: Menu > Contacts, view list, add contact, add group, search, sort, filter. Issues were filed in Jira and tracked against the design intent until the build matched the specification.",
            "The hardware reality sharpens why this step matters. A web product can push a fix in hours. A printer ships firmware into physical units with no over-the-air update path for most of the range. An unresolved discrepancy between design and build is not a debt to pay later. It is the product that ships.",
          ],
        },
        {
          type: "video" as const,
          loop: true,
          maxWidth: 600,
          src: "/casestudy/hp-scale-ui/print-to-usb.mp4",
          caption: "Print from USB on a physical HP Color LaserJet Pro: USB inserted, folder structure navigated, file selected, copies configured, print confirmed.",
        },
        {
          type: "video" as const,
          loop: true,
          maxWidth: 600,
          src: "/casestudy/hp-scale-ui/contacts.mp4",
          caption: "Contacts app on hardware: contact list viewed, new contact added, search and filter demonstrated on the physical control panel.",
        },
        {
          type: "text" as const,
          label: "User Testing",
          heading: "Testing prototypes with users across market segments",
          body: [
            "On this work I held a dual role as interaction designer and researcher. Alongside the research team, I owned the research protocol and designed the test sessions, including the stimuli participants interacted with.",
            "Participants were recruited by market segment, split between emerging and developed markets, so sessions reflected how home, SMB, and enterprise users work across different regions. What we learned fed back into the design before the workflow was committed to firmware.",
          ],
        },
        {
          type: "video" as const,
          loop: true,
          maxWidth: 600,
          src: "/casestudy/hp-scale-ui/prototype.mp4",
          caption: "We built interactive HTML prototypes as the test stimuli, so participants could move through real workflows before any hardware was final.",
        },
        {
          type: "video" as const,
          loop: true,
          maxWidth: 600,
          src: "/casestudy/hp-scale-ui/hybrid-ui.mp4",
          caption: "A prototyped control-panel flow used in the test sessions.",
        },
        {
          type: "video" as const,
          maxWidth: 600,
          src: "/casestudy/hp-scale-ui/user-test.mp4",
          caption: "A recorded user test session: a participant working through the prototype while we observed.",
        },
        {
          type: "text" as const,
          label: "Hybrid UI",
          heading: "The same process across different control panels",
          body: [
            "The process described so far was not tied to a single product. The same method of task flows, responsive delivery, and pattern and behavior tables carried across several control-panel types, each with its own interaction model. Hybrid UI was one of them.",
            "Hybrid UI covered the 2.7-inch home panels at the lower end of the range, which sometimes shipped without touch at all. Users navigated with a D-pad (a physical directional button) and a set of hard keys, so the same interaction patterns had to be expressed through a completely different physical input model.",
            "I owned the interaction design for Hybrid UI separately from the touchscreen flows. Navigation hierarchy, focus states, and action sequences were rebuilt to work within the D-pad model, while staying recognizable as the same product to users who move between a home and an office device.",
          ],
        },
        {
          type: "video" as const,
          loop: true,
          maxWidth: 600,
          src: "/casestudy/hp-scale-ui/hybrid-ui.mp4",
          caption: "Hybrid UI prototype: D-pad navigation on a 2.7-inch panel with no touchscreen. Focus traversal, selection states, and action confirmation all handled through physical buttons.",
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-scale-ui/hybrid-product.png",
          alt: "HP Color LaserJet Pro 3201dw printer, front-left catalog view on a white background",
          caption: "The HP Color LaserJet Pro 3201dw shipped with the Hybrid UI: a 2.7-inch non-touch panel driven by a D-pad and hard keys.",
        },
        {
          type: "button" as const,
          label: "View Shipped Product",
          url: "https://www.hp.com/us-en/shop/pdp/hp-color-laserjet-pro-3201dw-printer",
        },
        {
          type: "text" as const,
          label: "Impact",
          heading: "Reception and outcomes",
          body: [
            "The HP Color LaserJet Pro MFP 4301fdw, the first product to ship on Scale UI, received a 4.5/5 Amazon rating, a four-star review from PC Mag, and a best-in-class designation from Digital Trends. Across my four years on the team, 25+ printer programs shipped globally using the Scale UI system and the interaction model I helped define.",
          ],
        },
        {
          type: "logos" as const,
          items: [
            { src: "/casestudy/hp-scale-ui/logo-amazon.png", alt: "Amazon" },
            { src: "/casestudy/hp-scale-ui/logo-pcmag.png", alt: "PC Mag" },
            { src: "/casestudy/hp-scale-ui/logo-digitaltrends.png", alt: "Digital Trends" },
          ],
          caption: "Covered and rated by PC Mag, Amazon customers, and Digital Trends, which named it a best laser multifunction printer.",
        },
        {
          type: "metrics" as const,
          items: [
            { value: "4.5/5", label: "Amazon customer rating, HP Color LaserJet Pro MFP 4301fdw" },
            { value: "4★", label: "PC Mag review score, best-in-class from Digital Trends" },
            { value: "25+", label: "Printer programs shipped using Scale UI during my tenure" },
          ],
        },
      ],
    },
  },
  {
    slug: "hp-learning",
    title: "HP: Connecting Classrooms to Living Rooms",
    cardTitle: "HP: Connecting Classrooms to Living Rooms",
    cardMetric: "2M pages printed across 60K active users",
    subtitle: "A B2C EdTech platform bringing printable, hands-on learning home.",
    category: "PRODUCT DESIGN · EDTECH",
    filterCategory: "Product Design" as ProjectCategory,
    year: "2022",
    cardBg: "#C25B3A",
    cardTextColor: "light" as const,
    coverImage: "/covers/hp-learning.png",    imageConfig: { fit: "cover" as const, position: "center center", bg: "#f0ede8" },
    caseStudy: {
      role: "Interaction Designer",
      timeline: "2021 to 2022 (1 year)",
      tools: ["Figma", "FigJam", "Miro", "UserTesting", "Analytics"],
      team: "Interaction Designer, Visual Designer, Design Team Lead, Content Strategy",
      sections: [
        {
          type: "text" as const,
          label: "Problem",
          heading: "Three Users. One Platform. Two Business Goals.",
          body: [
            "HP Learning is a premium supplemental learning platform for pre-primary and primary school students, built on the back of HP's existing printer footprint in millions of homes. The core bet: if parents are already printing, can a learning platform convert that behavior into a reason to print more, and more regularly?",
            "The structural challenge was unusual. The person paying (parent), the person assigning (teacher), and the person learning (child) are three distinct actors with entirely different motivations. The Parent and Teacher are the design center archetypes. The Child is the inexplicit user: central to the experience but absent from decision-making. Every screen had to earn trust from two adults before a child ever touched it.",
            "On top of that, the platform had to satisfy two business goals at once: drive educational engagement deep enough to earn parent retention, and generate enough print activity to justify HP's investment. A session that ends without printing is a half-success. I started the project by pitching this exact framing to leadership as an internal concept, earned executive buy-in, and then owned the design end-to-end from research to implementation validation.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "2M", label: "Printed pages generated by the pilot" },
            { value: "60K", label: "Active users across Russia and Turkey" },
            { value: "16", label: "EdTech platforms benchmarked in research" },
            { value: "1 yr", label: "Concept to shipped pilot" },
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-learning/home-first-time-user.png",
          alt: "HP Learning home screen for first-time users: hero banner, grade filters, and top picks by subject",
          caption: "First-time user home screen: the hero introduces the platform, grade filters personalise the content grid immediately, and subject rows give parents a clear entry point.",
          layout: "mobile" as const,
        },
        {
          type: "text" as const,
          label: "Research",
          heading: "Benchmarking 16 Platforms Before Drawing a Single Screen",
          body: [
            "The global EdTech market was worth US$185.20Bn. Khan Academy, Toppr, IXL, Byju's, Education.com, and Outschool had each built something real. Before any design work started, I ran an in-depth analysis of 16 platforms, mapping their user flows, content hierarchies, onboarding patterns, and monetisation mechanics. The research established what the category considered table stakes, and where the gaps were.",
            "The clearest gap: most platforms optimised for time-on-screen rather than habit formation. A child who completes a worksheet and comes back next week is worth more than a child who watches three videos in one sitting. HP Learning's physical print mechanic gave us a natural session end-point, which meant we could design around completion rather than infinite scroll.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-learning/competitive-research.png",
          alt: "Competitive research FigJam board: 16 EdTech platforms mapped by user flow, interaction pattern, and content system",
          caption: "Secondary research board: 16 EdTech platforms mapped side by side, covering user flows, onboarding mechanics, content hierarchies, and retention triggers.",
        },
        {
          type: "text" as const,
          label: "Framework",
          heading: "Habit Loop: From Sign-Up to Printed Page",
          body: [
            "Collaborating with the Research and Marketing teams, I applied habit loop theory to map HP Learning's full activation journey: Sign Up, Setup Moment, Aha Moment, Habit Moment, Engaged. The question driving the framework wasn't 'what features does the platform need?' but 'what exact moment makes a parent come back tomorrow?'",
            "I identified 10 Aha Moments for parents, from filtering content by the child's grade on first visit, to watching their child score well on a printed exercise, to the platform surfacing a teacher recommendation before the parent thought to ask. Each Aha Moment mapped to a specific trigger layer: notifications when a reward is one step away, school-schedule-aligned content drops, and low-friction actions like resuming a lesson or marking an activity complete. Every design decision downstream connected to a node on this map.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-learning/activation-journey-habit-loop.png",
          alt: "HP Learning activation journey map and habit loop: Aha Moments for parents mapped to triggers, habits, and actions",
          caption: "Activation journey and habit loop framework: 10 Aha Moments for parents mapped to their corresponding triggers and low-effort actions.",
        },
        {
          type: "text" as const,
          label: "Journey",
          heading: "The Flywheel: School Theory to Home Practice",
          body: [
            "The hero scenario tied all three actors into one loop. A child learns curriculum content at school. After class, the teacher selects exercises aligned to the day's lesson and assigns them through HP Learning. The parent finds the homework, prints the activity sheet, and monitors progress. The child revises what they learned in a tactile, hands-on way at home.",
            "That loop (school theory through teacher assignment, to parent print, to child completion) was the flywheel the product was built around. It gave teachers a lightweight assignment tool that required no extra prep. It gave parents a purposeful, curriculum-aligned reason to print. And it gave children a physical learning experience that extended the classroom without a screen.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-learning/hero-user-journey.png",
          alt: "HP Learning hero user journey map: Child's Journey, Parent's Journey, and Teacher's Journey shown as parallel tracks across the school-to-home loop",
          caption: "Hero user journey: three parallel tracks (Child, Parent, Teacher) across the school-to-home learning loop, showing each actor's touchpoints and handoff moments.",
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-learning/entry-returning-user.png",
          alt: "HP Learning mobile entry point for returning users: grade filter, resume learning, and curated picks",
          caption: "Returning user entry: the platform surfaces the right grade content and resumable lessons immediately, reducing time-to-first-action for habitual users.",
          layout: "mobile" as const,
        },
        {
          type: "text" as const,
          label: "Design",
          heading: "Designing for Two Adults Before One Child",
          body: [
            "Every screen in the product had to serve two audiences at once. For the child: low friction, visually playful, immediately rewarding. For the parent: structured, informative, with clear signals of progress and appropriate grade-level content. There was no separate parent dashboard and child view. It was one interface that had to work for both.",
            "The content grid used grade filters and subject categories as the primary navigation layer, letting parents orient quickly and hand the device to their child without a tutorial. Subject rows with thumbnail previews gave the child enough visual autonomy to choose, while keeping grade-appropriate content as the default scope. The HP Learning brand identity and video-led content previews reinforced quality at every entry point.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-learning/ui-screens-campaign.png",
          alt: "HP Learning UI screens: campaign home, topic selection, video lesson flow, and lesson detail",
          caption: "Campaign home, topic selection, and video lesson screens: a single design language serving parent-facing navigation and child-facing content consumption.",
        },
        {
          type: "text" as const,
          label: "Execution",
          heading: "Cross-Functional Delivery",
          body: [
            "I led alignment workshops in FigJam and Miro across the Development Lead, Product Owner, Legal and Security Council, and the Analytics Dev Team. We iterated the hero user flows end-to-end, annotating directly in Figma with development notes, copy review flags, and analytics instrumentation points for each screen state.",
            "The experience was architected from day one for outward compatibility: integration with HP Smart app, HP Store rewards, and social sharing were baked into the information architecture rather than retrofitted. Each flow was validated in dev review cycles, and I ran implementation reviews before pilot launch to catch regressions between design and build.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-learning/primary-flow-map.png",
          alt: "HP Learning primary flow map in FigJam: annotated screens showing development notes, copy review flags, and analytics metrics across the full user journey",
          caption: "Primary flow map in FigJam: every screen annotated with development notes, copy review flags, and analytics instrumentation before handoff.",
        },
        {
          type: "text" as const,
          label: "Detail",
          heading: "The Interstitial: Designing the Space Between Lessons",
          body: [
            "Most EdTech products leave the moment between lessons undesigned. I treated it as a deliberate product beat. The interstitial showed completed lesson status, surfaced the next activity, and gave parents a passive visibility window into their child's progress, all without interrupting the learning flow.",
            "The 'Mark as Complete' mechanic was intentionally low-effort so children could self-report progress independently. This gave parents a quiet completion signal and immediately surfaced the next action, closing the habit loop at the exact point where learner drop-off typically spikes. The login prompt appeared here too, timed to when users had seen enough value to convert to an account.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            {
              src: "/casestudy/hp-learning/post-printing-subtopic.png",
              alt: "Post-printing sub-topic screen: learning outcome description, Print Activity CTA, Mark as Complete, and Up Next row",
              caption: "Post-printing screen: outcome description, Print Activity CTA, Mark as Complete, and Up Next, each closing one loop and opening the next.",
            },
            {
              src: "/casestudy/hp-learning/interstitial.png",
              alt: "HP Learning interstitial: login prompt mid-session surfacing the value of an HP ID account",
              caption: "Mid-session interstitial: the login prompt appears after the first value moment, framing HP ID as progress tracking and quick print access.",
            },
          ],
          layout: "mobile" as const,
        },
        {
          type: "text" as const,
          label: "Impact",
          heading: "Pilot Results",
          body: [
            "The pilot launched in Russia and Turkey in 2021 on HP's Printables platform. My contributions directly drove 2M printed pages across 60K active users. Each printed activity was simultaneously an educational outcome and a measurable print revenue signal for HP's core business. The activation flow, built on the habit loop framework, produced engagement metrics that validated the concept commercially and educationally.",
            "The platform's architecture was designed to scale: ready to integrate with HP Smart app, HP Store rewards, and broader HP consumer ecosystem products. The pilot was proof-of-concept for HP Learning as a long-term retention and revenue flywheel, not a standalone EdTech experiment.",
          ],
        },
        {
          type: "text" as const,
          label: "Reflection",
          heading: "What I Would Do Differently",
          body: [
            "Framing the design problem around habit formation rather than feature completeness was the single most useful reframe on the project. It changed every decision downstream, from onboarding to the interstitial mechanic to how we sequenced the three-actor journey.",
            "Looking back, the child as a user deserved far more direct research attention. We designed for parents and teachers as proxies, but children are the actual daily users and their behavior shapes whether the habit forms at all. I would also A/B test the interstitial timing rather than shipping a single direction, and invest equal depth in the teacher-side assignment tools. The teacher journey was the least designed of the three, and it's where I see the most untapped retention leverage: a teacher who assigns through HP Learning consistently is the strongest activation trigger a parent can have.",
          ],
        },
      ],
    },
  },
  {
    slug: "bridgit",
    title: "Microsoft: Reimagining AI for Specialized Educators",
    cardTitle: "Microsoft: Reimagining AI for Specialized Educators",
    cardMetric: "Targeting 15 hrs/week of unpaid teacher prep",
    cardVideo: "/casestudy/bridgit/card-reel.mp4",
    subtitle: "An AI-powered assistant built for special-education teachers.",
    category: "INCLUSIVE DESIGN RESEARCH",
    filterCategory: "Research" as ProjectCategory,
    year: "2025",
    cardBg: "#1E2E40",
    cardTextColor: "light" as const,
    coverImage: "/covers/bridgit.png",    imageConfig: { fit: "cover" as const, position: "center center" },
    heroVideo: {
      mp4: "/casestudy/bridgit/prototype-reel.mp4",
      poster: "/casestudy/bridgit/prototype-reel-poster.jpg",
      bg: "linear-gradient(135deg, #efe9f7 0%, #e8ecf8 45%, #f4f1fa 100%)",
    },
    caseStudy: {
      role: "UX Researcher & Interaction Designer",
      timeline: "16 weeks — Microsoft EES × Parsons",
      tools: ["Figma", "Miro", "Semi-structured Interviews", "Affinity Mapping", "Participatory Design"],
      team: "4 designers (Microsoft External Engagement Studio × Parsons School of Design)",
      sections: [
        {
          type: "text" as const,
          label: "Overview",
          heading: "Overview",
          body: [
            "Bridgit came out of a 16-week engagement at Microsoft's External Engagement Studio at Parsons — a four-person team (Alana, Azelia, Arpit, and me) working a single question: how might trustworthy AI support the specialized educators who hold underserved classrooms together, without eroding their judgment or trust?",
            "I worked as UX researcher and interaction designer. I ran semi-structured interviews and affinity mapping to turn raw educator voices into the four opportunity areas, then designed the dashboard, session personalization, and communication flows that became the Bridgit prototype.",
          ],
        },
        {
          type: "video" as const,
          src: "/casestudy/bridgit/overview.webm",
          maxWidth: 600,
          caption: "Our co-design process — turning educator sessions into the four opportunity areas and the Bridgit prototype.",
        },
        {
          type: "text" as const,
          label: "Problem",
          heading: "The Teacher Workload Problem",
          body: [
            "Elementary teachers spend 15 hours a week outside class on planning — 12 of them unpaid. Turnover sits above 20%, and 40% of new teachers leave within five years. AI was arriving with no clear answer for how it should help.",
            "We answered our question through three moves: research to map the strain, co-design to keep specialists in the loop, and a prototype to make the solution concrete.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "15 hrs", label: "Avg. weekly time spent outside class on planning and prep" },
            { value: "12 hrs", label: "Of those 15 hours that go unpaid" },
            { value: "20%+", label: "Annual teacher turnover rate" },
            { value: "40%+", label: "New teachers who leave within 5 years" },
          ],
        },
        {
          type: "quote" as const,
          text: "How might we support elementary teachers with an AI tool that reduces burden and enhances collaboration — without compromising their agency or trust?",
          attribution: "Our guiding research question",
        },
        {
          type: "text" as const,
          label: "Research",
          heading: "Led With Research, Not Technology",
          body: [
            "Rather than assume a technology solution, we started with the human rhythms of teaching. Seven interviews with parents, teachers, administrators, and specialists — plus three rounds of co-design and a literature review — built a systems-level picture before we designed anything.",
            "The research pointed to four areas where teachers consistently lacked support: Productivity, Communication, Personalization, and Student Achievement.",
          ],
        },
        {
          type: "text" as const,
          label: "Methods",
          heading: "How We Worked",
          body: [
            "Alongside a literature review and stakeholder interviews, we ran three rounds of co-design workshops. Each session set ground rules, opened up ideation, and had specialists co-create and prioritize directions with us — so the solution was built with teachers, not just for them.",
          ],
        },
        {
          type: "image-grid" as const,
          images: [
            { src: "/casestudy/bridgit/method-3.png", alt: "Co-Creation Guidelines slide listing workshop ground rules", caption: "Co-creation guidelines opened each session with a no-wrong-answers, think-out-loud space." },
            { src: "/casestudy/bridgit/method-2.png", alt: "Ideation session slide asking how an assistant might help teachers", caption: "Ideation translated pain points into 'How might an assistant help?' need statements." },
            { src: "/casestudy/bridgit/method-4.png", alt: "Co-create activity mapping needs to Productivity, Personalization, Play, and Parent-Teacher collaboration", caption: "Specialists co-created against the core needs: productivity, personalization, play, and parent coordination." },
            { src: "/casestudy/bridgit/method-1.png", alt: "Prioritization slide asking which ideas would be most impactful day to day", caption: "Prioritization grouped and ranked ideas by real day-to-day impact." },
          ],
        },
        {
          type: "text" as const,
          label: "Opportunity Areas",
          heading: "Four Opportunity Areas",
          body: [
            "Across every interview, the gaps clustered into four areas where teachers consistently lacked support.",
          ],
        },
        {
          type: "concepts-grid" as const,
          heading: "",
          columns: 4,
          items: [
            { tag: "01", name: "Productivity", description: "Teachers need a way to handle admin and planning tasks more efficiently." },
            { tag: "02", name: "Communication", description: "Teachers need a way to better communicate and collaborate." },
            { tag: "03", name: "Personalization", description: "Teachers need a way to easily create personalized learning plans." },
            { tag: "04", name: "Student Achievement", description: "Teachers need support so they can use their skills to address diverse learning needs and provide an equitable learning experience." },
          ],
        },
        {
          type: "text" as const,
          label: "Research cont.",
          heading: "The Recurring Bottleneck",
          body: [
            "Three patterns repeated across every stakeholder. Administrative overload: Meher, a speech pathologist, spends more time building her schedule than working with students. Broken communication: Olivia's multi-channel outreach getting no reply. Technology adopted without support: Stephaney, teaching since the 1980s, got classroom computers with no training — 'nobody knew how to turn them on.'",
            "Literature confirmed it: AI's implementation burden lands on teachers, not students or parents.",
          ],
        },
        {
          type: "text" as const,
          label: "Competitive Scan",
          heading: "Where Existing Tools Fall Short",
          body: [
            "Three products already serve general classrooms well: Microsoft Copilot for Education (lesson planning, assessment), Magic School (80+ content tools), and Brisk (a secure Chrome AI extension).",
            "None were built for specialized educators — ESL instructors, speech pathologists, behavioral therapists — who work across classrooms, write individualized plans, and juggle disruption-prone schedules. That gap was the opportunity.",
          ],
        },
        {
          type: "text" as const,
          label: "Product",
          heading: "Introducing Bridgit",
          body: [
            "Bridgit is named for its purpose: a bridge between primary teachers, specialists, parents, and students — the four groups whose coordination currently runs on text messages and hope.",
            "The dashboard shows the specialist's day — sessions plus admin and parent meetings, tasks sorted by urgency. The AI assistant drafts emails, summarizes student profiles, and generates post-session reports.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/bridgit/dashboard.png",
          alt: "Bridgit dashboard with personalized schedule, urgency-sorted tasks, and proactive AI assistant",
          caption: "The dashboard: personalized schedule, urgency-sorted tasks on the right, and the AI assistant ready to draft communications or pre-session summaries.",
        },
        {
          type: "text" as const,
          label: "Feature: Personalization",
          heading: "Session Personalization",
          body: [
            "Open any session to see its objectives, lesson plans, exercises, and the primary teacher's notes. Pick a task, and the AI reads the student's anonymized profile and returns specific tactics.",
            "For a visual learner engaged only by her own interests, it suggested using her drawings as conversation starters and a visual agenda for structure — then synced the changes back to the task page automatically.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/bridgit/session-page.png",
          alt: "Session detail view showing objectives, lesson plans, teacher notes, and AI personalization suggestions",
          caption: "Drilling into a session surfaces objectives, lesson plans, exercises, and primary teacher notes — then the AI reads anonymized student data to suggest personalization tactics.",
        },
        {
          type: "two-images" as const,
          images: [
            { src: "/casestudy/bridgit/personalize.png", alt: "AI personalization suggestions based on anonymized student learning profile", caption: "The AI reads the student's anonymized profile and returns specific tactics — not generic advice." },
            { src: "/casestudy/bridgit/import-notes.png", alt: "Note import interface accepting photo, audio, or document uploads", caption: "Notes arrive as a photo, audio recording, or document. Bridgit anonymizes and formats them for sharing automatically." },
          ],
        },
        {
          type: "text" as const,
          label: "Feature: Communication",
          heading: "Sharing Student Progress",
          body: [
            "Sharing progress between teachers and specialists is ad hoc today. Bridgit routes formatted session notes through the AI into a dedicated Messages view — one place for everything.",
            "Privacy is explicit: data stays within the school community, never shared with third parties, never used to train models. A direct response to teachers' top concern.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            { src: "/casestudy/bridgit/bulk-sending.png", alt: "AI-drafted communication shared into the Messages view between specialist and primary teacher", caption: "The AI drafts the note and routes it to Messages — Olivia's multi-channel problem addressed in one action." },
            { src: "/casestudy/bridgit/schedule.png", alt: "Calendar view showing the specialist's schedule alongside other teachers and the school calendar", caption: "Calendar view shows the specialist's own day plus other teachers' schedules and the school calendar — meetings can be set without any back-and-forth." },
          ],
        },
        {
          type: "text" as const,
          label: "Feature: Adaptability",
          heading: "Adapting to Disruptions",
          body: [
            "When a student is absent, Bridgit flags the schedule impact and the missed progress, then auto-generates a makeup slot the specialist can adjust. The AI can fill the freed time with tasks, professional development, or a rest period.",
            "A responsive mobile version keeps the same assistant on hand between classrooms.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            { src: "/casestudy/bridgit/dashboard-absence.png", alt: "Absence notification with schedule impact, affected student progress, and AI-generated makeup schedule", caption: "An absent student triggers a notification, a schedule impact view, and an auto-generated makeup — the specialist adjusts or accepts." },
            { src: "/casestudy/bridgit/schedule-ai.png", alt: "AI optimizing the day's schedule by slotting tasks by urgency and available time", caption: "Ask Bridgit to optimize the day and it slots tasks by urgency and time required — no manual juggling." },
          ],
        },
        {
          type: "text" as const,
          label: "Takeaway",
          heading: "Research Reframed the Problem",
          body: [
            "Starting with human needs instead of technology capabilities changed what we built. The burden of AI adoption lands on teachers — so the opportunity wasn't a smarter classroom tool, it was infrastructure for the specialists holding the system together. That reframe drove every product decision in Bridgit.",
            "Documenting our assumptions before fieldwork kept us honest when findings contradicted them. Next: test personalization across specialist types, keep co-designing with teachers and administrators, and pitch Bridgit to school leaders.",
          ],
        },
      ],
    },
  },
  {
    slug: "flexible-insurance-gig-workers",
    title: "Flexible Insurance for Gig Workers",
    cardTitle: "Rethinking Insurance for Gig Workers",
    cardMetric: "1st Place, Rotman Design Challenge 2025",
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
            "7.3 million Canadians work in the gig economy, and 1.57 million earn their primary income there — yet auto insurance still bends to none of them. Intact Financial handed this gap to the Rotman Design Challenge in 2025. As service designer and strategist on the five-person Team Northstar, I led research synthesis, persona work, and solution framing.",
          ],
        },
        {
          type: "image" as const,
          src: "/covers/flexible-insurance.jpg",
          alt: "Flexible Insurance for Gig Workers — Rotman Design Challenge, first place",
        },
        {
          type: "text" as const,
          label: "Problem",
          heading: "The Coverage Gap",
          body: [
            "Canadian auto insurance is binary: personal or commercial. Personal policies void the moment you accept a fare; commercial policies start at six-month minimums priced for fleet operators, not someone driving two nights a week. Gig workers fall into the gap — often uninsured, frequently without knowing it. Our research found one in two full-time gig workers carry no valid coverage.",
          ],
        },
        {
          type: "text" as const,
          label: "Solution",
          heading: "Flexible Commercial Insurance",
          body: [
            "We designed a two-phase model with flexibility as the structural core. Phase 1 solves access and cost — buy coverage by the week, pause with no penalty when you stop working, resume in one tap. Phase 2 solves comprehension — Polaris, an AI agent trained on Intact Customer Care calls, turns any policy into a plain-language summary, translates on request, and guides claims filing. Together they target the three findings that kept surfacing: rigidity, language barriers, and accident risk driven by financial stress.",
          ],
        },
        {
          type: "text" as const,
          label: "Impact",
          heading: "Outcome",
          body: [
            "Team Northstar placed first and won the $5,000 prize. Judges singled out the before/after service narrative and the way Phase 2 treated language barriers as a systemic design problem rather than an edge case. This was a pitch and concept project — validated through research and judges, not shipped to users. The takeaway held regardless: design for the person with the fewest options, and you build something that works better for everyone.",
          ],
        },
        {
          type: "button" as const,
          label: "View Case Study",
          url: "https://pitch.com/v/yash_rotman-design-challenge-2025-pf5ibv",
        },
      ],
    },
  },
  {
    slug: "greenbox-tempo",
    title: "Tempo: An Intelligence Layer for Wealth Advisors",
    cardMetric: "End-to-end AI strategy for a pre-market startup",
    subtitle:
      "An AI system that unifies the wealth advisor's fragmented, eight-tool day.",
    category: "AI STRATEGY · PRODUCT DESIGN · CONSULTING",
    filterCategory: "Strategy" as ProjectCategory,
    year: "2026",
    cardBg: "#0E3B2E",
    cardTextColor: "light" as const,
    coverImage: "/covers/greenbox-tempo.png",    imageConfig: { fit: "cover" as const, position: "center center", bg: "#0E3B2E" },
    cardVideo: "/casestudy/greenbox-tempo/card-reel.mp4",
    heroVideo: {
      mp4: "/casestudy/greenbox-tempo/thumbnail.mp4",
      poster: "/covers/greenbox-tempo.png",
      bg: "linear-gradient(140deg, #0E3B2E 0%, #14513C 52%, #0A2C22 100%)",
    },
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
            "GreenBox builds software for independent RIAs, the advisors managing the $84 trillion now changing hands. Our studio took their portfolio-management challenge with one brief: find where AI removes the heaviest friction from an advisor's day without touching their judgment. The answer was Tempo, an intelligence layer that connects the whole day instead of adding one more screen.",
            "Four of us shared the work end to end. I owned the front of the room: the workflow-and-solutions narrative, the Morning Brief walkthrough, the how-might-we framing, and the roadmap. It landed: GreenBox left us with a validated 3.5-year roadmap and a working prototype, not slides.",
          ],
        },
        {
          type: "embed" as const,
          navLabel: "Try It Yourself",
          label: "AI Prototype",
          heading: "Try It Yourself",
          intro: "Built with Claude Code. Open it and poke around the dashboard, the Morning Brief, and the Sandbox.",
          url: "https://greenbox-app-rho.vercel.app/",
          ratio: "16 / 10",
          note: "Best viewed on desktop.",
        },
        {
          type: "text" as const,
          label: "Problem",
          heading: "The Tool Pile",
          body: [
            "An advisor's stack is a pile of point solutions (CRM, portfolio reporting, planning, risk), each good at its slice, none owning the workflow. Context doesn't move between them, so what a client says Tuesday never reaches Wednesday's portfolio decision.",
            "The advisor becomes the integration layer, carrying information by hand from one system to the next. That manual work is most of the 60%.",
          ],
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
            "The bottleneck was never advice. It was keeping eight tools in sync. We reframed the RIA as an air traffic controller for money: dozens of portfolios, live markets, constant risk calls, across systems that don't talk. Every hour reconciling data is an hour not with clients. Tempo does the watching and checking so that time comes back.",
          ],
        },
        {
          type: "text" as const,
          label: "Framework",
          heading: "The Job To Be Done",
          body: [
            "Underneath the tools, the job is one loop repeated for every client: Detect, Decide, Execute, Verify, Report. We mapped a day against it. Time piled up at three stages: that's where Tempo lives.",
          ],
        },
        {
          type: "problem-gap" as const,
          navLabel: "Detect",
          label: "Detect",
          heading: "Spotting the move before it's old news",
          current:
            "Tab after tab to see how the market hit each client. By the time a signal surfaces, the move already happened.",
          desired:
            "Priority signals (drift, breaches, overnight shifts), ranked and waiting before the first call.",
        },
        {
          type: "problem-gap" as const,
          navLabel: "Decide",
          label: "Decide",
          heading: "Testing a move before money moves",
          current:
            "Trades span several platforms, compliance checked after the fact. No safe place to try a move first.",
          desired:
            "Model and stress-test a rebalance against real holdings, compliance built in, before money moves.",
        },
        {
          type: "problem-gap" as const,
          navLabel: "Verify",
          label: "Verify",
          heading: "Confirming the trade matched the plan",
          current:
            "Reconciliation sits apart from execution, so confirming trades matched the plan is slow and manual.",
          desired: "Execution and confirmation in one record. No surprises on Monday.",
        },
        {
          type: "pull-quote" as const,
          navLabel: "Opportunity",
          label: "Opportunity",
          text: "How might we help an advisor spot market anomalies, understand each client's full financial picture, and check a rebalance, all without leaving the work of advising?",
          subtitle: "The reframe behind Tempo: keep the advisor advising; let the system carry the watching and checking.",
        },
        {
          type: "concepts-grid" as const,
          navLabel: "Solution",
          label: "Solution",
          heading: "Tempo: One Layer, Three Moves",
          items: [
            {
              name: "Morning Brief",
              tag: "Detect",
              description:
                "Overnight moves and today's priorities, ranked by urgency and impact.",
            },
            {
              name: "Rebalance Sandbox",
              tag: "Decide",
              description:
                "Model and stress-test strategies against real holdings, then commit.",
            },
            {
              name: "AI Copilot",
              tag: "Always-on",
              description:
                "Always-on monitoring and next-best-action suggestions. The advisor signs off.",
            },
          ],
        },
        {
          type: "loop" as const,
          stages: [
            { name: "Detect" },
            { name: "Decide" },
            { name: "Verify" },
          ],
          caption: "Each move in Tempo maps back to the loop: detect, decide, verify.",
          markers: [
            { id: "feature-morning-brief", stage: "Detect" },
            { id: "feature-clients-page", stage: "Detect" },
            { id: "feature-rebalance-sandbox", stage: "Decide" },
            { id: "feature-prompt-a-market-externality", stage: "Decide" },
            { id: "feature-ai-copilot", stage: "Verify" },
          ],
        },
        {
          type: "features" as const,
          navLabel: "Features",
          items: [
            { name: "Morning Brief", tag: "Detect", body: "The first five minutes. Market Pulse ties overnight moves to named portfolios: Sarah sees \"the Hayes family is down $28k,\" not \"the S&P moved 0.4%.\" Priorities rank who needs her first. The hour goes to advising, not aggregating.", media: "gif" as const, mediaLabel: "Morning Brief: ranked client queue", ratio: "4 / 3", src: "/casestudy/greenbox-tempo/morning-brief.mp4" },
            { name: "Clients Page", tag: "Context", body: "One client, one screen. It pulls AUM, YTD returns, allocation drift against target, the holdings timeline, and the full interaction history out of the eight tools that used to keep them apart. A memory layer keeps the offline texture too: the dinner last quarter, the worried call before the election. The advisor walks in already knowing where things stand, then books the next meeting without leaving the page.", media: "video" as const, mediaLabel: "Clients Page: the unified client profile", ratio: "4 / 3", src: "/casestudy/greenbox-tempo/clients.mp4" },
            { name: "Rebalance Sandbox", tag: "Decide", body: "Test a move before money moves. Model a rebalance against real holdings; watch return, volatility, and drawdown respond. Compliance is built in, so the check happens before the trade.", media: "video" as const, mediaLabel: "Rebalance Sandbox: model against real holdings", ratio: "4 / 3", src: "/casestudy/greenbox-tempo/rebalance-sandbox.mp4" },
            { name: "Prompt a Market Externality", tag: "Decide", body: "Type a what-if (a rate hike, a selloff) and Tempo runs it across the whole book in seconds. Exposure shifts live, so the advisor sees who's at risk and walks the client through it with numbers. GreenBox called it a graphic equalizer for strategy.", media: "video" as const, mediaLabel: "Prompt a Market Externality: book-wide stress test", ratio: "4 / 3", src: "/casestudy/greenbox-tempo/market-externality.mp4" },
            { name: "AI Copilot", tag: "Always-on", body: "Always watching for drift and risk breaches, surfacing the next best action with reasoning the advisor can override. It proposes, the advisor decides. Every action signed off and logged.", media: "gif" as const, mediaLabel: "AI Copilot: next-best-action panel", ratio: "4 / 3", src: "/casestudy/greenbox-tempo/ai-copilot.mp4" },
          ],
        },
        {
          type: "timeline" as const,
          navLabel: "Roadmap",
          label: "Roadmap",
          title: "A 3.5-year path to the operating system",
          items: [
            { num: "01", label: "Phase 1 · M1–6", body: "Morning Brief dashboard + AI Copilot alpha for chat and contextual questions. Proves the data layer." },
            { num: "02", label: "Phase 2 · M7–18", body: "Deeper portfolio and market integrations feeding the Brief, priorities tuned to each advisor's book." },
            { num: "03", label: "Phase 3 · M19–30", body: "The full Rebalance Sandbox, with sentiment and world data feeding the stress tests." },
            { num: "04", label: "Phase 4 · M31–42", body: "AI Copilot beta that monitors portfolios on its own, advisor in the loop, across the dashboard." },
          ],
        },
        {
          type: "text" as const,
          label: "Outcome",
          heading: "My Role & Reflection",
          body: [
            "A strategy and concept engagement, validated by a working prototype and a strong client response, not a shipped product.",
            "The four of us shaped the problem, research, and features together. My part was getting it across the line: presenting the narrative and the Morning Brief, and writing the how-might-we framing and roadmap that held the pitch together. I stood between a dense system and the people deciding whether to back it.",
          ],
        },
      ],
    },
  },
  {
    slug: "project-sense",
    title: "SENSE: Turning Trial Data into Decisions",
    cardTitle: "SENSE: Turning Trial Data into Decisions",
    cardMetric: "2× engagement extended · featured by Bloomberg",
    subtitle: "An analytics and data-visualization tool used to predict delays in Clinical Trial Study timeline & enable decision makers for proactive pivoting.",
    category: "PRODUCT DESIGN · DATA VISUALIZATION",
    filterCategory: "Product Design" as ProjectCategory,
    year: "2019",
    cardBg: "#EDECE8",
    cardTextColor: "dark" as const,
    coverImage: "/casestudy/project-sense/card-cover.png",    imageConfig: { fit: "cover" as const, position: "center center" },
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
          type: "video" as const,
          src: "/casestudy/project-sense/what-sense-is.mp4",
          poster: "/casestudy/project-sense/what-sense-is-poster.jpg",
          loop: true,
          maxWidth: 820,
          caption: "SENSE in motion: a walkthrough of the platform across portfolio, study, process, and site levels.",
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
          type: "two-images" as const,
          images: [
            {
              src: "/casestudy/project-sense/workshop-room.png",
              alt: "Stakeholders from operations, management, and leadership collaborating during the two-day design-thinking workshop at client HQ",
              caption: "Operators, management, and leadership in the same room — two days of mapping the problem space together.",
            },
            {
              src: "/casestudy/project-sense/workshop-needs.png",
              alt: "Workshop wall of synthesized user needs captured on sticky notes with dot-voting",
              caption: "Synthesizing latent needs: predict, analyze, notify, and collaborate emerged across every role.",
            },
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
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/project-sense/personas.png",
          alt: "The three SENSE user personas, each with a distinct scope of responsibility and relationship to the data",
          caption: "Three user types across the platform, each with a different scope of responsibility and relationship to the data.",
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
          type: "image" as const,
          src: "/casestudy/project-sense/hierarchy.png",
          alt: "Diagram of SENSE's two data hierarchies: content (study → project → portfolio) and geographical (global → regional → country → site)",
          caption: "Two independent hierarchies: content (study → project → portfolio) and geographical (global → regional → country → site).",
        },
        {
          type: "divider" as const,
        },
        {
          type: "features" as const,
          navLabel: "Features",
          label: "Features",
          heading: "A Walkthrough of SENSE",
          items: [
            {
              name: "Home: Portfolio Macro View",
              tag: "Home Screen",
              body: "The home screen gives any user a portfolio-level read on the most important data points across all active studies. Multiple widgets display distinct data dimensions simultaneously, letting Global Portfolio Directors spot signals quickly without drilling into individual studies first.",
              src: "/casestudy/project-sense/home-portfolio.mp4",
              ratio: "2004 / 1440",
            },
            {
              name: "Study Overview Widget",
              tag: "Primary Widget",
              body: "The primary home widget uses concentric circles to represent clinical trial milestones. Each circle is a major milestone in the trial process. Within each circle, groups of five blocks represent individual trials. Users hover over a group to preview and select a study — which then filters the entire home dashboard to show data for that study only.",
              src: "/casestudy/project-sense/study-overview.png",
              ratio: "2004 / 1440",
            },
            {
              name: "Study Summary View",
              tag: "Study Level",
              body: "After selecting a study, the user lands on the Study Summary View: the same widget layout as home, scoped to one trial. It surfaces the study's indication, the next upcoming milestone, and a risk summary pulled from internal tools. At the top, the Clinical Study Process widget shows a compact read on current processes and their risk status at a glance.",
              src: "/casestudy/project-sense/study-summary.mp4",
              ratio: "2004 / 1440",
            },
            {
              name: "Process Activity Page",
              tag: "Process Level",
              body: "Going deeper opens the expanded Process Activity page. This shows the full study timeline from kickoff to trial end, all active processes, and every checkpoint mapped against the timeline. Checkpoints determine the status of the process. Throughout SENSE, a consistent visual language separates actuals from predictions: solid fills are based on real data; dashed patterns are predicted. A drug supply setup running dashed red tells a user the process is predicted to miss its date — before it does.",
              src: "/casestudy/project-sense/process-activity.mp4",
              ratio: "2004 / 1440",
            },
            {
              name: "Process Details: Country Startup",
              tag: "Country Level",
              body: "Selecting a process opens the Process Details page. A table on the left shows overall process completion and a list of every country where the study is active, with their respective statuses. The timeline on the right maps each checkpoint with planned and actual dates side by side. Users can filter the view to a single country from the list, or switch to a full interactive map and zoom to select a country directly.",
              src: "/casestudy/project-sense/country-startup.mp4",
              ratio: "2004 / 1440",
            },
            {
              name: "Country and Site Drill-Down",
              tag: "Site Level",
              body: "The country page lists all hospitals and sites conducting the study in that country, with a map alongside. Selecting a site opens a page with personal contact cards for site staff, the scheduled dates for five major milestones, a quick overview of patients recruited, and any issues recorded in other internal tools. This is the floor of the geographical hierarchy — full transparency on one location.",
              src: "/casestudy/project-sense/country-drilldown.mp4",
              ratio: "2004 / 1440",
            },
            {
              name: "Trace, Notify, Share",
              tag: "Collaboration",
              body: "From the Process Activity page, users can click any checkpoint to see the logic behind its prediction and view upstream and downstream interdependencies. Understanding what a predicted delay implies for adjacent processes turns a warning into an actionable signal. A commenting feature on the Study Summary lets users annotate risks and delays and notify collaborators — closing the loop between insight and action.",
              src: "/casestudy/project-sense/dependencies.mp4",
              ratio: "2004 / 1440",
            },
          ],
        },
        {
          type: "text" as const,
          label: "Multi-widget comparison",
          heading: "Bridge, SENSE Control Centre",
          body: [
            "As the engagement matured, SENSE was deployed as a six-screen control center at the client's headquarters. The deployment is called Bridge.",
            "Bridge places each major data point on its own screen. Users can pin widgets from any screen and compare data points across portfolios, studies, or any level of the geographical hierarchy simultaneously. Where the web platform was built for individual analyst work, Bridge was designed for the briefing room — a shared workspace where portfolio directors could orient teams, align on risk, and make decisions in front of live data.",
            "The same design system, visual language, and interaction patterns carry over from the individual platform to the six-screen layout without adaptation friction. Bridge is SENSE at a different scale, not a different product.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            {
              src: "/casestudy/project-sense/bridge-room.png",
              alt: "An analyst standing in front of the six-screen SENSE Bridge control center, with study overview, world map, and process timelines spanning the wall",
              caption: "Bridge: SENSE deployed across a six-screen control center at the client's headquarters.",
            },
            {
              src: "/casestudy/project-sense/bridge-presenting.png",
              alt: "A portfolio director briefing colleagues in front of the SENSE Bridge wall of screens",
              caption: "Built for the briefing room — orienting teams and aligning on risk in front of live data.",
            },
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/project-sense/bridge-news.png",
          alt: "SENSE Bridge control center featured in a broadcast news segment, with the SRF 10vor10 logo visible on screen",
          caption: "SENSE in the press — the Bridge control center featured in broadcast news coverage on launch.",
        },
        {
          type: "divider" as const,
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
        {
          type: "metrics" as const,
          columns: 2,
          items: [
            { value: "2×", label: "Engagement extended on platform performance" },
            { value: "Bloomberg", label: "Media coverage on launch" },
            { value: "Accenture.com", label: "Featured as client-delivery success story" },
            { value: "1 email", label: "A user wrote to the client CEO to thank them for building SENSE" },
          ],
        },
        {
          type: "pull-quote" as const,
          text: "Thank you for pushing the organization to create an app like SENSE. The first time for me - in over 13 years at [Client Name] - that an app created digital happiness.",
          attribution: "Senior Medical Advisor, Oncology. Feedback to the CEO",
        },
      ],
    },
  },
];

// Explicit display order; slugs not listed keep their original array order after these.
const featuredOrder = [
  "hp-scale-ui",
  "greenbox-tempo",
  "project-sense",
  "bridgit",
  "hp-learning",
];

// In production (main → Vercel), drafts are hidden from the grid. On dev/preview
// and localhost they stay visible so work-in-progress can still be reviewed.
const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

export const projects = [...allProjects]
  .filter((p) => !(isProduction && (p as { draft?: boolean }).draft))
  .sort((a, b) => {
    const ia = featuredOrder.indexOf(a.slug);
    const ib = featuredOrder.indexOf(b.slug);
    return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
  });

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
    "Usability Testing",
    "User Interviews",
    "Information Architecture",
    "Journey Mapping",
    "Persona Development",
    "Competitive Analysis",
    "A/B Testing",
    "Workshop Facilitation",
    "AI Prototyping",
  ],
  Design: [
    "UX Design",
    "UI Design",
    "Interaction Design",
    "Wireframing",
    "Prototyping",
    "Design Systems",
    "Visual Design",
    "Accessibility (WCAG)",
    "Responsive Design",
    "Design Thinking",
    "Service Design",
    "Figma",
    "Cursor",
    "Claude Code",
  ],
  Strategy: [
    "Product Strategy",
    "Design Strategy",
    "Product Roadmapping",
    "Product Discovery",
    "Cross-functional Collaboration",
    "Stakeholder Management",
    "Go-to-Market Strategy",
    "Data-Driven Decision Making",
    "Agile / Scrum",
    "Enterprise B2B",
  ],
};

export const skills = Object.values(skillCategories).flat();

export const aboutData = {
  subtitle: "Product Designer & Strategist based in New York",
  narrative: [
    "I\u2019ve spent the last seven years figuring out how to make complicated things feel obvious. At HP, that meant redesigning printer software used by tens of thousands of people who never wanted to think about printers. At Accenture, it was enterprise onboarding flows where a single confusing field could lose a patient. At Parsons, it became something bigger: understanding how design decisions carry bias, and how AI can either amplify or correct it.",
    "What I keep coming back to is the seam between strategy and craft. I like being in the room where the business model gets debated, and I like being the one who turns that conversation into an interface someone actually wants to use. I think the best designers do both: they don\u2019t just make things pretty, they make things right.",
    "After graduating with a Strategic Design and Management MS from Parsons School of Design in New York City, I\u2019m now looking for my next opportunity, building software for work and for fun using AI tools, and trying to figure out what design practice looks like when your most powerful collaborator is a large language model.",
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
    "Good design is obvious. Great design is transparent.",
  ],
  personal: "Based in New York. Perpetual optimizer. Finds calm in long walks and loud music.",
};
