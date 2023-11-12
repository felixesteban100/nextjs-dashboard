import LoadingCharacters from "@/app/ui/characters/loaders/LoadingCharacters";
import LoadingPaginationCharacters from "@/app/ui/characters/loaders/LoadingPaginationCharacters";
import { lusitana } from "@/app/ui/fonts";

export default function Loading() {
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl hover:underline cursor-pointer`}>Characters</h1>
            </div>

            <div className='flex flex-col gap-5 justify-between'>
                <div className='flex flex-col gap-5 justify-between items-center'>
                    <LoadingCharacters />
                    <div className="mt-5 flex w-full justify-center animate-pulse">
                        <LoadingPaginationCharacters />
                    </div>
                </div>
            </div>
        </div>
    )
}