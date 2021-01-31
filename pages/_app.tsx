import { AppProps } from 'next/app';
import PageWrapper from '@Components/PageWrapper';
import Head from 'next/head';
import GlobalStyles from '../src/globalStyles';
import AppContext from '@Store/index';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppContext>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <GlobalStyles />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </AppContext>
  );
};

export default App;
