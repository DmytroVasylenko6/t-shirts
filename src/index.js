import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import 'normalize.css';
import './index.scss';
import App from './App';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>,
  //   </React.StrictMode>,
  document.getElementById('root'),
);
