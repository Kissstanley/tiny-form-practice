import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {genreService} from "../../services";
import {IGenreRes} from "../../interfaces/genreResInterface";



const initialState:IGenreRes={
    genres:[]
};

const getAll = createAsyncThunk<IGenreRes,void>(
    'genreSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const{data}=await genreService.getAll()
            return data
        }catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const genreSlice=createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(getAll.fulfilled,(state, {payload}) => {
            state.genres=payload.genres
        })
})


const {reducer:genreReducer,actions}=genreSlice;

const genreAction ={
    ...actions,
    getAll
}

export{
    genreReducer,
    genreAction
}