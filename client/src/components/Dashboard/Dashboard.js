import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import moment from 'moment';

import { getProjects } from '../../actions/projects';
import './styles.css'

const Dashboard = () => {
    const dispatch = useDispatch()
    const projects = useSelector((state) => state.projects)
    useEffect(() => {
      dispatch(getProjects())
    }, [dispatch])

    return (
        <div className="container">
            <h1 className='display-1'>Dashboard</h1>
            <div className="row text-center">
                {
                    projects.data && projects.data.map(project => (
                        <div className="card col m-2" key={project._id}>
                            <h2>{project.title}</h2>
                            <ul className='text-left'>
                                    {
                                        project.features && project.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))
                                    }
                            </ul>
                            {
                                project.description && (<p className='lead'>project.description</p>)
                            }
                            <p className='text-left container'><span className='font-weight-bold'>Deadline:</span> {moment(project.deadline).format('DD/MM/YYYY')}</p>
                            <div className="container mb-2">
                                <a href={project.demoLink} target='_blank'><button className="btn btn-sm btn-danger m-2">Demo</button></a>
                                <a href={project.githubLink} target='_blank'><button className="btn btn-sm btn-danger m-2">Code</button></a>
                            </div>
                        </div>
                   ))
               }
            </div>
      </div>
    )
}

export default Dashboard
