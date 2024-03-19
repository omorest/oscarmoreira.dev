import { GetAllExperiences } from "./application/GetAllExperiences";
import type { ExperienceRepository } from "./domain/ExperienceRepository";
import { NotionExperienceRepository } from "./infrasctructure/NotionExperienceRepository";


const experienceRepository: ExperienceRepository = new NotionExperienceRepository();

export const useCases = {
  GetAllExperiences: new GetAllExperiences(experienceRepository)
}