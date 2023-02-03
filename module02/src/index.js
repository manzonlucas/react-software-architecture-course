import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// add here instead of App
import { BrowserRouter } from 'react-router-dom';

// change render to hydrate
// this takes the pre-rendered html that we get from the server and 'adds reacts' to it. So it can re-renders dinamically as every react app
ReactDOM.hydrate(
  <React.StrictMode>
    {/* wrap App inside */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
