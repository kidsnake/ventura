import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen, lime } from '@mui/material/colors';

import Navbar from '@/components/Navbar/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: lime[200],
    },
    secondary: {
      main: lightGreen[300],
    },
  },
});

import '../styles/globals.scss';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Ventura</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
