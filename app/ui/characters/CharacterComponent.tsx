import { Character } from '@/app/lib/definitions';
import Image from 'next/image';

type CharacterProps = {
    currentCharacter: Character;
    indexForTest: number;
}

export function publisherIMG(publisher: string) {
    switch (publisher) {
        case "Marvel Comics":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png";

        case "DC Comics":
            // return "https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png";

        case "Shueisha":
            return "https://www.shueisha.co.jp/wp-content/themes/shueisha/image/en/mv/mv_subtitle_01.png";

        case "George Lucas":
            return "https://media.comicbook.com/wp-content/uploads/2012/06/120411064621_lucasfilm-logo-640x360-16x9.jpg";

        case "Warner Bros":
            // return "https://variety.com/wp-content/uploads/2022/04/IMG_3724.jpg"
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/1965px-Warner_Bros_logo.svg.png";

        case "Dark Horse Comics":
            return "https://d2lzb5v10mb0lj.cloudfront.net/dhc/common/dh_direct.png";

        case "Image Comics":
            return "https://seeklogo.com/images/I/image-comics-logo-16D25B0126-seeklogo.com.png";

        case "IDW Publishing":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nickelodeon_Rise_of_the_Teenage_Mutant_Ninja_Turtles.svg/800px-Nickelodeon_Rise_of_the_Teenage_Mutant_Ninja_Turtles.svg.png";

        case "Microsoft":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png";
        /**
         * "Angel"
         * "NBC - Heroes"
         * Tempest
         * SyFy
         * ABC Studios
         * Icon Comics
         * Universal Studios
         * Gemini V
         * null
         * Star Trek
         * Goliath
         * Deadpool
         * Wildstorm
         * South Park
         * Sony Pictures
         * Vindicator II
         * Titan Books
         * J. K. Rowling
         * Microsoft
         * She-Thing
         * Rebellion
         *
         */

        default:
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykZHBER1nS5QMUGvv0qJCJFuqtf5wPrliiiE_1hMMbCwvONjVOaYloiVHMeCyH710z7g&usqp=CAU";
    }
}

function CharacterComponent({ currentCharacter, indexForTest }: CharacterProps) {

    

    return (
        <div
            data-test={`character-${indexForTest}`}
            className={`cursor-pointer group/item`}
        >
            <div
                // ref={ref}
                // ${useWindowWidth() < 700 ? "card-new" : ""}
                // card-new
                //md:image-full
                //${inView ? "animate-fadeIn " : `animate-fadeOut`}
                /* ${inView ? `hover:transition-all
                    hover:duration-700
                    md:hover:shadow-current 
                    md:hover:shadow-lg 
                    md:hover:scale-110` : ""} */
                className={
                    ` 
                    card-new
                    object-contain 
                    w-full 
                    h-[20rem] md:h-[20rem] xl:h-[22rem] 
                    hover:transition-all
                    hover:duration-700
                    md:hover:shadow-current 
                    md:hover:shadow-lg 
                    md:hover:scale-110
                    relative`
                }
            >
                <Image
                    //object-top
                    className={` absolute object-cover w-full h-full transition-opacity duration-200 ease-in-out rounded-md md:group-hover/item:blur-sm`}
                    src={currentCharacter.images.md}
                    alt={currentCharacter.name}
                    // loading='lazy'
                    width={300}
                    height={300}
                />
                <div
                    // className={`absolute z-[100] h-[80%] px-5 -translate-y-[18rem] lg:-translate-y-[20rem] group/edit md:invisible group-hover/item:visible transition delay-150 duration-300 ease-in-out flex flex-col justify-between gap-5`}
                    // className={`absolute z-[100] h-[80%] px-5 -translate-y-[18rem] xl:-translate-y-[20rem] group/edit group-hover/item:visible transition delay-150 duration-300 ease-in-out flex flex-col justify-between gap-5`}
                    className={`absolute z-[100] ml-5 mt-7 w-[90%] h-[85%]  flex flex-col justify-between items-start gap-[55%]`}
                >
                    {/* character_name */}
                    <h2
                        //${inView ? "animate-scaleForwardEntranceCardInfo" : "animate-scaleForwardExitCardInfo"}
                        className={` font-bold text-muted-background text-xl xl:text-2xl`}
                    >
                        {currentCharacter.name}
                    </h2>
                    <Image
                        //${inView ? "animate-scaleForwardEntranceCardInfo" : "animate-scaleForwardExitCardInfo"}
                        className={`
                            ${currentCharacter.biography.publisher === "DC Comics" || currentCharacter.biography.publisher === "Warner Bros" || currentCharacter.biography.publisher === "Microsoft" ?
                                'h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] md:h-[5rem] md:w-[5rem] lg:h-[5rem] lg:w-[5rem]'
                                : 'h-[7vw] w-[15vw] sm:h-[7vw] sm:w-[15vw] md:h-[3rem] md:w-[7rem] lg:h-[3rem] lg:w-[7rem]'}
                        `}
                        src={publisherIMG(currentCharacter.biography.publisher)}
                        alt={`Logo ${currentCharacter.biography.publisher}`}
                        // loading="lazy"
                        width={300}
                        height={300}
                    />
                    {/*  {currentCharacter.biography.publisher === "DC Comics" || currentCharacter.biography.publisher === "Warner Bros" || currentCharacter.biography.publisher === "Microsoft"
                        ? <img className='h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] md:h-[5rem] md:w-[5rem] lg:h-[5rem] lg:w-[5rem]' src={publisherIMG(currentCharacter.biography.publisher)} alt={`Logo ${currentCharacter.biography.publisher}`} loading="lazy" />
                        : <img className='h-[7vw] w-[15vw] sm:h-[7vw] sm:w-[15vw] md:h-[3rem] md:w-[7rem] lg:h-[3rem] lg:w-[7rem]' src={publisherIMG(currentCharacter.biography.publisher)} alt={`Logo ${currentCharacter.biography.publisher}`} loading="lazy" />
                    } */}
                </div>
            </div>
        </div>
    );
}

export default CharacterComponent