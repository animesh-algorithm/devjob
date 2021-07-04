import axios from 'axios'

const url = 'https://devjobapp.herokuapp.com/api/v1/tasks'

export const getAllTasks = () => axios.get(url)
export const createTask = (projectId) => axios.get(`${url}/${projectId}/`)