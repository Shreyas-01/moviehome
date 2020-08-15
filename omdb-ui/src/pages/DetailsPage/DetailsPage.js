import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl, axiosHeaders} from '../../utils/constants';
import './DetailsPage.css';

export default function DetailsPage() {
    const params = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        const uri = `${baseUrl}omdb/imdb/${params.imdbID}`;
        axios.get(uri, axiosHeaders)
        .then(res => {
            if (res && res.data) {
                setMovie(res.data);
                
        }})
        .catch(err => console.error(err));
    },[])

    console.log(movie);
    
    if(movie!=null) {
        const rt = movie.Ratings[1]!==undefined?movie.Ratings[1].Value:"N/A";
        const mt = movie.Ratings[2]!==undefined?movie.Ratings[2].Value:"N/A";
    return (
        <div className="info col-8">
            <h5 className="text-center">{movie.Title}</h5>
            <ul className="list">
                <li>Director(s): {movie.Director}</li>
                <hr></hr>
                <li>Actors: {movie.Actors}</li>
                <hr></hr>
                <li>Production: {movie.Production}</li>
                <hr></hr>
                <li>Writer(s): {movie.Writer}</li>
                <hr></hr>
                <li>Plot: {movie.Plot}</li>
                <hr></hr>
                <li>Runtime: {movie.Runtime}</li>
                <hr></hr>
                <li>Age rating: {movie.Rated}</li>
                <hr></hr>
                <li>Ratings:</li>
                <ul className="ratings">
                    <li>Metacritic: {mt}</li>
                    <li>Rotten Tomatoes: {rt}</li>
                    <li>imdb: {movie.imdbRating}</li>
                </ul>
                <hr></hr>
                <li>Awards won: {movie.Awards}</li>
                <hr></hr>
                <li>Box-office collection: {movie.BoxOffice}</li>
            </ul>
        </div>
    )} else{
        return (
            null
    )}
};