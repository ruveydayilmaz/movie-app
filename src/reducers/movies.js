import * as types from "../actions/types";

const initialState = {
  movies: [],
  currentMovie: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case types.FETCH_SINGLE_MOVIE:
      return {
        ...state,
        currentMovie: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default movieReducer;