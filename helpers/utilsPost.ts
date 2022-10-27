import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export const getPosts = () => {
  const files = fs.readdirSync(path.join('posts')).filter(post => post.match(/\/*.mdx/))
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '')
    const fileContents = fs.readFileSync(
      path.join(`posts/${slug}.mdx`),
      'utf8'
    )
    const { data } = matter(fileContents)
    return {
      slug,
      data
    }
  })
  return allPostsData
}

export const getPost = (slug: any) => {
  const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), 'utf8')
  const { data, content } = matter(fileContents)
  return {
    data,
    content
  }
}

export const getAboutContent = () => {
  const fileContents = fs.readFileSync(path.join('content/about.mdx'), 'utf8')
  const { data, content } = matter(fileContents)
  return {
    data,
    content
  }
}
