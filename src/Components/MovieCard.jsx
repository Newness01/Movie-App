import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px", width: "250px" }}>
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={movie.posterURL} alt={movie.title} width="200" />
        <h3>{movie.title}</h3>
        <p>⭐ {movie.rating}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
