import {MoviesList} from "../Components";
import {Pagination} from "@mui/material";
import styles from './MoviePage.module.css'
import {useAppSelector} from "../hooks";
import {useSearchParams} from "react-router-dom";

const MoviesPage = () => {
    const [,setQuery]=useSearchParams()
    const {total_pages}=useAppSelector(state => state.movies)

    return (
        <div>
            <MoviesList/>
            <Pagination
                count={total_pages}
                variant="outlined"
                shape="rounded"
                color={"primary"}
                className={styles.pag}
                onChange={(e,page)=>setQuery({page:page.toString()})}
            />
        </div>
    );
};

export {MoviesPage};