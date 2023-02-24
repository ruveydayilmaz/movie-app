import axios from 'axios'

const apiEndpoint = import.meta.env.VITE_APP_API_URL
const movieDbEndpoint = 'https://api.themoviedb.org/3/movie'

export const fetchMovies = async (page) => await axios.get(`${movieDbEndpoint}/popular?api_key=${import.meta.env.VITE_DB_API_KEY}&page=${page}`);

export const fetchSingleMovie = async (id) => await axios.get(`${movieDbEndpoint}/${id}?api_key=${import.meta.env.VITE_DB_API_KEY}&language=en-US`);

export const fetchBookmarks = async () => await axios.get(`${apiEndpoint}/bookmarks`);

export const bookmarkMovie = async (id) => await axios.post(`${apiEndpoint}/bookmarks/${id}`);

export const fetchReviews = async (id) => await axios.get(`${apiEndpoint}/reviews/${id}`);

export const reviewMovie = async (id, review) => await axios.post(`${apiEndpoint}/reviews`, { id, review });

export const fetchMovieVideos = async (id) => await axios.get(`${movieDbEndpoint}/${id}/videos?api_key=${import.meta.env.VITE_DB_API_KEY}`);

export const trending = async () => await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${import.meta.env.VITE_DB_API_KEY}`)