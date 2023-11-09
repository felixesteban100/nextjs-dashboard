import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { Metadata } from 'next';
import Characters from '@/app/ui/characters/Characters';
// import SearchCharacters from '@/app/ui/characters/searchCharacters';
import LoadingCharacters from '@/app/ui/characters/loaders/LoadingCharacters';
import FilterCharacters, { sortByType, sortDirectionType } from '@/app/ui/characters/FilterCharacters';
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import DialogCharacters from '@/app/ui/characters/dialog/DialogCharacters';

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
        sortBy?: sortByType;
        sortDirection?: sortDirectionType;
        characterSelectedId?: string;
        isDialogOpen?: string;
    }
}) {
    const characterName = searchParams?.characterName || '';
    const currentPage = Number(searchParams?.pageCharacters) || 1;
    const sortBy = searchParams?.sortBy || 'id';
    const sortDirection = searchParams?.sortDirection || 'asc';

    const characterSelectedId = searchParams?.characterSelectedId || '70'
    const isDialogOpen = searchParams?.isDialogOpen === "true"

    return (
        <div className="w-full">
            {/* <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <SearchCharacters placeholder="Search invoices..." />
            </div> */}

            <Sheet>
                <div className="flex w-full items-center justify-between">
                    <SheetTrigger asChild>
                        <h1 className={`${lusitana.className} text-2xl hover:underline cursor-pointer`}>Characters</h1>
                        {/* <Button>Filter</Button> */}
                    </SheetTrigger>
                </div>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Features</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                        <FilterCharacters />
                        <SheetFooter>Filter Characters</SheetFooter>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

            <div className='flex flex-col gap-5 justify-between'>
                <DialogCharacters
                    isDialogOpen={isDialogOpen}
                    characterSelectedId={characterSelectedId}
                >
                    <Suspense key={characterName + currentPage + sortBy + sortDirection + characterSelectedId} fallback={<LoadingCharacters />}>
                        <Characters
                            characterName={characterName}
                            currentPage={currentPage}
                            sortBy={sortBy}
                            sortDirection={sortDirection}
                            isDialogOpen={isDialogOpen}
                            characterSelectedId={characterSelectedId}
                        />
                    </Suspense>
                </DialogCharacters>
            </div>

        </div>
    );
}