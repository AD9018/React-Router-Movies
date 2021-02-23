import React from "react";
import { useHistory, Link } from "react-router-dom";
import MovieCard from "./MovieCard";
export default function MovieList(props) {
  const { movieList } = props;

  return (
    <div className="movie-list">
      {movieList.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id, stars } = props.movie;
  let history = useHistory();

  function movieCard() {
    history.push(`/movies/${id}`);
  }

  return (
    <Link to={`/movies/${id}`}>
      <MovieCard
        title={title}
        stars={stars}
        director={director}
        metascore={metascore}
        className="movie-card"
      />
      ;
    </Link>
  );
}
