import { z } from 'zod'

const projectSchema = z.object({
  name: z.string(),
  link: z.string(),
  description: z.string(),
})

export type Project = z.infer<typeof projectSchema>

export async function getProjects(): Promise<Project[]> {
  return [
    {
      name: 'CodeSense',
      link: 'https://kothavade.com/gh/CodeSense',
      description: 'Next.js language-agnostic semantic code search engine.',
    },
    {
      name: 'kothavade.com',
      link: 'https://kothavade.com/gh/site',
      description: 'Personal website built with Astro, Vue and SolidJS',
    },
    {
      name: 'LectureAI',
      link: 'https://kothavade.com/gh/LectureAI',
      description: 'React/FastAPI lecture player, transcriber, and summarizer.',
    },
    {
      name: 'chip8-rs',
      link: 'https://kothavade.com/gh/chip8-rs',
      description: 'CHIP-8 emulator written in Rust.',
    },
    {
      name: 'frostbite',
      link: 'https://kothavade.com/gh/frostbite',
      description: 'Nix configuration for macOS/Linux.',
    },
    {
      name: 'FireMessage',
      link: 'https://kothavade.com/gh/FireMessage',
      description: 'Multi-platform Flutter chat app with Firebase backend.',
    },
  ]
}
