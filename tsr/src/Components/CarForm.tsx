import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces/carInterface";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {carService} from "../services/CarService";
import {carActions} from "../redux/slices/carSlice";

const CarForm = () => {
    const {register,reset,setValue,handleSubmit}=useForm<ICar>()
    const {carForUpdate}=useAppSelector(state => state.cars)
    const dispatch=useAppDispatch()

    if (carForUpdate){
        setValue('brand',carForUpdate.brand)
        setValue('price',carForUpdate.price)
        setValue('year',carForUpdate.year)
    }


    const save:SubmitHandler<ICar> = async (car)=>{
        await dispatch(carActions.create({car}))
        reset()
    }

    const update:SubmitHandler<ICar>=async (car)=>{
        await dispatch(carActions.update({id:carForUpdate.id,car}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type={"text"} placeholder={'brand'} {...register('brand')}/>
            <input type={"text"} placeholder={'price'} {...register('price')}/>
            <input type={"text"} placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate?'update':'save'}</button>
        </form>
    );
};

export {
    CarForm
}