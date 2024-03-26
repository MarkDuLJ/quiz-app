import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { InfinityIcon } from "lucide-react"

export const UserProgress = ({
    activeTopic,
    hearts,
    points,
    haveActiveSubscription
}:{
    activeTopic:any,
    hearts: number,
    points: number,
    haveActiveSubscription: boolean
}) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/learn">
                <Button variant="ghost">
                    <Image 
                        src={activeTopic.imgSrc} 
                        alt={activeTopic.title}
                        width={40}
                        height={40}
                        className="rounded-md border"
                    />
                </Button>
            </Link>
            <Link href="/dashboard">
                <Button variant="ghost" className="text-orange-500">
                    <Image 
                        src={activeTopic.imgSrc} 
                        alt="points"
                        width={28}
                        height={28}
                        className="mr-2"
                    />
                    {points}
                </Button>
            </Link>
            <Link href="/dashboard">
                <Button variant="ghost" className="text-rose-500">
                    <Image 
                        src={activeTopic.imgSrc} 
                        alt="hearts"
                        width={24}
                        height={24}
                        className="mr-2"
                    />
                    {haveActiveSubscription?<InfinityIcon className="h-4 w-4 stroke-[5]"/>:hearts}
                </Button>
            </Link>
        </div>
    )
}