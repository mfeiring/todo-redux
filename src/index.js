import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import todoReducer from './reducer';
import { fetchTodos } from './actions';
import App from './components/App';
import DevTools from './components/DevTools';

const storeEnhancer = compose(
  applyMiddleware(
    thunk
  ),
  DevTools.instrument()
);

const store = createStore(todoReducer, storeEnhancer);

store.dispatch(fetchTodos());

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
