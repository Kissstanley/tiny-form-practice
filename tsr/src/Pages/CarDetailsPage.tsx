import {CarDetails} from "../Components/CarDetails";
import {useAppLocation} from "../hooks/routerHooks";
import {ICar} from "../interfaces/carInterface";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {carService} from "../services/CarService";

const CarDetailsPage = () => {
    const {state}=useAppLocation<ICar>()
    const {id}=useParams<{id:string}>()

    const [car,setCar]=useState<ICar>(null)

    useEffect(()=>{
        if (state){
            setCar(state)
        }else {
            carService.getById(+id).then(({data})=>setCar((data)))
        }
    },[id, state])


    return (
        <div>
            {car&&<CarDetails car={car} key={car.id}/>}
        </div>
    );
};

export {
    CarDetailsPage
}