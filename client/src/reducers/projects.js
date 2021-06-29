import { FETCH_ALL_PROJECTS } from '../constants/actionTypes'

export default (projects=[], action) => {
    switch (action.type) {
        case FETCH_ALL_PROJECTS:
            return action.payload
        default:
            return projects
    }
}