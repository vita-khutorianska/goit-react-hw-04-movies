// import { Link } from 'react-router-dom';
import { Component } from 'react';
import fetchSearchFilm from '../Components/ApiMovie';
import SearchBar from '../Components/SearchBar';
import MovieList from '../Components/MovieList';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

const getSearchQuery = props => queryString.parse(props.location.search);
// console.log("getSearchQuery", getSearchQuery);
class MoviesPage extends Component {
  state = {
    films: [],
    searchFilm: '',
    error: false,
  };

  componentDidMount() {
    const { searchFilm } = getSearchQuery(this.props);
    if (searchFilm) {
      this.fetchFilm(searchFilm);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchFilm !== this.state.searchFilm) {
      this.fetchFilm(this.state.searchFilm);
    }
  }
  fetchFilm = searchFilm => {
    fetchSearchFilm
      .fetchSearchFilm(searchFilm)
      .then(results =>
        this.setState(prevState => ({
          films: [...prevState.films, ...results],
        })),
      )
      .catch(error => this.setState({ error: true }));
  };
  addFilm = film => {
    if (film !== '') {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `searchFilm=${film}`,
      });
    }
    this.setState({
      searchFilm: film,
      films: [],
    });
  };

  render() {
    const { films, error } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.addFilm} />
        {error && <MovieList films={films} />}
      </div>
    );
  }
}
export default withRouter(MoviesPage);
