import type {Project} from "../domain/Project.js";
import type {ProjectRepository} from "../domain/ProjectRepository.js";

export class GetProjectById {
  constructor(private postRepository: ProjectRepository) {}

  async run(projectId: string): Promise<Project | undefined> {
    return this.postRepository.getProjectById(projectId);
  }
}
