import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from './ShowDetails.module.css';
import star from '../../assets/star.png';
import { fetchSingleShow, fetchShowVideos } from '../../actions/shows';
import Navigation from '../Navigation/Navigation';
import EpidodeList from '../EpisodeList/EpisodeList';

const ShowDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const currentShow = useSelector((state) => state.shows.currentShow);
    
    useEffect(() => {
        dispatch(fetchSingleShow(id));
        dispatch(fetchShowVideos(id));
    }, [dispatch, id]);

    const imageUrl = `https://image.tmdb.org/t/p/original${currentShow?.poster_path}`;

    return (
        <>
            <Navigation/>
            <div className={styles.show__details}>
                <div className={styles.show}>
                    <div className={styles.show__info}>
                        <h2 className={styles.show__title}>{currentShow?.name}</h2>
                        <div className={styles.show__genres}>
                            <div className={styles.show__rating}>
                                <img className={styles.button__icon} src={star} alt="star" />
                                <p className={styles.show__rating__value}>{currentShow?.vote_average}</p>
                            </div>
                            {
                                currentShow?.genres?.map((genre) => (
                                    <p className={styles.show__genre} key={genre.id}>{genre.name}</p>
                                ))
                            }                        
                        </div>
                        <p className={styles.show__overview}>{currentShow?.overview}</p>
                        {/* <div className={styles.show__actions}>
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
                        </div> */}
                    </div>
                </div>        
                <EpidodeList imageUrl={imageUrl}/>
            </div>
        </>
    )
}

export default ShowDetails