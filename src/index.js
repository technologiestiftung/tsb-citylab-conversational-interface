import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import { ThemeProvider } from 'styled-components';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Store from './state/Store';
import GlobalStyle from './style/GlobalStyle';
import defaultTheme from './style/themes/default';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={Store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
