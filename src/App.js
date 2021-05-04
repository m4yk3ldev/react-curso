import './App.css';
import {Component} from "react";

import MovieList from "./components/movie/list";
import MovieDetails from "./components/movie/detail";


class App extends Component {

    state = {
        movies: [],
        selectedMovie: null
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/movies/", {
            method: 'GET',
            headers: {
                "Authorization": "Token d45babb39b0ae02cfcc18cac1e2335cd37995bc8"
            }
        }).then(resp => resp.json())
            .then(res => this.setState({movies: res}))
            .catch(error => console.log(error))
    }

    movieClicked = movie => {
        this.setState({selectedMovie: movie})
    }

    render() {

        return (
            <div className="App">
                <h1>Movie Rater</h1>
                <div className="layout">
                    <MovieList movies={this.state.movies} movieClicked={this.movieClicked}/>
                    <MovieDetails movie={this.state.selectedMovie}/>
                </div>
            </div>
        );
    }
}

export default App;
