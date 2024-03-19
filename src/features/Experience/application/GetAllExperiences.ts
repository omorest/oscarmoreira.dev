import type { ExperienceRepository } from "../domain/ExperienceRepository";

export class GetAllExperiences {
  constructor(private readonly experienceRepository: ExperienceRepository) {}

  async run() {
    return await this.experienceRepository.getAllExperiences();
  }
}