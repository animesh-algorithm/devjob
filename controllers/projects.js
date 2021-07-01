import Project from '../models/Project.js'
import mongoose from 'mongoose'

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

export const deleteProject = async (req, res) => {
    const { projectId } = req.params
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        return res.status(404).json({
            success: false,
            message: 'Project not found!'
        })
    }
    try {
        await Project.findByIdAndRemove(projectId)
        res.json({
            success: true,
            message: 'Project Successfully Deleted'
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

export const editProject = async (req, res) => {
    const { projectId: _id } = req.params
    const post = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({
            success: false,
            message: 'Project Not Found!'
        })
    }
    try {
        const updatedProject = await Project.findByIdAndUpdate(_id, { ...post, _id }, { new: true })
        res.json({
            success: true,
            data: updatedProject,   
            message: 'Project Updated Successfully'
        })
    } catch (error) {
        res.status(409).json({
            success: false,
            message: 'Something Went Wrong.'
        })
    }
}