import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {AxiosError} from "axios";
import {IMovieInfo, IMovieRes} from "../../interfaces";



const initialState:IMovieRes={
        page:null,
        results:[],
        total_pages:0,
        total_results:null,
        movie: null
}

const getAll = createAsyncThunk<IMovieRes, { page:string }>(
    'movieSlice/getAll',
    async({page}, {rejectWithValue}) =>{
        try {
            const {data}=await movieService.getAll(page)
            return data
        }catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getById = createAsyncThunk<IMovieInfo, string>(
    'movieSlice/getById',
    async (id,{rejectWithValue})=>{
        try {
            const {data}=await movieService.getById(id)

            return data
        }catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const movieSlice=createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
    },
    extraReducers:builder => builder
        .addCase(getAll.fulfilled, (state, {payload}) => {
            state.results=payload.results
            state.total_pages=payload.total_pages
        })
        .addCase(getById.fulfilled, (state, {payload}) => {
            state.movie=payload
        })
})

const {reducer:movieReducer,actions}=movieSlice;

const movieActions ={
    ...actions,
    getAll,
    getById
}

export {
    movieReducer,
    movieActions
}