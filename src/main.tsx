import { createRoot } from 'react-dom/client';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { App } from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Glitch } from './Glitch';

const manifestUrl = 'https://cryoland.github.io/ton-dapp/manifest.json';
const root = createRoot(document.getElementById('app') as HTMLElement);

const router = createBrowserRouter([
  {
    path: "/ton-dapp",
    element: (
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <App />
      </TonConnectUIProvider>
    ),
  },
  {
    path: "/ton-dapp/almost-here",
    element: <Glitch image='almost-here.png' />,
  },
  {
    path: "/ton-dapp/is-coming",
    element: <Glitch image='is-coming.png' />,
  },
  {
    path: "/ton-dapp/knock",
    element: <Glitch image='knock.png' />,
  },
]);

root.render(
  <RouterProvider router={router} />
);
