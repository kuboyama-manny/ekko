import React, {useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import WOW from 'wow.js';
import ReactGA from 'react-ga';

import Routes from './layouts';

import './styles/index.scss';
import getStore from './store';

const {store, persistor} = getStore();

const AppContainer = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  useEffect(() => {
    const {REACT_APP_GA_TRACKING_CODE} = process.env;
    ReactGA.initialize(REACT_APP_GA_TRACKING_CODE);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
};

export default AppContainer;
