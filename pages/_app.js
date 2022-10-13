import Layout from '../components/layout/Layout'
import ContextProvider from '../context/ContextProvider'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
  <ContextProvider>
    <Layout><Component {...pageProps} /></Layout>
  </ContextProvider>
   )
}

export default MyApp
