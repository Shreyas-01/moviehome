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
                <li>Actors: {movie.Actors}</li>
                <li>Production: {movie.Production}</li>
                <li>Writer(s): {movie.Writer}</li>
                <li>Plot: {movie.Plot}</li>
                <li>Runtime: {movie.Runtime}</li>
                <li>Age rating: {movie.Rated}</li>
                <div className="row">
                    <div><li>Ratings:</li></div>
                    <div ><ul>
                    <li>Metacritic: {mt}</li>
                    <li>Rotten Tomatoes: {rt}</li>
                    <li>imdb: {movie.imdbRating}</li>
                    </ul></div>
                </div>
                <li>Awards won: {movie.Awards}</li>
                <li>Box-office collection: {movie.BoxOffice}</li>
            </ul>
        </div>
    )} else{
        return (
            null
    )}
};