import LoadingCharacterFeatures from "./LoadingCharacterFeatures";

export default function LoadingCharacterInfo() {
    return (
        <div className='flex flex-col gap-5'>
            <div className="w-full">
                <div className="flex flex-col xl:flex-row justify-center">
                    <div className='flex flex-col items-center align-middle gap-3 w-[90%] md:w-[50%] lg:w-[30%] xl:h-[60%] mx-auto'>
                        <div
                            className="animate-pulse relative w-64 md:w-72 lg:w-96 h-[25rem] md:h-[25rem] lg:h-[34rem] bg-muted-foreground shadow-xl rounded-md"
                        />

                        <div className='self-center mt-5'>
                            <h1
                                className={`text-2xl lg:text-5xl font-bold text-center h-5 bg-foreground animate-pulse w-[200px] rounded-md`}
                            />
                            <p
                                className={`py-2 text-center`}
                            >
                                {/* {selectedCharacter.biography.fullName} */}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col xl:h-[60vh] w-[90%] xl:w-[50%] mx-auto mt-5 xl:mt-0 animate-pulse">
                        <LoadingCharacterFeatures />
                    </div>
                </div>
            </div>
        </div>
    )
}