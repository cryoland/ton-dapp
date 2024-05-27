import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { App } from './App';
import { Glitch } from './Glitch';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const manifestUrl = 'https://cryoland.github.io/ton-dapp/manifest.json';

export const Wrapper = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/ton-dapp" element={<TonConnectUIProvider manifestUrl={manifestUrl}><App /></TonConnectUIProvider>} />                
                <Route path="/ton-dapp/:id" element={<Glitch />} />
            </Routes>
        </BrowserRouter>
    );
}
