import StatContainer from "../stats/StatContainer"
import StatNumber from "../stats/StatNumber"
import { Separator } from "@/components/ui/separator"
import FeatureTabContainer from "../tabs/FeatureTabContainer"

export default function LoadingFeatureTab({value}: {value:string}){
    return(
        <FeatureTabContainer
            valueTab={value}
            extraClassNames="md:max-h-[70vh] border-2"
        >
            <StatContainer>
                <StatNumber
                    statName=""
                    statValue={0}
                    icon=""
                />
                <Separator />
                <StatNumber
                    statName=""
                    statValue={0}
                    icon=""
                />
                <Separator />
                <StatNumber
                    statName=""
                    statValue={0}
                    icon=""
                />
                <Separator />

                <StatNumber
                    statName=""
                    statValue={0}
                    icon=""
                />
                <Separator />

                <StatNumber
                    statName=""
                    statValue={0}
                    icon=""
                />
                <Separator />

                <StatNumber
                    statName=""
                    statValue={0}
                    icon=""
                />
                <Separator />
            </StatContainer>
        </FeatureTabContainer>
    )
}