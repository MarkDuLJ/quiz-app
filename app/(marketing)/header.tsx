import { Button } from "@/components/ui/button"
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"
import Image from "next/image"

export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="flex items-center justify-between mx-auto h-full lg:max-w-screen-xl bg-green-200">
            <div className="flex items-center gap-x-3">
                <Image src="/next.svg" alt="img" width={80} height={80}/>
                <h1 className="text-2xl font-extrabold tracking-wide text-green-600">Quiz</h1>
            </div>
            <ClerkLoading>
                <Loader className="h-5 w-5 text-muted-foreground"/>
            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn>
                    <UserButton afterSignOutUrl="/"/>
                </SignedIn>
                <SignedOut>
                <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                    <Button variant="ghost">Login</Button>
                </SignInButton>
                </SignedOut>
            </ClerkLoaded>
            </div>
        </header>
    )
}