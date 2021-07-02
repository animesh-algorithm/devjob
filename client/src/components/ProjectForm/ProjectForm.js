import moment from 'moment'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createProject, editProject } from '../../actions/projects'
import { useHistory } from 'react-router-dom'
import Projects from '../Projects/Projects'
import './styles.css'

const ProjectForm = ({ currentProjectId, setCurrentProjectId }) => {
    const [projectData, setProjectData] = useState({
        title: '', description: '', deadline: '', isFinished: 0, demoLink: '', githubLink: ''
    })
    const currentProject = useSelector(state => currentProjectId ? state.projects.data.find(project => project._id === currentProjectId) : null)

    useEffect(() => {
        if (currentProject) setProjectData(currentProject)
    }, [currentProjectId])

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentProject) {
            dispatch(editProject(currentProjectId, projectData))            
        } else {
            dispatch(createProject(projectData))
        }
        clear()
        history.push('/')
    }

    const clear = () => {
        setCurrentProjectId(null)
        setProjectData({
            title: '', description: '', deadline: '', isFinished: 0, demoLink: '', githubLink: ''
        })
    }

    return (
        <div className='container'>
            <div className='container justify-content-center center'>
                <h1 className='display-2'>DEVJOB</h1>
                <form autoComplete='on' method='POST' className='text-center'>
                    <input type="text" placeholder="Project Title..." className='form-control' value={projectData?.title} name='title' onChange={(e) => setProjectData(
                        { ...projectData, title: e.target.value }
                    )} />
                    <input value={projectData?.description} type="text" placeholder='Briefly describe your project.' className='form-control' name='description' onChange={(e) => setProjectData(
                        { ...projectData, description: e.target.value }
                    )} />
                    <select value={currentProjectId ? projectData?.isFinished | 0 : "-1"} className='form-control form-select' name='isFinished' onChange={(e) => setProjectData(
                        { ...projectData, isFinished: e.target.value }
                    )}>
                        <option value="-1" unselectable='true'>Status</option>
                        <option value="1">Finished</option>
                        <option value="0">Not Finished</option>
                    </select>
                    <input value={moment(projectData?.deadline).format('yyyy-MM-DDThh:mm')} type="datetime-local" className='form-control' name='deadline' onChange={(e) => setProjectData(
                        { ...projectData, deadline: e.target.value }
                    )} />
                    <input value={projectData?.demoLink} type="text" placeholder='Project Demo Link (if any)' className='form-control' name='demoLink' onChange={(e) => setProjectData(
                        { ...projectData, demoLink: e.target.value }
                    )} />
                    <input value={projectData?.githubLink} type="text" placeholder='Source Code Link (if any)' className='form-control' name='githubLink' onChange={(e) => setProjectData(
                        { ...projectData, githubLink: e.target.value }
                    )} />
                    <input type="submit" value={currentProject ? 'Edit Project' : 'Create Project'} className='btn btn-success form-control' onClick={handleSubmit} />
                </form>
            </div>

            <Projects currentProjectId={currentProjectId} setCurrentProjectId={setCurrentProjectId} />
        </div>
    )
}

export default ProjectForm
