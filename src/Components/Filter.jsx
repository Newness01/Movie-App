const Filter = ({ setFilter }) => {
  const handleTitleChange = (e) => {
    setFilter((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleRatingChange = (e) => {
    setFilter((prev) => ({ ...prev, rating: Number(e.target.value) }));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input type="text" placeholder="Search by title..." onChange={handleTitleChange} /> <br />
      <input type="number" placeholder="Min rating" onChange={handleRatingChange} min="0" max="5" />
    </div>
  );
};

export default Filter;
