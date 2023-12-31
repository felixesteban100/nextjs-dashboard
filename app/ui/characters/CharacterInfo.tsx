import Image from "next/image";
import { Character } from "@/app/lib/definitions";
import { fetchCharacterById } from "@/app/lib/data";
import CharacterFeatures from "./tabs/CharacterFeatures";
import { notFound } from 'next/navigation';
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default async function CharacterInfo({ characterId, image }: { characterId: string, image?: string }) {
    const selectedCharacter: Character | null = await fetchCharacterById(characterId)

    if (!selectedCharacter) notFound()

    // const allImages: string[] = [
    //     selectedCharacter.images.md,
    //     ...Object.entries(selectedCharacter.images).filter(([key, value]) => key !== "md" && value !== "-" && value !== "" && !value.includes('/api/images/xs/')).map(c => c[1])
    // ]

    return (
        <>
            <div className='flex flex-col gap-5'>
                <div className="w-full">
                    <div className="flex flex-col xl:flex-row justify-center">
                        <div className='flex flex-col items-center align-middle gap-3 w-[90%] md:w-[50%] lg:w-[30%] xl:h-[60%] mx-auto'>
                            <div
                                className="relative w-64 md:w-72 lg:w-96 h-[25rem] md:h-[25rem] lg:h-[34rem]  shadow-xl rounded-md"
                            >
                                <label className='group cursor-pointer w-full h-full' htmlFor={`my-modal-imageZoom`}>
                                    <Image width={500} height={500} className={`transition-all duration-300 absolute w-full h-full object-cover blur-lg group-focus-visible:animate-pulse group-hover:animate-pulse `} src={image ? selectedCharacter.images[`${image}`] : selectedCharacter.images.md} alt={selectedCharacter.name} loading="lazy" />
                                    <Image width={500} height={500} className={`transition-all duration-300 absolute w-[90%] h-[90%] object-cover rounded-md ml-3 md:ml-5 mt-5`} src={image ? selectedCharacter.images[`${image}`] : selectedCharacter.images.md} alt={selectedCharacter.name} loading="lazy" />
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
                {/* <ScrollArea className="w-56 md:w-96 whitespace-nowrap rounded-md  mx-auto mb-5">
                    <div className="flex w-max space-x-4 p-4 md:h-[450px]">
                        {allImages.map((img, index) => (
                            <figure key={index} className="shrink-0 w-[150px] md:w-max">
                                <div className="overflow-hidden rounded-md h-[90%] w-full">
                                    <Image
                                        src={img}
                                        alt={`Photo by ${selectedCharacter.name}-${index}`}
                                        className="aspect-[3/4] h-full w-fit object-cover"
                                        width={300}
                                        height={400}
                                    />
                                </div>
                                <figcaption className="pt-2 text-xs text-muted-foreground">
                                    Photo by{" "}
                                    <span className="font-semibold text-foreground">
                                        {selectedCharacter.name}
                                    </span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea> */}
            </div>
        </>
    )
}