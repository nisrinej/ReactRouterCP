import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import MoviePage from './Components/MoviePage';

function App() {
  return (
    <Routes>
      <Route path= "/" element = {<Home/>}/>
      <Route path= "/movie:title" element = {<MoviePage/>}/>
    </Routes>
  );
}

export default App;
