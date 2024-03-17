import type {Project} from "./Project.ts";

export type ProjectRepository = {
  getProjects: () => Promise<Project[]>
  getProjectById: (id: string) => Promise<Project | undefined>
}
