import { combineReducers } from "redux";
import movieReducer from "./movies";

export const reducers = combineReducers(
    { 
        movies: movieReducer
    }
);
