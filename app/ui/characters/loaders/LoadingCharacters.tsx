import { CHARACTERS_PER_PAGE } from "@/app/lib/constants"
import CharactersContainer from "../CharactersContainer"
import LoadingCharactersCard from "./LoadingCharactersCard"

export default function LoadingCharacters() {
    return (
        <CharactersContainer>
            <>
                {
                    Array(CHARACTERS_PER_PAGE).fill(undefined).map((_, index) => {
                        return (
                            <div key={index}>
                                <LoadingCharactersCard />
                            </div>
                        )
                    })
                }
            </>
        </CharactersContainer>
    )
}