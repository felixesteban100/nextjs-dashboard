import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type StatCollapseProps = {
    icon: string
    content: JSX.Element | JSX.Element[]
    title: string
    dataTest?: string
}

export default function StatAccordion({ icon, title, content/* , dataTest */ }: StatCollapseProps) {
    return (
        
            <AccordionItem value={title}>
                <AccordionTrigger className="group/statAccor">
                    <div className="flex justify-between md:flex-row gap-2 items-center ">
                        <p className="text-2xl md:text-3xl">{icon}</p>
                        <p className="font-normal hidden md:block group-hover/statAccor:font-bold">{title}</p>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="flex justify-center font-bold">
                        {content}
                    </div>
                </AccordionContent>
            </AccordionItem>
    )
}