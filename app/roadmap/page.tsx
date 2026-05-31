"use client";
import { motion } from "framer-motion";
import { roadmapData } from "@/data/roadmaps";

export default function RoadmapPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
        DSA Learning Roadmap
      </h1>
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-1 bg-indigo-500/20 md:left-1/2 md:-translate-x-1/2" />
        {roadmapData.map((item, idx) => (
          <motion.div
            key={item.topic}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`relative mb-8 flex flex-col md:flex-row ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="flex-1" />
            <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-bold text-white shadow-lg">
              {idx + 1}
            </div>
            <div className="flex-1 p-4">
              <div className="rounded-xl border border-indigo-500/10 bg-card/60 p-4 backdrop-blur">
                <h3 className="font-bold text-foreground">{item.topic}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
