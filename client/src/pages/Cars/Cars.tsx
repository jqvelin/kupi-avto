import { FC, useEffect } from "react";
import { api } from "../../shared/api";
import { useAppDispatch, useAppSelector, useAppStore } from "../../shared/state/store";
import { carsSlice } from "../../shared/state/slices/carsSlice";

const Cars: FC = () => {
  const dispatch = useAppDispatch()
  const appStore = useAppStore()

  const isPending = useAppSelector(carsSlice.selectors.selectIsFetchCarsPending)
  
  useEffect(() => {
    const isIdle = carsSlice.selectors.selectIsFetchCarsIdle(appStore.getState())
    if (!isIdle) return;
    dispatch(carsSlice.actions.fetchCarsPending())
    api.getCars().then(cars => {
      dispatch(carsSlice.actions.fetchCarsSuccess(cars))
    }).catch(() => {
      dispatch(carsSlice.actions.fetchCarsFailed())
    })
  }, [])
  const cars = useAppSelector(state => state.cars.entities)

  return (
    <div>
      <p>{isPending ? "pending" : "loaded"}</p>
      <button onClick={() => console.log(cars)}>asd</button>
    </div>
  );
};

export default Cars;
