import { Character } from "@/app/lib/definitions"
import StatContainer from "../stats/StatContainer"
import FeatureTabContainer from "./FeatureTabContainer"
import StatString from "../stats/StatString"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

type FeatureTabAppereanceProps = {
    selectedCharacter: Character
}

function FeatureTabAppereance({ selectedCharacter }: FeatureTabAppereanceProps) {

    const allImages: string[] = [
        selectedCharacter.images.md,
        ...Object.entries(selectedCharacter.images).filter(([key, value]) => key !== "md" && value !== "-" && value !== "" && !value.includes('/api/images/xs/')).map(c => c[1])
    ]

    return (
        <FeatureTabContainer
            valueTab="Appereance"
            // extraClassNames="md:max-h-[70vh] border-2"
            extraClassNames="md:max-h-[70vh] border-2"
        >
            <>
            <StatContainer>
                <StatString
                    statName="EyeColor"
                    statValue={selectedCharacter.appearance.eyeColor}
                    icon="👁"
                />
                <Separator />

                <StatString
                    statName="Gender"
                    statValue={selectedCharacter.appearance.gender}
                    icon={
                        selectedCharacter.appearance.gender?.toLowerCase() === "male" ?
                            "🚹"
                            :
                            selectedCharacter.appearance.gender?.toLowerCase() === "female" ?
                                "🚺"
                                :
                                ""
                    }
                />
                <Separator />

                <StatString
                    statName="Hair color"
                    statValue={selectedCharacter.appearance.hairColor}
                    icon={
                        selectedCharacter.appearance.gender?.toLowerCase() === "male" ?
                            "👱‍♂️"
                            :
                            selectedCharacter.appearance.gender?.toLowerCase() === "female" ?
                                "👱‍♀️"
                                :
                                "🙂"
                    }
                />
                <Separator />

                <StatString
                    statName="Height"
                    statValue={`${selectedCharacter.appearance.height[0]} | ${selectedCharacter.appearance.height[1]}`}
                    icon="📏"
                />
                <Separator />

                <StatString
                    statName="Race"
                    statValue={selectedCharacter.appearance.race ?? "Unknown"}
                    icon={
                        selectedCharacter.appearance.race?.toLowerCase().includes("meta") ?
                            "🧬"
                            :
                            selectedCharacter.appearance.race?.toLowerCase() === "human" ?
                                "🌎"
                                :
                                selectedCharacter.appearance.race?.toLowerCase() === "mutant" ?
                                    "🧬"
                                    :
                                    selectedCharacter.appearance.race?.toLowerCase() === "android" || selectedCharacter.appearance.race?.toLowerCase() === "cyborg" && (selectedCharacter.appearance.race !== null) ?
                                        "🤖"
                                        :
                                        selectedCharacter.appearance.race?.toLowerCase() === "alien" || selectedCharacter.appearance.race?.toLowerCase() === "eternal" || selectedCharacter.appearance.race?.toLowerCase() === "asgardian" || selectedCharacter.appearance.race?.toLowerCase() === "kryptonian" && (selectedCharacter.appearance.race !== null) ?
                                            "👽"
                                            :
                                            "🌎"
                    }
                />
                <Separator />

                <StatString
                    statName="Weigth"
                    statValue={`${selectedCharacter.appearance.weight[0]} | ${selectedCharacter.appearance.weight[1]}`}
                    icon="⚖"
                />
                <Separator />

            </StatContainer>
            
            {/* <StatContainer>
                <div className='md:w-[50%] flex justify-center mx-auto'>
                    <div className="h-full w-full flex flex-col justify-center items-center gap-5">
                        {allImages.map((img, index) => {
                            return (
                                <Image
                                    key={`img-${index}`}
                                    className="h-auto w-full"
                                    src={img}
                                    loading="lazy"
                                    width={300}
                                    height={300}
                                    alt={`img-${index}`}
                                />
                            )
                        })}
                    </div>
                </div>
            </StatContainer> */}
            </>
        </FeatureTabContainer>
    )
}

export default FeatureTabAppereance