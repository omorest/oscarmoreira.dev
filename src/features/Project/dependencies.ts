import { GetAllProjects } from "./application/GetAllProjects";
import { GetProjectById } from "./application/GetProjectById";
import type { ProjectRepository } from "./domain/ProjectRepository";
import { NotionProjectRepository } from "./infrastructure/NotionProjectRepository";


const projectRepository: ProjectRepository = new NotionProjectRepository();

export const useCases = { 
  GetAllProjects: new GetAllProjects(projectRepository),
  GetProjectById: new GetProjectById(projectRepository),
}