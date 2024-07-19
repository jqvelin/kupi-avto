import { SortIcon } from "../../ui/icons/SortIcon"
import { Search } from "./Search"
import { SortBy } from "./SortBy"

export const Filters = () => {
    return <div className="flex flex-col md:flex-row items-center justify-between w-full px-[10px] md:px-[40px] h-[70px]">
            <SortBy />
            <Search />
    </div>
}