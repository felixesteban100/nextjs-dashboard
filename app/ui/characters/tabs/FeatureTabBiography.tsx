import { Character } from "@/app/lib/definitions"
import FeatureTabContainer from "./FeatureTabContainer"
import StatContainer from "../stats/StatContainer"
import StatString from "../stats/StatString"
import { Separator } from "@/components/ui/separator"
import { Accordion } from "@/components/ui/accordion"
import StatAccordion from "../stats/StatAccordion"
import { publisherIMG } from "@/app/lib/charactersUtils"

type FeatureTabBiographyProps = {
    selectedCharacter: Character
}

function FeatureTabBiography({ selectedCharacter }: FeatureTabBiographyProps) {
    return (
        <FeatureTabContainer
                valueTab="Biography"
                extraClassNames="md:max-h-[75vh] border-2 overflow-hidden"
            >
                <StatContainer>
                    <StatString
                        statName="Alignment"
                        statValue={selectedCharacter.biography.alignment === "good" ? "Hero" : selectedCharacter.biography.alignment === "bad" ? "Villain" : "Anti-Hero"}
                        icon={
                            selectedCharacter.biography.alignment === "good" ?
                                "😃"
                                :
                                selectedCharacter.biography.alignment === "bad" ?
                                    "😡"
                                    :
                                    "😐"
                        }
                    />
                    <Separator />
                    <div className="flex flex-row justify-between items-center gap-5 my-5">
                        <div className="flex items-center gap-2">
                            <p className='text-2xl md:text-3xl'>📚</p>
                            <p className="hidden md:block">Publisher</p>
                        </div>
                        <div className="font-bold capitalize"><img className="h-10" src={publisherIMG(selectedCharacter.biography.publisher)} alt="publisher" /></div>
                    </div>
                    <Separator />
                    <Accordion type="single" collapsible className="w-full">
                        <StatAccordion
                            icon="📅"
                            title="First Appearance"
                            content={<p>{selectedCharacter.biography.firstAppearance}</p>}
                        />

                        <StatAccordion
                            icon="🗺"
                            title="Place Of Birth"
                            content={<p>{selectedCharacter.biography.placeOfBirth}</p>}
                        />

                        <StatAccordion
                            icon="🔠"
                            title="Aliases"
                            content={selectedCharacter.biography.aliases.map(((currentAlias, index) => {
                                return (
                                    <p key={`${currentAlias}-${index}`} >{currentAlias}</p>
                                )
                            }))}
                        />
                        <StatAccordion
                            icon="🆎"
                            title="Alter egos"
                            content={<p>{selectedCharacter.biography.alterEgos}</p>}
                        />
                        <StatAccordion
                            icon="👪"
                            title="Teams"
                            content={<p>{selectedCharacter.connections.groupAffiliation}</p>}
                            dataTest="teams-collapse"
                        />
                        <StatAccordion
                            icon="🧾"
                            title="Occupation"
                            content={<p>{selectedCharacter.work.occupation}</p>}
                        />
                    </Accordion>
                </StatContainer>
            </FeatureTabContainer>
    )
}

export default FeatureTabBiography