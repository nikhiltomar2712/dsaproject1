"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MiniVisualizer() {
  const [array, setArray] = useState<number[]>([]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 10);
    setArray(newArr);
    setStep(0);
  };

  // Bubble sort one step
  const nextStep = () => {
    const arr = [...array];
    let swapped = false;
    for (let i = 0; i < arr.length - step - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        setArray([...arr]);
        setStep((s) => s + 1);
        return;
      }
    }
    if (!swapped) setStep(arr.length);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">
          Interactive Sorting Visualizer
        </h2>
        <div className="mx-auto flex h-40 items-end justify-center gap-1 rounded-xl border border-indigo-500/10 bg-card/40 p-4 backdrop-blur">
          {array.map((value, idx) => (
            <motion.div
              key={idx}
              className="w-4 rounded-t bg-gradient-to-t from-indigo-500 to-purple-500"
              style={{ height: `${value}%` }}
              animate={{ height: `${value}%` }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={nextStep}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
          >
            Next Step
          </button>
          <button
            onClick={resetArray}
            className="rounded-lg border border-indigo-500/30 bg-background/60 px-4 py-2 text-sm transition hover:bg-indigo-500/10"
          >
            New Array
          </button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Bubble Sort | Step: {step}/{array.length}</p>
      </div>
    </section>
  );
}
