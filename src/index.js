import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import todoReducer from './reducer';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(todoReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)