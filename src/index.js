import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './config/store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

injectTapEventPlugin();

const { store, history } = configureStore();
   
ReactDOM.render(
   <Provider store={store}>
      <ConnectedRouter history={history}>
         <Route path="/" component={App} />
      </ConnectedRouter>
   </Provider>,
   document.getElementById('root')
);

registerServiceWorker();

