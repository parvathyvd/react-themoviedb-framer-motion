import React from "react";
import Movie from "./Movie";
import { motion } from "framer-motion";

const Movies = ({ movies }) => {
  return (
    <motion.div layout className="movies">
      {movies.map((movie) => {
        return <Movie movie={movie} key={movie.id} />;
      })}
    </motion.div>
  );
};

export default Movies;
