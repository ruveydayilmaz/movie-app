import React from 'react';
import {Link} from "react-router-dom";
import styles from './Movie.module.css';
import bookmark from '../../assets/bookmark.png';
import info from '../../assets/info.png';
import star from '../../assets/star.png';

const Movie = ({id, adult, original_language, title, overview, poster_path, release_date, vote_average, vote_count}) => {

    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <div className={styles.movie}>
            <img className={styles.movie__poster} src={imageUrl} alt="movie poster" />
            <div className={styles.movie__info}>
                <p className={adult && styles.adult__warning}>{adult && "Adult"}</p>
                <p className={styles.movie__language}>{original_language}</p>
                <h2 className={styles.movie__title}>{title}</h2>
                <div className={styles.movie__actions}>
                    <div className={styles.movie__rating}>
                        <img className={styles.button__icon} src={star} alt="star" />
                        <p className={styles.movie__rating__value}>{vote_average}</p>
                    </div>
                    <div className={styles.buttons}>
                        <button>
                            <img className={styles.button__icon} src={bookmark} alt="bookmark" />
                        </button>
                        <button>
                            <Link to={`/movies/${id}`}>
                                <img className={styles.button__icon} src={info} alt="info" />
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie