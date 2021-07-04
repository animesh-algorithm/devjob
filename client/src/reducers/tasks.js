import { CREATE_TASK, DELETE_TASK, GET_ALL_TASKS, GET_ALL_TASKS_FOR_A_PROJECT } from '../constants/actionTypes'
import * as taskAPI from '../api/tasks'

export default (tasks=[], action) => {
    switch (action.type) {
        case GET_ALL_TASKS:
            return action.payload
        default:
            return tasks
    }
}