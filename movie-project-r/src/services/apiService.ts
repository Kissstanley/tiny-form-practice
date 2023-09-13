import axios, {AxiosResponse} from "axios";
import {baseURL} from "../const";

type IRes<T>=Promise<AxiosResponse<T>>
const apiService=axios.create({
    baseURL,
    headers:{
        Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTA1ZDEwNzRhOTM3M2YxYmFkNDA5Nzg4ZGEyOWMwMCIsInN1YiI6IjY0ZmUyOTVkZGI0ZWQ2MTAzM2EwZmUyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9i8cxhWuHc_OTFc3ZMPVb9hBxCTcvp6Ge8eMyBXEHmU'
    }
})


export type {IRes}

export {apiService}