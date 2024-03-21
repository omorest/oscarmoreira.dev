

import type {PostRepository} from "../domain/PostRepository.ts";

export class GetPostContentById {
  constructor(private postRepository: PostRepository) {}

  async run<T>(postId: string): Promise<T[]> {
    return this.postRepository.getPostContentById(postId)
  }
}
