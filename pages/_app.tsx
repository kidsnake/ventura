import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.scss';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Ventura</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
