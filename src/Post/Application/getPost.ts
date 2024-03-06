import type {PostRepository} from "../Domain/PostRepository.ts";
import type {Post} from "../Domain/Post.ts";

export class GetPost {
  constructor(private postRepository: PostRepository) {}

  async run(postId: string): Promise<Post | undefined> {
    return this.postRepository.getPostById(postId);
  }
}
