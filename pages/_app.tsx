import type { AppProps } from 'next/app'
import React, { ReactElement } from 'react';

import "../src/app/globals.css";

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    return (
        <div className="Content">
            <Component {...pageProps} />
            <div id="modal-root"></div>
        </div>
    )
}

export default App