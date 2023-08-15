import { getPost, getPosts } from '../helpers/utilsPost'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

const Post = ({ data, content }: any) => {
  return (
    <div className = "flex flex-col items-center">
      <h1 className="font-bold text-center text-7xl mt-24 mb-12">{data.title}</h1>
      <time className="text-gray-500 italic">{data.date}</time>
      <p className="mt-12 prose prose-base max-w-[100%] lg:max-w-[70%] dark:prose-invert">
        <MDXRemote {...content} />
      </p>
    </div>
  )
}

export default Post

export const getStaticPaths = async () => {
  const posts = getPosts()
  const paths = posts.map((post) => ({ params: { slug: post.slug } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: any) => {
  const post = getPost(params.slug)
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeCodeTitles,
        rehypePrism
      ]
    }
  })
  return {
    props: {
      data: post.data,
      content: mdxSource
    }
  }
}
