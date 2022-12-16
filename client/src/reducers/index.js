import { combineReducers } from "redux";
import movieReducer from "./movies";
import authReducer from "./auth";

export const reducers = combineReducers(
    { 
        movies: movieReducer,
        auth: authReducer,
    }
);
