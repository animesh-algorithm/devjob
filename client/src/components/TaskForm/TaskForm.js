import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTask } from '../../actions/tasks'

import './styles.css'

const TaskForm = ({ currentProjectId, setCurrentProjectId }) => {
    const [taskData, setTaskData] = useState({
        name: '', project: currentProjectId, isCompleted: false
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createTask(currentProjectId, taskData))
    }

    const dispatch = useDispatch()

    return (
        <div className='container'>
            <div className="container justify-content-center center">
                <h1 className='display-2'>DEVJOB</h1> 
                <form method="POST" autoComplete='on' className="text-center">
                    <input type="text" placeholder="Task" className='form-control' name='name' onChange={(e) => setTaskData(
                        { ...taskData, name: e.target.value }
                    )} />
                    <select className='form-control form-select' name='isCompleted' onChange={(e) => setTaskData(
                        { ...taskData, isCompleted: e.target.value }
                    )}>
                        <option value="-1" unselectable='true'>Status</option>
                        <option value="1">Finished</option>
                        <option value="0">Not Finished</option>
                    </select>
                    <input type="submit" value='Create Task' className='btn btn-success form-control' onClick={handleSubmit} />
                </form>
            </div>
        </div>
    )
}

export default TaskForm
