import { GetAllPosts } from "./application/GetAllPosts";
import { GetPostById } from "./application/GetPostById";
import type { PostRepository } from "./domain/PostRepository";
import { NotionPostRepository } from "./infrastructure/NotionPostRepository";


const postRepository: PostRepository = new NotionPostRepository();

export const useCases = {
  GetAllPosts: new GetAllPosts(postRepository),
  GetPostById: new GetPostById(postRepository),
}