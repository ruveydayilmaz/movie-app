import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchShows } from '../../actions/shows';
import Filter from '../../components/Filter/Filter';
import ShowsList from '../../components/ShowsList/ShowsList';
import Navigation from '../../components/Navigation/Navigation';
import styles from '../../styles/title.module.css';
import './ShowPage.css';

 function ShowPage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchShows(page));
  }, [dispatch]);

  const handlePageChange = (type) => {
    if (type === 0 && page > 1) {
      setPage(page - 1);
      dispatch(fetchShows(page - 1));
      window.scrollTo(0, 0);
    } else if (type === 1) {
      setPage(page + 1);
      dispatch(fetchShows(page + 1));
      window.scrollTo(0, 0);
    }
  };

  return (
    <div>
      <Navigation />
      <div className='container'>
        <div className='left_container'>
          <h2 className={styles.title}>Shows</h2>
          <ShowsList />
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

 export default ShowPage;