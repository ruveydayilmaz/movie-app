import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../actions/movies';
import Filter from '../../components/Filter/Filter';
import MoviesList from '../../components/MoviesList/MoviesList';
import Navigation from '../../components/Navigation/Navigation';
import styles from '../../styles/title.module.css';
import './MoviePage.css';

 function MoviePage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch]);

  const handlePageChange = (type) => {
    if (type === 0 && page > 1) {
      setPage(page - 1);
      dispatch(fetchMovies(page - 1));
      window.scrollTo(0, 0);
    } else if (type === 1) {
      setPage(page + 1);
      dispatch(fetchMovies(page + 1));
      window.scrollTo(0, 0);
    }
  };

  return (
    <div>
      <Navigation />
      <div className='container'>
        <div className='left_container'>
          <h2 className={styles.title}>Movies</h2>
          <MoviesList />
          <div className="action-buttons">
              <button onClick={() => handlePageChange(0)}>Previous</button>
              <button onClick={() => handlePageChange(1)}>Next</button>
          </div>        
        </div>
        <div className='right_container'>
          <Filter/>
        </div>
      </div>
    </div>
  );
 };

 export default MoviePage;