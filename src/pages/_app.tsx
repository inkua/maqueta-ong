import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';
import "bootstrap/dist/css/bootstrap.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
    <Head>
      <title>Maqueta ONG</title>
    </Head>
      <Header></Header>
      <Component {...pageProps} />
    </Layout>
  )
}
