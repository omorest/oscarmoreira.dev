import type {PostRepository} from "../Domain/PostRepository.ts";
import type {Post} from "../Domain/Post.ts";

export class GetPosts {
  constructor(private readonly postRepository: PostRepository) { }
  
  async run(): Promise<Post[]> {
    return this.postRepository.getPosts();
  }
  
}
