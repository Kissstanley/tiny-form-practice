import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {movieService} from "../../services";
import {movieActions} from "../../redux";
import {MoviesListCard} from "./MovieListCard/MoviesListCard";

const MoviesList = () => {
    const {movies}=useAppSelector(state => state.movies)

    const dispatch=useAppDispatch()

    useEffect( ()=>{
       movieService.getAll().then(({data})=>{
           dispatch(movieActions.setAll(data))
       })
    },[])


    return (
        <div>
            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};