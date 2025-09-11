import React, { useState } from "react";

const AddMovie = ({ setMovies }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies((prev) => [...prev, newMovie]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input name="title" placeholder="Title" value={newMovie.title} onChange={handleChange} />
      <br />
      <input name="description" placeholder="Description" value={newMovie.description} onChange={handleChange} />
      <br />
      <input name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleChange} />
      <br />
      <input type="number" name="rating" placeholder="Rating" value={newMovie.rating} onChange={handleChange} min="0" max="5" />
      <br />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
