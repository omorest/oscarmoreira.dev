import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
