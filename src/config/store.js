import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import rootSaga from 'commons/middlewares';
import rootReducer from 'commons/reducers';

const configureStore = (initialState={}) => {

  const windowExtensionCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = windowExtensionCompose || compose;

  const middlewareForSaga = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(middlewareForSaga)
    )
  );

  if(module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept(
      'commons/reducers',
      () => store.replaceReducer(rootReducer)
    );
  }

  middlewareForSaga.run(rootSaga);

  return store;
};

export default configureStore;