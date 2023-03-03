import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import TrendingShows from '../ListRow/TrendingShows';
import styles from './TrendingList.module.css';

const TrendingList = () => {
    const [movies, setMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const trending = useSelector((state) => state.movies.trending);

    useEffect(() => {
        setMovies(trending?.results)
    }, [trending])

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
            <h3 className={styles.saved__title}>Trending on Movien</h3>
            <div className={styles.list__container}>
                <button className={styles.left__arrow} onClick={handleLeftArrowClick}>{'<'}</button>
                <button className={styles.right__arrow} onClick={handleRightArrowClick}>{'>'}</button>
                <div className={styles.saved__shows} style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
                    {trending?.results?.length > 0 &&  trending?.results?.map(movie => (
                        <TrendingShows movie = {movie} />    
                    ))}            
                </div>
            </div>

        </div>
    );
}

export default TrendingList;