import React from "react";

const Category = ({
  category,
  setCategory,
  filteredMovies,
  setFilteredMovies,
  movies,
}) => {
  const onButtonClick = (selectedCategory) => {
    setCategory(selectedCategory);
    console.log(selectedCategory);
    //12 adv comdey 35
    if (selectedCategory === "all") {
      setFilteredMovies(movies);
      return;
    }
    const filterMoviesFromCategory = movies.filter((movie) =>
      movie.genre_ids.includes(selectedCategory)
    );
    setFilteredMovies(filterMoviesFromCategory);

    console.log(filteredMovies);
  };
  return (
    <div className="category">
      <button
        className={`${category === "all" ? "active" : ""}`}
        onClick={() => onButtonClick("all")}
        value="all"
      >
        All
      </button>
      <button
        className={`${category === 35 ? "active" : ""}`}
        onClick={() => onButtonClick(35)}
        value="comedy"
      >
        Comedy
      </button>
      <button
        className={`${category === 12 ? "active" : ""}`}
        onClick={() => onButtonClick(12)}
        value="adventure"
      >
        Adventure
      </button>
    </div>
  );
};

export default Category;
