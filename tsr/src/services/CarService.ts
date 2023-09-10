import {apiService, IRes} from "./ApiService";
import {ICar} from "../interfaces/carInterface";
import {urls} from "../const/urls";

const carService={
    getAll:():IRes<ICar[]> =>apiService.get(urls.cars.base),
    create:(data:ICar):IRes<ICar>=>apiService.post(urls.cars.base,data),
    getById:(id:number):IRes<ICar>=>apiService.get(urls.cars.byId(id)),
    updateById:(id:number,data:ICar):IRes<ICar>=>apiService.put(urls.cars.byId(id),data),
    deleteById:(id:number):IRes<void>=>apiService.delete(urls.cars.byId(id))
}

export {
    carService
}