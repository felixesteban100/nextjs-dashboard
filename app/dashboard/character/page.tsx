import { Suspense } from 'react';
import { Metadata } from 'next';
import CharacterInfo from '@/app/ui/characters/CharacterInfo';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Character',
};

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        id?: string
    }
}) {
    const characterId = searchParams?.id || '70'

    return (
        <div className='flex flex-col gap-5 justify-between md:mt-10'>
            <div className='w-full flex justify-between gap-5'>
                {/* <Link
                    href={`/dashboard/character?id=${parseInt(characterId) + 1}`}
                >
                    <Button variant={'outline'}><ArrowBigLeft /></Button>
                </Link> */}
                {/* <Link
                    href={`/dashboard/character?id=${Math.floor(Math.random() * (714 - 1 + 1)) + 1}`}
                >
                    <Button variant={'outline'}>Random</Button>
                </Link> */}
                {/* <Link
                    href={`/dashboard/character?id=${parseInt(characterId) + 1}`}
                >
                    <Button variant={'outline'}><ArrowBigRight /></Button>
                </Link> */}
            </div>

            <div className="w-[90vw] md:w-[80vw] max-w-[1500px] max-h-[90vh]">
                <Suspense fallback={<>Loading...</>}>
                    <CharacterInfo characterId={characterId} />
                </Suspense>
            </div>
        </div>

    );
}