interface IGenreInfo {
    id:number[];
    name:string[]
}



export interface IMovieInfo{
    adult: false;
    backdrop_path: string;
    belongs_to_collection: null;
    budget: number;
    genres: IGenreInfo[],
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
    video: false;
    vote_average: number;
    vote_count: number;
}