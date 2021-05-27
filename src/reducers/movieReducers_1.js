import { MOVIE_DETAILS_FAIL, MOVIE_DETAILS_REQUEST, MOVIE_DETAILS_SUCCESS } from "../constants/movieConstants_1";

function movieDetailsReducer( state = { movie: {} }, action) {
    switch (action.type){
        case MOVIE_DETAILS_REQUEST:
            return {loading:true};
        case MOVIE_DETAILS_SUCCESS:
            return {loading:false, movies:action.payload};
        case MOVIE_DETAILS_FAIL:
            return {loading:false, error:action.payload};
        default:
            return state;
    }
}
export {movieDetailsReducer}