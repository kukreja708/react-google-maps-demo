import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<script
  async
  defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_XI4m_W5UZTIAepQ90tfX48j1Jn6o0_4&libraries=places,marker"
></script>;
<script src="https://use.fontawesome.com/releases/v6.2.0/js/all.js"></script>;

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
