import { CREATE_PROJECT, EDIT_PROJECT, FETCH_ALL_PROJECTS, FETCH_PROJECT } from '../constants/actionTypes'

export default (projects=[], action) => {
    switch (action.type) {
        case FETCH_ALL_PROJECTS:
            return action.payload
        case FETCH_PROJECT:
            return action.payload
        case CREATE_PROJECT:
            return [...projects, action.payload]
        case EDIT_PROJECT:
            return projects.data.map(project => project._id === action.payload._id ? action.payload : project)
        default:
            return projects
    }
}