import { getActivities } from "@/actions"
import Image from "next/image"
import { ActivityCard } from "./activityCard/ActivityCard"


export const ActivitiesSection = async () => {
  const title = 'Actividades y Clases Disponibles'
  const { activities } = await getActivities()

  if (!activities) {
    return (
      <section className="w-full flex flex-col gap-5 max-w-4xl my-6">
        <h2 className="font-semibold text-[22px] text-[#333B69]">{title}</h2>
        <div>
          <p>No hay actividades disponibles</p>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full flex flex-col gap-5 max-w-[730px] my-6">
      <h2 className="font-semibold text-[22px] text-[#333B69]">{title}</h2>

      <div className="flex justify-between w-full border-black border rounded-[25px] px-[52px] py-[29px]">
        {
          activities?.map((activity, index) => (
            <ActivityCard key={index} title={activity.title} image={activity.image} />
          ))
        }
      </div>
    </section>
  )
}
