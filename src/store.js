import {createStore,combineReducers} from "redux";
//import { movieListReducer } from "./reducers/movieReducers";
import { movieDetailsReducer } from "./reducers/movieReducers_1"
const initialState = {};
const reducer = combineReducers( {movieDetails:movieDetailsReducer} )
const store= createStore(reducer, initialState);
export default store;

