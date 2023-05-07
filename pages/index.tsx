import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})

const Home: NextPage = () => {
  return (
    <>
        <WagmiConfig  client={wagmiClient}>
      <RainbowKitProvider theme={lightTheme({accentColor: '#58C1B2', accentColorForeground: 'black'})} chains={chains}>
      <Head>
        <title>Shawn Pickett - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Shawn Pickett" />
        <meta name="keywords" content="Shawn Pickett, Pickett, Shawn, web 3, Web3, web developer, developer, web3 developer, AI developer, api developer, ReactJS, NextJS" />
        <meta name="description" content="I am an experienced web developer." />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Shawn Pickett - Web Developer" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Shawn Pickett - Web3 Developer</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Shawn Pickett - Web3 Developer"/>
        <meta data-rh="true" property="og:image" content="/images/pickett.png"/>
      </Head>

      <Header />

      <main>
        <About />
      </main>

      <Footer />
      </RainbowKitProvider>
    </WagmiConfig>
    </>
  )
}

export default Home;