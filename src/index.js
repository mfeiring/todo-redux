import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import todoReducer from './reducer';
import { Provider } from 'react-redux';

const store = createStore(todoReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)