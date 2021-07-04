import * as projectsAPI from '../api/projects'
import { FETCH_ALL_PROJECTS, CREATE_PROJECT, FETCH_PROJECT, DELETE_PROJECT, EDIT_PROJECT } from '../constants/actionTypes'

export const getProjects = () => async (dispatch) => {
    try {
        const { data } = await projectsAPI.fetchProjects()
        const action = {
            type: FETCH_ALL_PROJECTS,
            payload: data
        }
        dispatch(action)
    } catch (error) {
        console.error(error)
    }
}

export const getProject = (project) => async (dispatch) => {
    try {
        const { data } = await projectsAPI.fetchProject()
        const action = {
            type: FETCH_PROJECT,
            payload: data
        }
        dispatch(action)
    } catch (error) {
        console.error(error)
    }
}

export const createProject = (project) => async (dispatch) => {
    try {
        const { data } = await projectsAPI.createProject(project)

        const action = {
            type: CREATE_PROJECT,
            payload: data
        }
        dispatch(action)
    } catch (error) {
        console.error(error)
    }
}

export const deleteProject = (id) => async (dispatch) => {
    try {
        await projectsAPI.deleteProject(id)

        const action = {
            type: DELETE_PROJECT,
            payload: id
        }

        dispatch(action)
    } catch (error) {
        console.error(error)
    }
}

export const editProject = (id, updatedProject) => async (dispatch) => {
    try {
        const { data } = await projectsAPI.editProject(id, updatedProject)
        
        const action = {
            type: EDIT_PROJECT,
            payload: data
        }

        dispatch(action)
    } catch (error) {
        console.error(error)
    }
}