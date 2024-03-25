
export type Post = {
  id: string
  slug: string
  creationDate: Date
  title: string
  description: string
  tags: string[]
  author: string
  content?: string
  published: boolean
}
