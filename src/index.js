import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from './Product';
import { Provider } from 'react-redux';
import store from './State/store';
import Number from './Number';


// Usual rendering code => Access html and embed js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Providing our store to every component in project
  <Provider store={store}>
    <Product />
    <Number />
  </Provider>
);
