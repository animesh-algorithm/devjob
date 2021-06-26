import express from 'express'
import { getProjects, createProject, getProject } from '../controllers/projects.js'

const router = express.Router()

router
    .get('/', getProjects)
    .post('/', createProject)
    .get('/:projectId', getProject)

export default router