import Task from '../models/Task.js'

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('project').sort({ createdAt: 'desc' }).lean()
        const count = await Task.countDocuments({})
        res.status(200).json({
            success: true,
            data: tasks, 
            count 
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

export const getTasksForAProject = async (req, res) => {
    const project = req.params.projectId
    try {
        const tasks = await Task.find({ project: project }).populate('project').sort({ createdAt: 'desc' }).lean()
        const count = await Task.countDocuments({project: project})
        res.status(201).json({
            success: true,
            data: tasks, 
            count 
        })
    } catch (error) {
        res.status(404).json({
            succes: false,
            message: error.message
        })
    }
}

export const createTask = async (req, res) => {
    req.body.project = req.params.projectId
    const task = req.body
    const newTask = new Task(task)
    try {
        await newTask.save()
        res.status(201).json({
            success: true,
            data: newTask
        })
    } catch (error) {
        res.status(409).json({
            success: false,
            message: error.message
        })
    }
}