import * as api from '../api'
import { FETCH_ALL_PROJECTS, CREATE_PROJECT, FETCH_PROJECT, DELETE_PROJECT, EDIT_PROJECT } from '../constants/actionTypes'

export const getProjects = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProjects()
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
        const { data } = await api.fetchProject()
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
        const { data } = await api.createProject(project)

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
        await api.deleteProject(id)

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
        const { data } = await api.editProject(id, updatedProject)
        
        const action = {
            type: EDIT_PROJECT,
            payload: data
        }

        dispatch(action)
    } catch (error) {
        console.error(error)
    }
}