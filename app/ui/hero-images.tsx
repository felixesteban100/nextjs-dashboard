"use client"

import Image from 'next/image';
import { useTheme } from 'next-themes';

function HeroImages() {
    const { theme } = useTheme()
    if(theme === undefined) return <div></div>
    return (
        <div>
            <Image
                src={((theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) || theme === "dark" ? true : false) ? "/hero-desktop-dark.png" : "/hero-desktop.png"}
                width={1000}
                height={760}
                className='hidden md:block'
                alt="Screenshot of the dashboard project showing desktop and mobile versions"
                priority={true}
            />
            <Image
                src={((theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) || theme === "dark" ? true : false) ? "/hero-mobile-dark.png" : "/hero-mobile.png"}
                width={560}
                height={620}
                className='block md:hidden'
                alt="Screenshot of the dashboard project showing mobile versions"
                priority={true}
            />
        </div>
    )
}

export default HeroImages