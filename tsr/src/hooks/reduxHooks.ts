import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store";
import {combineReducers} from "@reduxjs/toolkit";

const useAppSelector:TypedUseSelectorHook<RootState> = useSelector

const useAppDispatch=()=>useDispatch<AppDispatch>()

export {
    useAppDispatch,
    useAppSelector
}