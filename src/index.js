import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Montserrat-Bold.woff';
import './fonts/Montserrat-Bold.woff2';
import './fonts/Montserrat-Medium.woff';
import './fonts/Montserrat-Medium.woff2';
import './fonts/Montserrat-Regular.woff';
import './fonts/Montserrat-Regular.woff2';
import './fonts/Montserrat-SemiBold.woff';
import './fonts/Montserrat-SemiBold.woff2';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
