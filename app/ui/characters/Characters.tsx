import CharactersContainer from '@/app/ui/characters/CharactersContainer';
import CharacterComponent from '@/app/ui/characters/CharacterComponent';
import { fetchCharacters } from '@/app/lib/data';
import PaginationCharacters from './paginationCharacters';

export default async function Characters({ characterName, currentPage }: { characterName: string, currentPage: number }) {
    const { allCharacters, totalPages } = await fetchCharacters(characterName, 714, "All", "All", "All", "Both", "All", true, false, currentPage)

    return (
        <>
            <CharactersContainer>
                <>
                    {
                        allCharacters.map((currentCharacter, index) => {
                            return (
                                <CharacterComponent
                                    key={currentCharacter._id}
                                    indexForTest={index}
                                    currentCharacter={currentCharacter}
                                />
                            )
                        })
                    }
                </>
            </CharactersContainer>
            <div className="mt-5 flex w-full justify-center">
                <PaginationCharacters totalPages={totalPages} />
            </div>
        </>
    )
}