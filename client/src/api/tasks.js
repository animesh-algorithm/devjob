import axios from 'axios'

const url = 'https://devjobapp.herokuapp.com/api/v1/tasks'

export const getAllTasks = () => axios.get(url)
export const getTasksForAProject = (projectId) => axios.get(`${url}/${projectId}`)
export const createTask = (projectId, newTask) => axios.post(`${url}/${projectId}/create`, newTask)
export const deleteTask = (projectId, taskId) => axios.post(`${url}/${projectId}/${taskId}/delete`)