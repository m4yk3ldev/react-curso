import React from "react";

function MovieList(props) {

    return (
        <React.Fragment>
            {
                props.movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <h3>{movie.title}</h3>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default MovieList;