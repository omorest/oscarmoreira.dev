import type {PostRepository} from "../domain/PostRepository.ts";
import type {Post} from "../domain/Post.ts";
import {Client} from "@notionhq/client";
import type { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

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
      database_id: import.meta.env.NOTION_BLOG_DATABASE_ID as string,
      filter: {
        and: [
          {
            property: "published",
            select: {
              equals: "true",
            },
          },
        ],
      }
    });
    if (!postsReponse.results) {
      return [];
    }

    return postsReponse.results.map(({id, properties}) => {
      return {
        id,
        title: properties["title"].title[0].plain_text,
        slug: properties["slug"].rich_text[0].plain_text,
        description: properties["description"].rich_text[0].plain_text,
        tags: properties["tags"].multi_select.map((tag: {name: string}) => tag.name),
        creationDate: new Date(properties["creation_date"].created_time),
        author: properties["author"].multi_select.map((author: {name: string}) => author.name),
        published: properties['published'].select.name === 'true',
      }
    });
  }

  async getPageBySlug(slug: string) {
    return this.notion.databases
      .query({
        database_id: import.meta.env.NOTION_BLOG_DATABASE_ID as string,
        filter: {
          property: "slug",
          rich_text: {
            equals: slug,
          },
        },
      })
      .then((response) => response.results[0] as PageObjectResponse | undefined);
  }

  async getPostContentById(pageId: string) {
    return this.notion.blocks.children
      .list({ block_id: pageId })
      .then((response) => response.results as BlockObjectResponse[]);
  }
}
