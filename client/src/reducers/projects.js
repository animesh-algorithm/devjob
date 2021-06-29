import { CREATE_PROJECT, FETCH_ALL_PROJECTS } from '../constants/actionTypes'

export default (projects=[], action) => {
    switch (action.type) {
        case FETCH_ALL_PROJECTS:
            return action.payload
        case CREATE_PROJECT:
            return [...projects, action.payload]
        default:
            return projects
    }
}