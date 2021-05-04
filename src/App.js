import './App.css';
import MovieList from "./components/movie/list";
import {Component} from "react";

class App extends Component {
    movies = ['titanic', 'avatar']

    state = {
        movies: []
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

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <h1>Movie Rater</h1>
                    <MovieList movies={this.state.movies}/>
                </header>
            </div>
        );
    }
}

export default App;
