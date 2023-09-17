import {useAppSelector} from "../../../hooks";
import {urls} from "../../../const";
import {Rating} from "@mui/material";
import styles from './MovieListCardDetailsContainer.module.css'



const MovieListCardDetailsContainer = () => {


    const {movie}=useAppSelector(state => state.movies)
    const {adult,budget,genres,original_language,homepage,original_title,overview,poster_path,release_date,runtime,status,tagline,vote_average,vote_count,video}=movie||{}

    return(
        <div>
            <div className={styles.preview}>
                <div>
                    <div className={styles.title}><h1>{original_title}</h1></div>
                    <div className={styles.title}>

                        <img src={urls.imageBase+poster_path} alt="backdrop_path"/>
                        <div className={styles.info}>

                            <div>Adult: {adult?'18+':'4+'}</div>
                            <div>Budget: {budget?`${budget}$`:'without budget'}</div>
                            <div>Original language: {original_language}</div>
                            <div>Release date: {release_date}</div>
                            <div>Runtime: {runtime}m</div>
                            <div>Status: {status}</div>
                            <div className={styles.desc}> Description:{overview}
                                <h5>Tagline: {tagline?`"${tagline}"`:'without tagline'}</h5>
                            </div>
                            <div className={styles.genre}>
                                <div>Genres:</div>
                                {genres?genres.map(genre =>`  ${genre.name}  `):''}
                            </div>
                        </div>
                    </div>

                    <div className={styles.title}>
                        <Rating name="customized-10" defaultValue={vote_average} max={10} precision={0.1}/>
                        voted-{vote_count}
                    </div>
                    <div className={styles.title}>
                        <button className={styles.but}><a href={homepage}>Watch here!</a></button>
                    </div>

                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export {MovieListCardDetailsContainer};