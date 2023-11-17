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
import { GetColorLogosByPublisher, GetColorOfTheLogoByTeam, publisherIMG } from '@/app/lib/charactersUtils';

// export const metadata: Metadata = {
//     title: 'Characters',
// };

export function generateMetadata({
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

    return {
        title: `${searchParams?.team && searchParams?.team !== "All" ? searchParams?.team : searchParams?.universe && searchParams?.universe !== "All" ? searchParams?.universe : "Characters"}`,
    }
}

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
        gender?: string;
        race?: string;

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
    const gender = searchParams?.gender || "both"
    const race = searchParams?.race || "both"


    const currentPage = Number(searchParams?.pageCharacters) || 1;
    const sortBy = searchParams?.sortBy || '_id';
    const sortDirection = searchParams?.sortDirection || 'desc';

    const queryOptions: QueryOptions = getQueryOptions(characterName, side, universe, team, gender, race, characterOrFullName)

    const teamInfo = getTeamByUniverse(universe).filter((c) => c.name === team)[0]

    const publisherLogo = publisherIMG(universe)

    return (
        <div className="w-full">
            <Sheet>
                <div className=" w-full items-center justify-between group/breadscrum">
                    <SheetTrigger asChild>
                        <div className='flex items-center justify-start group-breadcrum mb-5'>
                            <h1 className={`${lusitana.className} text-xl md:text-2xl group-hover/breadscrum:underline cursor-pointer`}>Characters</h1>
                            { universe !== "All" && <p>&nbsp; / &nbsp;</p> }
                            { universe !== "All" && <h1 className={`${team === "All" ? "text-primary" : ""} ${lusitana.className} text-xl md:text-2xl group-hover/breadscrum:underline cursor-pointer`}>{universe}</h1>}
                            { team !== "All" && <p>&nbsp; / &nbsp;</p> }
                            { team !== "All" && <h1 className={`${lusitana.className} text-primary text-xl md:text-2xl group-hover/breadscrum:underline cursor-pointer`}>{team}</h1>}
                        </div>
                    </SheetTrigger>
                    {
                        teamInfo?.img !== undefined ?
                            <div className='w-full flex justify-center items-center gap-5'>
                                <Image
                                    src={teamInfo.img}
                                    width={500}
                                    height={500}
                                    // className={`group-hover/breadscrum:w-[30vw] w-28 transition-all duration-300 ${GetColorOfTheLogoByTeam(teamInfo.name)}`}
                                    // className={`group-hover/breadscrum:h-32 h-28 w-auto transition-all duration-300 ${GetColorOfTheLogoByTeam(teamInfo.name)}`}
                                    className={`h-28 w-auto transition-all duration-300 ${GetColorOfTheLogoByTeam(teamInfo.name)}`}
                                    alt={teamInfo.value}
                                />
                            </div>
                            :
                            publisherLogo !== "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykZHBER1nS5QMUGvv0qJCJFuqtf5wPrliiiE_1hMMbCwvONjVOaYloiVHMeCyH710z7g&usqp=CAU" ?
                                <div className='w-full flex justify-center items-center gap-5'>
                                    <Image
                                        src={publisherLogo}
                                        width={500}
                                        height={500}
                                        // className={`group-hover/breadscrum:w-[30vw] w-28 transition-all duration-300 ${GetColorOfTheLogoByTeam(teamInfo.name)}`}
                                        className={`group-hover/breadscrum:h-32 h-28 w-auto transition-all duration-300 ${GetColorLogosByPublisher(universe)}`}
                                        alt='publisherLogo'
                                    />
                                </div>
                                :
                                null
                    }
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