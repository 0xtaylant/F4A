import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../../components/layout'
import MainNavigation from '../../components/main-navigation'
import navbar from '../../components/navbar.jsx'
import Navbar from '../../components/navbar.jsx'
import Radioblock from '../../components/radioblock'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
