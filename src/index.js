import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import todoReducer from './reducer';
import { Provider } from 'react-redux';
import App from './App';
import { fetchTodos } from './actions';
import thunk from 'redux-thunk';

const storeEnhancer = compose(
  applyMiddleware(
    thunk
  ),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(todoReducer, storeEnhancer)

store.dispatch(fetchTodos());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)