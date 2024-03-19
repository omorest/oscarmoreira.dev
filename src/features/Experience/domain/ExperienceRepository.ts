import type { Experience } from "./Experience";

export interface ExperienceRepository {
  getAllExperiences(): Promise<Experience[]>;
}
