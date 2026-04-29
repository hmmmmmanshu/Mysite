import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Himanshu Goswami",
  initials: "HG",
  url: "https://himanshugoswami.com",
  location: "Himachal Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Himachal+Pradesh",
  heroGreeting: "Himanshu Goswami",
  heroDescription:
    "Solo founder. Self-taught builder. I work at the intersection of founders, capital, and automation.",
  description:
    "I like building things. Sometimes they turn into startups. Sometimes they become internal tools. Sometimes they fail spectacularly and consume an unreasonable amount of Claude credits.",
  summary: `I build products at the intersection of founders, capital, and automation.

Startup911 is the discovery layer for startup funding opportunities.
GrantSnap is the execution layer for applications.
SpeakOS is a thinking-quality product for articulation and comprehension.

I build fast, ship end to end, and optimize for real user outcomes.`,
  whyIBuild: `I'm 23, based in Himachal Pradesh. Economics grad from Panjab University, self-taught across full-stack and AI development over the last 2.5 years.

I work with high autonomy and focus on systems that reduce friction. Most projects start the same way: I run into something broken, then build the product I wish existed.

Currently focused on growing GrantSnap to meaningful MRR, with Startup911 as the discovery layer feeding into it.`,
  avatarUrl: "/himanshu-profile.webp",
  aboutVideo: "/Video%20Project%205.mp4",
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "Founder@startup911.in",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/himanshu-goswami-72270813b/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/hmmmmmm_anshu",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:Founder@startup911.in",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  contactSectionText:
    "I spend most of my time building systems, experimenting with ideas, and occasionally writing about how startups actually operate.\n\nIf you are a founder, operator, or investor and want to exchange ideas, feel free to reach out.",
  work: [
    {
      company: "Acharya Ventures",
      href: "#",
      badges: ["Entrepreneur in Residence"],
      location: "Remote",
      title: "Entrepreneur in Residence",
      logoUrl: "/acharya-ventures-logo.png",
      start: "November 2024",
      end: "2026",
      description:
        "At Acharya Ventures I design and build internal systems that support founders inside the venture studio. This includes building EERA, the firm's AI powered founder operating system, along with automation infrastructure for fundraising pipelines, founder research, and operational workflows. The focus is always the same. Reduce friction so founders can move faster.",
    },
    {
      company: "ERDC",
      href: "#",
      badges: ["Research"],
      location: "India",
      title: "Research Intern",
      logoUrl: "/erdc-logo.png",
      start: "June 2023",
      end: "December 2023",
      description:
        "At ERDC I worked on grassroots entrepreneurship programs across multiple Indian states. The work involved interacting with students, local leaders, and early stage entrepreneurs to understand how innovation develops outside traditional startup ecosystems. It was one of my first exposures to how uneven access to resources can be for founders. And how much entrepreneurial potential exists beyond the usual startup hubs.",
    },
  ],
  education: [
    {
      school: "Panjab University",
      href: "https://puchd.ac.in",
      degree: "BA Economics",
      logoUrl: "/panjab.png",
      start: "2020",
      end: "2023",
    },
  ],
  projectsIntro:
    "Products I built around founder workflow friction, startup funding access, and AI-driven execution.",
  projects: [
    {
      title: "SpeakOS",
      href: "https://thoughtly.pro/",
      dates: "",
      active: true,
      description:
        "Most reading does not stick. You finish an article, feel like you understood it, and then cannot explain it. SpeakOS fixes that loop: read short content, speak from memory, get AI feedback on clarity, structure, depth, and original thought.\n\nIt is not a fluency tool. It asks whether you actually understood what you read.\n\nFlow: Select topic -> Read 5-minute article -> Speak without notes (1-3 min) -> Receive feedback + transcript.\n\nStack: React + Tailwind, Supabase, OpenAI Whisper, GPT analysis, and embeddings for article-vs-speech depth comparison.\n\nCurrently validating retention, learning impact, and daily usability.",
      technologies: ["React", "Tailwind", "Supabase", "Whisper", "GPT", "Embeddings"],
      links: [
        {
          type: "Platform",
          href: "https://thoughtly.pro/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/Video%20Project%205.mp4",
      gif: "",
    },
    {
      title: "Startup911",
      href: "https://www.startup911.in/",
      dates: "",
      active: true,
      description:
        "A discovery engine for startup funding - grants, fellowships, and investor programs - aggregated and organized in one place.\n\nThe moat is the data infrastructure, not the UI.\n\n300+ primary sources are monitored continuously. RSS feeds are scraped and parsed, then passed through an enrichment pipeline that tags opportunities by type, stage, geography, and eligibility. For sources without feeds, AI scrapers built on Notte and Browserless extract structured details including deadlines, amounts, criteria, and program specifics.\n\nThe result is a live database that stays current without manual curation.\n\n100+ active grants tracked. 1000+ funding programs indexed.\n\nNewsletter: 200+ subscribers, about 60% open rate, about 20% click rate, about 60% international readership.\n\nStartup911 is the discovery layer. GrantSnap is the execution layer. Built to work together.",
      technologies: ["Discovery", "Enrichment Pipeline", "Notte", "Browserless", "Newsletter"],
      links: [
        {
          type: "Platform",
          href: "https://www.startup911.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/startup911-logo.png",
      video: "/Starup911Walkaround.mp4",
      gif: "",
    },
    {
      title: "GrantSnap",
      href: "https://grantsnap.pro",
      dates: "",
      active: true,
      description:
        "A Chrome extension that autofills grant and accelerator applications using structured founder data and AI.\n\nBuilt solo end to end across two repos: a Next.js dashboard and a Chrome MV3 extension. AI layer on Gemini 3.1 Flash (primary) with Gemini 2.5 Flash fallback. Backend on Supabase with Deno Edge Functions. Billing live via Dodo Payments.\n\nShips with AI autofill, Deep Scan eligibility scoring, Magic Wands, Pitch Deck Builder, Pitch Script Generator, custom templates, advanced analytics, and data export.\n\nTiers: Explorer (free), Applicant ($59/mo), Operator ($99/mo).",
      technologies: ["Chrome MV3", "Next.js", "Supabase", "Gemini", "Dodo Payments"],
      links: [],
      image: "/startup911-logo.png",
      video: "/GrantsnapWalkaround.mp4",
      gif: "",
    },
    {
      title: "EERA",
      href: "https://eera-os.com",
      dates: "",
      active: true,
      description:
        "Built at Acharya Ventures.\n\nEERA is a central Founder OS: system of record + intelligence layer + interface layer.\n\nCore context:\n- Multi-workspace architecture with strict tenant isolation and role-based access\n- Structured data backbone across teams, workflows, campaigns, leads, and knowledge\n- AI layer for research, writing, analysis, and decision support grounded in internal context\n- Knowledge base with RAG pipelines over workspace data and docs\n- Modular apps for marketing, CRM/leads, operations, and execution visibility\n- Integration layer for Meta, WhatsApp, logistics, email, and workflow triggers\n\nBuilt solo in under 4 months to reduce founder tool fragmentation and decision fatigue.",
      technologies: ["Founder OS", "System of Record", "RAG", "Automation", "Supabase"],
      links: [],
      image: "/acharya-ventures-logo.png",
      video: "/EERA%20WALKAROUND.mp4",
      gif: "",
    },
    {
      title: "Von Horizon",
      href: "#",
      dates: "",
      active: false,
      description:
        "My first product. Launched at 18 during COVID: a SaaS for contactless dining menus with custom CMS and QR delivery. Reached 3 paying clients.",
      technologies: [
        "Custom CMS",
        "QR Tech",
        "SaaS",
        "Restaurant Tech",
        "Digital Menu",
        "Contactless Ordering",
      ],
      links: [],
      image: "",
      video: "",
      gif: "",
    },
  ],
  skills: {
    frontend: [
      "React",
      "TypeScript",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Chrome Extensions (MV3)",
      "React 19",
    ],
    backendAndData: [
      "Supabase",
      "PostgreSQL",
      "Deno Edge Functions",
      "REST APIs",
      "Supabase Auth",
      "RSS ingestion and parsing pipelines",
      "Structured enrichment and tagging pipelines",
    ],
    aiAndAutomation: [
      "Gemini (3.1 Flash, 2.5 Flash, 2.5 Pro)",
      "OpenAI (GPT, Whisper, Embeddings)",
      "OpenRouter",
      "RAG pipelines",
      "AI scraping workflows (Notte + Browserless)",
      "Multi-step prompt chaining",
      "LLM orchestration",
      "Intent classification",
      "Fit scoring systems",
    ],
    infraAndTooling: ["Git", "Cursor", "Vercel", "Dodo Payments", "Zustand"],
    seo: [
      "Technical SEO (canonicals, JSON-LD, 301 architecture, duplicate page resolution)",
      "Content SEO and blog strategy",
      "Backlink and DR building from zero",
      "Grant and fellowship directory outreach",
    ],
    growthAndDistribution: [
      "Newsletter ops from zero to 200+ subscribers",
      "LinkedIn DM outreach for ecosystem partnerships",
      "Institutional BD with incubators, accelerators, and venture studios",
      "B2B and B2C monetization",
      "Chrome extension distribution",
    ],
    product: [
      "Full product lifecycle from zero to billing (solo)",
      "Pitch deck building",
      "Multi-repo product architecture",
      "Chrome Web Store publishing",
    ],
    analytics: [
      "Google Search Console",
      "GA4",
      "Microsoft Clarity",
      "Funnel analysis",
      "Impression and CTR diagnostics",
    ],
  },
} as const;
