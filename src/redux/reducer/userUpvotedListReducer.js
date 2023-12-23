// THIS IS REDUCER TO STORE THE VALUE OF UPVOTED LIST OF THE CURRENT USER 

const initialState = {userUpvotedList : []};

const userUpvotedListReducer = (state = initialState , action)=>{
    switch(action.type){
        case 'USER UPVOTED':
            return {
                ...state,
                userUpvotedList : action.payload
            }
        default:
            return state
    }
}

// SAY EVERYTHING WENT FINE 
export default userUpvotedListReducer;