import React from 'react';
import { useSelector } from "react-redux";
import styles from './ShowsList.module.css';
import Show from '../Show/Show';
import { useEffect } from 'react';

const ShowsList = () => {

    const shows = useSelector((state) => state.shows.shows);

    useEffect (() => {
        // console.log(movies);
    }, [shows]);

    return (
        <div className={styles.shows}>
            { shows?.results?.map((show) => (
                <Show key={show.id} id={show.id} {...show}/>
            ))}
        </div>
    )
}

export default ShowsList