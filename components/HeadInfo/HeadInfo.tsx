import Head from 'next/head'
import { FC } from 'react'

interface HeadInfoProps {
  namePage: string
  metaDescription: string
}

const HeadInfo: FC<HeadInfoProps> = ({ namePage, metaDescription }) => {
  return (
    <div>
      <Head>
        <title>Oscar Moreira - {namePage}</title>
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
