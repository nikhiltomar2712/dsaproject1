"use client";
import { useState, useMemo } from "react";
import Filters from "@/components/Filters";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const [filters, setFilters] = useState({
    search: "",
    difficulty: "All",
    topic: "All",
    language: "All",
  });

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchSearch =
        filters.search === "" ||
        p.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.description.toLowerCase().includes(filters.search.toLowerCase());
      const matchDiff =
        filters.difficulty === "All" || p.difficulty === filters.difficulty;
      const matchTopic =
        filters.topic === "All" || p.topics.includes(filters.topic);
      const matchLang =
        filters.language === "All" || p.language === filters.language;
      return matchSearch && matchDiff && matchTopic && matchLang;
    });
  }, [filters]);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent"
      >
        Project Gallery
      </motion.h1>
      <Filters onFilterChange={setFilters} />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          No projects found. Try adjusting your filters.
        </p>
      )}
    </div>
  );
}
