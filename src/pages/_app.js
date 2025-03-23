import "@/styles/globals.css";
import Layout from "./Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../styles/globals.css';
// import '../styles/responsive.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (<Layout>
    <Component {...pageProps} />
  </Layout>);
}
