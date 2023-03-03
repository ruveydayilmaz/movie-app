import React from 'react';
import { Link } from "react-router-dom";

import styles from './ListRow.module.css';

const TopRatedShows = ({ show }) => {

    const poster = `https://image.tmdb.org/t/p/original${show?.backdrop_path}`;
    const link = show?.media_type === 'tv' ? `/shows/${show?.id}` : `/shows/${show?.id}`

    return (
        <Link to={link}>
            <div className={styles.movie__div}>
                <div className={styles.movie__poster}>
                    <img src={poster} alt="poster"/>
                </div>
                <p className={styles.movie__title}>
                    {show?.title? show?.title : show?.name}
                </p>
            </div>            
        </Link>
    )
}

export default TopRatedShows