import type {ProjectRepository} from "../domain/ProjectRepository.ts";
import type {Project} from "../domain/Project.ts";

export class GetProjects {
  constructor(private readonly postRepository: ProjectRepository) { }
  
  async run(): Promise<Project[]> {
    return this.postRepository.getProjects();
  }
}
