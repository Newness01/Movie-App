import { useState } from "react";
import Filter from "./Filter";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const Home = ({ movies, setMovies }) => {
  const [filter, setFilter] = useState({ title: "", rating: 0 });

  return (
    <div>
      <h1>🎬 Movie App</h1>
      <Filter setFilter={setFilter} />
      <AddMovie setMovies={setMovies} />
      <MovieList movies={movies} filter={filter} />
    </div>
  );
};

export default Home;
