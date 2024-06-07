import { getUserSessionServer } from "@/actions"
import { Footer, NavBar } from "@/components"
import { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: 'Authenticate ',
  description: 'Authenticate page',
}

export default async function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getUserSessionServer()

  if (user) {
    redirect('/')
  }

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
