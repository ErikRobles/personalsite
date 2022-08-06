import '../styles/globals.css';
import Navbar from '../components/Navbar';
// import type { AppProps } from 'next/app';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../hooks/auth';
import { firestore } from '../utils/firebase';
import AuthStateChanged from '../layouts/AuthStateChanged';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        {/* <AuthStateChanged> */}
        <Navbar />
        <Component {...pageProps} />
        <ToastContainer />
        {/* </AuthStateChanged> */}
      </AuthProvider>
    </>
  );
}

export default MyApp;
