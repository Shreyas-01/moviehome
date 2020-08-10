import React from 'react';
import './Card.css';
import { useHistory } from 'react-router-dom';
/**
 * useState(), useHistory() => Both are react hooks.
 * React hooks help to change state.
 * State change via hooks also informs React that
 * re-rendering is required.
 * React.memo is a special function. It prevents re-rendering
 * unless this component's input has changed.
 * Usually all child components re-rendered.
 * With React.memo() only if this component input has updated
 * then re-rendering will occur.
 */
const Card = React.memo(props => {

const movie = props.movie;
const history = useHistory();

const viewButtonClick = () => {
    history.push(`/details/${movie.imdbID}`);
}

return (
    <div className="col-lg-4 col-md-6">
        <div className="card bg-dark">
        <img src={movie.Poster} alt="Poster" className="card-img-top"></img>
        <div className="card-body text-center">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text text-center text-uppercase"> YEAR: {movie.Year} | CATEGORY: {movie.Type} </p>
            <button className="btn btn-md btn-outline-info" onClick={viewButtonClick}>View details</button>
        </div>
        </div> 
        <br/>
    </div>
)});

export default Card;