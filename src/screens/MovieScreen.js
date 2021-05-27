import React, { useEffect } from "react";
import data from "../data";

import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsMovie } from "../actions/movieAction_1";
function MovieScreen(props){
    // const movieDetails = useSelector(state=>state.movieDetails)
    // const {movie,loading,error} = movieDetails;
    // const dispatch = useDispatch;


    // useEffect(()=>{
    //     dispatch(detailsMovie());
    //     return ()=> {
    //         //
    //     }
    // },[])
    const movie = data.movies.find(x=>x._id === props.match.params.id)
    return <div>
        <div>
            <Link to="/">back</Link>
        </div>
        <div className="details">
        <div className="details-info">
            <img src={movie.image}></img>
        </div>
        <div className="details-info">
            <h1 className="movieName">{movie.name}</h1>
            <li>actor: {movie.actor}</li>
            <li>Genre: {movie.genre}</li>
            <li>Rating: {movie.rating} stars {movie.numReviews}</li>
            <li> Description: {movie.description}</li>
        </div>
    </div>
        </div>
}
export default MovieScreen;