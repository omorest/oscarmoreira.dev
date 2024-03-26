import type { Technologies } from "./Technologies"

export type Project = {
  name: string
  description: string
  image: string
  technologies: Technologies[]
  authors: string[]
  linkApp: string
  linkProject: string
  publishDate: string
}
