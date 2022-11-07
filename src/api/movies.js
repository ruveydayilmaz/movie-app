import axios from 'axios'

const API = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_DB_API_KEY}`
})

export const fetchMovies = async () => await API.get();

export const fetchSingleMovie = async (id) => await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_DB_API_KEY}&language=en-US`);