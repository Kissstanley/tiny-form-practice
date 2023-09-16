import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {MoviesListCard} from "./MovieListCard/MoviesListCard";
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {
    window.scrollTo(0, 0)

    const {results}=useAppSelector(state => state.movies)
    const dispatch=useAppDispatch()

    const[query,setQuery]=useSearchParams({page:'1'});
    const page=query.get('page')

    useEffect( ()=>{
           dispatch(movieActions.getAll({page}))
    },[page])


    return (
        <div>
            {results.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};