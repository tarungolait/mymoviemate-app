import React from "react";
import MovieControls from "./MovieControls";

const MovieCard = ({ movie, type }) => {
  // Function to format the date
  const formatDate = (dateString) => {
    const options = { month: "short", day: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      ) : (
        <div className="filler-poster" />
      )}

      <MovieControls movie={movie} type={type} />

      <div className="movie-details">
        <h3 style={{ fontSize: "1.2rem", margin: "0", marginBottom: "0.3rem" }}>{movie.title}</h3>
        <p style={{ fontSize: "0.9rem", margin: "0" }}>{formatDate(movie.release_date)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
