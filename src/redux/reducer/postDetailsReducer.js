// THIS REDUCER IS TO STORE THE VALUE OF THE LIST OF IMAGE URLS AND THEIR IDEAS ID FOR THIS PURPOSE 
const initialState = {postsList : []};

// DEFINING THE REDUCER FOR THIS PURPOSE 
const postDetailsReducer = (state = initialState, action)=>{
    switch(action.type)
    {
        case 'STORE IMAGE':
            return {
                ...state, 
                postsList : action.payload
            }
        default:
            return state
    }
}

// SAY EVERYTHING WENT FINE 
export default postDetailsReducer;