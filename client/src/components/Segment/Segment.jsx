import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Segment.module.css';
import ChevronRightIcon from './ChevronRightIcon';
import { fetchSingleMovie } from '../../actions/movies';

const Segment = ({ movie }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSingleMovie(movie.movieId))
    }, [dispatch, movie])

    const currentMovie = useSelector((state) => state.movies.currentMovie);
    console.log(currentMovie)

    const poster = currentMovie?.backdrop_path ? `https://image.tmdb.org/t/p/w500${currentMovie?.backdrop_path}` : 'https://www.movienewz.com/img/films/poster-holder.jpg';

    return (
        <div className={styles.segment}>
            <p className={styles.title}>
                {currentMovie?.title}
            </p>
            <div className={styles.row}>
                <img src={poster} alt="poster"/>
                <button className={styles.button}>
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    )
}

export default Segment