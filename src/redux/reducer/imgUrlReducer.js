// THIS REDUCER IS TO STORE THE VALUE OF THE LIST OF IMAGE URLS AND THEIR IDEAS ID FOR THIS PURPOSE 
const initialState = {imgList : null};

// DEFINING THE REDUCER FOR THIS PURPOSE 
const imgUrlReducer = (state = initialState, action)=>{
    switch(action.type)
    {
        case 'STORE IMAGE':
            return {
                ...state, 
                imgList : action.payload
            }
        default:
            return state
    }
}

// SAY EVERYTHING WENT FINE 
export default imgUrlReducer;