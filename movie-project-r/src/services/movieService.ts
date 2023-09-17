import {apiService} from "./apiService";
import {urls} from "../const";
import {IMovieInfo, IMovieRes} from "../interfaces";

const movieService={
    getAll:(page:string | void)=>apiService.get<IMovieRes>(urls.movies.base(page)),
    getById:(id:string)=>apiService.get<IMovieInfo>(urls.movies.byId(id))
}

export {
    movieService
}