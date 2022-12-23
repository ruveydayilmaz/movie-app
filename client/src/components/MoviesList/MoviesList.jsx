import React from 'react';
import { useSelector } from "react-redux";
import styles from './MoviesList.module.css';
import Movie from '../Movie/Movie';
import { useEffect } from 'react';

const MoviesList = () => {

    const movies = useSelector((state) => state.movies.movies);

    useEffect (() => {
        // console.log(movies);
    }, [movies]);

    return (
        <div className={styles.movies}>
            { movies?.results?.map((movie) => (
                <Movie key={movie.id} id={movie.id} {...movie}/>
            ))}
        </div>
    )
}

export default MoviesList