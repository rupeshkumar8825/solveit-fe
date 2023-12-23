// ADDING THE REDUCER TO STORE THE VALUE OF UPOVOTED LIST CORRESPONDING TO THE EACH USER 
const initialState = {upvotedList : []};

// DEFINING THE REDUCER 
const upvotedListReducer = (state = initialState, action)=>{
    switch(action.type)
    {
        case "UPVOTED LIST":
            return {
                ...state, 
                upvotedList : action.payload
            }
        default:
            return state
    }
}

// SAY EVERYTHING WENT FINE 
export default upvotedListReducer;