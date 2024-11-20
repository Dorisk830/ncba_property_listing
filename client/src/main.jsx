import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {store} from './redux/store.js';
import {Provider} from 'react-redux';

// Get the root element from your HTML file (usually `index.html`)
const rootElement = document.getElementById('root');

// Create a root using React 18's new API
const root = ReactDOM.createRoot(rootElement);

// Render your application
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
