import React from 'react';
import {Link} from "react-router-dom";
import styles from './Movie.module.css';

const Movie = ({id, adult, original_language, title, overview, poster_path, release_date, vote_average, vote_count}) => {

    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <Link className={styles.movie__link} to={`/movies/${id}`}>
            <div className={styles.movie}>
                <img className={styles.movie__poster} src={imageUrl} alt="movie poster" />
                <div className={styles.movie__info}>
                    {/* <p className={adult && styles.adult__warning}>{adult && "Adult"}</p> */}
                    {/* <p className={styles.movie__language}>{original_language}</p> */}
                    <div className={styles.title__container}>
                        <h2 className={styles.movie__title}>{title}</h2>
                    </div>    
                </div>
            </div>
        </Link>
    )
}

export default Movie