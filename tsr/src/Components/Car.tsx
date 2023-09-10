import {useNavigate} from "react-router-dom";
import {FC, PropsWithChildren} from "react";
import {ICar} from "../interfaces/carInterface";
import {useAppDispatch} from "../hooks/reduxHooks";
import {carActions} from "../redux/slices/carSlice";

interface IProps extends PropsWithChildren{
    car:ICar
}
const Car:FC<IProps> = ({car}) => {
    const navigate=useNavigate()
    const dispatch=useAppDispatch()
    const {id,brand}=car

    const deleteCar = async ()=>{
        await dispatch(carActions.deleteCar({id}))
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <button onClick={()=>dispatch(carActions.setCarForUpdate({car}))}>update</button>
            <button onClick={deleteCar}>delete</button>
            <button onClick={()=>navigate(id.toString(),{state:car})}>details</button>
        </div>
    );
};

export{
    Car
}
