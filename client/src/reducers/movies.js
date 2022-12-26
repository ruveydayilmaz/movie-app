import * as types from "../actions/types";

const initialState = {
  movies: [],
  currentMovie: null,
  bookmarks: [],
  isBookmarked: false,
  reviews: [],
  videos: [],
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
    case types.FETCH_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.payload,
      };
    case types.BOOKMARK_MOVIE:
      return {
        ...state,
        isBookmarked: !state.isBookmarked,
      };
    case types.FETCH_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case types.REVIEW_MOVIE:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    case types.FETCH_MOVIE_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default movieReducer;