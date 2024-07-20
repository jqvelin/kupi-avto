import { useEffect } from "react";
import { carsSlice } from "../../../state/slices/carsSlice";
import { useAppDispatch, useAppSelector, useAppStore } from "../../../state/store";
import { api } from "../../../api";
import { CarCard } from "./CarCard";

const CarList = () => {
    const dispatch = useAppDispatch()
    const appStore = useAppStore()
  
    const isPending = useAppSelector(carsSlice.selectors.selectIsFetchCarsPending)
    
    useEffect(() => {
      const isIdle = carsSlice.selectors.selectIsFetchCarsIdle(appStore.getState())
      if (!isIdle) return;
      dispatch(carsSlice.actions.fetchCarsPending())
      api.getCars().then(result => {
        dispatch(carsSlice.actions.fetchCarsSuccess(result || []))
      }).catch(() => {
        dispatch(carsSlice.actions.fetchCarsFailed())
      })
    }, [])

    const cars = useAppSelector(carsSlice.selectors.selectAllCars)

    if (!cars.length) return <h2>По вашему запросу ничего не найдено :(</h2>
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-[40px] gap-x-4 gap-y-16">
        {cars.map(car => <CarCard key={car.id} {...car} />)}
      </div> 
    );
  };
  
  export default CarList;

