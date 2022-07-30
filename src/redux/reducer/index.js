// THIS WILL CONSIST THE LIST OF ALL THE REDUCERS BEING USED IN THIS APPLICATION 
import IsLoggedInReducer from "./isLoggedInReducer";
import {combineReducers} from 'redux'
import userNameReducer from "./userNameReducer";
import postDetailsReducer from "./postDetailsReducer";
import ideaReducer from "./ideaReducer";
import usersReducer from "./usersReducer";
import upvotedListReducer from "./upvotedListReducer";
import userUpvotedListReducer from "./userUpvotedListReducer";

export default combineReducers({
    IsLoggedInReducer,
    userNameReducer,
    postDetailsReducer,
    ideaReducer, 
    usersReducer,
    upvotedListReducer,
    userUpvotedListReducer
    
});

// SAY EVERYTHING WENT FINE 