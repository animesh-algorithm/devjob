import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProject } from '../../actions/projects'
import { useHistory } from 'react-router-dom'
import Projects from '../Projects/Projects'
import './styles.css'

const ProjectForm = () => {
    const [projectData, setProjectData] = useState({
        title: '', description: '', deadline: '', isFinished: 0, demoLink: '', githubLink: ''
    })

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createProject(projectData))
        clear()
        history.push('/')
    }

    const clear = () => {
        setProjectData({
            title: '', description: '', deadline: '', isFinished: 0, demoLink: '', githubLink: ''
        })
    }

    return (
        <div className='container'>
            <div className='container justify-content-center center'>
                <h1 className='display-2'>DEVJOB</h1>
                <form autoComplete='off' method='POST' className='text-center'>
                    <input type="text" placeholder="Project Title..." className='form-control' name='title' onChange={(e) => setProjectData(
                        { ...projectData, title: e.target.value }
                    )} />
                    <input type="text" placeholder='Briefly describe your project.' className='form-control' name='description' onChange={(e) => setProjectData(
                        { ...projectData, description: e.target.value }
                    )} />
                    <select className='form-control form-select' name='isFinished' onChange={(e) => setProjectData(
                        { ...projectData, isFinished: e.target.value }
                    )}>
                        <option value="0">Status</option>
                        <option value="1">Finished</option>
                        <option value="0">Not Finished</option>
                    </select>
                    <input type="datetime-local" className='form-control' name='deadline' onChange={(e) => setProjectData(
                        { ...projectData, deadline: e.target.value }
                    )} />
                    <input type="text" placeholder='Project Demo Link (if any)' className='form-control' name='demoLink' onChange={(e) => setProjectData(
                        { ...projectData, demoLink: e.target.value }
                    )} />
                    <input type="text" placeholder='Source Code Link (if any)' className='form-control' name='githubLink' onChange={(e) => setProjectData(
                        { ...projectData, githubLink: e.target.value }
                    )} />
                    <input type="submit" value='Create Project' className='btn btn-success form-control' onClick={handleSubmit} />
                </form>
            </div>
            <Projects />
        </div>
    )
}

export default ProjectForm
