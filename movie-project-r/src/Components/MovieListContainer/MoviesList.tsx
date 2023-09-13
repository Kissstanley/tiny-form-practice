import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {MoviesListCard} from "./MovieListCard/MoviesListCard";

const MoviesList = () => {
    const {results}=useAppSelector(state => state.movies)
    const dispatch=useAppDispatch()

    useEffect( ()=>{
           dispatch(movieActions.getAll())
    },[])


    return (
        <div>
            {results.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};