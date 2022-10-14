import Layout from '../components/layout/Layout'
import ContextProvider from '../context/ContextProvider';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
  <ContextProvider>
    <ThemeProvider enableSystem={true} attribute="class">
    <Layout><Component {...pageProps} /></Layout>
    </ThemeProvider>
  </ContextProvider>
   )
}

export default MyApp
