import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SMovieDetails from './Style';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/movies/${id}`)
      .then(({ data }) => {
        const { actors, releaseDate } = data;
        const newActors = actors.split(',');
        const newFormat = releaseDate.split('-').reverse().join('-');
        setMovie({ ...data, actors: newActors, releaseDate: newFormat });
      })
      .catch((err) => `Erreur : ${err}`);
  }, [id]);

  return (
    <SMovieDetails>
      <h2 className="title">{movie.title}</h2>
      <div className="container">
        <div className="attach">
          <img src={movie.attach} alt="movieAttach" />
        </div>
        <div className="infosContainer">
          <h3>
            Synopsis <span>{movie.synopsis}</span>
          </h3>

          <div className="directorRelease">
            <h3>
              Date de sortie <span>{movie.releaseDate}</span>
            </h3>
            <h3>
              Réalisateur(s) <span>{movie.director}</span>
            </h3>
          </div>
          <div className="durationDistributor">
            <h3>
              Durée <span>{movie.duration} min</span>
            </h3>
            <h3>
              Disponible sur <span>{movie.distributer}</span>
            </h3>
          </div>

          <h3>
            Acteurs
            <span>
              {movie?.actors?.map((actor) => {
                return <li key={actor}>{actor}</li>;
              })}
            </span>
          </h3>
        </div>
      </div>
    </SMovieDetails>
  );
}
