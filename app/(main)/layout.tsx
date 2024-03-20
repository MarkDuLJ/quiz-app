import { Sidebar } from "@/components/side-bar"


export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <>
        <Sidebar />
      <main className="lg:pl-[256px] pt-50 h-full bg-red-500 lg:pt-0">
        <div className="max-w-[1056px] mx-auto pt-6 h-full">
          {children}
        </div>
      </main>
      </>
  )
}
