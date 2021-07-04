import express from 'express'
import { getAllTasks, getTasksForAProject, createTask, deleteTask } from '../controllers/tasks.js'

const router = express.Router()

router
    .get('/', getAllTasks)
    .get('/:projectId', getTasksForAProject)
    .post('/:projectId/create', createTask)
    .post('/:projectId/:taskId/delete', deleteTask)

export default router