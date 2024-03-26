import cn from "classnames"
import Link from "next/link"

import { AirplayIcon, Loader } from "lucide-react";
import { SidebarButton } from "./sidebar-button";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

export const Sidebar =({className}:{className?:string})=>{
    return (
        <div className={cn("flex flex-col h-full lg:w-[256px] lg:fixed left-0 top-0 px4 border-r-2",className)}>
       
                <Link href="/learn">
                    <div className="flex items-center pt-6 pl-4 pb-8 gap-x-2">
                        <AirplayIcon height={30} width={30} className="pt-1" />
                        <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">quiz</h1>
                    </div>
                </Link>

                <div className="flex flex-col gap-y-2 flex-1">
                    <SidebarButton href="/learn" label="Learn" iconSrc="/leaderboard.svg" />
                    <SidebarButton href="/dashboard" label="dashboard" iconSrc="/leaderboard.svg" />
                    <SidebarButton href="/shop" label="shop" iconSrc="/leaderboard.svg" />
                </div>
 
                
            <div className="flex justify-center pb-8 ">
                    <ClerkLoading>
                        <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                    </ClerkLoading>
                    <ClerkLoaded>
                        <UserButton afterSignOutUrl="/" />
                    </ClerkLoaded>
            </div>
        </div>
    )
}