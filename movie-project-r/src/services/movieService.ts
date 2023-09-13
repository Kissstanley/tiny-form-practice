import {apiService} from "./apiService";
import { urls} from "../const";
import {IMovieRes} from "../interfaces";

const movieService={
    getAll:()=>apiService.get<IMovieRes>(urls.movies.base),
    getById:(id:number)=>apiService.get<IMovieRes>(urls.movies.byId(id))
}
export {
    movieService
}