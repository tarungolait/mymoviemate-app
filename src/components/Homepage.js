import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";
import "./Homepage.css"; // Import CSS file

const Homepage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const TMDB_KEY = "afcc4e756d500720208345094fe13a77";

    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_KEY}`
        );
        if (response.ok) {
          const data = await response.json();
          setTrendingMovies(data.results);
        } else {
          throw new Error("Failed to fetch trending movies");
        }
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className="homepage">
      <h1>Welcome to MyMovieMate!</h1>
      <p>Manage your movie watch list with ease.</p>

      <Search />

      <section className="trending">
        <h2>Trending Movies</h2>
        <div className="trending-movies">
          {trendingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} type="trending" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
