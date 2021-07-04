import * as taskAPI from '../api/tasks'
import { CREATE_TASK, DELETE_TASK, GET_ALL_TASKS, GET_ALL_TASKS_FOR_A_PROJECT } from '../constants/actionTypes'

export const getAllTasks = () => async (dispatch) => {
    try {
        const { data } = await taskAPI.getAllTasks()
        const action = {
            type: GET_ALL_TASKS,
            payload: data
        }
        dispatch(action)
    } catch (error) {
        console.error(error)
    }
}

export const createTask = (projectId, newTask) => async (dispatch) => {
    try {
        const { data } = await taskAPI.createTask(projectId, newTask)
        const action = {
            type: CREATE_TASK,
            payload: data
        }
        dispatch(action)
    } catch (error) {
        console.error(error)
    }
}