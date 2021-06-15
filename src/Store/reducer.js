import * as actionType from './actionTypes'

let initialState = {
    userName : "test"
}

const reducer = (state = initialState,action) =>{
    switch (action.type) {
        case actionType.ADD_USERNAME:
            return {
                ...state,
                userName : action.userName
            }
    
        default:
            return state
    }
}

export default reducer