import {useAppDispatch, useAppSelector} from "../../hooks";

import {MoviesListCard} from "./MovieListCard/MoviesListCard";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {movieActions} from "../../redux";

const MoviesList = () => {
    window.scrollTo(0, 0)
    const dispatch=useAppDispatch()
    const {results}=useAppSelector(state => state.movies)

    const[query,setQuery]=useSearchParams({page:'1'});
    const page=query.get('page')

    useEffect(()=>{
        dispatch(movieActions.getAll({page}))
    },[])

    return (
        <div>
            {results.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};