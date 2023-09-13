import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {AxiosError} from "axios";
import {IMovie, IMovieRes} from "../../interfaces";



const initialState:IMovieRes={
        page:null,
        results:[],
        total_pages:null,
        total_results:null
}

const getAll = createAsyncThunk<IMovieRes,void>(
    'movieSlice/getAll',
    async(_, {rejectWithValue}) =>{
        try {
            const {data}=await movieService.getAll()
            return data
        }catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

// const getById = createAsyncThunk<IMovie,{id:number}>(
//     'movieSlice/getById',
//     async ({id},{rejectWithValue})=>{
//         try {
//             const {data}=await movieService.getById(id)
//             return data
//         }catch (e){
//             const err = e as AxiosError
//             return rejectWithValue(err.response.data)
//         }
//     }
// )

const movieSlice=createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
    },
    extraReducers:builder => builder
        .addCase(getAll.fulfilled, (state, {payload}) => {
            state.results=payload.results
            state.page=payload.page
        })
})

const {reducer:movieReducer,actions}=movieSlice;

const movieActions ={
    ...actions,
    getAll
}

export {
    movieReducer,
    movieActions
}