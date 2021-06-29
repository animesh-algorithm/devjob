import * as api from '../api'
import { FETCH_ALL_PROJECTS } from '../constants/actionTypes'

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