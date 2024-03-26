import { MobileHeader } from "@/components/mobile-header"
import { Sidebar } from "@/components/side-bar"


export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <>
      <MobileHeader /> 
      <Sidebar className="hidden lg:flex"/>
      <main className="lg:pl-[256px] h-full lg:pt-0 pt-[50px]">
        <div className="h-full bg-red-100">
          {children}
        </div>
      </main>
  </>
  )
}
