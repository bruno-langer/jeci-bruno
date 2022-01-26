import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/Router';
import GlobalStyle from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);
