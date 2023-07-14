import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/globals.css';

import Layout from '@Component/Layout';
import DATA from 'data/ong';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
    <Head>
      <title>Maqueta ONG</title>
    </Head>
      <Component {...pageProps} />
    <style jsx global>{`
      :root {
        --color-primary: ${DATA.styles.colors.primary};
        --color-card: ${DATA.styles.colors.card};
        --color-form: ${DATA.styles.colors.form.container};
        --color-input: ${DATA.styles.colors.form.input};
        --color-button: ${DATA.styles.colors.button};
        --color-button-lang: ${DATA.styles.colors.buttonLang};
        --color-font-primary: ${DATA.styles.colors.fontColorPrimary};
        --color-font-secondary: ${DATA.styles.colors.fontColorSecondary};
      }
    `}
    </style>
    </Layout>
  )
}
