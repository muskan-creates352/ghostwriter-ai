import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GhostWriter AI | Spooky Story Generator",
  description:
    "A spooky horror story generator inspired by the Hacktoberfest 2026 Week 4 theme: Ghost in the Machine.",
  icons: {
    icon:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👻</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#07090e] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-emerald-900 selection:text-emerald-100">
        {children}
      </body>
    </html>
  );
}
