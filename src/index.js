import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { FirebaseContext } from './context/firebase';

import './index.css';
import { GlobalStyles } from './global-styles.js';

import App from './App';

const config = {
  apiKey: 'AIzaSyBpG-cxqIeGYM61GzePQYxhvj4tK0rxecA',
  authDomain: 'vildans-netflix.firebaseapp.com',
  databaseURL: 'https://vildans-netflix.firebaseio.com',
  projectId: 'vildans-netflix',
  storageBucket: 'vildans-netflix.appspot.com',
  messagingSenderId: '989453912345',
  appId: '1:989453912345:web:da9f90296d3f54ad611d88',
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
