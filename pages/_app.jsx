import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
        <ToastContainer />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
