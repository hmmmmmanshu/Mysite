import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Himanshu Goswami",
  initials: "HG",
  url: "https://himanshugoswami.com",
  location: "Chandigarh, India",
  locationLink: "https://www.google.com/maps/place/chandigarh",
  description:
    "I prefer to be hands-on — either building things myself or staying in the front seat when they're being created.",
  summary:
    "I work at the intersection of startups, capital, and automation. I've helped early-stage founders raise non-dilutive capital, go from zero to one, and launch faster. I've built tools that save founders hundreds of hours — and I've done it all without a tech background.\n\n**What I Do Best**\nExecution, Not Theory. From building solo SaaS tools to leading investor strategy and automating GTM workflows, I move fast, learn in public, and ship real things.\n\n**Why I Build**\nI didn't wait for a job to start building. I got tired of messy spreadsheets, siloed DMs, and hours wasted on repetitive ops. So I built tools to fix them — for myself, for founders, and now for the ecosystem.",
  avatarUrl: "/himanshu-profile.png",
  skills: [
    "Financial Modeling",
    "No-Code Tools",
    "Fundraising Strategy",
    "Venture Analysis",
    "SQL",
    "API Integration",
    "Automation Design",
    "Web3",
    "Shopify",
    "Excel",
    "Power BI",
    "Low-Code Automations",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "Himanshu252003@gmail.com",
    tel: "+91 6280298943",
    cv: "https://drive.google.com/file/d/1WG2BnOi1VAo_Hd9_JIzVQ7-YiRe9SBYV/view?usp=sharing",
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
      email: {
        name: "Send Email",
        url: "mailto:Himanshu252003@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Acharya Ventures",
      href: "#",
      badges: ["Founder's Office"],
      location: "Remote",
      title: "Founder's Office",
      logoUrl: "/acharya-ventures-logo.png",
      start: "November 2024",
      end: "Present",
      description:
        "Led fundraising, built workflows with Make, automated blog ops, grant pipelines, investor outreach, and TikTok content experiments. Built the firm's first founder cohort, raised ₹50L+ in non-dilutive grants, and led venture studio operations.",
    },
    {
      company: "Plansas",
      href: "#",
      badges: ["Financial Analysis"],
      location: "Remote",
      title: "Junior Financial Analyst",
      logoUrl: "/plansas-logo.png",
      start: "August 2024",
      end: "Present",
      description:
        "Built 10+ DCFs and SaaS projection models for clients. Specialized in strategy docs and investor readiness. Remote financial analyst role at Estonia-based consulting company.",
    },
    {
      company: "Iron Key Capital",
      href: "#",
      badges: ["Venture Analysis"],
      location: "Remote",
      title: "Venture Analyst",
      logoUrl: "/iron-key-capital-logo.png",
      start: "January 2024",
      end: "Present",
      description:
        "Evaluated blockchain startups, scouted founders, contributed to deal memos and pitch filters. Collaborated with founders in Web3 & Cryptocurrency space.",
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
        "Traveled across 6+ Indian states, worked with 5000+ students and 500 village heads to bring grassroots entrepreneurship into policy focus. Collaborated with 9 IITs and IIMs for residential bootcamps for young entrepreneurs.",
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
  projects: [
    {
      title: "Startup911",
      href: "https://www.startup911.in/",
      dates: "2023 - Present",
      active: true,
      description:
        "A platform for founders to discover, track, and apply for grants and investor capital — powered by automation. Built solo with Supabase, Airtable, and Make. Currently manage more than 100 grants and 1000 investors data.",
      technologies: [
        "Supabase",
        "Airtable",
        "APIs",
        "Make",
        "Automation",
        "Fundraising",
        "Grant Discovery",
        "No-Code Tools",
        "Data Management",
      ],
      links: [
        {
          type: "Platform",
          href: "https://www.startup911.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/startup911-logo.png",
      video: "",
      gif: "/startup911-demo.gif",
    },
    {
      title: "Thoughtly",
      href: "https://thoughtly.pro/",
      dates: "2024 - Present",
      active: true,
      description:
        "A personal reflection layer for AI users. Syncs your AI chats and lets you trace your thinking over time. Built with Chat Sync APIs, Supabase, and Frontend in Vite/React.",
      technologies: [
        "Chat Sync APIs",
        "Supabase",
        "Vite/React",
        "AI Productivity",
        "Reflection Tools",
        "Founder Workflow",
        "Mental Models",
      ],
      links: [
        {
          type: "Platform",
          href: "https://thoughtly.pro/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/thoughtly-logo.png",
      video: "",
      gif: "/thoughtly-demo.gif",
    },
    {
      title: "Hidden Art Works",
      href: "#",
      dates: "2021 - 2022",
      active: false,
      description:
        "A marketplace for offline creators. Converted local art into NFTs with blockchain-native copyright. Built with Shopify and OpenSea integration.",
      technologies: [
        "Shopify",
        "OpenSea",
        "Blockchain",
        "E-commerce",
        "NFTs",
        "Creator Economy",
      ],
      links: [
        {
          type: "Marketplace",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hidden-art-works-logo.png",
      video: "",
      gif: "",
    },
    {
      title: "Von Horizon",
      href: "#",
      dates: "2020 - 2021",
      active: false,
      description:
        "My first venture — a SaaS product for contactless dining menus in post-COVID India. Launched at 18, got 3 paying clients. Built with custom CMS and QR technology.",
      technologies: [
        "Custom CMS",
        "QR Tech",
        "SaaS",
        "Restaurant Tech",
        "Digital Menu",
        "Contactless Ordering",
      ],
      links: [
        {
          type: "Platform",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/von-horizon-logo.png",
      video: "",
      gif: "",
    },
  ],
  certifications: [
    {
      title: "Excel Financial Modeling and Valuations",
      issuer: "PWC",
      date: "2023",
      description: "Comprehensive training in financial modeling and business valuations using Excel.",
    },
    {
      title: "Analyzing and Visualizing Data with Microsoft Power BI",
      issuer: "PWC",
      date: "2023",
      description: "Advanced data analysis and visualization techniques using Power BI.",
    },
    {
      title: "Venture Capital Certification",
      issuer: "H2 Ventures",
      date: "2023",
      description: "Specialized certification in venture capital investment and startup evaluation.",
    },
    {
      title: "Work-Flow Automations No Code – Low Code AI Platforms",
      issuer: "Various",
      date: "2023",
      description: "Expertise in no-code and low-code automation platforms for business process optimization.",
    },
  ],
  hackathons: [
    {
      title: "Global Shapers World Economic Forum",
      dates: "2023 - Present",
      location: "Global",
      description:
        "Promoted to Impact Officer. Member of the Global Shapers Community, contributing to the World Economic Forum's mission of improving the state of the world.",
      image: "/global-shapers-logo.png",
      links: [],
    },
    {
      title: "AIESEC Chandigarh",
      dates: "2022 - 2023",
      location: "Chandigarh, India",
      description:
        "Volunteered with AIESEC Chandigarh, contributing to youth leadership development and international exchange programs.",
      image: "/aiesec-logo.png",
      links: [],
    },
    {
      title: "Leo Club Chandigarh",
      dates: "2021 - 2023",
      location: "Chandigarh, India",
      description:
        "Active member of Leo Club Chandigarh, participating in community service and leadership development activities.",
      image: "/leo-club-logo.png",
      links: [],
    },
  ],
} as const;
