import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const Header =({title}:{title: string}) => {
    return (
        <div className="sticky top-0 bg-white pb-3 flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-10 lg:pt-[28px] lg:mt-[-28px]">
            <Link href="/learn">
                <Button>
                    <ArrowLeft className="h-5 w-5 stroke-2 text-netural-400"/>
                </Button>
            </Link>
            <h1>Client Side rendering</h1>
            <div/>
        </div>
    )
}