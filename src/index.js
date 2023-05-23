import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Sepolia } from "@thirdweb-dev/chains";

// Import thirdweb provider and Sepolia ChainId
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

// Wrap your app with the thirdweb provider
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={Sepolia}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);