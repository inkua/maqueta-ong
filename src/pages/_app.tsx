import type { AppProps } from 'next/app';
import Head from 'next/head';

import DataProvider from 'contexts/DataContext';
import Layout from '@Component/Layout';
import useContextData from 'hooks/useContextData';
import 'styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { styles } = useContextData();

  return (
    <DataProvider>
      <Layout>
        <Head>
          <title>Maqueta ONG</title>
        </Head>
        <Component {...pageProps} />
        <style jsx global>{`
        :root {
          --color-primary: ${styles.colors.primary};
          --color-card: ${styles.colors.card};
          --color-form: ${styles.colors.form.container};
          --color-input: ${styles.colors.form.input};
          --color-button: ${styles.colors.button};
          --color-button-lang: ${styles.colors.buttonLang};
          --color-font-primary: ${styles.colors.fontColorPrimary};
          --color-font-secondary: ${styles.colors.fontColorSecondary};
          }
        `}
        </style>
      </Layout>
    </DataProvider>
  )
}
