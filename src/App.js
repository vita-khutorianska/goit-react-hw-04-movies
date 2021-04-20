// import './App.css';
import { lazy, Suspense } from 'react-router-dom';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';
import styles from './App.module.css';
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage '));

function App() {
  return <div className="App"></div>;
}

export default App;
