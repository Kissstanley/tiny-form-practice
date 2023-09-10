import axios, {AxiosResponse} from "axios";
import {baseURL} from "../const/urls";

type IRes<DATA>=Promise<AxiosResponse<DATA>>
const apiService = axios.create({baseURL})

export type {
    IRes
}

export {
    apiService
}