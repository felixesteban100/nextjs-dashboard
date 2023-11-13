import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { Metadata } from 'next';
import Characters from '@/app/ui/characters/Characters';
import LoadingCharacters from '@/app/ui/characters/loaders/LoadingCharacters';
import FilterCharacters, { sortByType, sortDirectionType } from '@/app/ui/characters/FilterCharacters';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import PaginationWrapper from '@/app/ui/characters/pagination/PaginationWrapper';
import LoadingPaginationCharacters from '@/app/ui/characters/loaders/LoadingPaginationCharacters';
import { Character, QueryOptions } from '@/app/lib/definitions';
import { fetchCharacters, fetchPages, getQueryOptions } from '@/app/lib/data';
import { getTeamByUniverse } from '@/app/lib/constants';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Characters',
};

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
        pageCharacters?: string;
        characterName?: string;
        howMany?: string;
        side?: string;
        universe?: string;
        team?: string;

        sortBy?: sortByType;
        sortDirection?: sortDirectionType;
    }
}) {
    const characterName = searchParams?.characterName || '';
    const howMany = searchParams?.howMany || '714'
    const side = searchParams?.side || "All"
    const universe = searchParams?.universe || "All"
    const team = searchParams?.team || "All"

    const currentPage = Number(searchParams?.pageCharacters) || 1;
    const sortBy = searchParams?.sortBy || '_id';
    const sortDirection = searchParams?.sortDirection || 'desc';

    const queryOptions: QueryOptions = getQueryOptions(characterName, side, universe, team, 'both', 'All', true, false)
    // console.log('queryOptions characters/page.tsx', queryOptions, currentPage)

    // const charactersToDisplay: Character[] = await fetchCharacters(queryOptions, currentPage, sortBy, sortDirection)
    // const totalPages = await fetchPages(queryOptions, parseInt(howMany))

    // console.log(totalPages)

    const teamInfo = getTeamByUniverse(universe).filter((c) => c.name === team)[0]
    return (
        <div className="w-full">
            <Sheet>
                <div className="flex w-full items-center justify-between">
                    <SheetTrigger asChild>
                        <h1 className={`${lusitana.className} text-2xl hover:underline cursor-pointer`}>Characters</h1>
                    </SheetTrigger>
                </div>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Features</SheetTitle>
                        <SheetDescription>
                            Here we can filter the characters
                        </SheetDescription>
                        <FilterCharacters />
                    </SheetHeader>
                </SheetContent>
            </Sheet>

            <div className='flex flex-col gap-5 justify-between'>
                <div className='flex flex-col gap-5 justify-between items-center'>
                    <Suspense
                        key={`Characters${characterName + side + universe + team + currentPage + sortBy + sortDirection}`}
                        fallback={<LoadingCharacters />}
                    >
                        <Characters
                            queryOptions={queryOptions}
                            currentPage={currentPage}
                            sortBy={sortBy}
                            sortDirection={sortDirection}
                        />
                    </Suspense>

                    <Suspense
                        key={`PaginationWrapper${characterName + side + universe + team}`}
                        fallback={<div className="mt-5 flex w-full justify-center"><LoadingPaginationCharacters /></div>}
                    >
                        <PaginationWrapper
                            queryOptions={queryOptions}
                            howMany={howMany}
                        />
                    </Suspense>

                    {/* <div className="mt-5 flex w-full justify-center">
                        <PaginationCharacters totalPages={totalPages} />
                    </div> */}

                    {
                        teamInfo?.img !== undefined ?
                            <div className='w-full hidden lg:flex flex-col justify-center items-center gap-5'>
                                <Image
                                    src={teamInfo.img}
                                    width={500}
                                    height={500}
                                    className='w-[30%]'
                                    alt={teamInfo.value}
                                />
                                <p className=''>{teamInfo.name}</p>
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        </div>
    );
}