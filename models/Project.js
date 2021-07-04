import mongoose from "mongoose";
import validator from "mongoose-validator"
import 'mongoose-type-url'

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    isFinished: Boolean,
    githubLink: {
        type: mongoose.SchemaTypes.Url,
        lowercase: true,
        trim: true
    },
    demoLink: {
        type: mongoose.SchemaTypes.Url,
        lowercase: true,
        trim: true
    },
    deadline: Date
})

const Project = mongoose.model('Project', ProjectSchema)
export default Project