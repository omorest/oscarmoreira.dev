import { Client } from "@notionhq/client";
import type { ExperienceRepository } from "../domain/ExperienceRepository";
import type { Experience } from "../domain/Experience";

export class NotionExperienceRepository implements ExperienceRepository {
  private notion: Client;
  
  constructor() {
    this.notion = new Client({ auth: import.meta.env.NOTION_TOKEN })
  }

  async getAllExperiences(): Promise<Experience[]> {
    const experienceReponse = await this.notion.databases.query({
      database_id: import.meta.env.NOTION_EXPERIENCE_DATABASE_ID as string,
    });
    
    if (!experienceReponse.results) {
      return [];
    }

    return experienceReponse.results.map(({id, properties}) => {
      return {
        id,
        company: properties["Company"]?.title[0].plain_text,
        position: properties["Position"].rich_text[0].plain_text,
        startDate: properties["Start_Date"].date.start,
        endDate: properties["End_Date"].date?.start || "current",
        technologies: properties["Technologies"].multi_select.map((technology: {name: string}) => technology.name),
        languaje: properties["Language"].multi_select.map((languaje: {name: string}) => languaje.name),
      } as Experience
    })
  }
}