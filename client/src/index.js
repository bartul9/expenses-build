import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "mobx-react";

import { RootStore } from "./stores"

import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";


const rootStore = new RootStore();

const THEME = createTheme({
  typography: {
      fontFamily: [
          'monospace',
        ].join(','),
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

ReactDOM.render(
    <MuiThemeProvider theme={THEME}>
      <Provider rootStore={rootStore}>
          <App />
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);