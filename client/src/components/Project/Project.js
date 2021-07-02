import moment from 'moment';
import { Button } from "@material-ui/core"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../../actions/projects';

const Project = ({ project, currentProjectId, setCurrentProjectId }) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteProject(project._id))
    }
    const handleEdit = () => {
        setCurrentProjectId(project._id)
    }

    return (
        <div className="card m-2" key={project._id}>
            <h2 className='card-title'>{project.title}</h2>
            <div className="container">
                <Button component={Link} className='card m-1' to='/projects/edit' variant='contained' onClick={handleEdit}>Edit</Button>
                <Button className='card m-1' variant='contained' onClick={handleDelete}>Delete</Button>
            </div>        
            <ul className='text-left card-text'>
                    {
                        project.features && project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))
                    }
            </ul>
            <p className='lead'>{project.description}</p>
            <p className='text-left container'><span className='font-weight-bold'>Deadline:</span> {moment(project.deadline).format('DD/MM/YYYY')}</p>
            <div className="container mb-2">
                <a href={project.demoLink} target='_blank'><button className="btn btn-sm btn-danger m-2">Demo</button></a>
                <a href={project.githubLink} target='_blank'><button className="btn btn-sm btn-danger m-2">Code</button></a>
            </div>
        </div>
    )
}

export default Project
