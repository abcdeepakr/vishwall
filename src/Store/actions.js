import * as actions from './actionTypes'

export const addUsername = (userName) =>{
    return {
        type : actions.ADD_USERNAME,
        userName : userName
    }
}