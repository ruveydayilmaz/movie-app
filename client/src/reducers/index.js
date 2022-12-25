import { combineReducers } from "redux";
import movieReducer from "./movies";
import authReducer from "./auth";
import showsReducer from "./shows";

export const reducers = combineReducers(
    { 
        movies: movieReducer,
        auth: authReducer,
        shows: showsReducer,
    }
);
