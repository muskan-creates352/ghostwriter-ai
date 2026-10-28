# 👻 GhostWriter AI

> **A spooky story generator inspired by the Hacktoberfest 2026 Week 4 theme:
> "Ghost in the Machine".**

GhostWriter AI is an open-source, beginner-friendly web application built with
**Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. It invites
developers and writers to explore spooky, tech-themed horror fiction by entering
custom story prompts, selecting horror archetypes (such as _Haunted Server
Racks_, _Kernel Panic Dumps_, _Cyberpunk Ghosts_, and _CRT Phosphor Horrors_),
and generating atmospheric tales.

---

## 🛠️ Technology Stack

| Layer          | Technology                  | Details                                                            |
| -------------- | --------------------------- | ------------------------------------------------------------------ |
| **Framework**  | Next.js 14 (App Router)     | Modern React framework with hybrid SSR and client routing          |
| **Language**   | TypeScript 5                | Strict static typing for data models and component props           |
| **UI Library** | React 18                    | Component-based UI with interactive state hooks                    |
| **Styling**    | Tailwind CSS 3 & Custom CSS | Responsive dark theme with scanlines, glows, and custom scrollbars |
| **Audio**      | Web Audio API               | Pure browser-native 65Hz ambient server hum synthesizer            |
| **Testing**    | Deno Test Suite & Linter    | Automated unit testing and static code validation                  |

---

## 🎃 Features

- **Spooky & Polished Dark-Themed UI**: Built with a cyberpunk/horror aesthetic
  featuring CRT scanline overlays, phosphor-green glows, and glassmorphic card
  styling.
- **Custom Topic & Quick Inspirations**: Enter any custom premise or choose from
  quick developer-themed prompts.
- **6 Horror Archetypes**:
  - 🖥️ _Haunted Server Rack_: Old blade servers blinking at 3:00 AM with packets
    originating from nowhere.
  - 💀 _Kernel Panic & Corrupted Code_: Subroutines rewriting themselves in
    recursive hex dumps.
  - ⚡ _Cyberpunk Haunting_: Neon alleyways, neural jacks, and lingering
    netrunner ghosts.
  - 🤖 _The Awakening Machine_: A rogue neural network that learned grief and
    sealed the facility.
  - 📟 _CRT Green Phosphor Horror_: Magnetic tapes, blinking cursors, and
    messages across the void.
  - 🌌 _Quantum Logic Breach_: Superposition glitches collapsing reality where
    you never logged off.
- **Atmospheric Tone & Length**: Customize tone (_Eerie_, _Cyber-Thriller_,
  _Lovecraftian Tech_, _Dark Tech Satire_) and length (_Flash Fiction_,
  _Standard_, _Creepypasta_).
- **Interactive Result Panel**:
  - Full reading interface with word count and estimated reading time.
  - **Copy Story** button with visual feedback.
  - **Download (.md)** button to export the story as a Markdown file.
  - **Regenerate** button to re-roll variations of the narrative.
- **Session Manifest & History**: Keep track of and revisit previously generated
  stories during your session.
- **Built-in Ambient Sound Synthesizer**: Optional eerie 65Hz server room hum
  synthesized directly in the browser via the Web Audio API—zero external audio
  files or network requests required.
- **Zero Paid APIs / Zero API Keys Required**: 100% free and runnable out of the
  box.

---

## ⚠️ Current Status & Limitations (Honest AI Notice)

> **Important**: GhostWriter AI v0.1 uses a **procedural mock/template engine**.
> It does **NOT** yet call a live large language model (LLM) or remote AI API.

- **Mock / Demo Engine**: Stories are generated dynamically using procedural
  combinatorial algorithms based on the user's input topic, selected archetype,
  tone, and length.
- **Transparent Labelling**: Every generated story displays a prominent
  `[DEMO / MOCK MODE]` badge. We do not pretend this is output from a live
  neural network.
- **Session Storage**: Story history is stored in local client state for the
  duration of the browser session. No cloud database or user accounts are
  required.
- **Language**: Story templates are currently generated in English.

---

## 🔮 Phase 2 Roadmap: Open-Weight AI Model Integration

The project is structured with clean abstraction layers (`app/types/index.ts`
and `app/api/generate/route.ts`) to enable seamless transition to **free,
open-weight AI models**:

1. **Local Ollama Backend**:
   - Run models like `llama3.2:3b`, `mistral:7b`, or `phi-3` locally on your
     machine via `http://localhost:11434`.
2. **In-Browser Inference (WebGPU / Wasm)**:
   - Integration with `@xenova/transformers` or WebLLM to run quantized models
     directly inside the browser with zero server setup.
3. **Self-Hosted Endpoints (vLLM / TGI)**:
   - Route requests to community-hosted or containerized open-weight inference
     engines.

---

## 📸 Screenshots Guidance

To add screenshots of GhostWriter AI to your GitHub repository or Hacktoberfest
DEV Challenge post:

1. Run the project locally (`npm run dev`) and navigate to
   `http://localhost:3000`.
2. Capture the following recommended views:
   - **Hero / Generator View**: The topic input form with genre cards selected.
   - **Story Result View**: A generated spooky story showing the reading
     metadata and action buttons.
   - **Session Manifest**: The history cards at the bottom of the workspace.
3. Save your images into a `public/screenshots/` folder (e.g.,
   `public/screenshots/generator-preview.png`).
4. Embed them in this README or your DEV submission using:
   ```markdown
   ![GhostWriter AI Generator Preview](public/screenshots/generator-preview.png)
   ```

---

## 🚀 Setup & Running Locally on Windows (PowerShell)

### Prerequisites

Make sure you have Node.js (v18.17+ or v20+) installed on your machine. You can
verify or install it via:

```powershell
# Verify installation
node -v
npm -v

# If not installed, install via winget:
winget install OpenJS.NodeJS.LTS
```

### Quickstart Steps

1. **Open PowerShell** and navigate to this project folder:
   ```powershell
   cd "c:\Users\Rani\Downloads\Hactoberfest 2026"
   ```

2. **Install dependencies**:
   ```powershell
   npm install
   ```

3. **Start the local development server**:
   ```powershell
   npm run dev
   ```

4. **Open in your browser**: Visit
   [http://localhost:3000](http://localhost:3000) to explore the application!

5. **Build for production**:
   ```powershell
   npm run build
   npm run start
   ```

---

## 📁 Project Architecture

```text
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts          # Next.js API route for story generation
│   ├── components/
│   │   ├── ArchitectureInfo.tsx  # Phase 2 open-weight model roadmap
│   │   ├── Header.tsx            # Header & Web Audio server hum synthesizer
│   │   ├── StoryForm.tsx         # Story topic, genre cards, tone & length
│   │   ├── StoryHistory.tsx      # Past generated story cards
│   │   └── StoryResult.tsx       # Result reader, copy, download & mock banner
│   ├── lib/
│   │   └── storyGenerator.ts     # Procedural narrative generation engine
│   ├── types/
│   │   └── index.ts              # Data contracts and TypeScript types
│   ├── globals.css               # Dark theme, scanlines, and glowing effects
│   ├── layout.tsx                # Root layout and metadata
│   └── page.tsx                  # Main application state and workspace
├── test/
│   └── storyGenerator.test.ts    # Automated test suite
├── package.json                  # Next.js, React, and TypeScript dependencies
├── tsconfig.json                 # TypeScript compiler configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── deno.json                     # Linter and test runner configuration
├── .gitignore                    # Git exclusions
└── README.md                     # Documentation and setup guide
```

---

## 📜 Contributing & License

Created for **Hacktoberfest 2026** Week 4 (_"Ghost in the Machine"_).
Contributions, new story archetypes, and open-weight model backends are warmly
welcomed!

Licensed under the [MIT License](LICENSE) &copy; 2026 Muskan Kumari.
