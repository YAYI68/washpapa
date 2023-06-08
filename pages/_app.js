import Layout from '../components/layout/Layout'
import ContextProvider from '../context/ContextProvider';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps }) {
  return (
  <ContextProvider>
    <ThemeProvider enableSystem={true} attribute="class">
      <Toaster 
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 5000,
            style:{
              background: '#fff',
              color: '#3700bb',
            }
          }}
      />
    <Layout><Component {...pageProps} /></Layout>
    </ThemeProvider>
  </ContextProvider>
   )
}

export default MyApp
