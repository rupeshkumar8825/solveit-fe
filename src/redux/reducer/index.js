// THIS WILL CONSIST THE LIST OF ALL THE REDUCERS BEING USED IN THIS APPLICATION 
import IsLoggedInReducer from "./isLoggedInReducer";
import {combineReducers} from 'redux'
import userNameReducer from "./userNameReducer";


export default combineReducers({
    IsLoggedInReducer,
    userNameReducer,
});

// SAY EVERYTHING WENT FINE 