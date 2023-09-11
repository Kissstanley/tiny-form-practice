import React, {FC} from 'react';
import {IMovie} from "../../../interfaces";

interface IProps{
    movie:IMovie
}
const MoviesListCard:FC<IProps> = ({movie}) => {
    const {id,backdrop_path,poster_path,original_language}=movie
    return (
        <div>
            <div>id: {id}</div>
            <div>backdrop_path: {backdrop_path}</div>
            <div>poster_path: {poster_path}</div>
            <div>original_language: {original_language}</div>
        </div>
    );
};

export {MoviesListCard};
