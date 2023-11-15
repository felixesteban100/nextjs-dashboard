import { publisherIMG } from '@/app/lib/charactersUtils';
import { Character } from '@/app/lib/definitions';
import { GetColorLogosByPublisher, GetDimentionsOfTheLogoForCard } from '@/app/lib/charactersUtils';
import Image from 'next/image';
import Link from 'next/link';

type CharacterProps = {
    currentCharacter: Character;
}

export default function CharacterComponent({ currentCharacter }: CharacterProps) {
    return (
        <Link
            className={`cursor-pointer group/item`}
            href={`/dashboard/characters/${currentCharacter.id}`}
        >
            <div
                className={
                    `card-new
                    object-contain 
                    w-full 
                    h-[20rem] md:h-[20rem] xl:h-[22rem] 
                    transition-all
                    duration-700
                    md:hover:scale-110
                    relative`
                }
            >
                <Image
                    className={`absolute object-cover w-full h-full transition-opacity duration-200 ease-in-out rounded-md md:group-hover/item:blur-sm`}
                    src={currentCharacter.images.md}
                    alt={currentCharacter.name}
                    width={300}
                    height={300}
                />
                <div
                    className={`absolute z-[12] ml-5 mt-7 w-[90%] h-[85%] flex flex-col justify-between items-start gap-[55%]`}
                >
                    <h2
                        className={`character_name font-bold text-muted-background text-xl xl:text-2xl`}
                    >
                        {currentCharacter.name}
                    </h2>
                    <Image
                        className={`
                            ${GetColorLogosByPublisher(currentCharacter.biography.publisher)}
                            ${GetDimentionsOfTheLogoForCard(currentCharacter.biography.publisher)}
                        `}
                        src={publisherIMG(currentCharacter.biography.publisher)}
                        alt={`Logo ${currentCharacter.biography.publisher}`}
                        width={100}
                        height={150}
                    />
                </div>
            </div>
        </Link>
    );
}