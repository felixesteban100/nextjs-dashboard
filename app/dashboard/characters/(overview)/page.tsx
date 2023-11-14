import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { Metadata } from 'next';
import Characters from '@/app/ui/characters/Characters';
import FilterCharacters, { sortByType, sortDirectionType } from '@/app/ui/characters/FilterCharacters';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { QueryOptions } from '@/app/lib/definitions';
import { getQueryOptions } from '@/app/lib/data';
import LoadingCharactersContent from '@/app/ui/characters/loaders/LoadingCharactersContent';

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
    const howMany = searchParams?.howMany || '714'
    const side = searchParams?.side || "All"
    const universe = searchParams?.universe || "All"
    const team = searchParams?.team || "All"

    const currentPage = Number(searchParams?.pageCharacters) || 1;
    const sortBy = searchParams?.sortBy || '_id';
    const sortDirection = searchParams?.sortDirection || 'desc';

    const queryOptions: QueryOptions = getQueryOptions(characterName, side, universe, team, 'both', 'All', characterOrFullName)
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