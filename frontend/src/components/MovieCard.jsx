import React from "react";

const MovieCard = ({ movie }) => {
  function handleFavourite() {
    alert("clicked");
  }

  return (
    <div className="movie-card">
      <div className="img">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="movie_info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
      <button className="favourite-btn" onClick={handleFavourite}>
        🤍
      </button>
    </div>
  );
};

export default MovieCard;
