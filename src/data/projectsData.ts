import type { Project } from "../models/Project";


export const projectsData: Project[] = [
  {
    name: "GitHub Wrapped",
    authors: ["Óscar Moreira"],
    description: "A GitHub profile summary generator. Your last followers, repositories, and more in a single page.",
    image: "src/data/images/gh-wrapped.png",
    linkApp: "https://gh-wrapped.vercel.app/",
    linkProject: "https://github.com/omorest/Github-Wrapped",
    publishDate: "2024",
    technologies: ["NextJS", "React", "TypeScript", "Vercel"]
  }
]