import {IGenre} from "../../../interfaces";
import {FC} from "react";
import styles from './GenreListCard.module.css'


interface IProps{
    genre:IGenre
}
const GenreListCard:FC<IProps> = ({genre}) => {
    return (
        <div className={styles.genre}>
            <p className={styles.genres}>{genre.name}</p>
        </div>
    );
};

export  {GenreListCard};