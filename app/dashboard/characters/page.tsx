// import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
// import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { fetchLast5Characters } from '@/app/lib/data';
import { Character } from '@/app/lib/definitions';
import CharactersContainer from '@/app/ui/characters/CharactersContainer';
import CharacterComponent from '@/app/ui/characters/CharacterComponent';

export const metadata: Metadata = {
    title: 'Characters',
};

export default async function Page(/* {
  searchParams,
} : {
  searchParams?: {
    query?: string;
    page?: string;
  }
} */) {
    const characters: Character[] = await fetchLast5Characters()

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Characters</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search invoices..." />
                <CreateInvoice />
            </div>
            <Suspense fallback={<>Loading...</>}>
                <CharactersContainer>
                    <>
                        {
                            characters.map((currentCharacter, index) => {
                                return (
                                    <CharacterComponent
                                        key={currentCharacter._id}
                                        indexForTest={index}
                                        currentCharacter={currentCharacter}
                                    />
                                )
                            })
                        }
                    </>
                </CharactersContainer>
            </Suspense>
            {/* <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div> */}
        </div>
    );
}