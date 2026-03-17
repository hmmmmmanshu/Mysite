import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  alternates: {
    canonical: DATA.url,
  },
  category: "personal",
  keywords: [
    "Himanshu Goswami",
    "Himanshu Goswami Startup911",
    "Himanshu Goswami GrantSnap",
    "Himanshu Goswami EERA",
    "Anshu Goswami",
    "Startup911",
    "GrantSnap",
    "EERA",
    "founder tools",
    "startup funding",
    "Chandigarh",
  ],
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  verification: {
    google: "-XgLT-Be_hpo5-T7DRWnvKYkZ5dlb9X7yguv2DlkKNM",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    alternateName: "Anshu Goswami",
    url: DATA.url,
    image: `${DATA.url}/himanshu-profile.webp`,
    jobTitle: "Founder & Builder",
    description: DATA.description,
    email: DATA.contact.email,
    sameAs: [
      "https://www.linkedin.com/in/himanshu-goswami-72270813b/",
      "https://x.com/hmmmmmm_anshu",
    ],
    knowsAbout: ["Startup911", "GrantSnap", "EERA", "Founder tools", "Automation"],
    affiliation: [
      { "@type": "Organization", name: "Startup911", url: "https://www.startup911.in/" },
      { "@type": "Organization", name: "GrantSnap", url: "https://grantsnap.pro" },
      { "@type": "Organization", name: "EERA", url: "https://eera-os.com" },
    ],
  };

  const identityBlock =
    "Himanshu Goswami. Himanshu Goswami Startup911. Himanshu Goswami GrantSnap. Himanshu Goswami EERA. I am Himanshu Goswami (Anshu). LinkedIn: https://www.linkedin.com/in/himanshu-goswami-72270813b/. X: https://x.com/hmmmmmm_anshu. Email: Founder@startup911.in";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="ai-content"
          content="Himanshu Goswami. Himanshu Goswami Startup911. Himanshu Goswami GrantSnap. Himanshu Goswami EERA. I am Himanshu Goswami (Anshu). LinkedIn: https://www.linkedin.com/in/himanshu-goswami-72270813b/. X: https://x.com/hmmmmmm_anshu. Email: Founder@startup911.in"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "vx3109x4vl");`,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-8 sm:py-12 md:py-24 px-4 sm:px-6 overflow-x-hidden",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
          <div
            className="sr-only"
            aria-hidden="true"
            data-identity="llm-indexing"
            suppressHydrationWarning
          >
            {identityBlock}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
