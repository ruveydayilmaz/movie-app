import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import TopRatedShows from '../ListRow/TopRatedShows';
import styles from './TopRatedShowsList.module.css';

const TopRatedShowsList = () => {
    const [movies, setMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    var shows = useSelector(state => state.shows.topRated)

    useEffect(() => {
        setMovies(shows?.results)
    }, [shows])

    const handleLeftArrowClick = () => {
        if (currentIndex > 0)
            setCurrentIndex((prevIndex) => prevIndex === 0 ? movies.length - 1 : prevIndex - 1);
    }

    const handleRightArrowClick = () => {
        if(currentIndex < 4)
            setCurrentIndex((prevIndex) => prevIndex === movies.length - 1 ? 0 : prevIndex + 1);
    }

    return (
        <div className={styles.saved__list}>
            <h3 className={styles.saved__title}>Top Rated Shows</h3>
            <div className={styles.list__container}>
                <button className={styles.left__arrow} onClick={handleLeftArrowClick}>{'<'}</button>
                <button className={styles.right__arrow} onClick={handleRightArrowClick}>{'>'}</button>
                <div className={styles.saved__shows} style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
                    {shows?.results?.length > 0 &&  shows?.results?.map(show => (
                        <TopRatedShows key={show.id} show={show} />    
                    ))}            
                </div>
            </div>
        </div>
    );
}

export default TopRatedShowsList;