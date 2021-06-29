import axios from 'axios'

const url = 'https://devjobapp.herokuapp.com/api/v1/projects'

export const fetchProjects = () => axios.get(url)