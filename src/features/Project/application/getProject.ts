import type {Project} from "../domain/Project.ts";
import type {ProjectRepository} from "../domain/ProjectRepository.ts";

export class GetProject {
  constructor(private postRepository: ProjectRepository) {}

  async run(projectId: string): Promise<Project | undefined> {
    return this.postRepository.getProjectById(projectId);
  }
}
