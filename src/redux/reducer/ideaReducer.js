// THIS IS REDUCER FOR STORING THE LIST OF IDEAS 
// DEFINING THE INITIAL STATE FOR THIS PURPOSE 
const initialState  = {ideasList : null};

const ideaReducer = (state = initialState, action)=>{
    // APPLYING THE SWITCH STATEMENT FOR THIS PURPOSE 
    switch(action.type)
    {
        case 'FETCH IDEAS':
            return {
                ...state, 
                ideasList : action.payload
            }
        default:
            return state
    }

}

// SAY EVERYTHING WENT FINE 
export default ideaReducer;

