import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import { getAboutContent } from '../helpers/utilsPost'

const About = ({ data, content }: any) => {
  return (
    <div className = "flex flex-col items-center">
      <p className="prose prose-lg max-w-[100%] md:max-w-[70%] text-justify">
        <MDXRemote {...content} />
      </p>
    </div>
  )
}

export default About

export const getStaticProps = async ({ params }: any) => {
  const about = await getAboutContent()
  const mdxSource = await serialize(about.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeCodeTitles,
        rehypePrism
      ]
    }
  })
  return {
    props: {
      data: about.data,
      content: mdxSource
    }
  }
}
