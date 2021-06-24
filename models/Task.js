import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    isCompleted: Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Task = mongoose.model('Task', TaskSchema)
export default Task