export interface DataPost {
  title: string
  date: string
  description: string
  author: string
  tags?: string[]
  image: string
}

export interface Post {
  content: string
  slug: string
  data: DataPost
}
