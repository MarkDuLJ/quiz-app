import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full mx-auto flex flex-col max-w-[988px] lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="./next.svg" alt="hero" fill/>
      </div>
    </div>
  );
}
