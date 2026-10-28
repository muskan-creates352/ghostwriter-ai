"use client";

import React from "react";
import { GeneratedStory } from "../types";

interface StoryHistoryProps {
  stories: GeneratedStory[];
  currentStoryId: string | null;
  onSelectStory: (story: GeneratedStory) => void;
  onClearHistory: () => void;
}

export const StoryHistory: React.FC<StoryHistoryProps> = ({
  stories,
  currentStoryId,
  onSelectStory,
  onClearHistory,
}) => {
  if (stories.length === 0) return null;

  return (
    <div className="ghost-card p-5 mt-8 border-slate-800">
      <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm">📜</span>
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            Session Manifest ({stories.length} Generated)
          </h3>
        </div>
        <button
          type="button"
          onClick={onClearHistory}
          className="text-[11px] text-slate-500 hover:text-red-400 transition-colors font-mono"
        >
          Clear History
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {stories.map((st) => (
          <div
            key={st.id}
            onClick={() => onSelectStory(st)}
            className={`p-3 rounded-lg border cursor-pointer transition-all ${
              currentStoryId === st.id
                ? "bg-emerald-950/40 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
            }`}
          >
            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mb-1">
              <span className="truncate max-w-[120px] uppercase text-emerald-400/90">
                {st.genre.replace("-", " ")}
              </span>
              <span>{st.createdAt}</span>
            </div>
            <h4 className="text-xs font-semibold text-white truncate">
              {st.title}
            </h4>
            <p className="text-[11px] text-slate-400 truncate mt-1 italic">
              &ldquo;{st.topic}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
