// index.ts
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { ModalProvider } from './components/modal';
import uiReducer from './store/reducer';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

const store = createStore(uiReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);
