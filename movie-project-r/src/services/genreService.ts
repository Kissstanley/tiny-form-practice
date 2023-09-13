import {apiService} from "./apiService";
import {urls} from "../const";
import {IGenreRes} from "../interfaces/genreResInterface";

const genreService={
    getAll:()=>apiService.get<IGenreRes>(urls.genres)

}

export {
    genreService
}