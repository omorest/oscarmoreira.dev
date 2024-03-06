import type {ProjectRepository} from "../Domain/ProjectRepository.ts";
import type {Project} from "../Domain/Project.ts";

export class GetProjects {
  constructor(private readonly postRepository: ProjectRepository) { }
  
  async run(): Promise<Project[]> {
    return this.postRepository.getProjects();
  }
}
