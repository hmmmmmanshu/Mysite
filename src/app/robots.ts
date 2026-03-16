import { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "Claude-Web",
  "anthropic-ai",
  "Google-Extended",
  "PerplexityBot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...AI_CRAWLERS.map((bot) => ({
        userAgent: bot,
        allow: "/",
        disallow: [] as string[],
      })),
    ],
    sitemap: `${DATA.url}/sitemap.xml`,
  };
}
