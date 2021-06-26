import Project from '../models/Project.js'

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: 'desc' }).lean()
        const count = await Project.countDocuments({})
        res.status(200).json({ 
            success: true,
            data: projects, 
            count
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

export const getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId).populate('task')
        res.status(200).json({
            success: true,
            data: project,
            count: 1
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

export const createProject = async (req, res) => {
    const project = req.body
    const newProject = new Project(project)
    try {
        await newProject.save()
        res.status(201).json({
            success: true,
            data: newProject
        })
    } catch (error) {
        res.status(409).json({
            success: false,
            message: error.message
        })
    }
}