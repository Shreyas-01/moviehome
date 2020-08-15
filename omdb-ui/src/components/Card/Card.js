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
    <div className="col-lg-4 col-md-6 m-auto p-0">
        <div className="card">
        <div className="bd-placeholder-img card-img-top cardImage">
            <img src={movie.Poster} alt="Movie poster"></img>
        </div>
        <div className="card-body text-center">
            <h5 className="card-title">{movie.Title}</h5>
            <hr></hr>
            <p className="card-text text-center text-uppercase"> YEAR: {movie.Year} | CATEGORY: {movie.Type} </p>
            <button className="btn detailsbtn rounded-pill" onClick={viewButtonClick}>View details</button>
        </div>
        </div> 
        <br/>
    </div>
)});

export default Card;

