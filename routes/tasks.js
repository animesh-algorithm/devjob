import express from 'express'
import { getAllTasks, getTasksForAProject, createTask } from '../controllers/tasks.js'

const router = express.Router()

router
    .get('/', getAllTasks)
    .get('/:projectId', getTasksForAProject)
    .post('/:projectId', createTask)

export default router