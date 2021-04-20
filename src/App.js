// import './App.css';
import { lazy, Suspense } from 'react';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';
import styles from './App.module.css';
const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./Pages/MoviePage'));

const App = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to="/"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            HomePage
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/MoviesPage"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            MoviesPage
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<p>Is loading....</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/MoviesPage" component={MoviesPage} />
          <Route path="/MoviesPage/:movieId" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
