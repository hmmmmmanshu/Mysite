import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Himanshu Goswami",
  initials: "HG",
  url: "https://himanshugoswami.com",
  location: "Chandigarh, India",
  locationLink: "https://www.google.com/maps/place/chandigarh",
  heroGreeting: "Hi, I'm Himanshu.",
  heroDescription:
    "I like building things.\n\nSometimes they turn into startups.\nSometimes they become internal tools.\nSometimes they fail spectacularly and consume an unreasonable amount of Claude credits.\n\nMost of them start with the same trigger.\n\nSomething feels unnecessarily complicated.\n\nInstead of writing a long rant about it, I try to build a system that makes it simpler.\n\nThat approach has produced a few projects so far.\n\nYou'll find them below.",
  description:
    "I like building things. Sometimes they turn into startups. Sometimes they become internal tools. Sometimes they fail spectacularly and consume an unreasonable amount of Claude credits.",
  summary: `Most of my work sits at the intersection of founders, capital, and automation.

Founders spend a surprising amount of time on things that have nothing to do with building their company: searching for funding, filling forms, juggling tools. So I build systems around those problems.

[**Startup911**](https://www.startup911.in/), [**GrantSnap**](https://grantsnap.pro), and [**EERA**](https://eera-os.com) each solve a different part of the same workflow: discovery, applications, operations.`,
  whyIBuild: `Startups are already difficult. What makes them worse is the invisible operational friction around them.

Founders spend weeks searching for opportunities, hours rewriting the same answers, days organizing information across disconnected tools. Most people accept this as normal.

I prefer building things that make those processes simpler. Not because software magically fixes startups, but because founders should spend more time building and less time navigating broken systems.`,
  avatarUrl: "/himanshu-profile.webp",
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
      end: "Present",
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
    "Most of the things below started as small experiments. Some grew into full platforms. Some are still evolving. A few exist purely because I refused to fill the same form twice.",
  projects: [
    {
      title: "Startup911",
      href: "https://www.startup911.in/",
      dates: "2025 to Present",
      active: true,
      description:
        "Startup911 is a discovery engine for startup funding opportunities.\n\nGrants, fellowships, and investor programs exist all over the internet. The problem is that they are scattered and difficult to track.\n\nStartup911 aggregates and organizes these opportunities so founders can discover relevant funding sources much faster.\n\nToday the platform tracks:\n\n- 100+ active grants\n- 1000+ investors and funding programs\n\nAlongside the platform we also run the Startup911 Opportunity Newsletter, which sends curated opportunities to founders.\n\nAs of 17 March 2026:\n\n- 200+ subscribers\n- Around 60 percent open rate\n- Around 20 percent click rate\n- Around 60 percent of readers are international\n\nThe goal is simple.\n\nHelp founders spend less time searching for opportunities and more time building.\n\nSmall note.\nIf you have ever opened twenty browser tabs trying to find grants, you probably understand why this exists.",
      technologies: ["Discovery", "Grants", "Funding", "Newsletter"],
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
      dates: "2025 to Present",
      active: true,
      description:
        "GrantSnap is the execution layer built on top of Startup911.\n\nDiscovering opportunities is only half the battle.\n\nThe real friction begins during applications.\n\nMost grants and accelerator forms ask very similar questions. Yet founders end up rewriting the same answers again and again.\n\nGrantSnap helps automate that process.\n\nUsing structured founder data and AI, it generates and fills application responses directly inside funding forms.\n\nThe goal is to help founders apply up to 10 times faster while keeping their narrative consistent across applications.\n\nInstead of rewriting answers for hours, founders can focus on improving the actual substance of their startup.\n\nFun fact.\n\nGrantSnap mostly exists because I once rewrote the same grant answer fourteen times in a single week.",
      technologies: ["AI", "Applications", "Automation"],
      links: [],
      image: "/startup911-logo.png",
      video: "/GrantsnapWalkaround.mp4",
      gif: "",
    },
    {
      title: "EERA",
      href: "https://eera-os.com",
      dates: "2026 to Present",
      active: true,
      description:
        "Built at Acharya Ventures\n\nEERA is an AI powered Founder Operating System developed inside Acharya Ventures.\n\nIt connects multiple systems founders normally manage separately.\n\n- Opportunity discovery\n- Research tools\n- Internal founder workflows\n- Operational automation\n\nThe idea behind EERA is straightforward.\n\nEarly stage founders should not need large teams just to manage operational complexity.\n\nWith the right systems, many of these processes can run quietly in the background.\n\nEERA was built to provide that operational backbone inside the venture studio.",
      technologies: ["AI", "Founder OS", "Automation"],
      links: [],
      image: "/acharya-ventures-logo.png",
      video: "/EERA%20WALKAROUND.mp4",
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
      links: [],
      image: "",
      video: "",
      gif: "",
    },
  ],
} as const;
