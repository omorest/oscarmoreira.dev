import type {PostRepository} from "../domain/PostRepository.ts";
import type {Post} from "../domain/Post.ts";
import {Client} from "@notionhq/client";

export class NotionPostRepository implements PostRepository {
  private notion: Client;
  constructor() {
    this.notion = new Client({ auth: process.env.TOKEN })
  }
  async getPostById(id: string): Promise<Post | undefined> {
    return undefined;
  }
  
  async getPosts(): Promise<Post[]> {
    const postsReponse = await this.notion.databases.query({
      database_id: process.env.databaseId as string,
    });
    
    if (!postsReponse.results) {
      return [];
    }
    return [];
  }
  
}
