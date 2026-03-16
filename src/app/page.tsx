import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

const HERO_ACCENT_PHRASES = ["unreasonable", "Claude credits"];

function HeroDescription({ text }: { text: string }) {
  const regex = new RegExp(`(${HERO_ACCENT_PHRASES.join("|")})`, "gi");
  const parts = text.split(regex);
  return (
    <p className="text-sm sm:text-base md:text-lg max-w-full whitespace-pre-line leading-[1.7]">
      {parts.map((part, i) =>
        HERO_ACCENT_PHRASES.some(
          (p) => part.toLowerCase() === p.toLowerCase()
        ) ? (
          <span key={i} className="text-easter-egg dark:text-easter-egg-foreground font-medium">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </p>
  );
}

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-6 sm:space-y-8 md:space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-2 sm:space-y-3 md:space-y-4">
          <div className="flex flex-row items-start justify-between gap-4 sm:gap-6">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none font-bold tracking-tighter leading-tight flex-1 min-w-0"
              yOffset={8}
              text={DATA.heroGreeting}
            />
            <BlurFade delay={BLUR_FADE_DELAY} className="flex-shrink-0">
              <Avatar className="size-20 sm:size-24 md:size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <HeroDescription text={DATA.heroDescription} />
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose prose-base sm:prose-lg max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert prose-p:leading-relaxed prose-p:mb-4 last:prose-p:mb-0">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="projects" className="!border-0">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-easter-egg text-easter-egg-foreground px-3 py-1 text-sm">
                  Projects
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter">
                  Projects
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg xl:text-xl/relaxed max-w-[600px] mx-auto px-2 sm:px-0">
                  {DATA.projectsIntro}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="flex flex-col gap-2 sm:gap-3 max-w-[800px] mx-auto w-full">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  gif={project.gif}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="why-i-build">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold">Why I Build</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert whitespace-pre-line">
            {DATA.whyIBuild}
          </p>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <p className="text-sm text-muted-foreground mb-4">
              Places where I have worked closely with founders and startup
              ecosystems.
            </p>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 11 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 13 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-3 sm:gap-4 px-4 text-center md:px-6 w-full py-8 sm:py-10 md:py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-easter-egg text-easter-egg-foreground px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-lg xl:text-xl/relaxed whitespace-pre-line px-2 sm:px-0">
                {DATA.contactSectionText}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center mt-4 sm:mt-6">
                {Object.entries(DATA.contact.social).map(([name, social]) => {
                  const isExternal = !social.url.startsWith("mailto:");
                  return (
                    <Link
                      key={name}
                      href={social.url}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 min-h-[44px] min-w-[44px] justify-center border border-easter-egg rounded-lg hover:bg-easter-egg hover:text-easter-egg-foreground transition-colors touch-manipulation"
                    >
                      <social.icon className="size-4" />
                      {name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
