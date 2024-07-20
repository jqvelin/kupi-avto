import { Search } from "./Search"
import { SortBy } from "./SortBy"

export const Filters = () => {
    return <div className="flex gap-2 flex-col md:flex-row md:gap-0 items-center justify-between w-full px-[10px] md:px-[40px] mb-[36px]">
            <SortBy />
            <Search />
    </div>
}