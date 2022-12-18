import * as api from "../api/movies";
import * as types from "./types";

export const fetchMovies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMovies();
    dispatch({
      type: types.FETCH_MOVIES,
      payload: data,
    });
  } catch (error) {
    alert("Couldn't fetch movies");
    console.log(error.message);
  }
};

export const fetchSingleMovie = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSingleMovie(id);
    dispatch({
      type: types.FETCH_SINGLE_MOVIE,
      payload: data,
    });
  } catch (error) {
    alert("Couldn't fetch movie");
    console.log(error.message);
  }
};

export const fetchBookmarks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBookmarks();
    dispatch({
      type: types.FETCH_BOOKMARKS,
      payload: data,
    });
  } catch (err) {
    console.log(err.response.data.message);

    var error = err.response.data.message; 
    dispatch({ type: "AUTH_ERROR", error });
  }
};

export const bookmarkMovie = (id) => async (dispatch) => {
  try {
    await api.bookmarkMovie(id);
    dispatch({
      type: types.BOOKMARK_MOVIE,
      payload: id,
    });
  } catch (err) {
    // console.log(err.response.data.message);

    // var error = err.response.data.message; 
    // dispatch({ type: "AUTH_ERROR", error });

    console.log(err)
  }
};

export const fetchReviews = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchReviews(id);
    dispatch({
      type: types.FETCH_REVIEWS,
      payload: data,
    });
  } catch (err) {
    console.log(err.response.data.message);

    var error = err.response.data.message; 
    dispatch({ type: "AUTH_ERROR", error });
  }
};

export const reviewMovie = (id, review) => async (dispatch) => {
  try {
    await api.reviewMovie(id, review);
    dispatch({
      type: types.REVIEW_MOVIE,
      payload: { id, review },
    });
  } catch (err) {
    console.log(err.response.data.message);

    var error = err.response.data.message; 
    dispatch({ type: "AUTH_ERROR", error });
  }
};