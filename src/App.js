import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Results from './components/Results'
import Default from './components/Default'
import SearchBar from './components/SearchBar'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
      <Results/>
      <Switch>
        <Route exact path='/' component={SearchBar}></Route>
        <Route component={Default}></Route>
      </Switch>
    </React.Fragment>


  );
}

export default App;
