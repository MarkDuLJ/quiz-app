'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation"

export const SidebarButton = ({
    label,
    iconSrc,
    href
}:{
    label: string,
    iconSrc: string,
    href: string
}) => {
    const pathname = usePathname()
    const active = pathname ===href
    return (
        <Button variant={active ?  "secondary" : "primaryOutline" }>
            <Image src={iconSrc} alt={label} className="mr-5" height={32} width={32}/>
            <Link href={href}>
            {label}
            </Link>
        </Button>
    )
}