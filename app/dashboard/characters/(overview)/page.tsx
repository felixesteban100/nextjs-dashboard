import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { Metadata } from 'next';
import Characters from '@/app/ui/characters/Characters';
import FilterCharacters, { sortByType, sortDirectionType } from '@/app/ui/characters/FilterCharacters';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { QueryOptions } from '@/app/lib/definitions';
import { getQueryOptions } from '@/app/lib/data';
import LoadingCharactersContent from '@/app/ui/characters/loaders/LoadingCharactersContent';
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

        characterOrFullName?: string,
        characterName?: string;
        howMany?: string;
        side?: string;
        universe?: string;
        team?: string;

        sortBy?: sortByType;
        sortDirection?: sortDirectionType;
    }
}) {
    const characterOrFullName = searchParams?.characterOrFullName === "true"
    const characterName = searchParams?.characterName || '';
    // const howMany = searchParams?.howMany || '714'
    const side = searchParams?.side || "All"
    const universe = searchParams?.universe || "All"
    const team = searchParams?.team || "All"

    const currentPage = Number(searchParams?.pageCharacters) || 1;
    const sortBy = searchParams?.sortBy || '_id';
    const sortDirection = searchParams?.sortDirection || 'desc';

    const queryOptions: QueryOptions = getQueryOptions(characterName, side, universe, team, 'both', 'All', characterOrFullName)

    const teamInfo = getTeamByUniverse(universe).filter((c) => c.name === team)[0]

    return (
        <div className="w-full">
            <Sheet>
                <div className="flex w-full items-center justify-between">
                    <SheetTrigger asChild>
                        <div className='flex items-center justify-start gap-5'>
                            <h1 className={`${lusitana.className} text-2xl hover:underline cursor-pointer`}>Characters</h1>
                            {/* {
                                teamInfo?.img !== undefined ?
                                    <div className='mx-auto w-full flex justify-center items-center gap-5'>
                                        <Image
                                            src={teamInfo.img}
                                            width={100}
                                            height={100}
                                            className={`hover:absolute hover:w-[30vw] transition-all duration-300 ${teamInfo.name.toLowerCase().includes('x-men') || teamInfo.name.toLowerCase().includes('supernatural') ? "dark:invert" : ""}`}
                                            alt={teamInfo.value}
                                        />
                                    </div>
                                    :
                                    null
                            } */}
                        </div>
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


            <Suspense
                key={`Characters${characterName + side + universe + team + currentPage + sortBy + sortDirection}`}
                fallback={<LoadingCharactersContent />}
            >
                <Characters
                    queryOptions={queryOptions}
                    currentPage={currentPage}
                    sortBy={sortBy}
                    sortDirection={sortDirection}
                    universe={universe}
                    team={team}
                />
            </Suspense>
        </div>
    );
}