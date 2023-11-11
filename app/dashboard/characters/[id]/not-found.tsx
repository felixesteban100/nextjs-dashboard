"use client";

import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname()
  const characterId = pathname.match(/\/(\d+)$/)?.[1] || '0'

  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested character id: {characterId}.</p>
      {/* <div className='flex gap-5'>
        <Link
          href={`/dashboard/characters/${parseInt(characterId) - 1}`}
          className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary/80"
        >
          Prev Index: {parseInt(characterId) - 1}
        </Link>
        <Link
          href={`/dashboard/characters/${parseInt(characterId) + 1}`}
          className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary/80"
        >
          Next Index: {parseInt(characterId) + 1}
        </Link>
      </div> */}
      <Link
        href="/dashboard/characters"
        className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary/80"
      >
        Go Back
      </Link>
    </main>
  );
}