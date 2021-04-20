import { Component } from 'react';
// import style from './Movie.module.css';
import { fetchMovieSearch } from '../Components/ApiMovie';
import SearchBar from '../Components/SearchBar';
import MovieList from '../Components/MovieList';
class MoviesPage extends Component {
  state = {
    film: [],
    searchFilm: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchFilm !== this.state.searchFilm) {
      this.fetchFilm();
    }
  }
  fetchFilm = () => {
    const { searchFilm } = this.state;
    fetchMovieSearch
      .fetchSearchFilm(searchFilm)
      .then(results =>
        this.setState(prevState => ({
          films: [...prevState.films, ...results],
        })),
      )
      .catch(error => console.log(error));
  };
  addFilm = film => {
    // console.log('addFilm()');
    this.setState({
      searchFilm: film,
      films: [],
    });
  };
  render() {
    const { films } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.addFilm} />
        <MovieList films={films} />
      </div>
    );
  }
}
export default MoviesPage;
