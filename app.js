import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import connectDB from './config/db.js'
import projectRoutes from './routes/projects.js'
import taskRoutes from './routes/tasks.js'

// Environment Variables
dotenv.config({
    path: "./config/config.env"
})

// Node Mongo DB connectivity
connectDB()

const app = express()

// Body Parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Routes Middleware
app.use('/api/v1/projects', projectRoutes)
app.use('/api/v1/tasks', taskRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`))