"use client";

import React, { useState } from "react";

export const ArchitectureInfo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ghost-card p-4 mt-8 border-slate-800 bg-slate-950/60">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm">🛠️</span>
          <h3 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wide">
            Phase 2 Architecture: Open-Weight AI Model Integration Plan
          </h3>
        </div>
        <button
          type="button"
          className="text-xs font-mono text-emerald-400 hover:text-emerald-300"
        >
          {isOpen ? "[Hide Details]" : "[View Roadmap]"}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-300 space-y-3 font-mono leading-relaxed">
          <p>
            GhostWriter AI is built with an abstraction layer designed for local
            and open-weight models, requiring{" "}
            <strong>no paid commercial APIs or external billing</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            <div className="p-3 rounded bg-slate-900 border border-slate-800">
              <div className="text-emerald-400 font-bold mb-1">
                1. Local Ollama Backend
              </div>
              <p className="text-[11px] text-slate-400">
                Run models like <code>llama3.2:3b</code> or{" "}
                <code>mistral:7b</code> locally on your machine via{" "}
                <code>http://localhost:11434</code>.
              </p>
            </div>

            <div className="p-3 rounded bg-slate-900 border border-slate-800">
              <div className="text-emerald-400 font-bold mb-1">
                2. In-Browser Transformers
              </div>
              <p className="text-[11px] text-slate-400">
                Using <code>@xenova/transformers</code>{" "}
                (WebGPU/Wasm) to run compact quantized models directly in the
                user&apos;s browser.
              </p>
            </div>

            <div className="p-3 rounded bg-slate-900 border border-slate-800">
              <div className="text-emerald-400 font-bold mb-1">
                3. Modular API Route
              </div>
              <p className="text-[11px] text-slate-400">
                The Next.js <code>/api/generate</code>{" "}
                endpoint swaps between the demo procedural generator and the
                local model with a single environment flag.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
