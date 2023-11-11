import Image from "next/image";
import { Character } from "@/app/lib/definitions";
import { fetchAllCharacters } from "@/app/lib/data";
import CharacterFeatures from "./tabs/CharacterFeatures";

export default async function CharacterInfo({ characterId }: { characterId: string }) {
    const selectedCharacter: Character = await fetchAllCharacters(characterId)

    return (
        <>
            <div className='flex flex-col gap-5'>
                <div className="w-full">
                    <div className="flex flex-col xl:flex-row justify-center">
                        <div className='flex flex-col items-center align-middle gap-3 w-[90%] md:w-[50%] lg:w-[30%] xl:h-[60%] mx-auto'>
                            <div
                                className="relative w-64 md:w-72 lg:w-96 h-[25rem] md:h-[25rem] lg:h-[34rem] bg-muted-foreground shadow-xl rounded-md"
                            >
                                <label className='group cursor-pointer w-full h-full' htmlFor={`my-modal-imageZoom`}>
                                    <Image width={500} height={500} className={`transition-all duration-300 absolute w-full h-full object-cover blur-sm group-focus-visible:animate-pulse group-hover:animate-pulse `} src={selectedCharacter.images.md} alt={selectedCharacter.name} loading="lazy" />
                                    <Image width={500} height={500} className={`transition-all duration-300 absolute w-[90%] h-[90%] object-cover rounded-md ml-3 md:ml-5 mt-5`} src={selectedCharacter.images.md} alt={selectedCharacter.name} loading="lazy" />
                                </label>
                            </div>

                            <div className='self-center mt-5'>
                                <h1
                                    className={`text-2xl lg:text-5xl font-bold text-center`}
                                >
                                    {selectedCharacter.name}
                                </h1>
                                <p
                                    className={`py-2 text-center`}
                                >
                                    {selectedCharacter.biography.fullName}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col xl:h-[60vh] w-[90%] xl:w-[50%] mx-auto mt-5 xl:mt-0">
                            <CharacterFeatures selectedCharacter={selectedCharacter} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}