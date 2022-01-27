import { AppProps } from 'next/app';
import { FC } from 'react';
import { Providers } from '../components/Providers';
import { Flex } from "@chakra-ui/react";
import { Header } from '../components/Header';

// Use require instead of import since order matters
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Providers>
      <Header />
      <Component {...pageProps} />
    </Providers>
  );
};

export default App;
