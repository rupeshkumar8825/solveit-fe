// THIS WILL CONSIST THE LIST OF ALL THE REDUCERS BEING USED IN THIS APPLICATION 
import IsLoggedInReducer from "./isLoggedInReducer";
import {combineReducers} from 'redux'
import userNameReducer from "./userNameReducer";
import imgUrlReducer from "./imgUrlReducer";
import ideaReducer from "./ideaReducer";

export default combineReducers({
    IsLoggedInReducer,
    userNameReducer,
    imgUrlReducer,
    ideaReducer
    
});

// SAY EVERYTHING WENT FINE 