import { getActivities, getSports } from "@/actions"

import { SliderSection } from "@/components";
export default async function ActivityPage() {
  const { activities } = await getActivities()
  const { sports } = await getSports()

  if (!activities || !sports) {
    return (
      <section className="w-full flex flex-col gap-5 my-6">
        <h2 className="font-semibold text-[22px] text-[#175F70]">No hay actividades disponibles</h2>
      </section>
    )
  }

  return (
    <div className="flex flex-col gap-3 md:ml-8">
      <h1 className="font-medium text-[#175F70] text-3xl mt-4 md:mt-8">Actividades del club</h1>

      <SliderSection title="Deportes" activities={activities} />

      <SliderSection title="Actividades recreativas" activities={sports} />

      <div>

        <h2 className="font-medium text-[22px] text-[#175F70]">Proximos Eventos</h2>
      </div>
    </div>
  );
}