import { getUserSessionServer } from "@/actions"
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
  const user = await getUserSessionServer()

  if (!user) {
    redirect('/auth/login')
  }

  return (
    <main className="min-h-screen">

      <div className='bg-red-200'>
        {children}
      </div>

    </main>
  )
}
