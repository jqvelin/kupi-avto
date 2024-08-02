export const CarCardSkeleton = () => {
    return <div className="flex flex-col items-center rounded-md w-[330px] animate-pulse h-[400px] border-2 border-gray-2">
        <div className="bg-gray-2 w-full h-[200px] mb-4"></div>
        <div className="w-11/12 bg-gray-2 h-[16px] mb-4"></div>
        <div className="h-[64px] w-11/12 bg-gray-2"></div>
        <div className="flex w-full px-4 py-2 items-center justify-between mt-auto">
            <div className="w-[100px] h-[40px] bg-gray-2"></div>
            <div className="w-[100px] h-[40px] bg-gray-2"></div>
        </div>
    </div>
}