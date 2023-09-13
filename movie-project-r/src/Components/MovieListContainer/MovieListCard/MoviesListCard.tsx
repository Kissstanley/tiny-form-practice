import React, {FC} from 'react';
import {IMovie} from "../../../interfaces";
import styles from './MovieListCard.module.css'
import {urls} from "../../../const";

interface IProps{
    movie:IMovie
}
const MoviesListCard:FC<IProps> = ({movie}) => {
    const {backdrop_path,original_title}=movie
    return (

            <div className={styles.wrapper}>
                    <div className={styles.place}>
                        <div className={styles.pict}>
                            <img src={urls.imageBase+backdrop_path} alt="backdrop_path" />
                        </div>
                        <h2 >{original_title}</h2>
                </div>
        </div>

    );
};

export {MoviesListCard};
