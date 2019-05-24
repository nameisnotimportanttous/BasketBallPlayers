import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import App from './App.jsx';
import { Provider } from 'react-redux';
console.log('this is the store', configureStore);
render(
  <Provider store={configureStore}>
    <App />,
  </Provider>,
  document.getElementById('app')
);
