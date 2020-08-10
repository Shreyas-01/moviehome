const express=require('express');
const router=express.Router();

const axios = require('axios');

const OMDB_API_KEY = process.env.OMDB_API_KEY;
const OMDB_URL = process.env.OMDB_URL;

router.get('/search', (req,res,next)=>{
    const title=req.query.title;
    const url=`${OMDB_URL}?apikey=${OMDB_API_KEY}&s=${title}`;
    axios.get(url)
        .then(response => {
        res.send(response.data);
        })
        .catch(error => {
        res.send(error);
        })
});

router.get('/imdb/:imdbID', (req, res, next) => {
    const imdbID = req.params.imdbID
    const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&i=${imdbID}&plot=full`
    axios.get(url)
    .then(response => {
        res.send(response.data);
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = router;