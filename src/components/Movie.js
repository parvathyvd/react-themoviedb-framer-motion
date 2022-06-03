import React from "react";
import { motion } from "framer-motion";

const Movie = ({ movie }) => {
  const { original_title, backdrop_path } = movie;
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="movie"
    >
      <p className="movie-name">{original_title}</p>
      <div className="movie-img-wrapper">
        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" />
      </div>
    </motion.div>
  );
};

export default Movie;
