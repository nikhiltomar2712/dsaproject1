"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    difficulty: "Medium",
    topics: "",
    language: "JavaScript",
    liveDemo: "",
    github: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send data to your API route
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-8 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
        Submit Your Project
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-indigo-500/10 bg-card/60 p-6 backdrop-blur">
        {/* Form fields: title, description, difficulty select, topics input, language select, liveDemo, github */}
        <div>
          <label className="text-sm font-medium">Project Title</label>
          <input
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-indigo-500/20 bg-background/50 p-2 text-sm outline-none focus:border-indigo-500"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        {/* ... similar fields for description, difficulty, etc. ... */}
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 py-2 text-sm font-semibold text-white transition hover:from-indigo-500 hover:to-purple-500"
        >
          <Send className="h-4 w-4" />
          Submit Project
        </button>
        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-400"
          >
            Thanks! Your project has been submitted for review.
          </motion.p>
        )}
      </form>
    </div>
  );
}
