import { Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from "./pages/MainPage";
import MoviePage from "./pages/MoviePage";

function App() {

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
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App
