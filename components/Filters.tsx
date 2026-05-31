"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { topics } from "@/data/topics";

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

export default function Filters({ onFilterChange }: FiltersProps) {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [topic, setTopic] = useState("All");
  const [language, setLanguage] = useState("All");

  const difficulties = ["All", "Easy", "Medium", "Hard"];
  const languages = ["All", "C++", "Java", "Python", "JavaScript"];

  const handleChange = () => {
    onFilterChange({ search, difficulty, topic, language });
  };

  return (
    <div className="space-y-4 rounded-xl border border-indigo-500/10 bg-card/60 p-4 backdrop-blur">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleChange();
          }}
          className="w-full rounded-lg border border-indigo-500/20 bg-background/50 py-2 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {difficulties.map((d) => (
          <button
            key={d}
            onClick={() => {
              setDifficulty(d);
              handleChange();
            }}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              difficulty === d
                ? "bg-indigo-600 text-white"
                : "bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20"
            }`}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => {
            setTopic("All");
            handleChange();
          }}
          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
            topic === "All" ? "bg-purple-600 text-white" : "bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
          }`}
        >
          All Topics
        </button>
        {topics.map((t) => (
          <button
            key={t}
            onClick={() => {
              setTopic(t);
              handleChange();
            }}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              topic === t
                ? "bg-purple-600 text-white"
                : "bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {languages.map((l) => (
          <button
            key={l}
            onClick={() => {
              setLanguage(l);
              handleChange();
            }}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              language === l
                ? "bg-cyan-600 text-white"
                : "bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20"
            }`}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}
