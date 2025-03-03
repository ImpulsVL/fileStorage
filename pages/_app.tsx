import type { AppProps } from 'next/app'
import { UserProvider } from '../src/features/context/User';
import React, { ReactElement } from 'react';

import "../src/app/globals.css";

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    return (
        <UserProvider>
            <div className="Content">
                <Component {...pageProps} />
                <div id="modal-root"></div>
            </div>
        </UserProvider>
    )
}

export default App