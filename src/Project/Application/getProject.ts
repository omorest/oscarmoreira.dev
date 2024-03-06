import type {Project} from "../Domain/Project.ts";
import type {ProjectRepository} from "../Domain/ProjectRepository.ts";

export class GetProject {
  constructor(private postRepository: ProjectRepository) {}

  async run(projectId: string): Promise<Project | undefined> {
    return this.postRepository.getProjectById(projectId);
  }
}
