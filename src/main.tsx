import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import reduxStore from './redux/redux-store.tsx';
import { reduxToolkitStore } from './redux/redux-toolkit-store.tsx';
import AppReduxToolkitStore from './AppReduxToolkitStore.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={reduxToolkitStore}>
      <AppReduxToolkitStore />
    </Provider>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
