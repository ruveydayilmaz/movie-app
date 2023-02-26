import React from 'react';
import { Link } from "react-router-dom";

import styles from './ListRow.module.css';

const TrendingShows = ({ movie }) => {

    const poster = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;
    const link = movie.media_type === 'tv' ? `/shows/${movie.id}` : `/movies/${movie.id}`

    return (
        <Link to={link}>
            <div className={styles.movie__div}>
                <div className={styles.movie__poster}>
                    <img src={poster} alt="poster"/>
                </div>
                <p className={styles.movie__title}>
                    {movie?.title? movie?.title : movie?.name}
                </p>
            </div>            
        </Link>
    )
}

export default TrendingShows