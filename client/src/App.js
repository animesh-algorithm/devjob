import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import ProjectForm from './components/ProjectForm/ProjectForm';
import TaskForm from './components/TaskForm/TaskForm';

function App() {
  const [currentProjectId, setCurrentProjectId] = useState(null)

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={() => <Dashboard currentProjectId={currentProjectId} setCurrentProjectId={setCurrentProjectId} />} />
        <Route path='/projects/create' exact component={() => <ProjectForm currentProjectId={currentProjectId} setCurrentProjectId={setCurrentProjectId} />}/>
        {/* <Route path='/projects/:id' exact component={ProjectDetail} /> */}
        <Route path='/projects/edit' exact component={() => <ProjectForm currentProjectId={currentProjectId} setCurrentProjectId={setCurrentProjectId} />}/>
        <Route path='/projects/tasks/create' exact component={() => <TaskForm currentProjectId={currentProjectId} setCurrentProjectId={setCurrentProjectId} />} />
      </Switch>
    </Router>
  );
}

export default App;
