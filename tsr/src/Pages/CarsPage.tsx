import {Outlet} from "react-router-dom";
import {CarForm} from "../Components/CarForm";
import {Cars} from "../Components/Cars";

const CarsPage = () => {
    return (
        <div>
            <Outlet/>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {
    CarsPage
}