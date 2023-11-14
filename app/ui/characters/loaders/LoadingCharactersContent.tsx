import LoadingCharacters from "./LoadingCharacters";
import LoadingPaginationCharacters from "./LoadingPaginationCharacters";

export default function LoadingCharactersContent(){
    return(
        <div className='flex flex-col gap-5 justify-between'>
                <div className='flex flex-col gap-5 justify-between items-center'>
                    <LoadingCharacters />
                    <div className="mt-5 flex w-full justify-center animate-pulse">
                        <LoadingPaginationCharacters />
                    </div>
                </div>
            </div>
    )
}