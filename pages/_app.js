import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
