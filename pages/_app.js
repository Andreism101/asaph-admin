import Layout from '@/components/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps, router  }) {

  // This will exclude index.js from the Layout because it doesnt need to be rendered on this page. 
  // Ezi, use this also to route user when index creds are correct. 
  const isIndexPage = router.pathname === '/';

  // Conditionally apply the layout
  if (isIndexPage) {
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
