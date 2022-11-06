import axios from 'axios'

const API = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_DB_API_KEY}`
})

export const fetchMovies = async () => await API.get();