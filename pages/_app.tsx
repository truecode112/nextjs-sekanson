import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppContextWrapper } from '../context/AppContext'; // import based on where you put it
import { MetamaskProvider } from '../hooks/useMetamask';
import { CookiesProvider } from 'react-cookie';

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }: AppProps) {
  const activeChainId = ChainId.Mumbai;
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <CookiesProvider>
        <AppContextWrapper >
          <MetamaskProvider>
            <Component {...pageProps} />
          </MetamaskProvider>
        </AppContextWrapper>
      </CookiesProvider>
    </ThirdwebProvider>
  )
}
