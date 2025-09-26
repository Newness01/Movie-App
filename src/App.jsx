import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import MovieDescription from "./Components/MovieDescription";
import Image from '../src/assets/stellar.jpg'

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
      rating: 5,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Exploration of space and time beyond galaxies.",
      posterURL: Image,
      rating: 4,
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home movies={movies} setMovies={setMovies} />} />
        <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
