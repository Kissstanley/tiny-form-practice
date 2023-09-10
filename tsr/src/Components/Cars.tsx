import {Car} from "./Car";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {useEffect} from "react";
import {carActions} from "../redux/slices/carSlice";

const Cars = () => {
    const dispatch=useAppDispatch()
    const {cars}=useAppSelector(state => state.cars)

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[dispatch])

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export{
    Cars
}