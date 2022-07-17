// THIS IS THE USERNAME REDUCER TO UPDATE THE VALUE OF THE USER NAME 
const initialState = {username : null};

const userNameReducer = (state = initialState, action)=>{
    switch(action.type)
    {
        case 'USERNAME':
            return {
                ...state, username : action.payload
            }
        default:
            return state
    }
}

// SAY EVERYTHING WENT FINE 
export default userNameReducer;