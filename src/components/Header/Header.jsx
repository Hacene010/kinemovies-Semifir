import { NavLink } from 'react-router-dom';
import addingBtn from './addingBtn.png';
import SHeader from './Style';

export default function Header() {
  return (
    <SHeader>
      <NavLink to="/" className="link">
        <h1>KineMovies</h1>
      </NavLink>
      <NavLink to="/createMovie" className="link">
        <img src={addingBtn} alt="addMovie" />
      </NavLink>
    </SHeader>
  );
}
