"use client"
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Dialog } from "@/components/ui/dialog";

type DialogCharactersProps = {
    children: JSX.Element;
    isDialogOpen: boolean;
    characterSelectedId: string;
}

export default function DialogCharacters({ children, isDialogOpen, characterSelectedId }: DialogCharactersProps) {
    const { replace } = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    function toogleDialog() {
        const params = new URLSearchParams(searchParams)
        params.set('isDialogOpen', (!isDialogOpen).toString())
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <Dialog
            defaultOpen={isDialogOpen}
            onOpenChange={() => toogleDialog()}
        >
            {children}
        </Dialog>
    )
}