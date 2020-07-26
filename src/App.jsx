import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes/index'
import GlobalStyle from './styles/glogal';
import { store, persistor }from './store';

const App = () => {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
          </Router>
        </PersistGate>
      </Provider> 
  )};


export default App;
