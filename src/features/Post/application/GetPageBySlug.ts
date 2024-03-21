import type {PostRepository} from "../domain/PostRepository.ts";

export class GetPageBySlug{
  constructor(private postRepository: PostRepository) {}

  async run(slug: string): Promise<unknown> {
    return this.postRepository.getPageBySlug(slug)
  }
}
