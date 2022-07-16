// THIS IS THE STORE OF THE REACT SOLVEIT APPLICATION 
// import createStore from 'redu 
import { createStore } from "redux";
import rootReducer from "../reducer/index";

const store = createStore(rootReducer);

// SAY EVERYTHING WENT FINE 
export default store;