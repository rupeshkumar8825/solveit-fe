// THIS REDUCER IS TO STORE THE LIST OF ALL THE USERS PRESENT IN THE SOLVEIT 
// DEFINING THE INITIALSTATE FOR THIS PURPOSE 
const initialState = {usersList : []};

const usersReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'FETCH USERS':
            return {
                ...state,
                usersList : action.payload
            }
        default:
            return state;
    }

}

// SAY EVERYTHING WENT FINE 
export default usersReducer;