import React from 'react'
import { UserProfile, UserSidebar } from '@/components'

const page = () => {
  return (
    <main className="mobile:px-20 flex min-h-screen flex-col items-center justify-between p-0 bg-slate-50 ">
      
      <div className="grid grid-cols-1 w-full my-10 lg:grid-cols-[250px_2fr]">
          <div className="order-2 lg:order-1">
            <UserSidebar/>
          </div>
          <div className="order-1 lg:order-2">
            <UserProfile 
                name={''} 
                email={''} 
                password={''} 
                userName={''} 
                tel={''} 
                partner={''}
            />
          </div>
      </div>
    </main>
  )
}

export default page
