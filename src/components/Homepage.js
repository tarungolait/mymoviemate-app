import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";
import "./Homepage.css"; // Import CSS file

const Homepage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

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

    const fetchTopRatedMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}`
        );
        if (response.ok) {
          const data = await response.json();
          setTopRatedMovies(data.results);
        } else {
          throw new Error("Failed to fetch top-rated movies");
        }
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };

    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}`
        );
        if (response.ok) {
          const data = await response.json();
          setPopularMovies(data.results);
        } else {
          throw new Error("Failed to fetch popular movies");
        }
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchTrendingMovies();
    fetchTopRatedMovies();
    fetchPopularMovies();
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

      <section className="top-rated">
        <h2>Top Rated Movies</h2>
        <div className="top-rated-movies">
          {topRatedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} type="top-rated" />
          ))}
        </div>
      </section>

      <section className="popular">
        <h2>Popular Movies</h2>
        <div className="popular-movies">
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} type="popular" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
