import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { Metadata } from 'next';
import Characters from '@/app/ui/characters/Characters';
import SearchCharacters from '@/app/ui/characters/searchCharacters';
import LoadingCharacters from '@/app/ui/characters/LoadingCharacters';

export const metadata: Metadata = {
    title: 'Characters',
};

export default async function Page({
  searchParams,
} : {
  searchParams?: {
    query?: string;
    page?: string;
    pageCharacters?: string;
    characterName?: string;
  }
}) {
    const characterName = searchParams?.characterName || '';
    const currentPage = Number(searchParams?.pageCharacters) || 1;
 
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Characters</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <SearchCharacters placeholder="Search invoices..." />
                {/* <CreateInvoice /> */}
            </div>
            <Suspense key={characterName + currentPage} fallback={<LoadingCharacters />}>
                <Characters characterName={characterName} currentPage={currentPage} />
            </Suspense>
        </div>
    );
}