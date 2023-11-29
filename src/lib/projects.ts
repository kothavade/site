import { z } from "zod"

const projectSchema = z.object({
  name: z.string(),
  link: z.string(),
  description: z.string(),
})

export type Project = z.infer<typeof projectSchema>

export async function getProjects(): Promise<Project[]> {
  return [
    {
      name: "CodeSense",
      link: "https://github.com/kothavade/CodeSense",
      description: "Next.js language-agnostic semantic code search engine."
    },
    {
      name: "kothavade.com",
      link: "https://github.com/kothavade/site",
      description: "Personal website built with Astro, Vue and SolidJS"
    },
    {
      name: "LectureAI",
      link: "https://github.com/kothavade/LectureAI",
      description: "React/FastAPI lecture player, transcriber, and summarizer."
    },
    {
      name: "chip8-rs",
      link: "https://github.com/kothavade/chip8-rs",
      description: "CHIP-8 emulator written in Rust."
    },
    {
      name: "frostbite",
      link: "https://github.com/kothavade/frostbite",
      description: "Nix configuration for macOS/Linux."
    },
    {
      name: "FireMessage",
      link: "https://github.com/kothavade/FireMessage",
      description: "Multi-platform Flutter chat app with Firebase backend."
    },
  ]
}
