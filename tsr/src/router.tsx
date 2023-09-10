import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./Layouts/MainLayout";
import {CarDetailsPage} from "./Pages/CarDetailsPage";
import {CarsPage} from "./Pages/CarsPage";
import {LoginPage} from "./Pages/LoginPage";
import {RegisterPage} from "./Pages/RegisterPage";

export const router=createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[
            {
                index: true,
                element:<Navigate to={'cars'}/>
            },
            {
                path:'cars',
                element:<CarsPage/>,
                children:[
                    {
                        path:':id',
                        element:<CarDetailsPage/>
                    }
                ]
            },
            {
                path:'login',
                element:<LoginPage/>
            },
            {
                path:'register',
                element:<RegisterPage/>
            }
        ]
    }
])