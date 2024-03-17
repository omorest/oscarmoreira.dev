import type {ProjectRepository} from "../domain/ProjectRepository.js";
import type {Project} from "../domain/Project.js";

export class GetAllProjects {
  constructor(private readonly postRepository: ProjectRepository) { }
  
  async run(): Promise<Project[]> {
    return this.postRepository.getProjects();
  }
}
