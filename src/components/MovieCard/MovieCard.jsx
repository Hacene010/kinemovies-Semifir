import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SMovieCard from './Style';
import deleteIcon from './deleteIcon.jpg';

export default function MovieCard({ id, title, attach, duration }) {
  const navigate = useNavigate();
  const deleteMovie = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/movies/${id}`).then(() => {
      navigate(0);
    });
  };
  return (
    <SMovieCard>
      <NavLink to={`/movies/${id}`}>
        <div className="titleAttach">
          <img src={attach} alt="MovieAttach" />
          <h2>{title}</h2>
        </div>
      </NavLink>
      <div className="infos">
        <h3>
          Durée : <span>{duration} min</span>
        </h3>
        <button type="button" className="deleteBtn" onClick={deleteMovie}>
          <img src={deleteIcon} alt="deleteIcon" />
        </button>
      </div>
    </SMovieCard>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  attach: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};
