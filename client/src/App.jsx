import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import {io} from "socket.io-client"

import MainPage from "./pages/MainPage/MainPage";
import MoviePage from "./pages/MoviePage/MoviePage";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import ShowPage from "./pages/ShowPage/ShowPage";
import ShowDetails from "./components/ShowDetails/ShowDetails";
import Auth from "./components/Auth/Auth";
import WatchShow from "./components/WatchShow/WatchShow";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [socket, setSocket] = useState(null)
  var profile = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    setSocket(io(import.meta.env.VITE_APP_API_URL))
  }, [])

  useEffect(() => {
    socket?.emit("new-user-add", profile.user)
  }, [socket, profile.user])

  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage/>}
      />
      <Route
        path="/movies"
        element={<MoviePage/>}
      />
      <Route
        path="/movies/:id"
        element={<MovieDetails/>}
      />
      <Route
        path="/movies/watch/:id"
        element={<WatchShow socket={socket} />}
      />    
      <Route
        path="/shows"
        element={<ShowPage/>}
      />
      <Route
        path="/shows/:id"
        element={<ShowDetails/>}
      />
      <Route
        path="/auth"
        element={<Auth/>}
      >
      </Route>
      <Route
        path="*"
        element={<NotFound/>}
      />
    </Routes>
  );
}

export default App
