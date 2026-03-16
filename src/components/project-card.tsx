"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import React from "react";
import { ChevronRightIcon } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  gif?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  gif,
  links,
  className,
}: Props) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full cursor-pointer active:scale-[0.99] touch-manipulation",
        className
      )}
      onClick={handleClick}
    >
      {(video || gif || image) && (
        <div className="relative w-full aspect-video !border-0 overflow-hidden bg-card [&_video]:bg-card">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none w-full h-full object-cover !border-0 absolute inset-0 [clip-path:inset(12%_0_12%_0)]"
              style={{ backgroundColor: "hsl(var(--card))" }}
            />
          )}
          {gif && !video && (
            <Image
              src={gif}
              alt={title}
              width={500}
              height={300}
              className="absolute inset-0 w-full h-full object-cover !border-0"
            />
          )}
          {image && !gif && !video && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="absolute inset-0 w-full h-full object-cover !border-0"
            />
          )}
        </div>
      )}
      <CardHeader className={cn("px-3 sm:px-4 py-3 sm:py-4", !video && !gif && !image && "pt-4")}>
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1 min-w-0">
            <CardTitle className="mt-1 text-base flex items-center gap-2">
              {title}
              <ChevronRightIcon
                className={cn(
                  "size-4 flex-shrink-0 transition-transform duration-300",
                  isExpanded && "rotate-90"
                )}
              />
            </CardTitle>
            <time className="font-sans text-xs">{dates}</time>
          </div>
          {href && href !== "#" && (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs underline flex-shrink-0"
            >
              Open
            </Link>
          )}
        </div>
        <div className="pt-2">
          <Markdown
            className={cn(
              "prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert",
              !isExpanded && "line-clamp-3"
            )}
          >
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="overflow-hidden"
      >
        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-3 sm:px-4 pb-3 sm:pb-4">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1">
              {links?.map((linkItem, idx) => (
                <Link
                  href={linkItem?.href}
                  key={idx}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                    {linkItem.icon}
                    {linkItem.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </motion.div>
    </Card>
  );
}
