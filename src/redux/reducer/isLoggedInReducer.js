// HERE I WILL DEFINE THE ACTION TO BE PERFORMED ON THE REDUX STORE VARIABLE 
const initialState  = {isLoggedIn : false};

const isLoggedInReducer = (state = initialState, action)=>{
    switch(action.type)
    {
        case 'LOGGED IN':
            return {...state, isLoggedIn : action.payload};
        default:
            return state;
    }
}

// SAY EVERYTHING WENT FINE 
export default isLoggedInReducer;