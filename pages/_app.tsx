import { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/bee.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
