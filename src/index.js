import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import ThemeContextWrapper from './components/LightMode/ThemeContextWrapper'
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextWrapper>
    <Router basename='/studiov2'>
      <App />
    </Router>
  </ThemeContextWrapper>
);

// If you want to start measuring performance in your app, pass a function to log results (for example: reportWebVitals(console.log)) or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
