import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import App from './app';
import {store} from './store-redux/store';

const root = document.getElementById("root");
persistStore(store);
// let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  root
);
