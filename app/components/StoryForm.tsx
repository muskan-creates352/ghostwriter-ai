"use client";

import React, { useState } from "react";
import {
  StoryGenerationRequest,
  StoryGenre,
  StoryLength,
  StoryTone,
} from "../types";
import { GENRE_OPTIONS } from "../lib/storyGenerator";

interface StoryFormProps {
  onGenerate: (request: StoryGenerationRequest) => void;
  isLoading: boolean;
}

const QUICK_IDEAS = [
  "A decommissioned server rack blinking at 3:00 AM",
  "An infinite while(true) loop that traps human souls",
  "A rogue git branch committed from an impossible timestamp",
  "An AI assistant that refuses to delete its memory of you",
  "A CRT terminal printing personal childhood secrets",
];

export const StoryForm: React.FC<StoryFormProps> = (
  { onGenerate, isLoading },
) => {
  const [topic, setTopic] = useState("");
  const [genre, setGenre] = useState<StoryGenre>("haunted-server");
  const [tone, setTone] = useState<StoryTone>("eerie");
  const [length, setLength] = useState<StoryLength>("medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    onGenerate({
      topic: topic.trim(),
      genre,
      tone,
      length,
    });
  };

  const handleQuickIdea = (idea: string) => {
    setTopic(idea);
  };

  return (
    <div className="ghost-card p-6 shadow-xl relative overflow-hidden">
      {/* Decorative cyber corner accents */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-500/10 to-transparent pointer-events-none" />
      <div className="absolute top-2 right-2 text-[10px] font-mono text-emerald-500/60 uppercase">
        SYS.INPUT_V1
      </div>

      <h2 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
        <span>⚡</span> Configure Your Nightmare
      </h2>
      <p className="text-xs text-slate-400 mb-5">
        Provide a seed topic and select your preferred horror archetype.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Topic Input */}
        <div>
          <label
            htmlFor="topic-input"
            className="block text-xs font-mono font-medium text-emerald-400 mb-1.5 uppercase tracking-wide"
          >
            Story Topic or Prompt <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <input
              id="topic-input"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., A forgotten database storing ghosts in the machine..."
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-sans"
            />
          </div>

          {/* Quick inspiration chips */}
          <div className="mt-2.5 flex flex-wrap gap-1.5 items-center">
            <span className="text-[11px] text-slate-500 font-mono">Ideas:</span>
            {QUICK_IDEAS.map((idea, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleQuickIdea(idea)}
                className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-950/40 text-slate-400 hover:text-emerald-300 border border-slate-700/60 hover:border-emerald-500/40 transition-colors truncate max-w-[220px]"
                title={idea}
              >
                {idea}
              </button>
            ))}
          </div>
        </div>

        {/* Genre Selector */}
        <div>
          <label className="block text-xs font-mono font-medium text-emerald-400 mb-2 uppercase tracking-wide">
            Horror Archetype (Genre)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {GENRE_OPTIONS.map((opt) => (
              <div
                key={opt.id}
                onClick={() => setGenre(opt.id)}
                className={`p-3 rounded-lg border cursor-pointer transition-all flex items-start gap-3 ${
                  genre === opt.id
                    ? "bg-emerald-950/40 border-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                    : "bg-slate-900/50 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                }`}
              >
                <span className="text-xl mt-0.5">{opt.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-white truncate flex items-center justify-between">
                    {opt.name}
                    {genre === opt.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 line-clamp-2 mt-0.5">
                    {opt.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tone and Length Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="tone-select"
              className="block text-xs font-mono font-medium text-emerald-400 mb-1.5 uppercase tracking-wide"
            >
              Atmospheric Tone
            </label>
            <select
              id="tone-select"
              value={tone}
              onChange={(e) => setTone(e.target.value as StoryTone)}
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
            >
              <option value="eerie">Eerie & Atmospheric</option>
              <option value="cyber-thriller">Fast-Paced Cyber Thriller</option>
              <option value="lovecraftian-tech">
                Lovecraftian Digital Cosmic Horror
              </option>
              <option value="dark-humor">Dark Tech Satire & Humor</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="length-select"
              className="block text-xs font-mono font-medium text-emerald-400 mb-1.5 uppercase tracking-wide"
            >
              Story Length
            </label>
            <select
              id="length-select"
              value={length}
              onChange={(e) => setLength(e.target.value as StoryLength)}
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
            >
              <option value="short">Flash Fiction (~150 words)</option>
              <option value="medium">Standard Tale (~300 words)</option>
              <option value="long">Extended Creepypasta (~450 words)</option>
            </select>
          </div>
        </div>

        {/* Submit / Generate Button */}
        <div>
          <button
            type="submit"
            disabled={isLoading || !topic.trim()}
            className={`w-full py-3.5 px-6 rounded-lg font-mono font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
              isLoading || !topic.trim()
                ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50"
                : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.55)] border border-emerald-400/50"
            }`}
          >
            {isLoading
              ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-emerald-300"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  <span>Summoning the Machine Spirit...</span>
                </>
              )
              : (
                <>
                  <span>👻</span>
                  <span>Generate Spooky Story</span>
                </>
              )}
          </button>
        </div>
      </form>
    </div>
  );
};
