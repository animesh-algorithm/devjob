import express from 'express'
import { getProjects, createProject, getProject, deleteProject, editProject } from '../controllers/projects.js'

const router = express.Router()

router
    .get('/', getProjects)
    .post('/', createProject)
    .get('/:projectId', getProject)
    .post('/:projectId/delete', deleteProject)
    .post('/:projectId/edit', editProject)

export default router