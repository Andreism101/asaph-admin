import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'

export default function App({ Component, pageProps, router  }) {

  // This will exclude Login.jsx from the Layout because it doesnt need to be rendered on this page. 
  const isLoginPage = router.pathname === '/Login';

  // Conditionally apply the layout
  if (isLoginPage) {
    return (
      <>
        <Component {...pageProps} />
      </>
      );
  }

  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
