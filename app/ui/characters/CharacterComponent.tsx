import { publisherIMG } from '@/app/lib/charactersUtils';
import { Character } from '@/app/lib/definitions';
import Image from 'next/image';
import Link from 'next/link';

type CharacterProps = {
    currentCharacter: Character;
}

export default function CharacterComponent({ currentCharacter }: CharacterProps) {
    return (
        <Link
            className={`cursor-pointer group/item`}
            href={`/dashboard/character?id=${currentCharacter.id}`}
        >
            <div
                className={
                    `card-new
                    object-contain 
                    w-full 
                    h-[20rem] md:h-[20rem] xl:h-[22rem] 
                    hover:transition-all
                    hover:duration-700
                    md:hover:scale-110
                    relative`
                }
            >
                <Image
                    className={` absolute object-cover w-full h-full transition-opacity duration-200 ease-in-out rounded-md md:group-hover/item:blur-sm`}
                    src={currentCharacter.images.md}
                    alt={currentCharacter.name}
                    width={300}
                    height={300}
                />
                <div
                    className={`absolute z-[12] ml-5 mt-7 w-[90%] h-[85%] flex flex-col justify-between items-start gap-[55%]`}
                >
                    <h2
                        className={` font-bold text-muted-background text-xl xl:text-2xl`}
                    >
                        {currentCharacter.name}
                    </h2>
                    <Image
                        className={`
                            ${currentCharacter.biography.publisher === "DC Comics" || currentCharacter.biography.publisher === "Warner Bros" || currentCharacter.biography.publisher === "Microsoft" ?
                                'h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] md:h-[5rem] md:w-[5rem] lg:h-[5rem] lg:w-[5rem]'
                                : 'h-[7vw] w-[15vw] sm:h-[7vw] sm:w-[15vw] md:h-[3rem] md:w-[7rem] lg:h-[3rem] lg:w-[7rem]'}
                        `}
                        src={publisherIMG(currentCharacter.biography.publisher)}
                        alt={`Logo ${currentCharacter.biography.publisher}`}
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </Link>
    );
}