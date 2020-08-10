import React from 'react';
import './HomePage.css';
import { useHistory } from 'react-router-dom';

export default function HomePage() {

    const history = useHistory();

    const toSearch = () => {
        history.push('/search');
    }
    return (
        <div className="container">
            <p className=" text text-center addShadow">Search any Movie!</p>
            <button type="button" onClick={toSearch} className="btn btn1 btn-lg col-2 btn-outline-success">Start</button>
        </div>
    )
}