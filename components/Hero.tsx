"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-4 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-cyan-500/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur"
          whileHover={{ scale: 1.05 }}
        >
          <Code2 className="h-4 w-4" />
          <span>Build • Visualize • Master Algorithms</span>
        </motion.div>
        <h1 className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
          Master DSA Through
          <br />
          Real Projects
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Explore a curated collection of data structures & algorithms projects.
          Visualize sorting, pathfinding, tree traversals, and more. Submit your own project and join the community.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-indigo-500 hover:to-purple-500"
          >
            Browse Projects
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
          <Link
            href="/visualizers"
            className="inline-flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-background/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-indigo-500/10"
          >
            Try Visualizers
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
