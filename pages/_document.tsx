import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head />
      <body className='transition ease-in-out delay-100 light dark:bg-[#1a1a1a] dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
