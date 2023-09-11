import {apiService, IRes} from "./apiService";
import {IGenre} from "../interfaces";
import {api_key, urls} from "../const";

const genreService={
    getAll():IRes<IGenre[]>{
        return apiService.get(urls.genres+api_key)
    }
}

export {
    genreService
}