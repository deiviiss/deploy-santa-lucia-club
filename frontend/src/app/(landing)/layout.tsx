import { getUserSessionServer } from "@/actions"
import { Footer, NavBar } from "@/components"
import { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard page',
}

export default async function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-screen">
      <div>
        <NavBar />
        <div className="bg-custom-gradient">
          {children}
        </div>
        <Footer />
      </div>
    </main>
  )
}
