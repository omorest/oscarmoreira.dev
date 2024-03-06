import type {PostRepository} from "../Domain/PostRepository.ts";
import type {Post} from "../Domain/Post.ts";
import {Client} from "@notionhq/client";

export class NotionRepository implements PostRepository {
  private notion: Client;
  constructor() {
    this.notion = new Client({ auth: TOKEN })
  }
  async getPostById(id: string): Promise<Post | undefined> {
    return undefined;
  }
  
  async getPosts(): Promise<Post[]> {
    const postsReponse = await this.notion.databases.query({
      database_id: databaseId,
    });
    
    if (!postsReponse.results) {
      return [];
    }
    return [];
  }
  
}
