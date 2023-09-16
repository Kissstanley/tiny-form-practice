import {IMovie} from "./movieInterface";
import {IMovieInfo} from "./movieInfoInterface";

export interface IMovieRes{
        page:number;
        results:IMovie[];
        total_pages: number;
        total_results: number;
        movie:IMovieInfo
}