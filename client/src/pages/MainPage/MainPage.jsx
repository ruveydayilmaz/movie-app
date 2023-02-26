import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './MainPage.css'

import { fetchBookmarks, trending } from '../../actions/movies';
import { fetchTopRatedShows } from '../../actions/shows';

import Navigation from '../../components/Navigation/Navigation';
import Billboard from '../../components/Billboard/Billboard';
import Footer from '../../components/Footer/Footer';
import SavedList from '../../components/SavedList/SavedList';
import TrendingList from '../../components/TrendingList/TrendingList';
import TopRatedShowsList from '../../components/TopRatedShowsList/TopRatedShowsList';

const MainPage = () => {
  
  const dispatch = useDispatch();
  const [bookmarks, setBookmarks] = useState([]);

  var profile = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    const fetchData = async () => {
      profile && dispatch(fetchBookmarks(setBookmarks));
    };
    fetchData();
    dispatch(trending())
    dispatch(fetchTopRatedShows())
  }, []);  

  return (
    <div>
      <Billboard />
      <Navigation/>
      <div className='fade'></div>
      <div className='fade__out'></div>
      {profile && <SavedList bookmarks={bookmarks} />}
      <TrendingList />
      <TopRatedShowsList />
      <Footer />
    </div>
  )
}

export default MainPage
