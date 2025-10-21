import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../services/api";
import { getPopularMovies } from "../services/api";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        console.log(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failes to load...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, [searchQuery]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return; // stop if input is empty or just spaces
    if (loading) return;
    setLoading(true);

    try {
      const movies = await searchMovies(searchQuery);
      if (movies.length === 0) {
        setError("No movies found 😕");
        setMovies([]); // clear old results
      } else {
        setMovies(movies);
        setError(null);
      }
    } catch (err) {
      setError("Failed to search...");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="home-pg cnt">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search the movie..."
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>

      <div className="grid">
        {error && <div className="error-message">{error}</div>}
        {loading ? (
          <div>loading...</div>
        ) : (
          movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
