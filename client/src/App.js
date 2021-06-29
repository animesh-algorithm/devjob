import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { getProjects } from './actions/projects';

function App() {
  const dispatch = useDispatch()
  const projects = useSelector((state) => state.projects)
  dispatch(getProjects())
  console.log(projects)
  return (
    <h1>Demo</h1>
  );
}

export default App;
