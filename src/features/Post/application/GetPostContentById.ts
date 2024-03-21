

import type {PostRepository} from "../domain/PostRepository.ts";

export class GetPostContentById {
  constructor(private postRepository: PostRepository) {}

  async run(postId: string): Promise<unknown> {
    return this.postRepository.getPostContentById(postId)
  }
}
