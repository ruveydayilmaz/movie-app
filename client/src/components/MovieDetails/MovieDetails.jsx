import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import styles from './MovieDetails.module.css';
import bookmarkIcon from '../../assets/bookmark.png';
import star from '../../assets/star.png';
import { fetchSingleMovie, fetchMovieVideos } from '../../actions/movies';
import Navigation from '../Navigation/Navigation';
import Trailers from '../Trailers';
import { bookmarkMovie } from '../../actions/movies';

const Movie = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentMovie = useSelector((state) => state.movies.currentMovie);
    
    useEffect(() => {
        dispatch(fetchSingleMovie(id));
        dispatch(fetchMovieVideos(id));
    }, [dispatch, id]);

    const bookmark = () => {
        dispatch(bookmarkMovie(id))
    }
    const imageUrl = `https://image.tmdb.org/t/p/w500${currentMovie?.poster_path}`;

    return (
        <>
            <Navigation/>
            <div className={styles.movie__details}>
                <div className={styles.movie}>
                    <div className={styles.movie__info}>
                        <button onClick={() => navigate(-1)}>back</button>
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
                                <button onClick={bookmark}>
                                    <img className={styles.button__icon} src={bookmarkIcon} alt="bookmark" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>        
                <Trailers imageUrl={imageUrl}/>
            </div>
        </>
    )
}

export default Movie