import React, {Component} from 'react';

class MovieDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>Movie details</h3>
                {this.props.movie ? (
                    <div>
                        <h3>{this.props.movie.title}</h3>
                        <p>{this.props.movie.description}</p>
                    </div>
                ) : null}
            </React.Fragment>
        )
    }
}

export default MovieDetails;


