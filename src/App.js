// import './App.css';
import { Suspense } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import routes from './Components/Routes/Routes';
// const HomePage = lazy(() => import('./Pages/HomePage'));
// const MoviesPage = lazy(() => import('./Pages/MoviesPage'));
// const MovieDetailsPage = lazy(() => import('./Pages/MoviePage'));

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
          {routes.map(({ path, exact, component }) => (
            <Route key={path} exact={exact} path={path} component={component} />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
