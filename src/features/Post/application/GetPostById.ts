import type {PostRepository} from "../domain/PostRepository.ts";
import type {Post} from "../domain/Post.ts";

export class GetPostById {
  constructor(private postRepository: PostRepository) {}

  async run(postId: string): Promise<Post | undefined> {
    return this.postRepository.getPostById(postId);
  }
}
