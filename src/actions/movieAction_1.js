import axios from "axios";
import { MOVIE_DETAILS_REQUEST, MOVIE_DETAILS_SUCCESS, MOVIE_DETAILS_FAIL } from "../constants/movieConstants_1";
const detailsMovie = (movieId) => async(dispatch) =>{
    try{
        dispatch(
            {
                type: MOVIE_DETAILS_REQUEST,
                payload: movieId
            }

        );
            const {data} = await axios.get("/api/movies"+movieId);
            dispatch(
                {
                    type: MOVIE_DETAILS_SUCCESS,
                    payload: data
                });
    }
    catch(error)
    {
        dispatch(
            {
                type: MOVIE_DETAILS_FAIL,
                payload: error.message
            });

    }
}
export {detailsMovie}
