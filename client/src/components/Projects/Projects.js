import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { getProjects } from '../../actions/projects';
import './styles.css'
import Project from '../Project/Project';

const Projects = ({currentProjectId, setCurrentProjectId}) => {
    const dispatch = useDispatch()
    const projects = useSelector((state) => state.projects)

    useEffect(() => {
      dispatch(getProjects())
    }, [projects, dispatch])

    return (
        <div className="row justify-content-center">
            {
                projects.data && projects.data.map(project => <Project project={project} key={project._id} currentProjectId={currentProjectId} setCurrentProjectId={setCurrentProjectId} /> )
            }
        </div>
    )
}

export default Projects
