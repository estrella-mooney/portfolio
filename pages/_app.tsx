// import { AppProps } from 'next/app'
// import { useRouter } from 'next/router'
// import '../styles/globals.css'
// import Header from './header'

// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter()
//   return (
//     <>
//       <h1 className="text-2xl font-semibold">EstrellaSite</h1>
//       <Header />
//       <Component {...pageProps} />
//       <p>Footer</p>
//     </>
//   )
// }

import { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
