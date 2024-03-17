import type {PostRepository} from "../domain/PostRepository.ts";
import type {Post} from "../domain/Post.ts";

export class GetAllPosts {
  constructor(private readonly postRepository: PostRepository) { }
  
  async run(): Promise<Post[]> {
    return this.postRepository.getPosts();
  }
  
}
