"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topics: string[];
  language: string;
  liveDemo?: string;
  github: string;
  stars: number;
}

const difficultyColors = {
  Easy: "bg-green-500/20 text-green-400 border-green-500/30",
  Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Hard: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function ProjectCard({
  title,
  description,
  difficulty,
  topics,
  language,
  liveDemo,
  github,
  stars,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative overflow-hidden rounded-xl border border-indigo-500/10 bg-card/80 backdrop-blur-md transition-colors hover:border-indigo-500/40"
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <span
            className={cn(
              "rounded-full border px-2 py-0.5 text-xs font-semibold",
              difficultyColors[difficulty]
            )}
          >
            {difficulty}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {topics.map((t) => (
            <span
              key={t}
              className="rounded-md bg-indigo-500/10 px-2 py-1 text-xs font-medium text-indigo-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{language}</span>
          <div className="flex items-center gap-1 text-yellow-400">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs">{stars}</span>
          </div>
        </div>
      </div>
      <div className="flex divide-x divide-indigo-500/10 border-t border-indigo-500/10">
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 py-3 text-xs font-medium text-foreground/80 transition hover:bg-indigo-500/10"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live Demo
          </a>
        )}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 py-3 text-xs font-medium text-foreground/80 transition hover:bg-indigo-500/10"
        >
          <Github className="h-3.5 w-3.5" />
          Source
        </a>
      </div>
    </motion.div>
  );
}
