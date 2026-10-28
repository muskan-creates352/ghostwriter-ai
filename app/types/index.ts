export type StoryGenre =
  | "cyberpunk-horror"
  | "haunted-server"
  | "kernel-panic"
  | "ai-sentience"
  | "analog-terminal"
  | "quantum-anomaly";

export type StoryTone =
  | "eerie"
  | "cyber-thriller"
  | "lovecraftian-tech"
  | "dark-humor";

export type StoryLength = "short" | "medium" | "long";

export interface GenreOption {
  id: StoryGenre;
  name: string;
  icon: string;
  description: string;
}

export interface StoryGenerationRequest {
  topic: string;
  genre: StoryGenre;
  tone: StoryTone;
  length: StoryLength;
}

export interface GeneratedStory {
  id: string;
  title: string;
  content: string;
  genre: StoryGenre;
  tone: StoryTone;
  topic: string;
  createdAt: string;
  wordCount: number;
  readingTimeMinutes: number;
  isMock: true;
  engineInfo: {
    name: string;
    version: string;
    modelTarget: string;
  };
}
