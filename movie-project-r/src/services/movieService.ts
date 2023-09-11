import {IMovie} from "../interfaces";
import {apiService, IRes} from "./apiService";
import {api_key, urls} from "../const";

const movieService={
    getAll():IRes<IMovie[]> {
     return apiService.get(urls.movies+api_key)
    }
}
export {
    movieService
}