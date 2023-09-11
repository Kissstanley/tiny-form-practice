import {createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces";

interface IState {
    movies:IMovie[],
    movie:IMovie
}

const initialState:IState={
    movies:[],
    movie:null

}

const movieSlice=createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
        setAll:(state, action)=>{
            state.movies=action.payload
        },
        setCurrent:(state, action)=>{
            state.movie=action.payload
        }
    },
})

const {reducer:movieReducer,actions:movieActions}=movieSlice;

export {
    movieReducer,
    movieActions
}