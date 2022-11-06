import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../actions/movies';
import MoviesList from '../components/MoviesList/MoviesList';
import Navigation from '../components/Navigation/Navigation';
import styles from '../styles/title.module.css';

 function MoviePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <h2 className={styles.title}>Movies</h2>
      <MoviesList />
      <div className="action-buttons">
          <button>Prev</button>
          <button>Next</button>
      </div>
    </div>
  );
 };

 export default MoviePage;