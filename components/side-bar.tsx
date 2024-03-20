import Image from "next/image"
import Link from "next/link"

import { AirplayIcon, Loader } from "lucide-react";
import { SidebarButton } from "./sidebar-button";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

export const Sidebar =()=>{
    return (
        <div className="flex flex-col h-full lg:w-[256px] left-0 top-0 px-4 border-r-2">
            <Link href="/learn">
                <div className="flex items-center pt-10 pl-4 pb-8 gap-x-2">
                    <AirplayIcon  height={30} width={30} className="pt-1"/>
                    <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">quiz</h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-3 flex-1">
                <SidebarButton href="/learn" label="Learn" iconSrc="/leaderboard.svg"/>
                <SidebarButton href="/dashboard" label="dashboard" iconSrc="/leaderboard.svg"/>
                <SidebarButton href="/shop" label="shop" iconSrc="/leaderboard.svg"/>
            </div>
            <div className="p-4">
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