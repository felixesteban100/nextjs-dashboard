import { Character } from "@/app/lib/definitions"
import FeatureTabContainer from "./FeatureTabContainer"
import StatContainer from "../stats/StatContainer"
import { getTeamByUniverse } from "@/app/lib/constants"
import Link from "next/link"
import Image from "next/image"

type FeatureTabTeamsProps = {
    selectedCharacter: Character
}

function FeatureTabTeams({ selectedCharacter }: FeatureTabTeamsProps) {

    return (
        <div>
            <FeatureTabContainer
                valueTab="Teams"
                extraClassNames="h-[51.5vh] md:h-[70vh] border-2 overflow-scroll"
            >
                <StatContainer>
                    {
                        getTeamsImagesByCharacter(selectedCharacter).length > 0 ?
                            <div
                                className="w-full flex flex-col flex-wrap justify-center items-center gap-5 my-5"
                            >
                                {
                                    getTeamsImagesByCharacter(selectedCharacter).map((teamFound) => {
                                        return (
                                            <Link
                                                href={`/dashboard/characters?universe=${selectedCharacter.biography.publisher}&team=${teamFound.value}&howMany=700`}
                                                key={teamFound.name}
                                                className="mt-5 mx-auto flex gap-1 flex-col cursor-pointer group/items"
                                                data-tip={teamFound.name}
                                            >
                                                {teamFound.name.toLowerCase() === "x-men" || teamFound.name.toLowerCase() ===  "supernatural" ?
                                                    <Image
                                                        className="rounded-full dark:invert"
                                                        width={500}
                                                        height={500}
                                                        src={teamFound?.img}
                                                        alt={teamFound?.name}
                                                    />
                                                    :
                                                    <Image
                                                        // className="hover:pointer-events-none active:pointer-events-none"
                                                        className=""
                                                        width={500}
                                                        height={500}
                                                        src={teamFound?.img}
                                                        alt={teamFound?.name}
                                                    />
                                                }
                                                <p className="font-semibold text-primary text-xl group-hover/items:underline">{teamFound?.name}</p>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            :
                            <div className="w-full flex flex-col flex-wrap justify-center items-center gap-5 my-5">
                                <div className="text-xl font-bold text-center my-5">No teams</div>
                            </div>
                    }
                </StatContainer>
            </FeatureTabContainer>

        </div>
    )
}

export function getTeamsImagesByCharacter(selectedCharacter: Character) {
    const imagesget = getTeamByUniverse(
        selectedCharacter.biography.publisher
    ).reduce((acc, teamToFind) => {
        const teamsByCharacter =
            selectedCharacter.connections.groupAffiliation.split(/,|;/);
        let imageTeam;

        function findWordBetweenSpaces(
            inputString: string,
            targetWord: string
        ): boolean {
            const regex = new RegExp(`\\b${targetWord}\\b`);
            return regex.test(inputString);
        }

        teamsByCharacter.forEach((team) => {
            // if (team.trim().toLowerCase().includes(teamToFind.value.toLowerCase()) && teamToFind.img) {
            if (
                findWordBetweenSpaces(
                    team.trim().toLowerCase(),
                    teamToFind.value.toLowerCase().trim()
                )
                /* (team.trim().toLowerCase() === teamToFind.value.toLowerCase() ||
                  (
                    (
                      team.trim().toLowerCase().includes(` ${teamToFind.value.toLowerCase()} `)
                      ||
                      team.trim().toLowerCase().includes(` ${teamToFind.value.toLowerCase()},`)
                      &&
                      team.trim().toLowerCase().includes(`${teamToFind.value.toLowerCase()}`)
                    )
                  )
                )
                && teamToFind.img */
            ) {
                imageTeam = teamToFind;
            }
        });
        if (imageTeam) acc.push(imageTeam);
        return acc;
    }, new Array());

    const uniqueIds = new Set();
    const filteredArray = imagesget.filter((obj) => {
        const value = obj.value;
        if (value !== undefined && !uniqueIds.has(value)) {
            uniqueIds.add(value);
            return true;
        }
        return false;
    });

    return filteredArray;
}

export default FeatureTabTeams