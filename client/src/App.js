import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { getProjects } from './actions/projects';
import { useEffect, useState } from 'react'

function App() {
  const dispatch = useDispatch()
  const projects = useSelector((state) => state.projects)
  useEffect(() => {
    dispatch(getProjects())
    console.log(projects.data)
  }, [dispatch])
  return (
    <div className="container">
      {
        projects.data && projects.data.map(project => (
          <div className="container" key={project._id}>
            <h1>{project.title}</h1>
          </div>
        ))
      }
    </div>
  );
}

export default App;
