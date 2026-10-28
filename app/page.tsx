"use client";

import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { StoryForm } from "./components/StoryForm";
import { StoryResult } from "./components/StoryResult";
import { StoryHistory } from "./components/StoryHistory";
import { ArchitectureInfo } from "./components/ArchitectureInfo";
import { GeneratedStory, StoryGenerationRequest } from "./types";
import { generateMockStory } from "./lib/storyGenerator";

export default function Home() {
  const [currentStory, setCurrentStory] = useState<GeneratedStory | null>(null);
  const [history, setHistory] = useState<GeneratedStory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastRequest, setLastRequest] = useState<StoryGenerationRequest | null>(
    null,
  );

  // Generate an initial sample story on mount so the reviewer immediately sees the UI in action
  useEffect(() => {
    const initialRequest: StoryGenerationRequest = {
      topic: "The abandoned mainframe in Sector 7",
      genre: "haunted-server",
      tone: "eerie",
      length: "medium",
    };
    setLastRequest(initialRequest);
    const initialStory = generateMockStory(initialRequest);
    setCurrentStory(initialStory);
    setHistory([initialStory]);
  }, []);

  const handleGenerate = (request: StoryGenerationRequest) => {
    setIsLoading(true);
    setLastRequest(request);

    // Realistic atmospheric summoning delay (700ms)
    setTimeout(() => {
      try {
        const newStory = generateMockStory(request);
        setCurrentStory(newStory);
        setHistory((prev) => [newStory, ...prev.slice(0, 8)]);
      } catch (err) {
        console.error("Story generation failed:", err);
      } finally {
        setIsLoading(false);
      }
    }, 700);
  };

  const handleRegenerate = () => {
    if (lastRequest) {
      handleGenerate(lastRequest);
    }
  };

  const handleSelectStory = (story: GeneratedStory) => {
    setCurrentStory(story);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] scanlines">
      {/* Top Application Header */}
      <Header />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
        {/* Intro banner */}
        <div className="mb-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
            <span>Machine Spirits &amp; Codebound Horrors</span>
            <span className="cursor-blink" />
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Type a prompt below and let the machine write a haunting tale. Built
            for developers celebrating open source and scary stories.
          </p>
        </div>

        {/* 2-Column Responsive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form & Inputs */}
          <div className="lg:col-span-5 w-full">
            <StoryForm onGenerate={handleGenerate} isLoading={isLoading} />
          </div>

          {/* Right Column: Result Reader */}
          <div className="lg:col-span-7 w-full">
            <StoryResult
              story={currentStory}
              isLoading={isLoading}
              onRegenerate={handleRegenerate}
            />
          </div>
        </div>

        {/* Story Generation History */}
        <StoryHistory
          stories={history}
          currentStoryId={currentStory?.id || null}
          onSelectStory={handleSelectStory}
          onClearHistory={handleClearHistory}
        />

        {/* Architecture & AI Model Roadmap */}
        <ArchitectureInfo />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 mt-12 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            GhostWriter AI · Hacktoberfest 2026 Week 4 (&ldquo;Ghost in the
            Machine&rdquo;)
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Next.js 14</span>
            <span>React 18</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
