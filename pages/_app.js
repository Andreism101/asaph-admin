import Layout from '@/components/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps, router  }) {

  // This will exclude Login.jsx from the Layout because it doesnt need to be rendered on this page. 
  // Ezi, use this also to route user when login creds are correct. 
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
