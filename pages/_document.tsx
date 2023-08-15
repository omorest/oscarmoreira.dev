import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head />
      <body className='transition ease-in-out delay-100 text-stone-600 bg-stone-100 dark:bg-stone-900 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
