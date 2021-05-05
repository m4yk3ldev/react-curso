import React, {Component} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

class MovieDetails extends Component {
    state = {
        highlighted: -1
    }

    highlightRate = high => evt => {
        console.log(high)
        this.setState({highlighted: high})
    }

    render() {
        const mov = this.props.movie
        return (
            <React.Fragment>
                <h3>Detalles de la pelicula</h3>
                {mov ? (
                    <div>
                        <h3>{mov.title}</h3>
                        <FontAwesomeIcon icon={faStar}
                                         color={mov.avg_rating > 0 ? 'orange' : ''}/>
                        <FontAwesomeIcon icon={faStar}
                                         color={mov.avg_rating > 1 ? 'orange' : ''}/>
                        <FontAwesomeIcon icon={faStar}
                                         color={mov.avg_rating > 2 ? 'orange' : ''}/>
                        <FontAwesomeIcon icon={faStar}
                                         color={mov.avg_rating > 3 ? 'orange' : ''}/>
                        <FontAwesomeIcon icon={faStar}
                                         color={mov.avg_rating > 4 ? 'orange' : ''}/>
                        ({mov.no_of_ratings})
                        <p>{mov.description}</p>
                        <div className="rate-container">
                            <h2>Rate it !!!</h2>
                            {[...Array(5)].map((e, i) => {
                                return <FontAwesomeIcon icon={faStar}
                                                        color={this.state.highlighted > i - 1 ? 'purple' : ''}
                                                        onMouseEnter={this.highlightRate()}/>
                            })}
                        </div>
                    </div>
                ) : null}
            </React.Fragment>
        )
    }


}

export default MovieDetails;


