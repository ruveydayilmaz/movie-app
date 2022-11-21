import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from './MovieDetails.module.css';
import bookmark from '../../assets/bookmark.png';
import star from '../../assets/star.png';
import { fetchSingleMovie } from '../../actions/movies';
import Navigation from '../Navigation/Navigation';

const Movie = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const currentMovie = useSelector((state) => state.movies.currentMovie);
    
    useEffect(() => {
        dispatch(fetchSingleMovie(id));
    }, [dispatch, id]);

    const imageUrl = `https://image.tmdb.org/t/p/w500${currentMovie?.backdrop_path}`;

    return (
        <>
            <Navigation/>
            <div className={styles.movie}>
                <img className={styles.movie__poster} src={imageUrl} alt="movie poster" />
                <div className={styles.movie__info}>
                    <p className={styles.movie__date}>{currentMovie?.release_date}</p>
                    <h2 className={styles.movie__title}>{currentMovie?.title}</h2>
                    <div className={styles.movie__genres}>
                        <div className={styles.movie__rating}>
                            <img className={styles.button__icon} src={star} alt="star" />
                            <p className={styles.movie__rating__value}>{currentMovie?.vote_average}</p>
                        </div>
                        {
                            currentMovie?.genres?.map((genre) => (
                                <p className={styles.movie__genre} key={genre.id}>{genre.name}</p>
                            ))
                        }                        
                    </div>
                    <p className={styles.movie__overview}>{currentMovie?.overview}</p>
                    <div className={styles.movie__actions}>
                        <div className={styles.buttons}>
                            <button className={styles.button}>
                                Watch Trailer
                            </button>
                            <button className={styles.button}>
                                Watch Now
                            </button>
                            <button>
                                <img className={styles.button__icon} src={bookmark} alt="bookmark" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>        
        </>

    )
}

export default Movie