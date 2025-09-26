import { useState } from "react";

const AddMovie = ({ setMovies }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
    trailerURL: "",
  });

  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.name === "rating" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies((prev) => [...prev, { ...newMovie, id: Date.now() }]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0, trailerURL: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input name="title" placeholder="Title" value={newMovie.title} onChange={handleChange} />
      <input name="description" placeholder="Description" value={newMovie.description} onChange={handleChange} />
      <input name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleChange} />
      <input type="number" name="rating" placeholder="Rating" value={newMovie.rating} onChange={handleChange} min="0" max="5" />
      <input name="trailerURL" placeholder="Trailer Embed Link" value={newMovie.trailerURL} onChange={handleChange} />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
