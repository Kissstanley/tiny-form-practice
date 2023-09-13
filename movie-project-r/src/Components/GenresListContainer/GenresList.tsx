import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {genreAction} from "../../redux";
import {GenreListCard} from "./GenresListCard/GenreListCard";

const GenresList = () => {

    const {genres}=useAppSelector(state => state.genres)
    const dispatch=useAppDispatch()

    useEffect( ()=>{
        dispatch(genreAction.getAll())
    },[])

    console.log(genres);

    return (
        <div>
            {genres.map(genre=><GenreListCard key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenresList};