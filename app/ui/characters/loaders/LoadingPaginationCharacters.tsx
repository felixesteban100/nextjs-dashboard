import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
// import { generatePagination } from '@/app/lib/utils';
import clsx from 'clsx';

export default function LoadingPaginationCharacters() {    
    // const allPages2 = generatePagination(1, 179)
    // console.log(allPages2)

    const allPages = [ 1, 2, 3, '...', 178, 179 ]

    return (
        <div className="inline-flex">
            <div className={'flex h-10 w-10 items-center justify-center rounded-md border pointer-events-none text-foreground/30 mr-2 md:mr-4'}><ArrowLeftIcon className="w-4" /></div>

            <div className="flex -space-x-px">
                {allPages.map((page, index) => {
                    let position: 'first' | 'last' | 'single' | 'middle' | undefined;

                    if (index === 0) position = 'first';
                    if (index === allPages.length - 1) position = 'last';
                    if (allPages.length === 1) position = 'single';
                    if (page === '...') position = 'middle';

                    const className = clsx(
                        'flex h-10 w-10 items-center justify-center text-sm border',
                        {
                          'rounded-l-md': position === 'first' || position === 'single',
                          'rounded-r-md': position === 'last' || position === 'single',
                          'text-gray-300': position === 'middle',
                        },
                      );

                    return (
                        <div key={page} className={className}></div>
                    );
                })}
            </div>

            <div className={'flex h-10 w-10 items-center justify-center rounded-md border pointer-events-none text-foreground/30 ml-2 md:ml-4'}><ArrowRightIcon className="w-4" /></div>

        </div>
    )
}