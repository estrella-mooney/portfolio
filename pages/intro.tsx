import { AppProps } from 'next/app'
import '../styles/globals.css'

function Intro({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Intro
