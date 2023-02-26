import axios from 'axios'

const showsDbEndpoint = 'https://api.themoviedb.org/3/tv'

export const fetchShows = async (page) => await axios.get(`${showsDbEndpoint}/popular?api_key=${import.meta.env.VITE_DB_API_KEY}&page=${page}`);

export const fetchSingleShow = async (id) => await axios.get(`${showsDbEndpoint}/${id}?api_key=${import.meta.env.VITE_DB_API_KEY}&language=en-US`);

export const fetchShowVideos = async (id) => await axios.get(`${showsDbEndpoint}/${id}/videos?api_key=${import.meta.env.VITE_DB_API_KEY}`);

export const fetchTopRatedShows = async () => await axios.get(`${showsDbEndpoint}/top_rated?api_key=${import.meta.env.VITE_DB_API_KEY}`);