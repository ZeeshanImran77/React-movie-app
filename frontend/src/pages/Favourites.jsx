import React from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
const Favourites = () => {
  const { favourites } = useMovieContext();

  if (favourites) {
    return (
      <div className="cnt">
        <h2>Your Favourites</h2>
        <div className="grid">
          {favourites.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    );
  }
  return (
    <>
      <div></div>
      <div className="favourite-box">
        <h2>
          No favourite
          <b>
            <h1 style={{ display: "inline", margin: "0 15px" }}>Movies</h1>
          </b>
          right now!
        </h2>
        <p>adding movies to favourites will be displayed here.</p>
      </div>
    </>
  );
};

export default Favourites;
