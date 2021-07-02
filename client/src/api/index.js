import axios from 'axios'

const url = 'https://devjobapp.herokuapp.com/api/v1/projects'

export const fetchProjects = () => axios.get(url)
export const createProject = (newProject) => axios.post(url, newProject)
export const fetchProject = (id) => axios.get(`${url}/${id}`)
export const deleteProject = (id) => axios.post(`${url}/${id}/delete`)
export const editProject = (id, updatedProject) => axios.post(`${url}/${id}/edit`, updatedProject)