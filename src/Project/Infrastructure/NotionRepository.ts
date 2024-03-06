import {Client} from "@notionhq/client";
import type {Project} from "../../Project/Domain/Project.ts";
import type {ProjectRepository} from "../Domain/ProjectRepository.ts";

export class NotionRepository implements ProjectRepository {
  private notion: Client;
  constructor() {
    this.notion = new Client({ auth: import.meta.env.NOTION_TOKEN })
  }
  async getProjectById(id: string): Promise<Project | undefined> {
    return undefined;
  }
  
  async getProjects(): Promise<Project[]> {
    const projectsResponse = await this.notion.databases.query({
      database_id: import.meta.env.NOTION_PROJECT_DATABSE_ID,
    });
    
    if (!projectsResponse.results) {
      return [];
    }
    
    return projectsResponse.results.map(({id, properties}) => {
      return {
        id,
        name: properties["name"].title[0].plain_text,
        description: properties["description"].rich_text[0].plain_text,
        tags: properties["tags"].multi_select.map((tag: {name: string}) => tag.name),
        linkProject: properties["link_project"].url,
        linkApp: properties["link_app"].url,
        authors: properties["authors"].multi_select.map((author: {name: string}) => author.name),
        creationDate: new Date(properties["creation_date"].created_time)
      } as Project
    });
  }
}
