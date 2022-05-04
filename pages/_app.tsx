import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <main style={{
    width: '80%',
    margin: '100px auto',
    padding: '50px',
    backgroundColor: '#f0f0f0',
    borderRadius: '30px'
  }}><Component {...pageProps} /></main>
}

export default MyApp
