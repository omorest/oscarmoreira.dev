import Head from 'next/head'
import { type FC } from 'react'

interface HeadInfoProps {
  namePage: string
  metaDescription: string
}

const HeadInfo: FC<HeadInfoProps> = ({ namePage, metaDescription }) => {
  const title = `Oscar Moreira | ${namePage}`
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="frontend, blog, projects, developer, nextjs" />
        <meta name="author" content="Oscar Moreira" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </div>
  )
}

export default HeadInfo
