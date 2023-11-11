import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { Metadata } from 'next';
import Characters from '@/app/ui/characters/Characters';
import LoadingCharacters from '@/app/ui/characters/loaders/LoadingCharacters';
import FilterCharacters, { sortByType, sortDirectionType } from '@/app/ui/characters/FilterCharacters';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

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
        side?: string;
        universe?: string;
        team?: string;

        sortBy?: sortByType;
        sortDirection?: sortDirectionType;
    }
}) {
    const characterName = searchParams?.characterName || '';
    const side = searchParams?.side || "All"
    const universe = searchParams?.universe || "All"
    const team = searchParams?.team || "All"

    const currentPage = Number(searchParams?.pageCharacters) || 1;
    const sortBy = searchParams?.sortBy || 'id';
    const sortDirection = searchParams?.sortDirection || 'asc';

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
                <Suspense
                    key={characterName + side + universe + team + currentPage + sortBy + sortDirection}
                    // key={currentPage}
                    fallback={<LoadingCharacters />}
                >
                    <Characters
                        characterName={characterName}
                        side={side}
                        universe={universe}
                        team={team}
                        currentPage={currentPage}
                        sortBy={sortBy}
                        sortDirection={sortDirection}
                    />
                </Suspense>
            </div>
        </div>
    );
}