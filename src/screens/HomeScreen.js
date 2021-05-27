import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data";
import axios from "axios";
//import {listMovies} from "../actions/movieActions"
import { useDispatch, useSelector } from "react-redux";
function HomeScreen(props){
//         const movieList=useSelector(state=>state.productList);
// const {movies,loading,error}= movieList;
// const dispatch = useDispatch();
// useEffect(() => {
//     dispatch(listMovies());
//     return () =>{
//     };
// })



    const [movies, setMovie] = useState([]);
    useEffect(()=>{
        const fetchData = async () =>{
            const {data} = await axios.get("/api/movies");
            setMovie(data); 
        } 
        fetchData()
        return ()=>{
            //
        };
    },[]);

    //loading? <div>Loading.......</div>:error? <div>{error}</div>:
    return <div>
    <ul className="movies">
    {
        movies.map(movie=>
        <li><div className="movie">
            <Link to={"/movie/"+movie._id}>{<img className="movie-image" src={movie.image}/>}</Link>
        
        </div>
        <div className="movie-name">{movie.name}</div>
        <div className="movie-rating">Rating : {movie.numReviews}</div>
    </li>
        )
    }
</ul>
</div> 
}
export default HomeScreen;