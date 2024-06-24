import { useEffect } from 'react';
import { AppProps } from 'next/app';
import Modal from 'react-modal';
import '@app/globals.css'; // Adjust the path as necessary

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
