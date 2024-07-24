import { carsSlice } from "../../../state/slices/carsSlice";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { MagnifyingGlass } from "../../ui/icons/MagnifyingGlass";

export const Search = () => {
    const searchQuery = useAppSelector((state) => state.cars.searchQuery);
    const dispatch = useAppDispatch();
    const setSearchQuery = (query: string) => {
        dispatch(carsSlice.actions.setSearchQuery(query));
    };
    return (
        <div className="relative w-[clamp(100px,70vw,445px)] flex items-center">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-[1px] border-gray-2 rounded-[5px] h-[36px] w-full py-[4px] px-[10px] placeholder:text-[14px] placeholder:text-gray-2"
                placeholder="Найти авто"
            />
            <button className="absolute right-[4px] grid place-items-center w-[24px] h-[24px] bg-blue-2 rounded-[3px]">
                <MagnifyingGlass />
            </button>
        </div>
    );
};
