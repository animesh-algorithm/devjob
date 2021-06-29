import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { getProjects } from '../../actions/projects';
import './styles.css'
import Project from '../Project/Project';

const Projects = () => {
    const dispatch = useDispatch()
    const projects = useSelector((state) => state.projects)
    useEffect(() => {
      dispatch(getProjects())
    }, [dispatch])

    return (
        <div className="row">
            {
                projects.data && projects.data.map(project => <Project project={project} key={project._id}/> )
            }
        </div>
    )
}

export default Projects
