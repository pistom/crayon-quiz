import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from '../reducers';

function reduxStore(initialState) {
  const store = createStore(reducers, initialState,
    compose(
      applyMiddleware(promiseMiddleware()),
      window.devToolsExtension && window.devToolsExtension()
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');  // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default reduxStore;
