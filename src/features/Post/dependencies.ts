import { GetAllPosts } from "./application/GetAllPosts";
import { GetPostById } from "./application/GetPostById";
import { GetPageBySlug } from "./application/GetPageBySlug";
import { GetPostContentById } from "./application/GetPostContentById";
import type { PostRepository } from "./domain/PostRepository";
import { NotionPostRepository } from "./infrastructure/NotionPostRepository";


const postRepository: PostRepository = new NotionPostRepository();

export const useCasesPost = {
  GetAllPosts: new GetAllPosts(postRepository),
  GetPostById: new GetPostById(postRepository),
  GetPageBySlug: new GetPageBySlug(postRepository),
  GetPostContentById: new GetPostContentById(postRepository),
}