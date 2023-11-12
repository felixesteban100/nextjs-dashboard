import { fetchPages } from "@/app/lib/data"
import PaginationCharacters from "./PaginationCharacters"
import { QueryOptions } from "@/app/lib/definitions"

type PaginationWrapperProps = {
    // totalPages: number,
    queryOptions: QueryOptions
    howMany: string
}

export default async function PaginationWrapper({ /* totalPages */ queryOptions, howMany }: PaginationWrapperProps) {
    // const totalPages = await fetchPages(characterName, parseInt(howMany), side, universe, team, "both", "All", true, false)
    const totalPages = await fetchPages(queryOptions, parseInt(howMany))
    // console.log(totalPages)

    return (
        <div className="mt-5 flex w-full justify-center">
            <PaginationCharacters totalPages={totalPages} />
        </div>
    )
}