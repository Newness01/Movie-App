import { useState } from 'react'
import './App.css'
import Filter from './Components/Filter';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import Stellar from  './assets/stellar.jpg'

function App() {
  
const [movies, setMovies] = useState([
  {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
      rating: 5,
  },
{
      title: "Interstellar",
      description: "Exploration of space and time.",
      posterURL: Stellar,
      rating: 4,
    },
]);

const [filter, setFilter] = useState({title: '', rating: 0});
  return (
<div className='App'>
<h1>🎬 My Movie App</h1>
<Filter setFilter = {setFilter}/>
<AddMovie setMovies={setMovies}/>
<MovieList movies = {movies} filter = {filter}/>
    </div>
  );
}

export default App;
