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