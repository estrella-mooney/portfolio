import { AppProps } from 'next/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import Header from './header'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <h1>EstrellaSite</h1>
      <Header />
      <Component {...pageProps} />
      <p>Footer</p>
    </>
  )
}
