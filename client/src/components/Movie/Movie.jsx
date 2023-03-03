import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styles from './Movie.module.css';

const Movie = ({id, adult, original_language, title, overview, poster_path, release_date, vote_average, vote_count}) => {
    const [titleContainerVisible, setTitleContainerVisible] = useState(false);

    const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

    return (
        <Link className={styles.movie__link} to={`/movies/${id}`}>
            <div className={styles.movie}
                onMouseEnter={() => setTitleContainerVisible(true)}
                onMouseLeave={() => setTitleContainerVisible(false)}
            >
                <img className={styles.movie__poster} src={imageUrl} alt="movie poster" />
                <div className={styles.movie__info}>
                    <div className={`${titleContainerVisible ? styles.title__container : styles.title__container__hidden}`}>
                        <h2 className={styles.movie__title}>{title}</h2>
                    </div>    
                </div>
            </div>
        </Link>
    )
}

export default Movie