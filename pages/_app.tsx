import '../styles/globals.css';
import Navbar from '../components/Navbar';
import type { AppProps } from 'next/app';
import { ToastContainer, toast } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
