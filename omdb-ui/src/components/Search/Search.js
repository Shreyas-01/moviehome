import React from 'react';
import './Search.css';

export default function Search(props) {
const value = props.value;
const handleChange = (e) => props.onChange(e.target.value);
const handleSubmit = () => props.onSubmit(value);

return (
    <div className="background">
        <div className="input-group mb-3 col-4">
        <input type="text" className="search form-control" placeholder="Search your movie here" value={value} onChange={handleChange}/>
        <div className="input-group-append">
            <button className="btn searchbtn btn-outline-danger" type="button" onClick={handleSubmit}>Search</button>
        </div>
        </div> 
    </div>
)};