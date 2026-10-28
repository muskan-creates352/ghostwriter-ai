"use client";

import React, { useState } from "react";

export const Header: React.FC = () => {
  const [ambientActive, setAmbientActive] = useState<boolean>(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  // Eerie ambient sound generator using native Web Audio API (zero external assets or keys!)
  const toggleAmbientSound = () => {
    if (!ambientActive) {
      try {
        if (typeof window === "undefined") return;
        const AudioContextClass =
          (globalThis as unknown as { AudioContext: typeof AudioContext })
            .AudioContext ||
          (globalThis as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        if (!AudioContextClass) return;
        const ctx = new AudioContextClass();

        // Create low drone oscillator for spooky server room hum
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = "sine";
        osc.frequency.setValueAtTime(65, ctx.currentTime); // Deep low 65Hz hum

        // Modulate frequency slightly for eerie drift
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2, ctx.currentTime);
        lfoGain.gain.setValueAtTime(8, ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(200, ctx.currentTime);

        gain.gain.setValueAtTime(0.08, ctx.currentTime); // Soft volume

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        setAudioCtx(ctx);
        setAmbientActive(true);
      } catch (err) {
        console.warn("Web Audio not supported or blocked by browser", err);
      }
    } else {
      if (audioCtx) {
        audioCtx.close();
        setAudioCtx(null);
      }
      setAmbientActive(false);
    }
  };

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand & Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-2xl shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            👻
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center">
                GhostWriter{" "}
                <span className="text-emerald-400 ml-1.5 font-mono">AI</span>
              </h1>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                v0.1.0 Preview
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Spooky Story Generator · Inspired by Hacktoberfest 2026 Week 4:
              &ldquo;Ghost in the Machine&rdquo;
            </p>
          </div>
        </div>

        {/* Badges & Ambient Sound Button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-medium">
            <span>🎃</span>
            <span>Hacktoberfest 2026</span>
          </div>

          <button
            type="button"
            onClick={toggleAmbientSound}
            title={ambientActive
              ? "Mute Eerie Hum"
              : "Enable Eerie Server Hum (Synthesizer)"}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              ambientActive
                ? "bg-emerald-500/20 border border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                : "bg-slate-900 border border-slate-700 text-slate-300 hover:border-slate-500"
            }`}
          >
            <span>
              {ambientActive ? "🔊 Server Hum: ON" : "🔈 Ambient Sound"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
