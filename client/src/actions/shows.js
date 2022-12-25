import * as api from "../api/shows";
import * as types from "./types";

export const fetchShows = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchShows(page);
    dispatch({
      type: types.FETCH_SHOWS,
      payload: data,
    });
  } catch (error) {
    alert("Couldn't fetch shows");
    console.log(error.message);
  }
};

export const fetchSingleShow = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSingleShow(id);
    dispatch({
      type: types.FETCH_SINGLE_SHOW,
      payload: data,
    });
  } catch (error) {
    alert("Couldn't fetch show");
    console.log(error.message);
  }
};

export const fetchShowVideos = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchShowVideos(id);
    dispatch({
      type: types.FETCH_SHOW_VIDEOS,
      payload: data,
    });
  } catch (error) {
    alert("Couldn't fetch videos");
    console.log(error.message);
  }
};