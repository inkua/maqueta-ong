import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';
import "bootstrap/dist/css/bootstrap.css";
import 'styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
    <Head>
      <title>Maqueta ONG</title>
    </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
