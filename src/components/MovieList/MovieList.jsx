import { useState, useEffect } from 'react';
import axios from 'axios';
import SMovieList from './Style';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/movies`)
      .then(({ data }) => setMovies(data))
      .catch((err) => `Erreur : ${err}`);
  }, []);

  return (
    <SMovieList>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
      })}
    </SMovieList>
  );
}
