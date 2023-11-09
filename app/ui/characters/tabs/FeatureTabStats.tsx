import { Character } from "@/app/lib/definitions"
import FeatureTabContainer from "./FeatureTabContainer"
import StatContainer from "../stats/StatContainer"
import StatNumber from "../stats/StatNumber"
import { Separator } from "@/components/ui/separator"

type FeatureTabStatsProps = {
    selectedCharacter: Character
}

function FeatureTabStats({ selectedCharacter }: FeatureTabStatsProps) {
    return (
        <FeatureTabContainer
            valueTab="Stats"
            extraClassNames="md:max-h-[70vh] border-2"
        >
            <StatContainer>
                <StatNumber
                    statName="Combat"
                    statValue={selectedCharacter.powerstats.combat}
                    icon="👊"
                />
                <Separator />
                <StatNumber
                    statName="Durability"
                    statValue={selectedCharacter.powerstats.durability}
                    icon="❤"
                />
                <Separator />
                <StatNumber
                    statName="Intelligence"
                    statValue={selectedCharacter.powerstats.intelligence}
                    icon="🧠"
                />
                <Separator />

                <StatNumber
                    statName="Power"
                    statValue={selectedCharacter.powerstats.power}
                    icon="🔆"
                />
                <Separator />

                <StatNumber
                    statName="Speed"
                    statValue={selectedCharacter.powerstats.speed}
                    icon="⚡"
                />
                <Separator />

                <StatNumber
                    statName="Strength"
                    statValue={selectedCharacter.powerstats.strength}
                    icon="💪"
                />
                <Separator />
            </StatContainer>
        </FeatureTabContainer>
    )
}

export default FeatureTabStats