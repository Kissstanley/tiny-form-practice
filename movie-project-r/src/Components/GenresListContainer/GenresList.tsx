import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {genreAction, movieActions} from "../../redux";
import {GenreListCard} from "./GenresListCard/GenreListCard";
import {useSearchParams} from "react-router-dom";
import {MoviesListCard} from "../MovieListContainer/MovieListCard/MoviesListCard";

const GenresList = () => {

    const {genres}=useAppSelector(state => state.genres)


    const dispatch=useAppDispatch()

    useEffect( ()=>{
        dispatch(genreAction.getAll())
    },[])



    const search=()=>{
        // console.log('');
    }

    return (
        <div onClick={search}>
            {genres.map(genre=><GenreListCard key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenresList};