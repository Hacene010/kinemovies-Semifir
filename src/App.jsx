import { Route, Routes } from 'react-router-dom';
import SApp from './Style';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import CreateMovie from './components/CreateMovie/CreateMovie';
import Header from './components/Header/Header';

function App() {
  return (
    <SApp className="App">
      <Header />
      <Routes>
        <Route path="/createMovie" element={<CreateMovie />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/" element={<MovieList />} />
      </Routes>
    </SApp>
  );
}

export default App;
