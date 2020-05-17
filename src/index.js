import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { ResultsProvider } from './components/context'


ReactDOM.render(
  <ResultsProvider>
    <Router><App /></Router>
  </ResultsProvider>,
  document.getElementById('root')
);

// 
serviceWorker.unregister();
