import React from 'react';
import {Link} from "react-router-dom";
import styles from './Show.module.css';

const Show = ({id, name, overview, poster_path, release_date, vote_average, vote_count}) => {

    const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

    return (
        <Link className={styles.show__link} to={`/shows/${id}`}>
            <div className={styles.show}>
                <img className={styles.show__poster} src={imageUrl} alt="show poster" />
                <div className={styles.show__info}>
                    {/* <p className={adult && styles.adult__warning}>{adult && "Adult"}</p> */}
                    {/* <p className={styles.show__language}>{original_language}</p> */}
                    <div className={styles.title__container}>
                        <h2 className={styles.show__title}>{name}</h2>
                    </div>    
                </div>
            </div>
        </Link>
    )
}

export default Show