import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchBookmarks, trending } from '../actions/movies';

import Navigation from '../components/Navigation/Navigation';
import Billboard from '../components/Billboard/Billboard';
import Footer from '../components/Footer/Footer';
import SavedList from '../components/SavedList/SavedList';

const MainPage = () => {
  
  const dispatch = useDispatch();

  var profile = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    profile && dispatch(fetchBookmarks())
    dispatch(trending())
  }, [dispatch])

  return (
    <div>
      <Billboard />
      <Navigation/>
      {profile && <SavedList />}
      <Footer />
    </div>
  )
}

export default MainPage
