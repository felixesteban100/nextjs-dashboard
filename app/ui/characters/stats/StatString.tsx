
type StatStringProps = {
    statName: string
    statValue: string
    icon: string
}

export default function StatString({ statName, statValue, icon }: StatStringProps) {
    return (
        <div className="flex flex-row justify-between items-center gap-5 my-5">
            <div className="flex items-center gap-2">
                <p className='text-2xl md:text-3xl'>{icon}</p>
                <p className="hidden md:block">{statName}</p>
            </div>
            <div className="font-bold capitalize">{statValue}</div>
        </div>
    )
}