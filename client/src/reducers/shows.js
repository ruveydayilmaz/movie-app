import * as types from "../actions/types";

const initialState = {
  shows: [],
  currentShow: null,
  bookmarks: [],
  isBookmarked: false,
  reviews: [],
  videos: [],
};

const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SHOWS:
      return {
        ...state,
        shows: action.payload,
      };
    case types.FETCH_SINGLE_SHOW:
      return {
        ...state,
        currentShow: action.payload,
      };
    case types.FETCH_SHOW_VIDEOS:
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

export default showReducer;