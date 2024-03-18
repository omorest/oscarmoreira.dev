import type {PostRepository} from "../domain/PostRepository.ts";
import type {Post} from "../domain/Post.ts";
import {Client} from "@notionhq/client";

export class NotionPostRepository implements PostRepository {
  private notion: Client;
  constructor() {
    this.notion = new Client({ auth: import.meta.env.NOTION_TOKEN })
  }
  async getPostById(id: string): Promise<Post | undefined> {
    return undefined;
  }
  
  async getPosts(): Promise<Post[]> {
    const postsReponse = await this.notion.databases.query({
      database_id: import.meta.env.NOTION_BlOG_DATABASE_ID as string,
    });
    
    if (!postsReponse.results) {
      return [];
    }

    return postsReponse.results.map(({id, properties}) => {
      return {
        id,
        title: properties["title"].title[0].plain_text,
        description: properties["description"].rich_text[0].plain_text,
        // content: properties["content"].rich_text[0].plain_text,
        tags: properties["tags"].multi_select.map((tag: {name: string}) => tag.name),
        creationDate: new Date(properties["creation_date"].created_time),
        author: properties["author"].multi_select.map((author: {name: string}) => author.name),
      } as Post
    });
  }
  
}
