import {apiService} from "./apiService";
import {urls} from "../const";
import {IMovieInfo, IMovieRes} from "../interfaces";

const movieService={
    getAll:(page:string)=>apiService.get<IMovieRes>(urls.movies.base,{params:{page}}),
    getById:(id:string)=>apiService.get<IMovieInfo>(urls.movies.byId(id))
}
export {
    movieService
}