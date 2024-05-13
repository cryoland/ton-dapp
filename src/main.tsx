import { createRoot } from 'react-dom/client';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { App } from './App';

const manifestUrl = 'https://cryoland.github.io/ton-dapp/manifest.json';
const root = createRoot(document.getElementById('app') as HTMLElement);

root.render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>
);