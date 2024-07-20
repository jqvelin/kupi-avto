import { Link } from "react-router-dom"
import { useAppSelector } from "../../../state/store"
import { carsSlice } from "../../../state/slices/carsSlice"
import { formatNumber } from "../../../../utils/formatNumber"
import { FavoriteCarElement } from "./FavoriteCarElement"
import { Fragment } from "react"
import { Car } from "../../../../graphql/generated"

export const FavoriteCarList = () => {
    const favoriteCars = useAppSelector(carsSlice.selectors.selectFavoriteCars) as Car[]

    if (!favoriteCars.length) return <div className="column text-center gap-4">
        <h2>Здесь пока пусто...</h2>
        <p>Добавьте автомобили в избранное и они появятся здесь</p>
        <Link to="/" className="py-[19px] px-[99px] bg-blue-2 text-white rounded-[5px]">На главную</Link>
    </div>

    return <div className="column text-start w-full px-[10px] md:px-[40px] mb-[36px]">
        <h1 className="text-[24px] md:text-[48px]">Избранные товары - {formatNumber(Object.keys(favoriteCars).length)}</h1>
        <hr className="text-gray-2 mb-[70px]"/>
        <ul>
            {favoriteCars.map(car => {
                return <Fragment key={car.id}>
                    <li>
                        <FavoriteCarElement {...car} />
                    </li>
                    {car !== favoriteCars[favoriteCars.length - 1] && <hr className="text-gray-2 my-[36px]"/>}
                </Fragment>
            })}
        </ul>
    </div>
}