import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import CharacterFeatures from "../tabs/CharacterFeatures";
import Image from "next/image";
import { Character } from "@/app/lib/definitions";
import { fetchAllCharacters } from "@/app/lib/data";

export default async function DialogContentCharacter({ characterSelectedId }: { characterSelectedId: string }) {
    const selectedCharacter: Character = await fetchAllCharacters(characterSelectedId)

    // const selectedCharacter: Character = {
    //     powerstats: {
    //         intelligence: 100,
    //         strength: 26,
    //         speed: 27,
    //         durability: 50,
    //         power: 47,
    //         combat: 100,
    //     },
    //     appearance: {
    //         gender: "Male",
    //         race: "Human",
    //         height: ["6'2", "188 cm"],
    //         weight: ["210 lb", "95 kg"],
    //         eyeColor: "blue",
    //         hairColor: "black",
    //     },
    //     biography: {
    //         fullName: "Bruce Wayne",
    //         alterEgos: "No alter egos found.",
    //         aliases: ["Insider", "Matches Malone"],
    //         placeOfBirth: "Crest Hill, Bristol Township; Gotham County",
    //         firstAppearance: "Detective Comics #27",
    //         publisher: "DC Comics",
    //         alignment: "good",
    //     },
    //     work: {
    //         occupation: "Businessman",
    //         base: "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower",
    //     },
    //     connections: {
    //         groupAffiliation:
    //             "Batman Family, Batman Incorporated, Justice League, Justice League Dark, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern_Corps, Sinestro Corps, Justice League (Original)",
    //         relatives:
    //             "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward) Martha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family",
    //     },
    //     images: {
    //         xs: "https://i.imgur.com/VGkwQT2.png",
    //         sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg",
    //         md: "https://w0.peakpx.com/wallpaper/978/478/HD-wallpaper-batman-comics-dc-superheros.jpg",
    //         lg: "https://images.hdqwalls.com/download/batman-gotham-city-dc-comics-4k-25-1280x2120.jpg",
    //         power:
    //             "https://i.pinimg.com/564x/ab/bc/b9/abbcb918a5f1746ff0887200e8a82506.jpg",
    //     },
    //     _id: "63744cef81b33ddcb37e9172",
    //     id: 70,
    //     name: "Batman",
    //     slug: "70-batman",
    //     comics: [
    //         "https://m.media-amazon.com/images/I/81kMrMHlqKL._AC_UF1000,1000_QL80_.jpg",
    //         "https://images.squarespace-cdn.com/content/v1/593f201de3df288fc6465e6f/1622556757706-1OW4G4X7CTQ3JAA94YKO/Best+Comics+of+2021+Batman.jpg?format=1000w",
    //         "https://i.ebayimg.com/images/g/crYAAOSwFSFiCBuZ/s-l1600.jpg",
    //         "https://people.com/thmb/kyO7E3_ZKhGjtykUW4PFaPJnhe4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(496x524:498x526)/Batman-Urban-Legends-e4761e7b416047799823026def684511.jpg",
    //         "https://m.media-amazon.com/images/I/51GeupQdetL.jpg",
    //         "https://i0.wp.com/thegeekiary.com/wp-content/uploads/2022/02/batman-issue-125-image.jpg?resize=590%2C895&ssl=1",
    //         "https://i0.wp.com/batman-news.com/wp-content/uploads/2023/01/Batman-Urban-Legends-23-1.jpg?resize=1068%2C1643&quality=80&strip=info&ssl=1",
    //     ],
    // }

    return (
        <>
            <DialogHeader>
                <DialogTitle className="flex items-center gap-5">
                    {selectedCharacter.name}
                </DialogTitle>
                <DialogDescription className="flex items-center gap-5">{selectedCharacter.slug}</DialogDescription>
            </DialogHeader>

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