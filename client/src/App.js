import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Projects from './components/Projects/Projects';

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/projects/create' exact component={Projects}/>
      </Switch>
    </Router>
  );
}

export default App;
