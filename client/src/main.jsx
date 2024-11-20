import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {persistor, store} from './redux/store.js';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


// Get the root element from your HTML file (usually `index.html`)
const rootElement = document.getElementById('root');

// Create a root using React 18's new API
const root = ReactDOM.createRoot(rootElement);

// Render your application
root.render(
  <Provider store={store}>
    <PersistGate loading= {null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
);
