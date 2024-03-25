import { Sidebar } from "@/components/side-bar"


export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <>
      <div className="flex justify-around">
        <Sidebar />
        <main className="px-5 w-2/3">
          <div className="max-w-[1056px] mx-auto pt-6 h-full">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
