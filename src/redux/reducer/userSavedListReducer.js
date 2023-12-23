// THIS REDUCER IS TO STORE THE LIST OF SAVED LIST OF THE CURRENT USER 

const initialState = {userSavedList : []}
const userSavedListReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'USER SAVED':
            return {
                ...state, 
                userSavedList : action.payload
            }
        default:
            return state
    }
}

// SAY EVERYTHING WENT FINE 
export default userSavedListReducer;