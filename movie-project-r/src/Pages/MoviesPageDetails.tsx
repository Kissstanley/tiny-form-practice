import {MovieListCardDetailsContainer} from "../Components";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch} from "../hooks";
import {movieActions} from "../redux";

const MoviesPageDetails = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(movieActions.getById(id))

        console.log('data')
    },[id])


    return (
        <div>
            <MovieListCardDetailsContainer />
        </div>
    );
};

export {MoviesPageDetails};