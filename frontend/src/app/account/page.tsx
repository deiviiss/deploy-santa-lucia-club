import React from 'react'
import { UserProfile, UserSidebar, UpcomingEvents } from '@/components'


const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 bg-slate-50 lg:px-20">
      
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
      <div className='rounded-lg shadow-xl mobile:px-0'>
            <UpcomingEvents 
            imageUrl={'https://cdn.icon-icons.com/icons2/847/PNG/512/football_icon-icons.com_67229.png'} 
            title={'Partido de Futbol'} 
            date={'25 Junio 2024'} 
            description={''} 
            isFree={true} 
            buttonText={'Ver Evento'}                           
            />
            <UpcomingEvents 
            imageUrl={'https://cdn.icon-icons.com/icons2/847/PNG/512/basketball_icon-icons.com_67241.png'} 
            title={'Partido de Basquet'} 
            date={'26 Junio 2024'} 
            description={''} 
            isFree={true} 
            buttonText={'Ver Evento'}                           
            />
            <UpcomingEvents 
            imageUrl={'https://cdn.icon-icons.com/icons2/847/PNG/512/rhythmic_gymnastics_icon-icons.com_67218.png'} 
            title={'Clase de Yoga'} 
            date={'27 Junio 2024'} 
            description={'Pago'} 
            isFree={false} 
            buttonText={'Ver Evento'}                           
            />
      </div>
    </main>
  )
}

export default page
