import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "./footer";
import { Header } from "./header";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="w-full mx-auto flex flex-col max-w-[988px] lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="./next.svg" alt="hero" fill/>
      </div>
      <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
        <ClerkLoading>
          <Loader className="w-5 h-5"/>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
              <Button size="lg" variant="secondary" className="w-full">
                Get Start
              </Button>
            </SignUpButton>
            <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
              <Button size="lg" variant="primaryOutline" className="w-full">
                Already have an account
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button size="lg" variant="secondary" className="w-full" asChild>
              <Link href="/learn">
              Continue your study
              </Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
    <Footer/>
    </>
  );
}
