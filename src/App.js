import { useEffect, useState } from "react";
import "./App.css";
import { API } from "./api";
import Movies from "./components/Movies";
import Category from "./components/Category";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [category, setCategory] = useState("all");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setLoading(false);
      const result = await response.json();
      setMovies(result.results);
      setFilteredMovies(result.results);
      console.log(result.results);
    } catch (err) {
      setLoading(false);
      setError(true);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="App">
      {loading && !error && <p>Loading..</p>}
      {error && !loading && <p>Something is wrong..</p>}
      <Category
        category={category}
        setCategory={setCategory}
        filteredMovies={filteredMovies}
        setFilteredMovies={setFilteredMovies}
        movies={movies}
      />
      <Movies movies={filteredMovies} />
    </div>
  );
}

export default App;
