import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SCreateMovie from './Style';

export default function CreateMovie() {
  const [form, setForm] = useState({
    title: '',
    director: '',
    synopsis: '',
    releaseDate: '',
    duration: '',
    distributer: '',
    attach: '',
    actors: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const newForm = { ...form };
    newForm[e.target.name] = e.target.value;
    setForm(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/movies`, { ...form })
      .then(() => {
        navigate('/');
      });
  };

  return (
    <>
      <SCreateMovie id="generalForm" onSubmit={handleSubmit}>
        <h2>Créez votre film</h2>
        <section className="partsContainer">
          <div className="firstPart">
            <label htmlFor="title">
              <span>Titre :</span>
              <input
                form="generalForm"
                type="text"
                id="title"
                name="title"
                onChange={handleChange}
                required
                placeholder="Titre"
              />
            </label>

            <label htmlFor="director">
              <span>Réalisateur(s) :</span>
              <input
                form="generalForm"
                type="director"
                id="director"
                name="director"
                onChange={handleChange}
                required
                placeholder="Réalisateur1, réalisateur2,... "
              />
            </label>

            <label htmlFor="releaseDate">
              <span>Date de sortie :</span>
              <input
                form="generalForm"
                type="date"
                id="releaseDate"
                name="releaseDate"
                onChange={handleChange}
                required
                placeholder="Date de sortie"
              />
            </label>

            <label htmlFor="synopsis">
              <span>Synopsis :</span>
              <textarea
                form="generalForm"
                type="text"
                id="synopsis"
                name="synopsis"
                onChange={handleChange}
                required
                placeholder="Synopsis..."
              />
            </label>
          </div>
          <div className="secondPart">
            <label htmlFor="duration">
              <span>Durée :</span>
              <input
                form="generalForm"
                type="number"
                min="0"
                id="duration"
                name="duration"
                onChange={handleChange}
                required
                placeholder="90 min"
              />
            </label>

            <label htmlFor="distributer">
              <span>Distributeur :</span>
              <input
                form="generalForm"
                type="text"
                id="distributer"
                name="distributer"
                onChange={handleChange}
                required
                placeholder="Netflix..."
              />
            </label>

            <label htmlFor="attach">
              <span>Affiche du film :</span>
              <input
                form="generalForm"
                type="text"
                id="attach"
                name="attach"
                onChange={handleChange}
                required
                placeholder="https://afficheDuFilm.png"
              />
            </label>
            <label htmlFor="actors">
              <span>Acteur(s) :</span>
              <input
                type="text"
                name="actors"
                onChange={handleChange}
                required
                placeholder="Acteur1, acteur2,..."
              />
            </label>
          </div>
        </section>
        <input type="submit" className="button" value="Ajouter" />
      </SCreateMovie>
    </>
  );
}
