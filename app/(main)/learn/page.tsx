import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

export default function LearnPage(){
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress activeTopic={{title:"client side render", imgSrc:"/leaderboard.svg"}} 
                    haveActiveSubscription={true} 
                    hearts={5} 
                    points={10} />
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Learn"/>
                <div className="h-[300px] w-full bg-fuchsia-300"/>
                <div className="h-[300px] w-full bg-fuchsia-300"/>
                <div className="h-[300px] w-full bg-fuchsia-300"/>
                <div className="h-[300px] w-full bg-fuchsia-300"/>
                <div className="h-[300px] w-full bg-fuchsia-300"/>

            </FeedWrapper>
        </div>
    )
}