import CharactersContainer from '@/app/ui/characters/CharactersContainer';
import CharacterComponent from '@/app/ui/characters/CharacterComponent';
import { fetchCharacters, fetchPages } from '@/app/lib/data';
import { Character, QueryOptions } from '@/app/lib/definitions';
import { sortByType, sortDirectionType } from './FilterCharacters';
import PaginationCharacters from './PaginationCharacters';
import { getTeamByUniverse } from '@/app/lib/constants';
import Image from 'next/image';

type CharactersProps = {
    queryOptions: QueryOptions
    currentPage: number,
    sortBy: sortByType
    sortDirection: sortDirectionType,
    universe: string;
    team: string
}

export default async function Characters({ queryOptions, currentPage, sortBy, sortDirection, universe, team }: CharactersProps) {
    const charactersToDisplay: Character[] = await fetchCharacters(queryOptions, currentPage, sortBy, sortDirection)
    const totalPages = await fetchPages(queryOptions)
    const teamInfo = getTeamByUniverse(universe).filter((c) => c.name === team)[0]

    return (
        <div className='flex flex-col gap-5 justify-between'>
            <div className='flex flex-col gap-5 justify-between items-center'>
                <CharactersContainer>
                    <>
                        {
                            charactersToDisplay/* .sort(() => 0.5 - Math.random()) */.map((currentCharacter, index) => {
                                return (
                                    <CharacterComponent
                                        key={currentCharacter.slug}
                                        currentCharacter={{ ...currentCharacter, _id: currentCharacter._id.toString() }}
                                    />
                                )
                            })
                        }
                    </>
                </CharactersContainer>


                <div className="mt-5 flex w-full justify-center">
                    <PaginationCharacters totalPages={totalPages} />
                </div>

                {
                    teamInfo?.img !== undefined ?
                        <div className='w-full hidden lg:flex flex-col justify-center items-center gap-5'>
                            <Image
                                src={teamInfo.img}
                                width={500}
                                height={500}
                                className='w-[30%]'
                                alt={teamInfo.value}
                            />
                            <p className=''>{teamInfo.name}</p>
                        </div>
                        :
                        null
                }
            </div>
        </div>

    )
}