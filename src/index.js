import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './config/store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

injectTapEventPlugin();

const store = configureStore();
   
ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);

registerServiceWorker();

