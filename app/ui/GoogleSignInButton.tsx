'use client'

import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function GoogleSignInButton() {
    const handleClick = () => {
        signIn('google')
    }

    return (
        <Button
            onClick={handleClick}
            variant={"outline"}
            className="flex justify-center gap-2 items-center"
        >
            <Image
                src='https://www.svgrepo.com/show/303108/google-icon-logo.svg'
                width={20}
                height={20}
                alt="google-logo"
            />
            Google
        </Button>
    )
}