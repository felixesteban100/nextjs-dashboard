import CharactersContainer from "../CharactersContainer"
import LoadingCharactersCard from "./LoadingCharactersCard"

export default function LoadingCharacters() {
    return (
        <CharactersContainer>
            <>
                {
                    Array(4).fill(undefined).map((_, index) => {
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