const baseURL = process.env.REACT_APP_API
const api_key='?api_key=c105d1074a9373f1bad409788da29c00'

const movies='/discover/movie'
const genres='/genre/movie/list'

const urls ={
    movies,
    genres
}

export {
    baseURL,
    api_key,
    urls
}