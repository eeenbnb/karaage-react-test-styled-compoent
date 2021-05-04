import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Header } from './ui-components/header/header'
import { Footer } from './ui-components/footer/footer'

ReactDOM.render(
  <React.StrictMode>
    <header className="header">
      <Header/>
    </header>

    <div className="app">
      <p> any content</p>
    </div>

    <footer className="footer">
      <Footer/>
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
