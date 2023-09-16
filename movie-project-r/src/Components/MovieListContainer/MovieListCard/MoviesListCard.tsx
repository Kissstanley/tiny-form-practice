import React, {FC} from 'react';
import {IMovie} from "../../../interfaces";
import styles from './MovieListCard.module.css'
import {urls} from "../../../const";
import {Link} from "react-router-dom";
import {Button, Rating} from "@mui/material";

interface IProps{
    movie:IMovie
}
const MoviesListCard:FC<IProps> = ({movie}) => {
    const {backdrop_path,original_title, id,vote_average}=movie
    return (

            <div className={styles.wrapper}>
                    <div className={styles.place}>
                        <div className={styles.pict}>
                            <Link to = {`/movies/${id}`}>
                                <Button type = "button">
                                    <img src={urls.imageBase+backdrop_path} alt="backdrop_path"/>
                                </Button>
                            </Link>
                        </div>
                        <h2 >{original_title}</h2>
                        <Rating name="customized-10" defaultValue={vote_average} max={10} disabled={true} precision={0.1}/>
                </div>
             </div>

    );
};

export {MoviesListCard};
