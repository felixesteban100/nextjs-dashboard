import { Character } from "@/app/lib/definitions";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeatureTabStats from "./FeatureTabStats";
import FeatureTabAppereance from "./FeatureTabAppereance";
import FeatureTabBiography from "./FeatureTabBiography";
import FeatureTabTeams from "./FeatureTabTeams";
import FeatureTabComics from "./FeatureTabComics";

type CharacterFeaturesProps = {
    selectedCharacter: Character
}

function CharacterFeatures({ selectedCharacter }: CharacterFeaturesProps) {
    return (
        <Tabs
            defaultValue={'Stats'}
            className="w-full"
        >
            <TabsList className={`grid w-full grid-cols-5 bg-accent`}>
                <TabsTrigger className='text-base-content hidden md:block' value="Stats">Stats</TabsTrigger>
                <TabsTrigger className='text-base-content block md:hidden' value="Stats">📊</TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Appereance">Appereance</TabsTrigger>
                <TabsTrigger className='text-base-content block md:hidden' value="Appereance">👀</TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Biography">Biography</TabsTrigger>
                <TabsTrigger className='text-base-content block md:hidden' value="Biography">📜</TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Teams">Teams</TabsTrigger>
                <TabsTrigger className='text-base-content block md:hidden' value="Teams">👪</TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Comics">Comics</TabsTrigger>
                <TabsTrigger className='text-base-content block md:hidden' value="Comics">📕</TabsTrigger>
            </TabsList>
            <FeatureTabStats selectedCharacter={selectedCharacter}/>
            <FeatureTabAppereance selectedCharacter={selectedCharacter}/>
            <FeatureTabBiography selectedCharacter={selectedCharacter}/>
            <FeatureTabTeams selectedCharacter={selectedCharacter}/>
            <FeatureTabComics selectedCharacter={selectedCharacter} />
        </Tabs>
    )
}

export default CharacterFeatures