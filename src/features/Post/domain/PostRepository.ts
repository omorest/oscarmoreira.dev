import type {Post} from "./Post.ts";

export type PostRepository = {
  getPosts: () => Promise<Post[]>
  getPostById: (id: string) => Promise<Post | undefined>
}
