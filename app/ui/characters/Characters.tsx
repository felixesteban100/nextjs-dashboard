import CharactersContainer from '@/app/ui/characters/CharactersContainer';
import CharacterComponent, { publisherIMG } from '@/app/ui/characters/CharacterComponent';
import { fetchCharacters } from '@/app/lib/data';
import PaginationCharacters from './paginationCharacters';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Character } from '@/app/lib/definitions';

export default async function Characters({ characterName, currentPage }: { characterName: string, currentPage: number }) {
    const { allCharacters, totalPages }: { allCharacters: Character[], totalPages: number } = await fetchCharacters(characterName, 714, "All", "All", "All", "Both", "All", true, false, currentPage)

    return (
        <>
            <CharactersContainer>
                <>
                    {
                        allCharacters.sort(() => 0.5 - Math.random()).map((currentCharacter, index) => {
                            return (
                                // <CharacterComponent
                                //     key={currentCharacter._id}
                                //     indexForTest={index}
                                //     currentCharacter={currentCharacter}
                                // />
                                <div
                                    key={currentCharacter._id}
                                    className="block h-full rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-secondary group/character transition-all duration-500">
                                    <a href="#!">
                                        <Image
                                            width={500}
                                            height={800}
                                            // className="rounded-t-lg h-72 object-cover group-hover/character:absolute group-hover/character:h-[5rem] group-hover/character:z-[999] transition-all duration-500"
                                            className="rounded-t-lg h-72 object-cover"
                                            src={currentCharacter.images.md}
                                            alt="character"
                                        />
                                    </a>
                                    <div className="p-6 flex flex-col gap-5 items-start justify-between group-hover/character:h-hidden">
                                        <div>
                                            <h5
                                                className="mb-2 md:text-xl font-medium leading-tight ">
                                                {currentCharacter.name}
                                            </h5>
                                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                                {currentCharacter.biography.fullName}
                                            </p>
                                        </div>
                                        
                                        <Button
                                            variant={'default'}
                                        >
                                            More Info
                                        </Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>
            </CharactersContainer>
            <div className="mt-5 flex w-full justify-center">
                <PaginationCharacters totalPages={totalPages} />
            </div>
        </>
    )
}

{/* <Image
                                            width={300}
                                            height={300}
                                            className={`${currentCharacter.biography.publisher === "DC Comics" || currentCharacter.biography.publisher === "Warner Bros" || currentCharacter.biography.publisher === "Microsoft" ? 'h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] md:h-[5rem] md:w-[5rem] lg:h-[5rem] lg:w-[5rem]' : 'h-[7vw] w-[15vw] sm:h-[7vw] sm:w-[15vw] md:h-[3rem] md:w-[7rem] lg:h-[3rem] lg:w-[7rem]'}`}
                                            src={publisherIMG(currentCharacter.biography.publisher)}
                                            alt="publisher"
                                        /> */}