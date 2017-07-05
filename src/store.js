import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import _ from 'lodash';
import reducers from './reducers';
import { loadState, saveState } from './loadLocalStorage';

export const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
    applyMiddleware(thunk),
    persistedState,
  );

  store.subscribe(
    _.throttle(() => {
      saveState({
        todos: store.getState().config.todos,
      });
    }, 1000),
  );

  return store;
};
